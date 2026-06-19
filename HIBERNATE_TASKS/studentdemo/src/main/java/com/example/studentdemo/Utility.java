package com.example.studentdemo;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
public class Utility {
    private static SessionFactory sessionFactory;
    static {
        sessionFactory =
                new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory();
    }
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}