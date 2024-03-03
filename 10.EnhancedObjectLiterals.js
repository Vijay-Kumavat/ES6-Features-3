// Create an object representing a book
const book = {
    // Shorthand property names for title and author
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  
    // Method definition for getting book details
    getDetails() {
      return `${this.title} by ${this.author}`;
    }
  };
  
  // Accessing and using the methods of the book object
  console.log(book.getDetails()); // Output: The Great Gatsby by F. Scott Fitzgerald
  