import java.util.Arrays;
import java.util.Scanner;
import java.util.ArrayList;

public class Array_Methods {
    public static void main(String[] args) {
        int[] grades = {1,2,3,72,5};
        // int[] grades2 = {1,2,3,72,5};

        // if (grades1 == grades2) {
        //     System.out.println("Equal");
        // } else {
        //     System.out.println("Not equal");
        // }

        // if (grades1.equals(grades2)) {
        //     System.out.println("Equal");
        // } else {
        //     System.out.println("Not equal");
        // }

        // System.out.println(grades1 + " " + grades2);

        // if(Arrays.equals(grades1, grades2)) {
        //     System.out.println("Equal");
        // } else {
        //     System.out.println("Not equal");
        // }

        // Arrays.fill(grades, 72);

        // System.out.println(Arrays.toString(grades));

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter the number of inputs u want in your array");
        int input = scan.nextInt();

        for (int i = 0; i < input; i++) {
            System.out.print("Enter the value for the Array: ");
            input = scan.nextInt();
        }
    }
}