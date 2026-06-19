package com.example.librarydemo;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
public class Utility {
    private static SessionFactory sessionFactory;
    static {
        sessionFactory =
                new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Book.class)
                .buildSessionFactory();
    }
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
}