package com.example.studentmanagement;

import org.springframework.data.jpa.repository.JpaRepository;
public interface CourseRepository
        extends JpaRepository<Course,Integer> {

}