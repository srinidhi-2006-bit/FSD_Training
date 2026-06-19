package com.example.employeedemo;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;
public class App {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        EmployeeDAO dao = new EmployeeDAO();
        while (true) {
            System.out.println("\n1.Add Employee");
            System.out.println("2.Find Employee By Id");
            System.out.println("3.Find All Employees");
            System.out.println("4.Update Employee");
            System.out.println("5.Delete Employee");
            System.out.println("6.Exit");
            int ch = sc.nextInt();
            switch (ch) {
            case 1:
                System.out.println("Enter Employee Id:");
                int id = sc.nextInt();
                System.out.println("Enter Employee Name:");
                String name = sc.next();
                System.out.println("Enter Department:");
                String dept = sc.next();
                System.out.println("Enter Salary:");
                double salary = sc.nextDouble();
                System.out.println("Enter Joining Date (yyyy-mm-dd):");
                LocalDate date = LocalDate.parse(sc.next());
                dao.save(new Employee(id, name, dept, salary, date));
                System.out.println("Employee Added Successfully");
                break;
            case 2:
                System.out.println("Enter Employee Id:");
                int searchId = sc.nextInt();
                Employee emp = dao.findById(searchId);
                if (emp != null)
                    System.out.println(emp);
                else
                    System.out.println("Employee Not Found");
                break;
            case 3:
                List<Employee> employees = dao.findAll();
                for (Employee e : employees) {
                    System.out.println(e);
                }
                break;
            case 4:
                System.out.println("Enter Employee Id:");
                int updateId = sc.nextInt();
                Employee employee = dao.findById(updateId);
                if (employee != null) {
                    System.out.println("Enter New Name:");
                    employee.setEmployeeName(sc.next());
                    System.out.println("Enter New Department:");
                    employee.setDepartment(sc.next());
                    System.out.println("Enter New Salary:");
                    employee.setSalary(sc.nextDouble());
                    System.out.println("Enter New Joining Date (yyyy-mm-dd):");
                    employee.setJoiningDate(
                            LocalDate.parse(sc.next()));
                    dao.update(employee);
                    System.out.println("Employee Updated Successfully");
                } else {
                    System.out.println("Employee Not Found");
                }
                break;
            case 5:
                System.out.println("Enter Employee Id:");
                int deleteId = sc.nextInt();
                dao.delete(deleteId);
                System.out.println("Employee Deleted Successfully");
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