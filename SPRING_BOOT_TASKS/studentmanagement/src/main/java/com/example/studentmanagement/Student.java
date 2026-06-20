package com.example.studentmanagement;

import jakarta.persistence.*;
@Entity
@Table(name="students1")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    private String studentName;
    private String email;
    private int age;
    @ManyToOne
    @JoinColumn(name="course_id")
    private Course course;
    public Student() {}
    public Student(String studentName,String email,int age,Course course) {
        this.studentName = studentName;
        this.email = email;
        this.age = age;
        this.course = course;
    }
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    public String getStudentName() {
        return studentName;
    }
    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public Course getCourse() {
        return course;
    }
    public void setCourse(Course course) {
        this.course = course;
    }
}