
/*
 * 
 * Description
 * 
 * Create a program that calculates the bonus points for each student, for a
 * certain course.
 * 
 * On the first line, you are going to receive the number of students for the
 * course.
 * 
 * On the second line, you are going to receive the number of the lectures in
 * the course.
 * 
 * On the third line, you are going to receive the additional bonus for the
 * course.
 * 
 * On the next lines, you will be receiving the number of attendances for each
 * student.
 * 
 * The bonus points are calculated using the following formula:
 * 
 * {total bonus} = {student attendances} / {course lectures} * (5 + {additional
 * bonus})
 * 
 * Find the student with the most bonus points and print their total points
 * along with attendances in the following format:
 * 
 * "Max Bonus: {maxBonusPoints}."
 * "The student has attended {studentAttendances} lectures."
 * 
 * In the end, round the bonus points up to the next whole number.
 * Constrains
 * 
 * There will not be students with the same final amount of bonus points
 * 
 * Output
 * 
 * Print the maximum bonus points, rounded up to the nearest whole number, along
 * with the attendance of the given student, in the format described above
 * 
 * Example One
 * 
 * Input
 * 
 * 
 * Output
 * 
 * 5
 * 
 * 
 * Max Bonus: 34.
 * 
 * 25
 * 
 * 
 * The student has attended 24 lectures.
 * 
 * 30
 * 
 * 
 * 12
 * 
 * 
 * 19
 * 
 * 
 * 24
 * 
 * 
 * 16
 * 
 * 
 * 20
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
 * 10
 * 
 * 
 * Max Bonus: 18.
 * 
 * 30
 * 
 * 
 * The student has attended 28 lectures.
 * 
 * 14
 * 
 * 
 * 8
 * 
 * 
 * 23
 * 
 * 
 * 27
 * 
 * 
 * 28
 * 
 * 
 * 15
 * 
 * 
 * 17
 * 
 * 
 * 25
 * 
 * 
 * 26
 * 
 * 
 * 5
 * 
 * 
 * 18
 */
import java.util.Scanner;

public class Question1 {
  public static void main(String[] args) {
    // Write your code here
    Scanner scanner = new Scanner(System.in);
    int students = Integer.parseInt(scanner.nextLine());
    int lectures = Integer.parseInt(scanner.nextLine());
    int bonus = Integer.parseInt(scanner.nextLine());

    double maxBonus = 0;
    int maxAttendances = 0;
    for (int i = 0; i < students; i++) {
      int attendances = Integer.parseInt(scanner.nextLine());

      double student = (double) attendances / lectures * (5 + bonus);

      maxBonus = Math.max(maxBonus, student);
      if (maxBonus == student)
        maxAttendances = attendances;
    }
    System.out.printf("Max Bonus: %.0f.%n", Math.ceil(maxBonus));
    System.out.printf("The student has attended %d lectures.", maxAttendances);
  }
}