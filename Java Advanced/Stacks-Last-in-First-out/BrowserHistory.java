import java.util.ArrayDeque;
import java.util.Scanner;

public class BrowserHistory {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String line = scanner.nextLine();
    ArrayDeque<String> browser = new ArrayDeque<>();

    String currentURL = "";
    while (!line.equals("Home")) {
      if (line.equals("back")) {
        if (!browser.isEmpty())
          currentURL = browser.pop();
        else {
          System.out.println("no previous URLs");
          line = scanner.nextLine();
          continue;
        }
      } else {
        if (!currentURL.equals("")) {
          browser.push(currentURL);
        }
        currentURL = line;
      }
      System.out.println(currentURL);
      line = scanner.nextLine();
    }
  }
}
