console.log("hyy");
console.log("gred");
console.log("dswe");
let mynumber = 987;
console.log(mynumber);
let text = "abc,def,ghi";
let text2 = "Dogs,cats,Dogs,cats";
let part = text.slice(5, 4);
console.log(text);
console.log(text.substring(2, 9));
console.log(text.replace("abc", "cxz"));
console.log(text.slice(3, 5));
console.log(text2);
console.log(text2.indexOf("g"));
console.log(text2.indexOf("s"));
console.log(text2.toLocaleLowerCase());
console.log(text2.toLocaleUpperCase());
console.log(text2.concat(" ", text));
console.log(text2 + " " + text);
console.log(mynumber);
let str = mynumber.toLocaleString();
console.log(str.padStart(6, "0"));
/* 
const resolve = require("resolve"); */

console.log(text2[7]);
console.log(text2.includes("Dogs"));
console.log(text2.includes("cats"));
console.log(text2.includes("dogs"));

console.log(text2.startsWith("Dogs"));
console.log(text2.startsWith("cats"));
console.log(text2.endsWith("cats"));
console.log(text2.endsWith("Dogs")); /* 
 console.log(mynumber.isInteger()); 
 console.log(mynumber.issafeinteger());
 let x=number.EPSILON;*/

let x = Number.EPSILON;
console.log(x);
let x1 = Number.MAX_SAFE_INTEGER;
console.log(x1);

let text1 = "hello";
const myarr = text1.split("");
text1 = "";
for (let i = 0; i < myarr.length; i++) {
  text1 += myarr[i] + "\n";
}
console.log(text1);
/* alert("error"); */

/* bigint */
let x2 = 123456789;
let y2 = BigInt(9999999999999);
console.log(x2 + " , " + y2);
/* bigint */
let x3 = 123456789n;
let y3 = BigInt("9999999999999");
console.log(x3 + " , " + y3);
typeof x3;

let a = 0x20000000000003n;
let b = 0o400000000000000003n;
let c = 0b100000000000000000000000000000000000000000000000000011n;
console.log(a + " , " + b + " , " + c + " , ");
let d = x2 === y2;
console.log(d);

let e = text2 === text2; /* precision */
console.log("e=" + e);

let x4 = Number.MAX_SAFE_INTEGER;
console.log(x4);

let x5 = Number.MIN_SAFE_INTEGER;
console.log(x5);
console.log(Number.isInteger(43) + "___" + Number.isInteger(90.87));
console.log(Number.isSafeInteger(43) + "___" + Number.isSafeInteger(90.87));

let x6 = 4325;
console.log(
  x6.toExponential(2) +
    " " +
    x6.toFixed(2) +
    " " +
    x6.toPrecision(2) +
    " " +
    x6.toString()
);
console.log(x6.valueOf() + " " + (4000 + 325).valueOf());

/* let x7=new Date("1970-01-01"); */
let x7 = new Date("2017-09-30");
console.log(Number(x7));

console.log(
  parseInt(10) +
    " " +
    parseInt("10 20 30 40") +
    " " +
    parseFloat(20) +
    " " +
    parseFloat("20 30 40") +
    " "
);

let x8 = Number.POSITIVE_INFINITY;
console.log(x8);

let x9 = /* Number.NEGATIVE_INFINITY */ -2 / 0;
console.log(x9); /*  */

let f = /* Number.NaN */ -2 / "apple";
console.log(f);

/* array */
const abc = ["asd", "rfde", "vfd"];
console.log(abc[0]);
console.log(abc[1]);
console.log(abc[2]);
console.log(abc);

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars);
cars[2] = "werf";
console.log(cars[2]);
console.log(cars);
console.log(cars);

const person1 = ["John", "Doe", 43];
console.log(person1[0]);
console.log(person1);

const person2 = { firstname: "john", secondname: "doe", age: "32" };
console.log(person2.firstname + " " + person2.secondname);

console.log(cars.length);
console.log(cars.length - 1);

const cars4 = ["Saab", "Volvo", "BMW"];
let cars2 = cars.length;
let text3 = "#";
for (i = 0; i < cars2; i++) {
  text3 = text3 + "#" + cars2[i] + " ";
}
text3 += "#";
console.log(text3);
typeof cars4;

const cars5 = [22, 33, 22, 11];
console.log(cars5);

console.log(cars4.join("*"));
var abcd = new Array(10);
abcd[0] = 11;
console.log(abcd);
typeof abcd;

console.log(Math.random());
console.log(Math.PI);
console.log(Math.ceil(2.2));
console.log(Math.floor(2.9));
console.log(Math.trunc(2.9));
console.log(Math.pow(2, 2));
console.log(Math.abs(-2.2));
console.log(Math.min(3, 4, 5, 2, 1, 6));
console.log(Math.max(3, 4, 5, 2, 1, 6));
let h = Number.MAX_SAFE_INTEGER;
console.log(h);
console.log(Math.log(2));
console.log(Math.ceil(Math.random() * 10));

