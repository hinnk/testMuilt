// 人类
// (function (global) {
//     function Person(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     Person.prototype = {
//         constructor: Person
//     }
//     global.Person = Person;
// }(global || window));


class Person {
    //构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log(this.name);
    }

    static type() {
        console.log('人类');
    }
}

class Student extends Person {
    constructor(name, age) {
      
        super(name, age);//调用父类的构造函数，必须写在构造函数第一行
        console.log('init');
    }
    goSchool(){
        super.sayName();//调用父类的方法
        console.log('开始去学校了');
    }
}

// const s1 = new Student('张三', 19);
// s1.sayName();
// s1.goSchool();

// var p1 = new Person('张三', 19);
// Person.type();
// p1.sayName();
// console.log(p1);

/**
 * 
 * 1.封装一个类
 * 2.继承一个类
 * 3.给类添加原型方法和静态方法
 */