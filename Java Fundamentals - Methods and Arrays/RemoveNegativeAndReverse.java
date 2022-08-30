import java.util.*;
import java.util.stream.Collectors;

public class RemoveNegativeAndReverse {
  public static void main(String[] args) {
    // Write your code here
    Scanner scanner = new Scanner(System.in);
    List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" ")).map(Integer::parseInt)
        .collect(Collectors.toList());

    for (int i = 0; i < numbers.size(); i++) {
      if (numbers.get(i) < 0)
        numbers.remove(i--);
    }
    Collections.reverse(numbers);

    if (numbers.isEmpty()) {
      System.out.println("empty");
    } else {
      for (Integer item : numbers) {
        System.out.print(item + " ");

      }
    }
  }
}