var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
    return Person;
})();
var me = new Person('andrew', 35);
me.greet();
