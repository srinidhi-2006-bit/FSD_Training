package com.example.librarydemo;

import java.util.List;
import java.util.Scanner;
public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BookDAO dao = new BookDAO();
        while (true) {
            System.out.println("\n1.Add Book");
            System.out.println("2.Find Book By Id");
            System.out.println("3.Find All Books");
            System.out.println("4.Update Book");
            System.out.println("5.Delete Book");
            System.out.println("6.Exit");
            int ch = sc.nextInt();
            switch (ch) {
            case 1:
                System.out.println("Enter Book Id:");
                int id = sc.nextInt();
                System.out.println("Enter Title:");
                String title = sc.next();
                System.out.println("Enter Author:");
                String author = sc.next();
                System.out.println("Enter Category:");
                String category = sc.next();
                System.out.println("Enter Price:");
                double price = sc.nextDouble();
                System.out.println("Enter Available Copies:");
                int copies = sc.nextInt();
                dao.save(new Book(id, title, author,
                        category, price, copies));
                System.out.println("Book Added Successfully");
                break;
            case 2:
                System.out.println("Enter Book Id:");
                int searchId = sc.nextInt();
                Book book = dao.findById(searchId);
                if (book != null)
                    System.out.println(book);
                else
                    System.out.println("Book Not Found");
                break;
            case 3:
                List<Book> books = dao.findAll();
                for (Book b : books) {
                    System.out.println(b);
                }
                break;
            case 4:
                System.out.println("Enter Book Id:");
                int updateId = sc.nextInt();
                Book b = dao.findById(updateId);
                if (b != null) {
                    System.out.println("Enter New Title:");
                    b.setTitle(sc.next());
                    System.out.println("Enter New Author:");
                    b.setAuthor(sc.next());
                    System.out.println("Enter New Category:");
                    b.setCategory(sc.next());
                    System.out.println("Enter New Price:");
                    b.setPrice(sc.nextDouble());
                    System.out.println("Enter New Available Copies:");
                    b.setAvailableCopies(sc.nextInt());
                    dao.update(b);
                    System.out.println("Book Updated Successfully");
                } else {
                    System.out.println("Book Not Found");
                }
                break;
            case 5:
                System.out.println("Enter Book Id:");
                int deleteId = sc.nextInt();
                dao.delete(deleteId);
                System.out.println("Book Deleted Successfully");
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