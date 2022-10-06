import java.util.Scanner;

public class PasswordReset {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String password = sc.nextLine();
    String inputCommand = sc.nextLine();
    while (!inputCommand.equals("Done")) {
      String[] tokens = inputCommand.split("\\s+");
      String command = tokens[0];

      if (command.equals("TakeOdd")) {
        StringBuilder tempPass = new StringBuilder();

        for (int i = 1; i < password.length(); i += 2) {
          tempPass.append(password.charAt(i));
        }
        password = tempPass.toString();
        System.out.println(password);
      } else if (command.equalsIgnoreCase("Cut")) {
        int index = Integer.parseInt(tokens[1]);
        int length = Integer.parseInt(tokens[2]);

        String firstPart = password.substring(0, index);
        String secondPart = password.substring(index + length);

        password = firstPart + secondPart;

        System.out.println(password);
      } else if (command.equalsIgnoreCase("Substitute")) {
        String substr = tokens[1];
        String replacement = tokens[2];

        if (!password.contains(substr)) {
          System.out.print("Nothing to replace!\n");
        } else {
          password = password.replaceAll(substr, replacement);
          System.out.println(password);
        }
      }
      inputCommand = sc.nextLine();
    }
    System.out.println("Your password is: " + password);
  }
}