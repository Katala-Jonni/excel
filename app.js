const person = {
    name: 'Maxim',
    age: 25,
    greet: () => {
        console.log('Greet');
        return 'Greet';
    }
};


Object.prototype.sayHello = () => {
    console.log('Hello!');
};


const lena = Object.create(person);
lena.name = 'Elena';
console.log(lena);
console.log(lena.__proto__.name);
