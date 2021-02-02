const students = [
    { id: 11, name: 'sharuk khan' },
    { id: 21, name: 'salman khan' },
    { id: 31, name: 'amir khan' },
    { id: 41, name: 'shakil khan' }
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 20);
const bigger2 = students.find(s => s.id > 20);
console.log(names);
console.log(bigger);
console.log(bigger2);
