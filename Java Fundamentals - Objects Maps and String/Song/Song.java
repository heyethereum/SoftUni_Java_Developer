public class Song {
  private String typeList;
  private String name;
  private String time;

  public Song(String typeList, String name, String time) {
    this.typeList = typeList;
    this.name = name;
    this.time = time;
  }

  public String getTypeList() {
    return typeList;
  }

  public String getName() {
    return name;
  }

  public String getTime() {
    return time;
  }

  public void setTypeList(String typeList) {
    this.typeList = typeList;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setTime(String time) {
    this.time = time;
  }
}
