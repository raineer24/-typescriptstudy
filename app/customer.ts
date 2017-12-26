/// <reference path="person.ts" />


class Customer implements Person {
    name: string;
    age?: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}