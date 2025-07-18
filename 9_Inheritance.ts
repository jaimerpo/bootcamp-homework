// Jaime Restrepo
// 9. Inheritance (OOP).
// Animals classes.


abstract class Animal {
    protected name: string;
    private age: number;
    
    abstract makeSound(): void;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {return this.name};
    getAge(): number {return this.age};
}

class Dog extends Animal {

    constructor(name: string, age: number){
        super(name,age);
    }

    makeSound(): void {console.log("WOOF!!");}
}

class Cat extends Animal {

    constructor(name: string, age: number){
        super(name,age);
    }

    makeSound(): void {console.log( "MEOW!!");}
}


// Testing of the Animals classes:

const dogInstance: Dog = new Dog("Rocky",7);
const catInstance: Cat = new Cat("Minino",8);
console.log(`The dog's name is ${dogInstance.getName()}`);
dogInstance.makeSound();
console.log(`The cat's name is ${catInstance.getName()}`);
catInstance.makeSound();

/*
The following code was commented due to trying to access a private property (age) is not generating an error in execution time.
The error appears compiling the typescript file.

try {
    console.log(`The dog is ${dogInstance.age} years old`);
    console.log(`The cat is ${catInstance.age} years old`);
} catch (error) {
    console.log(error.message);
}
*/

console.log(`Using the getAge method, the dog is ${dogInstance.getAge()} years old`);
console.log(`Using the getAge method, the cat is ${catInstance.getAge()} years old`);
