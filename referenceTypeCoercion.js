// const number = "10f";

// console.log(number == "10f");

// const a = void 0;

// console.log(a);

// console.log(true == parseInt("1f2"));

// const arr = [5, 4, 5, 6];

// arr.toString = () => {
//   return "xo xo xo";
// };

// arr.valueOf = () => {
//   return arr.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// };

// arr.valueOf = () => {
//   return Number(arr.join(""));
// };

// [[toPrimitive]]
// toString() -> '1,2,3'
// valueOf() -> 0, 1, NaN

// console.log(arr / 5); // +'5,4'

// const obj = {
//   nme: "Hovhannes",
// };

// obj.toString = () => {
//   return "[object Object]";
// };

// Object.defineProperty(obj, "toString", {
//   value: () => {
//     return Object.keys(obj).length;
//   },
// });

// const arr = [, , , 4];

// const arr = [];

// arr[3] = 4;

// const newArr = arr.map((item) => item * 2);

// console.log(newArr);

// console.log(Number(obj));
// console.log(String(obj));
