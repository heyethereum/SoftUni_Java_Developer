import java.util.Scanner;

public class Print_Triangle {
    public static void main(String[] args) {
        // Write your code here
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int count = 1;
        while (count <= n) {
            int stars = 1;
            while (stars <= count) {
                System.out.print("*");
                stars++;
            }
            System.out.println();
            count++;
        }
    }
}