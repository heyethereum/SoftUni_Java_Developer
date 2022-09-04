import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.*;

public class RepeatString {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    /*
     * String[] input = scanner.nextLine().split(" ");
     * List<String> result = new ArrayList<>();
     * for (String word : input) {
     * result.add(word.repeat(word.length()));
     * }
     * result.forEach(System.out::println);
     */
    List<String> result = Stream.of(scanner.nextLine().split(" ")).map(word -> word.repeat(word.length()))
        .collect(Collectors.toList());
    System.out.println(String.join("", result));
  }
}