CREATE TABLE Users(
    user_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    registration_date DATE NOT NULL
);

CREATE TABLE Events(
    event_id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(500),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL,
    organizer_id INT,
    FOREIGN KEY (organizer_id) REFERENCES Users(user_id),
    CHECK (status IN ('upcoming', 'ongoing', 'completed'))
);

CREATE TABLE Sessions (
    session_id NUMBER PRIMARY KEY,
    event_id NUMBER,
    title VARCHAR2(200) NOT NULL,
    speaker_name VARCHAR2(100) NOT NULL,
    start_time DATE NOT NULL,
    end_time DATE NOT NULL,
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Registrations(
    registration_id INT PRIMARY KEY,
    user_id INT,
    event_id INT,
    registration_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Feedback(
    feedback_id INT PRIMARY KEY,
    user_id INT,
    event_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comments VARCHAR(500),
    feedback_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);

CREATE TABLE Resources(
    resource_id INT PRIMARY KEY,
    event_id INT,
    resource_type VARCHAR(50) NOT NULL,
    resource_url VARCHAR(255) NOT NULL,
    upload_date DATE NOT NULL,
    FOREIGN KEY (event_id) REFERENCES Events(event_id)
);


INSERT INTO Users VALUES
(1,'Alice Johnson','alice@example.com','New York',DATE '2024-12-01');

INSERT INTO Users VALUES
(2,'Bob Smith','bob@example.com','Los Angeles',DATE '2024-12-05');

INSERT INTO Users VALUES
(3,'Charlie Lee','charlie@example.com','Chicago',DATE '2024-12-10');

INSERT INTO Users VALUES
(4,'Diana King','diana@example.com','New York',DATE '2025-01-15');

INSERT INTO Users VALUES
(5,'Ethan Hunt','ethan@example.com','Los Angeles',DATE '2025-02-01');


INSERT INTO Events VALUES
(1,'Tech Innovators Meetup',
'A meetup for tech enthusiasts.',
DATE '2025-06-10',
DATE '2025-06-10',
'upcoming',
1);

INSERT INTO Events VALUES
(2,'AI & ML Conference',
'Conference on AI and ML advancements.',
DATE '2025-05-15',
DATE '2025-05-15',
'completed',
3);

INSERT INTO Events VALUES
(3,'Frontend Development Bootcamp',
'Hands-on training on frontend tech.',
DATE '2025-07-01',
DATE '2025-07-03',
'upcoming',
2);


INSERT INTO Sessions VALUES
(1,1,'Opening Keynote','Dr. Tech',
TO_DATE('2025-06-10 10:00:00','YYYY-MM-DD HH24:MI:SS'),
TO_DATE('2025-06-10 11:00:00','YYYY-MM-DD HH24:MI:SS'));

INSERT INTO Sessions VALUES
(2,1,'Future of Web Dev','Alice Johnson',
TO_DATE('2025-06-10 11:15:00','YYYY-MM-DD HH24:MI:SS'),
TO_DATE('2025-06-10 12:30:00','YYYY-MM-DD HH24:MI:SS'));

INSERT INTO Sessions VALUES
(3,2,'AI in Healthcare','Charlie Lee',
TO_DATE('2025-05-15 09:30:00','YYYY-MM-DD HH24:MI:SS'),
TO_DATE('2025-05-15 11:00:00','YYYY-MM-DD HH24:MI:SS'));

INSERT INTO Sessions VALUES
(4,3,'Intro to HTML5','Bob Smith',
TO_DATE('2025-07-01 10:00:00','YYYY-MM-DD HH24:MI:SS'),
TO_DATE('2025-07-01 12:00:00','YYYY-MM-DD HH24:MI:SS'));


INSERT INTO Registrations VALUES
(1,1,1,DATE '2025-05-01');

INSERT INTO Registrations VALUES
(2,2,1,DATE '2025-05-02');

INSERT INTO Registrations VALUES
(3,3,2,DATE '2025-04-30');

INSERT INTO Registrations VALUES
(4,4,2,DATE '2025-04-28');

INSERT INTO Registrations VALUES
(5,5,3,DATE '2025-06-15');


INSERT INTO Feedback VALUES
(1,3,2,4,'Great insights!',DATE '2025-05-16');

INSERT INTO Feedback VALUES
(2,4,2,5,'Very informative.',DATE '2025-05-16');

INSERT INTO Feedback VALUES
(3,2,1,3,'Could be better.',DATE '2025-06-11');


INSERT INTO Resources VALUES
(1,1,'pdf',
'https://portal.com/resources/tech_meetup_agenda.pdf',
DATE '2025-05-01');

INSERT INTO Resources VALUES
(2,2,'image',
'https://portal.com/resources/ai_poster.jpg',
DATE '2025-04-20');

INSERT INTO Resources VALUES
(3,3,'link',
'https://portal.com/resources/html5_docs',
DATE '2025-06-25');




25.
SELECT title FROM Events WHERE event_id NOT IN (SELECT event_id FROM Sessions);

24.
SELECT event_id,AVG((end_time-start_time)*24*60)AS avg_minutes FROM Sessions GROUP BY event_id;

23.
SELECT TO_CHAR(registration_date,'YYYY-MM') month,COUNT(*) registrations FROM Registrations GROUP BY TO_CHAR(registration_date,'YYYY-MM')ORDER BY month;

22.
SELECT user_id,event_id,COUNT(*) total FROM Registrations GROUP BY user_id,event_id HAVING COUNT(*) > 1;

21.
SELECT * FROM (SELECT e.title,COUNT(*) total_registrations FROM Events e JOIN Registrations r ON e.event_id = r.event_id GROUP BY e.title ORDER BY COUNT(*) DESC) WHERE ROWNUM <= 3;

20.
SELECT u.full_name,COUNT(DISTINCT r.event_id),COUNT(DISTINCT f.feedback_id) FROM Users u LEFT JOIN Registrations r ON u.user_id=r.user_id LEFT JOIN Feedback f ON u.user_id=f.user_id GROUP BY u.full_name;

19.
SELECT e.title,COUNT(DISTINCT r.registration_id),AVG(f.rating) FROM Events e,Registrations r,Feedback f WHERE e.event_id=r.event_id AND e.event_id=f.event_id AND e.status='completed' GROUP BY e.title;

18.
SELECT title FROM Events WHERE event_id NOT IN (SELECT event_id FROM Resources);

17.
SELECT speaker_name,COUNT(*) FROM Sessions GROUP BY speaker_name HAVING COUNT(*)>1;

16.
SELECT * FROM Users WHERE registration_date>=SYSDATE-30 AND user_id NOT IN (SELECT user_id FROM Registrations);

15.
SELECT s1.event_id,s1.session_id,s2.session_id FROM Sessions s1,Sessions s2 WHERE s1.event_id=s2.event_id AND s1.session_id<s2.session_id AND s1.start_time<s2.end_time AND s1.end_time>s2.start_time;

14.
SELECT * FROM (SELECT e.title,COUNT(*) c FROM Events e,Registrations r WHERE e.event_id=r.event_id GROUP BY e.title ORDER BY c DESC) WHERE ROWNUM<=3;

13.
SELECT e.title,AVG(f.rating) FROM Events e,Feedback f WHERE e.event_id=f.event_id GROUP BY e.title;

12.
SELECT event_id,COUNT(*) FROM Sessions GROUP BY event_id ORDER BY COUNT(*) DESC;

11.
SELECT registration_date,COUNT(*) FROM Users GROUP BY registration_date;

10.
SELECT DISTINCT e.title FROM Events e,Registrations r WHERE e.event_id=r.event_id AND e.event_id NOT IN (SELECT event_id FROM Feedback);

9.
SELECT organizer_id,status,COUNT(*) FROM Events GROUP BY organizer_id,status;

8.
SELECT e.title,COUNT(s.session_id) FROM Events e LEFT JOIN Sessions s ON e.event_id=s.event_id WHERE e.status='upcoming' GROUP BY e.title;

7.
SELECT u.full_name,e.title,f.comments FROM Users u,Events e,Feedback f WHERE u.user_id=f.user_id AND e.event_id=f.event_id AND rating<3;

6.
SELECT event_id,COUNT(*) FROM Resources GROUP BY event_id;

**5.
SELECT city,COUNT(DISTINCT user_id) FROM Users u,Registrations r WHERE u.user_id=r.user_id GROUP BY city;

4.
SELECT event_id,COUNT(*) FROM Sessions WHERE TO_CHAR(start_time,'HH24') BETWEEN '10' AND '12' GROUP BY event_id;

3.
SELECT * FROM Users u WHERE u.user_id NOT IN (SELECT user_id FROM Registrations WHERE registration_date>=SYSDATE-90);

2.
SELECT event_id,AVG(rating) FROM Feedback GROUP BY event_id HAVING COUNT(*)>=10;

1.
SELECT u.full_name,e.title FROM Users u,Registrations r,Events e WHERE u.user_id=r.user_id AND r.event_id=e.event_id AND e.status='upcoming';
