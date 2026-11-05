

const person = {
    name: "Jhon",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

person.greet();

function sayHello(){
    return ("Hello world!");
}

const helloMessage = sayHello();
console.log(helloMessage);
