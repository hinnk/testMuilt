// var a = 1;
// let b = 1;//只能够在块里使用

// if(true){
//     let c=2;
// }
// // console.log(c);

// while(true){
//     let d=213;
//     break;
// }
// console.log(d);



// for (var i = 0; i < 10; i++) {

// }
// console.log(i);

// for (let j = 0; j < 10; j++) {
//     console.log(j);
// }
// console.log(j);


// const obj = 1; //设置后不可以重新赋值
// // obj=2;
// const aaa = [1, 2, 3];
// aaa[0] = 4;
// aaa=123
// console.log(aaa);


// const fns=[];
// fns.push(function(){
//     console.log(1);
// })
// let 替代var


//函数

// function fn() {}
// const fn2 = function () {};

// function add(a, b) {
//     return a + b;
// }

// //箭头函数，禁止在浏览器使用
// const add = (a, b) => {
//     return a + b;
// }
//如果函数的函数体没有写大括号，代表返回值
const add = (a, b) => a + b;
//如果函数只有一个参数的情况，形参的括号可以忽略不写
const increment = x => add(x, 1);

console.log(add(1, 2));
console.log(increment(5));

//注意点  箭头函数函数体没有this

//node和浏览器js的不同
/*
  1.node没有dom
  2.node全局对象不是window ,是global
  3.node 7以上的版本支持es6部分语法
  4.node 自带模块化工具
  5.node可以开发后台
*/
console.log(global);
let name="global"
const obj = {
    name: '利害',
    sayName: () => {
        console.log(this)
        console.log(this.name);
    }
}
obj.sayName();