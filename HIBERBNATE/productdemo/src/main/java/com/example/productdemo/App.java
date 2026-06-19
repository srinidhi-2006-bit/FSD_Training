package com.example.productdemo;

import java.util.List;
import java.util.Scanner;
public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ProductDAO dao = new ProductDAO();
        while (true) {
            System.out.println("\n1.Add");
            System.out.println("2.Find By Id");
            System.out.println("3.Find All");
            System.out.println("4.Update");
            System.out.println("5.Delete");
            System.out.println("6.Exit");
            int ch = sc.nextInt();
            switch (ch) {
            case 1:
                System.out.println("Enter id name price:");
                int id = sc.nextInt();
                String name = sc.next();
                double price = sc.nextDouble();
                dao.save(new Product(id, name, price));
                System.out.println("Product Added");
                break;
            case 2:
                System.out.println("Enter Id:");
                int searchId = sc.nextInt();
                Product p = dao.findById(searchId);
                if (p != null)
                    System.out.println(p);
                else
                    System.out.println("Product Not Found");
                break;
            case 3:
                List<Product> products = dao.findAll();
                for (Product prod : products) {
                    System.out.println(prod);
                }
                break;
            case 4:
                System.out.println("Enter Id:");
                int updateId = sc.nextInt();
                Product product = dao.findById(updateId);
                if (product != null) {
                    System.out.println("Enter New Name:");
                    product.setPname(sc.next());
                    System.out.println("Enter New Price:");
                    product.setPrice(sc.nextDouble());
                    dao.update(product);
                    System.out.println("Updated");
                } else {
                    System.out.println("Product Not Found");
                }
                break;
            case 5:
                System.out.println("Enter Id:");
                int deleteId = sc.nextInt();
                dao.delete(deleteId);
                System.out.println("Deleted");
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