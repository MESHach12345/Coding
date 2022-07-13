import java.util.Arrays;

public class Source {
    public static void main(String[] args) {
        int[][] twoD;
        twoD = new int[10][];
        for (int y = 0; y<twoD.length; y++) {
            twoD[y] = new int[10];
        }

        for (int y = 0; y<twoD.length; y++) {
            // for (int x = 0; x<twoD[y].length; x++) {
            //     System.out.printf("%4d", twoD[y][x]);
            // }
            // System.out.println();
            prettyPrintArray(twoD[y]);
        }

        int[][][] threeD;
        threeD = new int[10][][]; 
        for(int z=0; z<threeD.length; z++) {
            threeD[z] = new int[10][];
            for(int y=0; y<threeD[z].length; y++) {
                threeD[z][y] = new int[10];
            }
        }

        for(int z=0; z<threeD.length; z++) {
            for (int y=0; y<threeD[z].length; y++) {
                for (int x=0; x<threeD[z][y].length; x++) {
                    System.out.printf("%3d", threeD[z][y][x]);
                }
                System.out.println();
            }
            System.out.println();
        }
    }

    public static void prettyPrintArray(int[] array) {
        for (int i = 0; i < array.length-1; i++) {
            System.out.print(array[i] + " | ");
        }

        System.out.println(array[array.length-1]);
    }
}