import java.util.Scanner;

public class Arrays1 {
    public static void main(String[] args) {
        int [] myArray = new int[10];
        char[] randomLetters;

        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = (int)(Math.random()*1000);
        }

        // System.out.println("");

        // printArray(myArray, currentSize);

        // System.out.println("");

        // doubleStuff(myArray);
        // printArray(myArray, currentSize);

        // randomLetters = randomLetterList(100);

        // System.out.println("");
        
        // printArray(randomLetters);

        prettyPrintArray(myArray);

    }

    public static void printArray(int[] myArray) {
        for (int i = 0; i < myArray.length; i++) {
            System.out.println((i+1) + ": " + myArray[i]);
        }
    }

    public static void printArray(int[] myArray, int currentSize) {
        for (int i = 0; i < currentSize; i++) {
            System.out.println((i+1) + ": " + myArray[i]);
        }
    }

    public static void printArray(char[] myArray) {
        for (int i = 0; i < myArray.length; i++) {
            System.out.println(i + ": " + myArray[i]);
        }
    }

    public static void prettyPrintArray(int[] array) {
        for (int i = 0; i < array.length-1; i++) {
            System.out.print(array[i] + " | ");
        }

        System.out.print(array[array.length-1]);
    }

    public static void doubleStuff(int[] myArray) {
        
        int[] clone = myArray.clone();
        
        for (int i = 0; i < myArray.length; i++) {
            clone[i] *= 2;
        }

        myArray = clone;
    }

    public static char[] randomLetterList (int size) {
        char[] letters = new char[size];
        int range = (int)'Z' - (int) 'A';
        for (int i = 0; i < size; i++) {
            int character = (int)(Math.random()*range) + (int)'A';
            letters[i] = (char) character;
        }

        return letters;
    }

    public static int findMax(int[] array) {
        int max = array[0]; //assume first index is largest

        for (int i = 1; i <array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            } else {
                continue;
            }
        }

        return max;
    }

    public static int fillArrayWithInput(int[] myArray) {
        
        Scanner input = new Scanner(System.in);
        int currentSize = 0;
        boolean goodInput = true;

        while (goodInput && (currentSize != myArray.length)) {
            int value;
            System.out.print("Enter a Positive Integer: ");
            value = input.nextInt();
            
            if (value < 0) {
                goodInput = false;
            } else {
                myArray[currentSize] = value;
                currentSize++;
            }
        }

        return currentSize;
    } 
}

