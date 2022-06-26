import java.util.Arrays;

public class Source {
    public static void main(String[] args) {
        int[][] twoD;
        twoD = new int[10][];
        for (int y = 0; y<twoD.length; y++) {
            twoD[y] = new int[10];
            for (int x = 0; x<twoD[y].length; x++) {
                System.out.printf("%4d", twoD[y][x]);
            }
            System.out.println();
        }
    }
}
