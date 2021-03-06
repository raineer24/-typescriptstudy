import { Person } from './person';


export class Customer implements Person {
    name: string;
    age?: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}