import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int n = Integer.parseInt(scanner.nextLine());

    List<Song> songs = new ArrayList<>();

    for (int i = 0; i < n; i++) {
      String[] data = scanner.nextLine().split("_");
      String typeList = data[0];
      String name = data[1];
      String time = data[2];

      Song song = new Song(typeList, name, time);
      songs.add(song);
    }

    String command = scanner.nextLine();

    if ("all".equals(command)) {
      for (Song song : songs) {
        System.out.println(song.getName());
      }
    } else {
      for (Song song : songs) {
        if (song.getTypeList().equals(command)) {
          System.out.println(song.getName());
        }
      }
    }
  }
}
