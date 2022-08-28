
/* Description

It is hot and sunny outside so you decide to go to the swimming pool with your friends.

Your task is to create a program that calculates the cost for entry to the pool.

Everyone should pay an entrance fee.

Keep in mind that an umbrella can provide shade for two people and only 75% of the group wants sunbeds.

When calculating the number of umbrellas and sunbeds the number should be rounded up to the closest integer.
Input

You will receive 4 lines of input:

    The number of people - an integer in range [1 ... 100]

    The entrance fee per person - a real number in range [0.00 ... 50.00]

    The price for a sunbed - a real number in range [0.00 ... 50.00]

    The price for an umbrella - a real number in range [0.00 ... 50.00]

Output

The output should consist of one line:

    "{total price} euro"

The result must be formatted up to the second decimal place.
Example

Input
	

Output

21
	

254.10 euro

5.50
	

4.40
	

6.20
	

Input
	

Output

32
	

272.00 euro

5
	

2
	

4 */
import java.util.Scanner;

public class Question1 {
  public static void main(String[] args) {
    // Write code here
    Scanner scanner = new Scanner(System.in);
    int people = Integer.parseInt(scanner.nextLine());
    double entrance = Double.parseDouble(scanner.nextLine());
    double sunbed = Double.parseDouble(scanner.nextLine());
    double umbrella = Double.parseDouble(scanner.nextLine());

    double total = 0;
    double totalSunbed = Math.ceil(0.75 * people) * sunbed;
    double totalUmbrella = Math.ceil((double) people / 2) * umbrella;

    total = totalSunbed + totalUmbrella + (people * entrance);

    System.out.printf("%.2f euro", total);

  }
}