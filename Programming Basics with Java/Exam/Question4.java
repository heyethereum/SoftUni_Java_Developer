/* package Programming Basics with Java.Exam;

public Description

The weather is getting warmer and all clubs are launching promotional offers.

Create a program that calculates the profit of a club for the evening and checks whether it reaches a certain goal or not.Keep in mind that the price for a cocktail is its name'slength.

If the price of an order is an odd number-there is a 25%discount on it.Input

You will receive:

On the first line-the desired profit of the club-a real number in range[1.00...15000.00]

On the next lines,you will be receiving two rows until the command:"Party!"or until the desired profit is reached:

The name of a cocktail-a string

The number of times it is contained in the order-an integer in range [1...50]

Output

First,print one of the following lines to the console:

If you receive the command"Party!":

"We need {money needed} dollars more."

If the desired profit is reached:

"Target acquired."

Then:

"Club income - {club's profit} dollars."

The amount of money must be formatted to the second decimal place.Example

Input

Output

500

We need 416.00 dollars more.

Bellini

Club income-84.00 dollars.

6

Bamboo

7

Party!

Input

Output

100

Target acquired.

Sidecar

Club income-196.75 dollars.

7

Mojito

5

White Russian

10

We can help you with your code by giving you some hints,just click the button:

HINT#1

Note that the individual price of each cocktail is the length of its name.If the price for an order is an odd number,apply the discount.Calculate the price for each order and add it to the total.HINT#2

If you reach the desired profit before receiving the"Party!"command,print the correct output.If you receive the command"Party!"and you haven'treached the desired profit,determine how much money is needed and print the correct output. */

import java.util.Scanner;

public class Question4 {
  public static void main(String[] args) {
    // Write code here
    Scanner scanner = new Scanner(System.in);
    double desired = Double.parseDouble(scanner.nextLine());
    double profit = 0;
    while (true) {
      if (profit >= desired)
        break;
      String cocktail = scanner.nextLine();

      if (cocktail.equals("Party!"))
        break;
      int times = Integer.parseInt(scanner.nextLine());
      // System.out.println("times: " + times);
      double price = cocktail.length();
      // System.out.println("price: " + price);

      /*
       * if (i%2==1){
       * profit = profit + (0.75 * price);
       * }
       * else
       */
      profit += price * times;
      // System.out.println("profit: " + profit);

    }
    if (profit >= desired) {
      System.out.println("Target acquired.");
    } else
      System.out.printf("We need %.2f dollars more.%n", desired - profit);
    System.out.printf("Club income - %.2f dollars.", profit);
  }
}