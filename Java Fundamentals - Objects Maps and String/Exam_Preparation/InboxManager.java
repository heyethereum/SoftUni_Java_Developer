import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Scanner;

public class InboxManager {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    HashMap<String, List<String>> users = new HashMap<>();
    String input = sc.nextLine();

    while (!input.equals("Statistics")) {
      String[] tokens = input.split("->");
      String command = tokens[0];
      String username = tokens[1];

      if (command.equals("Add")) {
        if (users.containsKey(username)) {
          System.out.printf("%s is already registered%n", username);
        } else {
          users.put(username, new ArrayList<>());
        }
      } else if (command.equals("Send")) {
        String email = tokens[2];
        users.get(username).add(email);
      } else if (command.equals("Delete")) {
        if (users.containsKey(username)) {
          users.remove(username);
        } else {
          System.out.printf("%s not found!%n", username);
        }
      }
      input = sc.nextLine();
    }
    System.out.println("Users count: " + users.size());
    users.entrySet()
        .stream()
        .sorted((a, b) -> {
          int result = Integer.compare(b.getValue().size(), a.getValue().size());

          if (result == 0) {
            result = a.getKey().compareTo(b.getKey());
          }
          return result;
        })
        .forEach(entry -> {
          System.out.println(entry.getKey());
          entry.getValue().forEach(email -> System.err.println(" - " + email));
        });
  }
}
