class Person {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

let  p = new Person('Sheldon Kitty')

var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

alert(p.getName())
