package com.example.librarydemo;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
public class BookDAO {
    private Session getSession() {
        return Utility.getSessionFactory().openSession();
    }
    // INSERT
    public void save(Book b) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        session.persist(b);
        tx.commit();
        session.close();
    }
    // FIND BY ID
    public Book findById(int id) {
        Session session = getSession();
        Book b = session.get(Book.class, id);
        session.close();
        return b;
    }
    // FIND ALL
    public List<Book> findAll() {
        Session session = getSession();
        List<Book> list =
                session.createQuery("from Book", Book.class)
                        .getResultList();
        session.close();
        return list;
    }
    // UPDATE
    public void update(Book b) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        session.merge(b);
        tx.commit();
        session.close();
    }
    // DELETE
    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        Book b = session.get(Book.class, id);
        if (b != null) {
            session.remove(b);
        }
        tx.commit();
        session.close();
    }
}