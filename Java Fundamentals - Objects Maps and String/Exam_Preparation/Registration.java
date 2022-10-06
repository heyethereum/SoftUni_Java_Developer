import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Registration {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int registrationInputCount = Integer.parseInt(sc.nextLine());

    String regex = "U\\$(?<user>[A-Z][a-z]{2,})U\\$P@\\$(?<pass>[A-Za-z]{5,}\\d+)P@\\$";
    int registeredCount = 0;
    Pattern pattern = Pattern.compile(regex);
    for (int i = 0; i < registrationInputCount; i++) {
      String userPass = sc.nextLine();
      Matcher matcher = pattern.matcher(userPass);

      if (matcher.find()) {
        registeredCount++;
        String user = matcher.group("user");
        String pass = matcher.group("pass");
        System.out.println("Registration was successful");
        System.out.printf("Username: %s, Password: %s%n", user, pass);
      } else {
        System.out.println("Invalid username or password");
      }
    }
    System.out.printf("Successful registrations: %d%n", registeredCount);
  }
}
