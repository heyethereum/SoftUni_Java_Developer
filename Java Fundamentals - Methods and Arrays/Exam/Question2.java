/*
 * Description
 * 
 * You start the game with 100 health and 0 bitcoins.
 * 
 * You will be given a String, representing the rooms of the dungeon.
 * 
 * Each room is separated by a "|" (vertical bar): room1|room2|room3…
 * 
 * The text of each room contains 2 values.
 * 
 * The first value can be:
 * 
 * A potion:
 * 
 * you are healed in the amount of the second value
 * 
 * your health cannot exceed your initial health (100)
 * 
 * first print: "{amount} health points restored."
 * 
 * after that, print your current health: "Current health: {health} hp."
 * 
 * A chest:
 * 
 * increase the amount of bitcoins with the amount of the second value
 * 
 * after that, print out: "You found {amount} bitcoins."
 * 
 * In any other case, you are facing a monster that you are going to fight
 * 
 * The second value of the room contains the attack points of the monster.
 * 
 * You should remove the value of the monster's attack from your health.
 * 
 * If you are still alive (health > 0), you have slayed the monster and you
 * should print: "You have slayed a {type of monster}."
 * 
 * If you died, print "You died! Killed by {monster}." and your quest is over
 * 
 * Print the best highest number of a room you have managed to reach:
 * "Best room: {room}".
 * 
 * If you managed to go through all of the rooms in the dungeon, print on the
 * next three lines:
 * 
 * "You've made it!
 * Bitcoins: {bitcoins}
 * Health: {health}"
 * Input / Constraints
 * 
 * You will receive a String, representing the rooms of the dungeon, separated
 * by a "|" (vertical bar): room1|room2|room3...".
 * Output
 * 
 * Print the corresponding messages, described above.
 * Example One
 * 
 * Input
 * 
 * 
 * Output
 * 
 * rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000
 * 
 * 
 * You have slayed a rat.
 * 
 * 
 * 
 * You have slayed a bat.
 * 
 * 
 * 
 * 10 health points restored.
 * 
 * 
 * 
 * Current health: 80 hp.
 * 
 * 
 * 
 * You have slayed a rat.
 * 
 * 
 * 
 * You found 100 bitcoins.
 * 
 * 
 * 
 * You died! Killed by boss.
 * 
 * 
 * 
 * Best room: 6
 * 
 * We can help you with your code by giving you some hints, just click the
 * button:
 * 
 * Example Two
 * 
 * Input
 * 
 * 
 * Output
 * 
 * cat 10|potion 30|ghoul 10|chest 10|snake 25|chest 110
 * 
 * 
 * You have slayed a cat.
 * 
 * 
 * 
 * 10 health points restored.
 * 
 * 
 * 
 * Current health: 100 hp.
 * 
 * 
 * 
 * You have slayed a ghoul.
 * 
 * 
 * 
 * You found 10 bitcoins.
 * 
 * 
 * 
 * You have slayed a snake.
 * 
 * 
 * 
 * You found 110 bitcoins.
 * 
 * 
 * 
 * You've made it!
 * 
 * 
 * 
 * Bitcoins: 120
 * 
 * 
 * 
 * Health: 65
 */

import java.util.Scanner;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.*;

public class Question2 {
  public static void main(String[] args) {
    // Write your code here
    Scanner scanner = new Scanner(System.in);
    List<String> rooms = Stream.of(scanner.nextLine().split("\\|")).collect(Collectors.toList());

    int health = 100, bitcoin = 0, bestRoom = 0;

    for (String item : rooms) {
      if (health < 0)
        break;
      bestRoom++;
      // System.out.println(item);
      String[] element = item.split(" ");
      String command = element[0];
      int points = Integer.parseInt(element[1]);
      switch (command) {
        case "potion":
          int healthRecovered = points;
          int healthToRecovered = 100 - health;
          health += points;
          if (healthToRecovered < points) {
            healthRecovered = healthToRecovered;
            health = 100;
          }
          System.out.printf("%d health points restored.%n", healthRecovered);
          System.out.printf("Current health: %d hp.%n", health);
          break;
        case "chest":
          bitcoin += points;
          System.out.printf("You found %d bitcoins.%n", points);
          break;
        default:
          health -= points;
          if (health - points > 0) {
            System.out.printf("You have slayed a %s.%n", command);
          } else {
            System.out.printf("You died! Killed by %s.%n", command);
            System.out.printf("Best room: %d", bestRoom);
            return;
          }

      }
    }
    System.out.println("You've made it!");
    System.out.println("Bitcoins: " + bitcoin);
    System.out.println("Health: " + health);
  }
}