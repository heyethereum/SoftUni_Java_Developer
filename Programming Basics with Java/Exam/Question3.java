
/* package Programming Basics with Java.Exam;

public Description

Create a program that calculates the cost of drinks that a customer purchases from a coffee machine:

Without sugar

Normal

Extra sugar

Espresso

$0.90

$1

$1.20

Cappuccino

$1.00

$1.20

$1.60

Tea

$0.50

$0.60

$0.70

Keep in mind the following discounts:

There is a 35%discount if the selected drink does not contain sugar

There is a 25%discount if 5 or more cups of Espresso have been purchased

There is a 20%discount on the total bill,if it exceeds $15

The discounts are applied in the order of their description.Input

You will receive 3 lines of input:

The first line describes the type of drink-a string:"Espresso","Cappuccino"or"Tea"

The second line represents the sugar level-a string:"Without","Normal"or"Extra"

The third line will specify the number of drinks-an integer in range [1...50]

Output

Print a single line to the console:

"You bought {count drinks} cups of {drink} for {total price} dollars."The price must be formatted up to the second decimal place.

Example

Input

Output

Espresso

You bought 10 cups of Espresso for 4.39 dollars.

Without

10

Input

Output

Espresso

You bought 4 cups of Espresso for 2.34 dollars.

Without

4
 */
import java.util.Scanner;

public class Question3 {
  public static void main(String[] args) {
    // Write code here
    Scanner scanner = new Scanner(System.in);
    String drink = scanner.nextLine();
    String sugar = scanner.nextLine();
    int number = Integer.parseInt(scanner.nextLine());

    double price = 0;
    double discount = 0;
    double total = 0;

    if (drink.equals("Espresso")) {
      if (sugar.equals("Without")) {
        price = 0.9 * (1 - 0.35);
      } else if (sugar.equals("Normal")) {
        price = 1.0;
      } else if (sugar.equals("Extra")) {
        price = 1.2;
      }
      if (number >= 5) {
        price = price * (1 - 0.25);
      }
    } else if (drink.equals("Cappuccino")) {
      if (sugar.equals("Without")) {
        price = 1.0 * (1 - 0.35);
      } else if (sugar.equals("Normal")) {
        price = 1.2;
      } else if (sugar.equals("Extra")) {
        price = 1.6;
      }
    } else if (drink.equals("Tea")) {
      if (sugar.equals("Without")) {
        price = 0.5 * (1 - 0.35);
      } else if (sugar.equals("Normal")) {
        price = 0.6;
      } else if (sugar.equals("Extra")) {
        price = 0.7;
      }
    }
    total = price * number;
    if (total > 15)
      total = total * (1 - 0.2);

    System.out.printf("You bought %d cups of %s for %.2f dollars.", number, drink, total);
  }
}
