// Jaime Restrepo
// 8. More OOP concepts.
// Video Games Store.


class VideoGame {

    title: string;
    developer: string;
    availableCopies: number;
    price: number;
    copiesSold: number;

    static availableGames: string[];
    static soldOutGames: string[];
    static totalSold: number;

    constructor(title: string, developer: string, availableCopies: number, price: number, copiesSold: number = 0){
        if (availableCopies <= 0) {
            throw new Error("The number of available copies should be greather than 0");
        }
        if (price <= 0) {
            throw new Error("The price should be greather than 0");
        }
        this.title = title;
        this.developer = developer;
        this.availableCopies = availableCopies;
        this.price = price;
        this.copiesSold = copiesSold;

        VideoGame.availableGames.push(this.title);
    }

    isAvailable(numberOfCopiesParameter: number): boolean {
        return this.availableCopies >= numberOfCopiesParameter ? true : false;
    }

    sell(numberOfCopiesParameter?: number): number {

        let transactionValue: number = 0;
        let numberOfCopies: number;

        if (numberOfCopiesParameter !== undefined) {
            if (numberOfCopiesParameter <=0 ){
                throw new Error("the passed number of copies should be > 0");
            }
            numberOfCopies = numberOfCopiesParameter;  
        } else {
            numberOfCopies = 1; 
        }

        if (!this.isAvailable(numberOfCopies)){
            throw new Error(`${this.title} is not available for ${numberOfCopies} copies.`);
        } 

        this.availableCopies -= numberOfCopies;
        this.copiesSold += numberOfCopies;
        transactionValue = this.price * numberOfCopies;
        VideoGame.totalSold += transactionValue;    
        
        const minimunStock: number = 1;
        if (!this.isAvailable(minimunStock)){
            VideoGame.soldOutGames.push(this.title);
            
            const index = VideoGame.availableGames.indexOf(this.title);
            VideoGame.availableGames.splice(index,1);    
        }

        console.log(`${this.title} was sold. The transaction value = ${transactionValue}`);
        return transactionValue;
    }


    static getTotalSold(): number {
        return VideoGame.totalSold;
    }


    static sellGames(games: VideoGame[], copies?: number[]): number {
        let subTotal = 0;

        if (copies !== undefined) {
            for (let i = 0; games.length -1; i++) {
                try {
                    subTotal += games[i].sell(copies[i]);        
                } catch (error) {
                    console.error("Error: ", error.message);
                } finally {
                    console.log(`${games[i].title} was processed.`);
                }
            }
        } else {
            for (let game of games){
                try {
                    subTotal += game.sell();       
                } catch (error) {
                    console.error("Error: ", error.message);
                } finally {
                    console.log(`${game.title} was processed.`);
                }
            }
        }

        console.log(`The total price of the ${games.length} sold games is: ${subTotal}`);
        return subTotal;
    }
}
