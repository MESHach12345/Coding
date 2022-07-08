import java.util.Scanner;

public class Account {
    int balance;
    int previousTransaction;
    String customerName;
    String customerID;

    Account(String cName, String cID) {
        customerName = cName;
        customerID = cID;
    }

    void deposit (int amount) {
        if (amount!=0) {
            balance = balance + amount;
            previousTransaction = amount;
        }
    }

    void withdraw (int amount) {
        if (amount!=0) {
            balance = balance - amount;
            previousTransaction = -amount;
        }
    }

    void getPreviousTransaction () {
        if (previousTransaction > 0) {
            System.out.println("Deposited: " + previousTransaction);
        } else if (previousTransaction < 0) {
            System.out.println("Withdrawn: " + Math.abs(previousTransaction));
        } else {
            System.out.println("No Transactions Occurred");
        }
    }

    void calculateInterest(int years) {
        double interestRate = 0.0185;
        double newBalance = balance*interestRate*years + balance;
        System.out.println("The Current interest rate is: " + (100*interestRate) + "%");
        System.out.println("After " + years + " , your balance will be: " + newBalance);
    }
}
