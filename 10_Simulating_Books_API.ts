// Jaime Restrepo
// 10. Asynchronous code - Promises
// Simulating Books API.


class UserData {
    id: number;
    name: string;

    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    fetchUserName (timeOut: number, errorProbability: number): Promise<string> {
        return new Promise (
            (resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random > errorProbability) { // Success
                        resolve(this.name);        
                    } else {
                        reject(new Error("Error due to network delay"));
                    }
                }, timeOut);
            }    
        );
    }    
}


class BookData {
    id: number;
    name: string;
    
    constructor (id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    fetchBookName (timeOut: number, errorProbability: number): Promise<string> {
        return new Promise (
            (resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random > errorProbability) { // Success
                        resolve(this.name);        
                    } else {
                        reject(new Error("Error due to network delay"));
                    }
                }, timeOut);
            }    
        );
    }
 
}

// ##########################################################
// Consuming promises #######################################

// For users:

const user1 = new UserData(1,"Michael Jordan");
const randomParameter1: number = Math.random();

console.log("FETCHING AN USER...");
console.log(`Using the following error probability: ${randomParameter1}`);

user1.fetchUserName(5000,randomParameter1)
    .then(
        (returnedName) => console.log(`The name for the user1 is: ${returnedName}`)
    )
    .catch(
        (error) => console.error("It was not possible to fetch the user name:", error.message)
    )
    .finally(
        () => console.log("The request have been processed.")
    );

console.log("###############################");


// For books:

const book1 = new BookData(1,"The hungry wolf and the piglet");
const randomParameter2: number = Math.random();

console.log("FETCHING A BOOK...");
console.log(`Using the following error probability: ${randomParameter2}`);

book1.fetchBookName(5000,randomParameter2)
    .then(
        (returnedName) => console.log(`The title for the book1 is: ${returnedName}`)
    )
    .catch(
        (error) => console.error("It was not possible to fetch the book title:", error.message)
    )
    .finally(
        () => console.log("The request have been processed.")
    );

console.log("###############################");