const hour = new Date().getHours();
if (hour < 12) {
  greetings = "good morning";
} else if (hour < 18) {
  greetings = "good afternoon";
} else {
  greetings = "good evening";
}
console.log(greetings);

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";break;
//   }
//   console.log(day);

//   switch(new Date().getDay())
//   {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         day= "weekdays";
//         break;
//         case 0:
//         day="sunday funday";
//         break;

//         default:
//          day="happy sunday";
//   }
//   console.log(day);

//   let x11 = "0";

// switch (x11) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(x11);

// /* for of */
// const cars1=["audi","bmw","volvo"];
// let text4="";
// for(let x of cars1){
//     text4+=x+" , ";
// }console.log(text4);

// const person={firstname:"john",secondname:"doe",age:"32"}

// let text5="";
// for (let x in person){
//     text5+=person[x]+" ";
// }
// console.log(text5);

// let lang="javascript";
// let text6=" ";
// for(let x of lang){
//     text6+=x+" ";
// }console.log(text6);
// /*
// let text7 = "";
// let i = 0;
// while (i < 10) {
//     text7 += "The number is " + i;
//   i++;
// }
// console.log(text7); */

// let txt = "";
// for (let n = 0; i < 10; n++)
//  {
//   if (n === 4)
//   { break; }

//   txt += "The number is " + n   + "     ";
// }
// console.log(txt);

// const fruit=new Map([["apples",300],["peaches",400],["berry",400],["ice",400]]);
// console.log(fruit.get("peaches"));
// console.log(fruit.has("peaches"));
// console.log(fruit.size);
// console.log(fruit.delete("peaches"));
// console.log(fruit);

// const red=new Set(["a","b","c","d"]);
// console.log( red);
// console.log( red.has("a"));
// console.log( red.has("e"));

// let j=12;
// console.log(j.toString());
// console.log(j.toExponential(2));

// d = new Date();
// let y=Number(d);
// console.log( (y));

// const makeError = () => {
//   let i=1;
//   while ( i <= 5 ) {
//   try {
//     if( i % 2 !== 0 ) {
//       throw new Error("odd number");
//     }
//     console.log("even number");

//     /* throw new customError("this is a new customError"); */
//     /* throw new customError("this is a new customError"); */
//     /* const name="dave";
//     name="joe"; */
//   } catch (error) {
//     console.error(error.name);
//     console.error(error.message);
//     console.error(error.stack);
//   }

//   finally{
//     console.log("...finally");
//     i++;
//   }}
// };
// makeError();
// /*
// function customError(message){
//   this.message=message;
//   this.name="customError";
//   this.stack=`${this.name},${this.message}`;

// } */

// /* class methods */
// class A{
//   constructor(name,year){
//     this.name=name;
//     this.year=year;
//   }
//   age(){
//     let date=new Date();
//     return date.getFullYear()-this.year;
//   }
// }
// let B=new A("abc",2004);
// console.log(B.name +" is "+ B.age() +" years old ");

// /*  */
// class pizza{
//   constructor(pizzasize,topping,pizzacrust){
//     this.pizzasize=pizzasize;
//     this.topping=topping;
//     this.pizzacrust=pizzacrust;
//   }
//   bake(){
//     console.log(" "+ this.pizzasize +" size pizza with "+ Pizza.topping +" with "+ Pizza.pizzacrust +" crust ")
//   }

//   }
// let Pizza=new pizza( "medium","corn","thin" );
// console.log(" "+Pizza.pizzasize+" "+Pizza.topping+" "+Pizza.pizzacrust);
// console.log(Pizza.bake());
// /*  */

// /* inheritence */
// class Cars{
//   constructor(brand){
//     this.brandname=brand;
//   }
//   present(){
//     return " i have a " + this.brandname ;
//   }
// }
// class model extends Cars{
//   constructor(brand,model){
//     super(brand);
//     this.modelname=model;

//   }
//   show(){
//     return this.present() + " and it's a " + this.modelname ;
//   }
// }
// let myCar = new model("Ford", "Mustang");
// console.log (myCar.show());
// /*  */
// class car{
//   constructor(cname){
//     this.carname=cname;
//   }
//   get cnam(){ return this.carname; }
//   set cnam(x){ this.carname=x; }
// }
// let mod=new car("ford");
// mod.cnam="volvo";
// console.log(mod.cnam);
// /*  */
// class a1{
//   constructor(carname){
//     this.carname=carname;
//   }
// static hello(x){
//   return " hello "+x.carname;
// }
// }
// let obj=new a1("ford")
// console.log(a1.hello(obj));

// /* function apply */
// const person3={
//   fullname:function(){
//     return this.firstname+" "+this.lastname;
//   }
// }
// const person4={
//   firstname:"nhb",
//   lastname:"abc"
// }
// console.log(person3.fullname.apply(person4));
// /* bind */
// const myobj={
// firstname:"asd",
// lastname:"kjh",
// fullname:function(){ return this.firstname + " " +this.lastname},
// }
// console.log(myobj.fullname());
// /*  */
// /* const person_ = {
//   fullName: function() { return this.firstName + " _ " + this.lastName;}
// }
// const person5 = {
//   firstname:"dcd",
//   lastname:"rfde"
// }
// const person6 = {
//   firstname:"dcd",
//   lastname:"rfde"
// }
// console.log(person_.fullName.call(person6));
//  */

