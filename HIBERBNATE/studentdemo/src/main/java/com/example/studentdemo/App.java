package com.example.studentdemo;

import java.util.List;
import java.util.Scanner;
public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StudentDAO dao = new StudentDAO();
        while (true) {
            System.out.println("\n1.Add Student");
            System.out.println("2.Find Student By Id");
            System.out.println("3.Find All Students");
            System.out.println("4.Update Student");
            System.out.println("5.Delete Student");
            System.out.println("6.Exit");
            int ch = sc.nextInt();
            switch (ch) {
            case 1:
                System.out.println("Enter Student Id:");
                int id = sc.nextInt();
                System.out.println("Enter Student Name:");
                String name = sc.next();
                System.out.println("Enter Email:");
                String email = sc.next();
                System.out.println("Enter Course:");
                String course = sc.next();
                System.out.println("Enter Age:");
                int age = sc.nextInt();
                dao.save(new Student(id, name, email, course, age));
                System.out.println("Student Added Successfully");
                break;
            case 2:
                System.out.println("Enter Student Id:");
                int searchId = sc.nextInt();
                Student s = dao.findById(searchId);
                if (s != null)
                    System.out.println(s);
                else
                    System.out.println("Student Not Found");
                break;
            case 3:
                List<Student> students = dao.findAll();
                for (Student student : students) {
                    System.out.println(student);
                }
                break;
            case 4:
                System.out.println("Enter Student Id:");
                int updateId = sc.nextInt();
                Student student = dao.findById(updateId);
                if (student != null) {
                    System.out.println("Enter New Name:");
                    student.setStudentName(sc.next());
                    System.out.println("Enter New Email:");
                    student.setEmail(sc.next());
                    System.out.println("Enter New Course:");
                    student.setCourse(sc.next());
                    System.out.println("Enter New Age:");
                    student.setAge(sc.nextInt());
                    dao.update(student);
                    System.out.println("Student Updated Successfully");
                } else {
                    System.out.println("Student Not Found");
                }
                break;
            case 5:
                System.out.println("Enter Student Id:");
                int deleteId = sc.nextInt();
                dao.delete(deleteId);
                System.out.println("Student Deleted Successfully");
                break;
            case 6:
                Utility.getSessionFactory().close();
                sc.close();
                System.exit(0);
            default:
                System.out.println("Invalid Choice");
            }
        }
    }
}