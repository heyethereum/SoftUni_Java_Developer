
/*
 * Description
 * Input / Constraints
 * 
 * You will receive a journal containing items, separated by ", " (comma and
 * space). After that, until you receive the command "Craft!", you will be
 * receiving different commands.
 * 
 * The commands are split by " - " (space dash space):
 * 
 * "Collect - {item}": Receiving this command, you should add the given item to
 * your inventory
 * 
 * If the item is already in your inventory, you should skip it.
 * 
 * "Drop - {item}": You should remove the item from your inventory, if it is
 * present in the inventory
 * 
 * "Combine Items - {oldItem}:{newItem}": You should check if the old item is
 * present, if so, place the new item after the old one
 * 
 * Otherwise, ignore the command.
 * 
 * "Renew - {item}": If the given item exists, you should change its position
 * and put it at the last position in your inventory
 * 
 * Output
 * 
 * After receiving "Craft!" print the items in your inventory, separated by ", "
 * (comma and space)
 * Example One
 * 
 * Input
 * 
 * 
 * Output
 * 
 * Iron, Wood, Sword
 * 
 * 
 * Iron, Sword, Gold
 * 
 * Collect - Gold
 * 
 * 
 * Drop - Wood
 * 
 * 
 * Craft!
 * 
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
 * Iron, Sword
 * 
 * 
 * Sword, Bow, Iron
 * 
 * Drop - Bronze
 * 
 * 
 * Combine Items - Sword:Bow
 * 
 * 
 * Renew - Iron
 * 
 * 
 * Craft!
 */
import java.util.Scanner;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.*;

public class Question3 {
  public static void main(String[] args) {
    // Write your code here
    Scanner scanner = new Scanner(System.in);
    List<String> inventory = Stream.of(scanner.nextLine().split(",")).map(String::trim).collect(Collectors.toList());

    while (true) {
      String command = scanner.nextLine();
      if (command.equals("Craft!")) {
        break;
      }
      String[] element = command.split("-");
      String action = element[0].trim();
      String item = element[1].trim();
      switch (action) {
        case "Collect":
          if (!(inventory.contains(item)))
            inventory.add(item);
          break;
        case "Drop":
          if (inventory.contains(item))
            inventory.remove(item);
          break;
        case "Combine Items":
          String[] combinedItems = item.split(":");
          String oldItem = combinedItems[0].trim();
          String newItem = combinedItems[1].trim();
          if (inventory.contains(oldItem)) {
            inventory.add(inventory.indexOf(oldItem) + 1, newItem);
          }
          break;
        case "Renew":
          if (inventory.contains(item)) {
            inventory.remove(item);
            inventory.add(item);
          }
          break;
      }
      // System.out.println(action);
      // System.out.println(item);
    }
    if (!inventory.isEmpty())
      System.out.println(String.join(", ", inventory));
    else if (inventory.size() == 1)
      System.out.println(inventory.get(0));
  }

}