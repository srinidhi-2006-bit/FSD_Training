package com.example.employeedemo;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
public class EmployeeDAO {
    private Session getSession() {
        return Utility.getSessionFactory().openSession();
    }
    // INSERT
    public void save(Employee e) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        session.persist(e);
        tx.commit();
        session.close();
    }
    // FIND BY ID
    public Employee findById(int id) {
        Session session = getSession();
        Employee e = session.get(Employee.class, id);
        session.close();
        return e;
    }
    // FIND ALL
    public List<Employee> findAll() {
        Session session = getSession();
        List<Employee> list =
                session.createQuery("from Employee", Employee.class)
                        .getResultList();
        session.close();
        return list;
    }
    // UPDATE
    public void update(Employee e) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        session.merge(e);
        tx.commit();
        session.close();
    }
    // DELETE
    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        Employee e = session.get(Employee.class, id);
        if (e != null) {
            session.remove(e);
        }
        tx.commit();
        session.close();
    }
}