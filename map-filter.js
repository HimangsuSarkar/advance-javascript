const number = [3, 4, 5, 6, 8, 9];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const elements = number[i];
//     const result = elements * elements;
//     output.push(result);
// }

// const output = number.map(function (elements) {
//     //console.log(elements, index, array);
//     return elements * elements;
// })
//const bigger = number.filter(x => x > 5);
const bigger = number.find(x => x > 5);
console.log(bigger);
