
class Person{
  constructor(private name: string, private age: number){
    
  }
  
  greet() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

let me = new Person('andrew', 35);
me.greet();