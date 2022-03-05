//javascript colsole API 
    //  console.log("Hello World");
    //  console.warn("this is warning");
    //  console.error("this is error");
    //  document.write("This is Java Script");
     //alert("me");




// console.log("Hello World");
//      console.warn("this is warning");
//      console.error("this is error");
// var num1=23;
// var num2=30;
// console.log(num1+num2);

// number datatype
// var num1=23;
// var num2=30;
// console.log(num1+num2);

// // strind data type
// var str1 =" This is simple string";
// var str2="This ia also string type";
// console.log(str1,str2);

// // object data type
// var marks={
//     ram:23,
//     kumar:60,
//     raj:90
// }
// console.log(marks);
// //boolean datatype
// var a=true;
// var b=false;
// console.log(a,b);

// // undefind data type
// //var und=undefined; or
// var und;
// console.log(und);

// var n=null;
// console.log(null);

/* array
var arr=[1, 2, 3, 4, 5];
console.log(arr);
*/


// // Operators
// //Arithmetic
// var a=10;
// var b=20;
// // console.log("The number a + b =:", a+b);
// // console.log("The number a - b =:", a-b);
// // console.log("The number a * b =:", a*b);
// // console.log("The number a / b =:", a/b);

// // // Assignment operator
// // var c=a;
// // c+=2;
// // console.log(c);

// //Comparison operator
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a<b);

//Logical operator
//And operator
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// or operator
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Not operator
// console.log(!true);
// console.log(!false);


// Function in Java Script
// function avg(a,b){
//     c=(a+b)/2;
//     return c;
// }
// c1=avg(10,20);
// c2=avg(100,20);
// console.log(c1,c2);

// Conditionals in Java Script
// if condition
// var a=14;
// if(a>20){
//     console.log("a is greater than 20");
// }

// if-else statement
// var a=14;
// if(a>30){
//     console.log("a is greater than 20");
// }
// else{
//     console.log("a is not greater than 20")
// }

// if-else ladder
// var a=40;
// if(a>30){
//     console.log("a is greater than 20");
// }
// if(a>50){
//     console.log("a is greater than A 20");
// }
// else{
//     console.log("a is not greater than 20");
// }

// Loop in java script

// for loop
// let arr=[1,2,3,4,5,6,7];
// let i=0;
// for(i=0;i<arr.length;i++)
// {
//     if(i==2)
// continue;

//     console.log(arr[i]);
// }

// while loop
// let arr=[1,2,3,4,5,6,7];
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }


//do while loop
// do{
//     console.log(arr[i]);
//     i++;
//     if(i==2)
//     break;
// }
// while(i<arr.length);


// Array method in java script


// Array methods in Java Script
// let myArr=["ram","kumar",null,45,true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Abhinay");
// myArr.shift();
// const newlen=myArr.unshift("rajan");
// console.log(newlen);
// console.log(myArr);
// myArr.toString();
// myArr.sort();

// String methods in java script
// let myLovelyString=" This is apple mango apple graps";
// console.log(myLovelyString);
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("apple"));
// console.log(myLovelyString.lastIndexOf("apple"));
// console.log(myLovelyString.slice(0,5));
// console.log(myLovelyString.replace("apple","Amar"));


//Date & Time
// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());



// Document object Model(DOM)

let elem=document.getElementById('click');
// console.log(elem);
let elemClass=document.getElementsByClassName('container');
// console.log(elemClass);
//elemClass[0].style.background='yellow';
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

//tn=document.getElementsByTagName('button');
tn=document.getElementsByTagName('div');
console.log(tn);

createdElement=document.createElement('p');
createdElement.innerText="This is simple paragraph";
tn[0].appendChild(createdElement);

createdElement2=document.createElement('b');
createdElement2.innerText="This is simple bold";
tn[0].replaceChild(createdElement2,createdElement);

//removeChild(element);

//Selecting using Query
sel=document.querySelector('.container');
console.log(sel);
sel=document.querySelectorAll('.container');
console.log(sel);