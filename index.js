// let arguments = [1, 2,  3, 4, 5, 6];
// for (let i = 0; i < arguments.length; i++) {
//   setTimeout(function () {
//     console.log(arguments[i]);
//   }, 0);
// }

// setTimeout(function () {
//   console.log("1stdone");
// }, 0);
// console.log("2nddone");
// setTimeout(function () {
//   console.log("3rddone");
// }, 0);

let data = new Map();
let data2 = new Set();

data2.add(2);
data2.add(2);
data2.add(6);
console.log(data2);
data2= [...data2];
console.log(data2);
data.set("foo", "bar");
data.set("foo2", "bar");
data.set("foo3", "bar");
console.log(data);
console.log(data.has("foo"));
console.log(data.get("foo"));
data.delete("foo");
console.log(data.get("foo"));
console.log(data);


data.forEach(function(val,key) {
console.log(key);
});

for(let i of data){
  console.log(i);

}