// const pers={
//   fullname: function(city,country){ return this.firstname+" "+this.lastname+" "+city+" "+country;}
// }
// const pers1={
//   firstname:"cvfd",
//   lastname:"fder"
// }
// const pers2={
//   firstname:"sxcd",
//   lastname:"dcxd"
// }
// console.log(pers.fullname.call(pers1,"oslov","cdvf"));
// /*  */
// /* const pers_={
//   firstname:"sxcd",
// lastname:"dcxd",
// fullname: function(){ return this.firstname +" "+ this.lastname ;}
// }
// const pers_1={
//   firstname:"cvfd",
//   lastname:"fder",
// }
// let fulName=pers_.fullname.bind(pers_1);
// console.log(fulName); */

// /*  */
// function myDisplayer(some) {
//   console.log(some);
// }
// function first(){ myDisplayer("hyy"); }
// function second(){myDisplayer("hello");}
// first();
// second();

// setInterval(myfunction,2000);
// function myfunction(){
//   console.log("gfdee");
// }

// console.log(navigator.appVersion);
// console.log(navigator.userAgent);
// console.log(navigator.cookieEnabled);
// console.log(navigator.languages);/*
// console.log(window.alert("dcvgb"));
// console.log(confirm("dswsd"));
// console.log(print("dswsd"));
// console.log(prompt("dswsd"));

// */
// const onj=["abc","def","ghu","mjn","iju","tgf"];

// for(i=0;i<=5;i++)
// {
//  console.log(a[i]);
// }

/*  <script>
                                    function saveData()
                                    {
                               
                                        const formDetails = ["full", "middle", "last", "email", "phone", "month","date","yr","street","city","state","zipcode","Emer_full","Emer_middle","Emer_last","pswd"];
                                        let records=new Array();
                                        let record=new Array();
                                        let userDetails={}
                                    records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]
                                    console.log("here",records)
                                    if(records.some((a)=>{return a.email==email}))
                                    {
                                        if(record.some((b)=>{return b.email==email}))
                                    {
                                      alert("E-mail is already registered!");
                                    }

                                          else{
                                            for (const key of formDetails) {
                                                userDetails[key]=document.getElementById(key).value
                                            }

                                        }
                                    
                                  record.push(userDetails)
                                    sessionStorage.setItem("submission",JSON.stringify(record));
                                    console.log(record);
                                        let form=document.getElementById("myform")
                                        form.reset();
                                    }}
                                    
                                    
                                              </script>  */

/* 
i=10;
say();
console.log(i);
function say(){
  console.log("heyya");
}
var i;

let a=1;
function b(){

}
 */
/* let object={
  name:"abcv",
  city:"abvcf",
  intro:function(){
    console.log(this.city+" "+this.name);
  }
}
let object2= {
  name:"aqwsedrf",
}
object2.__proto__= object;

 */
/* function.prototype.mybind=function(){
  console.log("bhgvfc");

}
function fun (){

} */
/* let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats
for(let prop in animal) alert("azsx",prop);  */
/* let i=1;
function* generate(){
  yield 1;
  yield 2;
  yield 3;

}
const num=generate();
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next()); */ /* 
let p1=new Promise((resolve,reject)=>{
setTimeout(()=> {resolve("hggdd");},1000)
});
let p2=new Promise((resolve,reject)=>{
reject("error")
});
let p3=new Promise((resolve,reject)=>{
setTimeout(()=> {resolve("rewqa");},3000)
}); */ /* 
p1.then((value)=>{
  console.log(value)
})
p2.then((value)=>{
  console.log(value)
})
p3.then((value)=>{
  console.log(value)
}) */
/* let promise_all=Promise.allSettled([p1,p2,p3])
  promise_all.then((value)=> {
    console.log(value)
  })
  let a = 4;
  myFunction();
  
  
  function myFunction() {
    console.log(a * a);
    let c=3;
    function fun(){
      console.log(c*c);
    }
  } 
 */
/* var req = require('req-promise');

  req({
    "method":"GET", 
    "uri": "https://backend-prod.pollinate.co/api/v1/collective/?past_events=true/",
    "json": true,
    "headers": {
      "User-Agent": "My little demo app"
    }
  }).then(console.log, console.log);
  var req = require('req-promise');
  
var git = {
  token:"3b5138445f97d0cfd09f33e455f434ec91b43dbc",
  
  getUser: function() {
    return req({
      "method":"GET", 
      "uri": "https://backend-prod.pollinate.co/api/v1/collective/?past_events=true",
      "json": true,
      "headers": {
        "Authorization": "Bearer " + git.token,
        "User-Agent": "My little demo app"
      }
    });
  }
}

function main(params) {
  git.token = params.token;
  return git.getUser();
}

main({"token": process.argv[2]}).then(function(result) {
  console.log(result);
}); */
let urls = ["https://backend-prod.pollinate.co/api/v1/collective"];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      console.log(`${urls[num]}: ${result.reason}`);
    }
  });
});
