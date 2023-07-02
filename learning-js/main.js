//手动创建对象
const person = {
    name: ["bob", "smith"],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    // simpler syntax of function
    introduceSelf() {
        console.log(`hi, i am ${this.name[0]}`);
    }
};

//构造函数
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi!, i am ${this.name}`);
    }
}
//搭配new使用
const salva = new Person("Salva");