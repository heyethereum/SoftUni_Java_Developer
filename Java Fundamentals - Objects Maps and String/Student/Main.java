import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    List<Student> students = new ArrayList<>();

    String input = scanner.nextLine();
    while (!"end".equals(input)) {
      String[] data = input.split(" ");
      String firstName = data[0];
      String lastName = data[1];
      int age = Integer.parseInt(data[2]);
      String hometown = data[3];

      Student student = new Student(firstName, lastName, age, hometown);

      Student existingStudent = getExistingStudent(student, students);

      if (existingStudent != null) {
        existingStudent.setAge(age);
        existingStudent.setHometown(hometown);
      } else {
        students.add(student);
      }

      input = scanner.nextLine();
    }

    String hometown = scanner.nextLine();
    for (Student student : students) {
      if (hometown.equals(student.getHometown())) {
        System.out.printf("%s %s is %d years old.%n", student.getFirstName(), student.getLastName(), student.getAge());
      }
    }
  }

  private static Student getExistingStudent(Student studentToAdd, List<Student> students) {
    for (Student saveStudent : students) {
      if (saveStudent.getFirstName().equals(studentToAdd.getFirstName())
          && saveStudent.getLastName().equals(studentToAdd.getLastName())) {
        return saveStudent;
      }
    }
    return null;
  }
}
