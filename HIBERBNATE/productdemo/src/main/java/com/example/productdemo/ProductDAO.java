package com.example.productdemo;

import java.util.List;
import org.hibernate.Session;
import org.hibernate.Transaction;
public class ProductDAO {
    private Session getSession() {
        return Utility.getSessionFactory().openSession();
    }
    // INSERT
    public void save(Product p) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        session.persist(p);
        tx.commit();
        session.close();
    }
    // FIND BY ID
    public Product findById(int id) {
        Session session = getSession();
        Product p = session.get(Product.class, id);
        session.close();
        return p;
    }
    // FIND ALL
    public List<Product> findAll() {
        Session session = getSession();
        List<Product> list =
                session.createQuery("from Product", Product.class)
                        .getResultList();
        session.close();
        return list;
    }
    // UPDATEs
    public void update(Product p) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        session.merge(p);
        tx.commit();
        session.close();
    }
    // DELETE
    public void delete(int id) {
        Session session = getSession();
        Transaction tx = session.beginTransaction();
        Product p = session.get(Product.class, id);
        if (p != null) {
            session.remove(p);
        }
        tx.commit();
        session.close();
    }
}