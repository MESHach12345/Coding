import java.util.Scanner;

public class Source1 {
    public static void main(String[] args) {
        int [] myArray = new int[100];

        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = (int) (Math.random()*1000);
            System.out.println(myArray[i]);
        }

        System.out.println();

        System.out.println(findMax(myArray));

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number between 0-1000 that you would like to find in the Array: ");
        int searchValue = scanner.nextInt();

        int position = linearSearch(searchValue, myArray);

        if (position == -1) {
            System.out.println("The number you are searching for is not in the Array");
        } else {
            System.out.println("The number you are searching for is in Position: " + (position + 1));
        }
    }

    public static int findMax(int[] myArray) {
        int max = myArray[0];

        for (int i = 1; i < myArray.length; i++) {
            max = (max>myArray[i] ? max : myArray[i]);
        }

        return max;
    }

    public static int linearSearch(int findValue, int[] myArray) {
        int position = -1;

        for (int i = 0; i < myArray.length; i++) {
            if (myArray[i] == findValue) {
                position = i;
            } else {
                continue;
            }
        }

        return position;
    }

}