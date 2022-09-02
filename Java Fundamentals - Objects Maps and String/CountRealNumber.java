import java.util.Arrays;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class CountRealNumber {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int[] numbers = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).toArray();

    TreeMap<Integer, Integer> counts = new TreeMap<>();
    for (int num : numbers) {
      if (!counts.containsKey(num))
        counts.put(num, 0);
      counts.put(num, counts.get(num) + 1);
    }
    for (Map.Entry<Integer, Integer> entry : counts.entrySet()) {
      System.out.printf("%d -> %d%n", entry.getKey(), entry.getValue());
    }

  }

}
