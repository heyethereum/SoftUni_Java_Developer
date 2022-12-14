import java.util.ArrayDeque;
import java.util.Scanner;

public class DecimalToBinary {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int decimal = Integer.parseInt(scanner.nextLine());
    ArrayDeque<Integer> stack = new ArrayDeque<>();

    if (decimal == 0)
      System.out.println(decimal);
    while (decimal != 0) {
      System.out.println("decimal: " + decimal);
      System.out.println("push: " + decimal % 2);
      stack.push(decimal % 2);
      decimal /= 2;
    }

    while (!stack.isEmpty()) {
      System.out.print(stack.pop());
    }
  }
}
