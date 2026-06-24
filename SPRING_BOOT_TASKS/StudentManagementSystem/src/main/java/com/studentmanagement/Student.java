package com.studentmanagement;

import jakarta.persistence.*;

@Entity
@Table(name="studentss")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    private String rollNo;
    private String name;
    private String branch;
    private double cgpa;
    public Student() {}
    public Student(String rollNo,String name,String branch,double cgpa) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
        this.cgpa = cgpa;
    }
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    public String getRollNo() {
        return rollNo;
    }
    public void setRollNo(String rollNo) {
        this.rollNo = rollNo;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getBranch() {
        return branch;
    }
    public void setBranch(String branch) {
        this.branch = branch;
    }
    public double getCgpa() {
        return cgpa;
    }
    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }
}