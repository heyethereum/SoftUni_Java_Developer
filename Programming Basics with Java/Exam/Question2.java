/* package Programming Basics with Java.Exam;

public Description

The Smiths are planning their family trip.

Your task is to create a program that calculates whether their budget will be sufficient knowing how many nights they have planned to stay,what the price per night is and what percentage of their budget must be spent on additional costs.

Keep in mind that if they stay longer than 7 nights the price per night is reduced by 5%.Input

You will receive 4 lines of input:

The budget that they have-a real number in range [1.00...10000.00]

The number of nights-an integer in range [0...1000]

The price per night-a real number in range [1.00...500.00]

The additional cost percentage-an integer in range [0...100]

Output

The output depends on whether the budget is sufficient or not:

If the budget is sufficient:

"The Smiths will be left with {money left after the trip} dollars after the vacation."

If the budget is insufficient:

"{money needed} dollars needed."

The sum must be formatted to the second digit after the decimal point.Example

Input

Output

800.50

The Smiths will be left with 24.49 dollars after the vacation.

8

100

2

Input

Output

504.20

111.54 dollars needed.

10

54.20

20 */

import java.util.Scanner;

public class Question2 {
  public static void main(String[] args) {
    // Write code here
    Scanner scanner = new Scanner(System.in);
    double budget = Double.parseDouble(scanner.nextLine());
    int nights = Integer.parseInt(scanner.nextLine());
    double price_per_night = Double.parseDouble(scanner.nextLine());
    int additional_cost_percentage = Integer.parseInt(scanner.nextLine());

    if (nights > 7) {
      price_per_night *= 0.95;
    }
    double total_cost = (double) nights * price_per_night + (0.01 * additional_cost_percentage * budget);

    if (total_cost <= budget) {
      System.out.printf("The Smiths will be left with %.2f dollars after the vacation.", budget - total_cost);
    } else {
      System.out.printf("%.2f dollars needed.", total_cost - budget);
    }
  }
}
