//默认参数

function add(a, b) {
    var b = b || 1;
    console.log(a + b);
}

add(1);


function add2(a, b = 1) {
    console.log(a + b);
}
add2(2);

//解构赋值
// const obj = {
//     a: 1,
//     b: 2
// }
// const obj2={
//     c:3,
//     ...obj
// }
// console.log(obj2);
// const c = obj.a;

// const {a}=obj;
// console.log(a);
// const users = [{
//     name: '张三'
// }, {
//     name: '李四'
// }]

// const users2=[
//     {
//         name:'王五'
//     },
//     ...users
// ]

const obj = {
    code: 1,
    data: [{
            name: '张三',
            age: 15
        },
        {
            name: '王五',
            age: 18
        }
    ]
}

const {
    data
} = obj;
data.forEach(item => {
    console.log(item.name)
})

//剩余参数
function fn(a, b, c = 123, ...args) {
    console.log(args instanceof Array);
}
fn(1, 23, 21, 3, 213, 21, 3, 123, 12, 3, 12);


function fn2({
    name,
    age
}, id) {
    console.log(name, age, id);
}

fn2({
    name: '张三',
    // age:19,
}, 'fjdsklfj');



//ajax===> xhr只在浏览器才有，后台是没有的！！！

// function ajax(url, { method = 'get', success, error,data}) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             success(xhr.responseText);
//         }
//     }
//     xhr.send(data);
// }


// function ajax(url, obj) {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, url);
//     xhr.onreadystatechange =function(){
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             obj.success(xhr.responseText);
//         }
//     }
//     xhr.send(obj.data);
// }

const name = "张三";
const user = {
    name,
    sayName: function () {

    },
    eat() {
        console.log(this.name + '吃东西');
    }
}

//拷贝合并对象的方法
const o1 = {
    a: 'o1'
}
const o2 = {
    b: 'o2',
    
}
const o3=Object.assign({}, o1, o2);
console.log(o3);



// user.eat();
//字符串的实用新特性
//es5
const tem = [
    '<h1>' + name + '</h1>',
].join('');

//es6的字符串模板  tab键上方
const tem2 = `<h1>${name}</h1>`;
console.log(tem2);