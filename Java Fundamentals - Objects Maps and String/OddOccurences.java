import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.*;

public class OddOccurences {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    List<String> words = Stream.of(scanner.nextLine().toLowerCase().split(" ")).collect(Collectors.toList());
    LinkedHashMap<String, Integer> counts = new LinkedHashMap<>();

    for (String word : words) {
      // System.out.println(word);
      if (!counts.containsKey(word))
        counts.put(word, 0);
      counts.put(word, counts.get(word) + 1);
    }
    words.clear();
    for (Map.Entry<String, Integer> word : counts.entrySet()) {
      if (word.getValue() % 2 == 1)
        words.add(word.getKey());
    }
    System.out.println(String.join(", ", words));
  }
}
