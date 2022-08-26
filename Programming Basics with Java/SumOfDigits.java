import java.util.Scanner;

public class SumOfDigits {
  public static void main(String[] args) {
    // Write your code here
    Scanner scanner = new Scanner(System.in);
    while (true) {
      String input = scanner.nextLine();
      if (input.equals("End"))
        break;
      int num = Integer.parseInt(input);
      int sum = 0;
      for (int i = num; i > 0; i /= 10) {
        sum += i % 10;
      }
      System.out.printf("Sum of digits = %d%n", sum);
    }
    System.out.println("Goodbye");
  }
}