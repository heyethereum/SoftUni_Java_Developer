import java.util.*;
import java.text.DecimalFormat;
import java.util.stream.Collectors;

public class SumAdjacentNumber {
  public static String formatOutput(List<Double> numbers, String delimiter) {
    String output = "";
    for (Double item : numbers) {
      output += (new DecimalFormat("#.#").format(item) + delimiter);
    }
    return output;
  }

  public static void main(String[] args) {
    // Write your code here
    Scanner scanner = new Scanner(System.in);
    List<Double> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Double::parseDouble)
        .collect(Collectors.toList());

    for (int i = 0; i < numbers.size() - 1; i++) {
      if (numbers.get(i).equals(numbers.get(i + 1))) {
        numbers.set(i, numbers.get(i) + numbers.get(i + 1));
        numbers.remove(i + 1);
        i = -1;
      }

    }

    // System.out.println(formatOutput(numbers, " "));
    List<String> string = numbers.stream().map(e -> new DecimalFormat("#.#").format(e))
        .collect(Collectors.toList());

    System.out.println(String.join(" ", string));
  }
}