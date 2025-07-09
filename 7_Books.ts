// Jaime Restrepo
// 7. Introduction to OOP.
// Books.


class Book {
    title: string;
    author: string;
    yearPublished: number;

    constructor(title: string, author: string, yearPublished: number){
        if (yearPublished < 1500) { // This is a random value.
            throw new Error("The book is ancient");
        }
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    printDetails(): string {
        return `${this.title} by ${this.author}, published in ${this.yearPublished}.`;
    }

    isClassic() {
        return this.yearPublished < 1975 ? true : false;
    }
}
