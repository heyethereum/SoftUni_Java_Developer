function pressHouse() {
  class Article {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    toString() {
      return `Title: ${this.title}\nContent: ${this.content}`;
    }
  }
  class ShortReports extends Article {
    constructor(title, content, originalResearch) {
      super(title, content);
      this.originalResearch = originalResearch;
      this.comments = [];

      if (content.length >= 150) {
        throw new Error("Short reports content should be less than 150 words");
      }
      if (
        !originalResearch.hasOwnProperty("title") ||
        !originalResearch.hasOwnProperty("author")
      ) {
        throw new Error("The original research should have author and title");
      }
    }
    addComment(comment) {
      this.comments.push(comment);
      return `The comment is added`;
    }
    toString() {
      let str = super.toString();
      str += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;
      if (this.comments.length > 0) {
        str += `\nComments:`;
        for (const line of this.comments) {
          str += `\n${line}`;
        }
      }
      return str;
    }
  }
  class BookReview extends Article {
    constructor(title, content, book) {
      super(title, content);
      this.book = book;
      this.clients = [];
    }
    addClient(name, order) {
      let client = this.clients.find((c) => c.name === name);
      if (client === undefined) {
        this.clients.push({ name, order });
        return `${name} has ordered a review for ${this.book.name}`;
      } else {
        throw new Error("This client has already ordered this review");
      }
    }
    toString() {
      let str = super.toString();
      str += `\nBook: ${this.book.name}`;
      if (this.clients.length > 0) {
        str += `\nOrders:`;
        for (const line of this.clients) {
          str += `\n${line.name} - ${line.order}`;
        }
      }
      return str;
    }
  }
  return { Article, ShortReports, BookReview };
}

let classes = pressHouse();

let lorem = new classes.Article(
  "Lorem",
  `Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Fusce non tortor finibus, facilisis mauris vel…`
);

console.log(lorem.toString());

let short = new classes.ShortReports(
  "SpaceX and Javascript",
  `Yes, it is true that in its recent launch, the SpaceX Dragon
 2 Flight used technology based on Chromium and JavaScript. 
 What are your views on thi`,
  { title: "Dragon 2", author: "wikipedia.org" }
);

console.log(short.addComment("Thank God they didn't use Java."));

short.addComment(`In the end the JavaScript features are
 executed in C++ - the underlying language.`);

console.log(short.toString());

let book = new classes.BookReview(
  `The Great Gatsby is so much
 more than a love story`,
  `The Great Gatsby is in many ways
 similar to Romeo and Juliet, yet I believe that it is so
 much more than just a love story. It is also a reflection
 on the hollowness of a life of leisure. ...`,
  { name: "The Great Gatsby", author: "F. Scott Fitzgerald" }
);

console.log(book.addClient("The Guardian", "100 symbols"));

console.log(book.addClient("Goodreads", "30 symbols"));

console.log(book.toString());
