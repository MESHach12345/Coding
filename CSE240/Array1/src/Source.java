import java.util.Scanner;

public class Source {
    public static void main(String[] args) {
        int [] myArray = new int[100];
        int currentSize = 0;
        char[] randomLetters;

        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = (int)(Math.random()*1000);
            currentSize++;
        }

        // System.out.println("");

        // printArray(myArray, currentSize);

        // System.out.println("");

        // doubleStuff(myArray);
        // printArray(myArray, currentSize);

        // randomLetters = randomLetterList(100);

        // System.out.println("");
        
        // printArray(randomLetters);

        // prettyPrintArray(myArray);

        for (int i = 0; i<20; i++) {
            int delete = (int)(Math.random()*currentSize);
            System.out.println("Deleting Index: " + delete);
            currentSize = deleteItem(myArray, currentSize, delete);
            prettyPrintArray(myArray, currentSize);
        }

        for (int i = 0; i<20; i++) {
            int target = (int)(Math.random()*currentSize);
            int value = (int)(Math.random()*1000);
            System.out.println("Inserting Index: " + target + " Value: " + value);
            currentSize = insertItemAt(myArray, currentSize, target, value);
            prettyPrintArray(myArray, currentSize);
        }

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

    public static void prettyPrintArray(int[] array, int currentSize) {
        for (int i = 0; i < currentSize-1; i++) {
            System.out.print(array[i] + " | ");
        }

        System.out.print(array[currentSize-1]);
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

    public static int linearSeach(int[] myArray, int searchValue) {
        int pos = 0;
        while (pos<myArray.length) {
            if (myArray[pos] == searchValue) {
                return pos;
            } else {
                pos++;
            }
        }
        return -1;
    }

    /**
     * Deleting an item from an Array, shuffling everything up one position
     * @param array
     * @param deleteIndex
     */

    public static int deleteItem(int[] array, int currentSize, int deleteIndex) {
    //We are deleting at deleteIndex
    //Everything 'above it' moves "back" one index
    
    for (int target = deleteIndex; target< currentSize - 1; target++) {
        int swap = target+1;
        array[target] = array[swap];
    }

    currentSize--;
    
    return currentSize;
    }

    /**
     * Insert a value into an array
    * @param array array to insert into
    * @param currentSize current of valid items in the array
    * @param insertIndex index to insrt into
    * @param value value going in
    * @return new valid item count (currentSize)
    */

    public static int insertItemAt(int[] array, int currentSize, int insertIndex, int value) {
    if (currentSize == array.length) {
        throw new IndexOutOfBoundsException("Array already Full");
    }
    currentSize++;

    for (int target = currentSize - 1; target > insertIndex; target--) {
        array[target] = array[target-1];
    }

    array[insertIndex] = value;

    return currentSize;
    }
}