// Create a variable and set its value to the answer of a math equation. It should be a number Value
let a = 5 + 7;
// Create a variable and set its value to 5 strings being concatenated together using the ‘+’ operator. Each string should be at least 10 characters long. Try and make a real paragraph that a human will be able to read and understand.
let myString = "This is " + "a example" + "how to use" + "string" + "concatenated" + "with 5 test string";
// Create a variable and use the ES6 string interpolation (back ticks) to set the value of a variable to a string that includes 5 variables whose values are numbers. Use ${} to use these number variables in the string variable.

let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;

let backStickVar = `The values of this string are Num1: ${num1}  Num2: ${num2}  Num3: ${num3} Num4: ${num4} Num5: ${num5}`;

// Create an array that has 4 numbers, 2 strings, 3 comparisons, another array with 3 elements inside.

let myArray = [1, 2, 3, 4, 'str1', 'str2', 3 == 3, 4 > 2, 1 < 2, ['elem1', 'elem2', 'elem3']];
console.log(myArray);

// Create an object that has 4 properties: A number, a string, an array, and an object
let obj = {
  id: 1,
  name: 'Denis',
  address: {
    number: '10790 SW',
    street: '7st',
    city: 'Miami Dade',
    state: 'FL',
    zipcode: '33174'
  },
  cells: ['786-362-4278', '305-227-2020'],
}

console.log(obj);





let pic = 'http://farm3.static.flickr.com/2652/3926609307_9856c327fc.jpg';


const mh2 = document.querySelector('h2');
const mp = document.querySelector('.parraph');
const div = document.querySelector('#idDiv');
const name = document.querySelector('#name');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  putPicture(pic);
  loopIt(name.value);
}, false);

function putPicture(pic) {
  let newpict = document.createElement('img');
  newpict.src = `${pic}`;
  div.appendChild(newpict);
}

function doStuff(name) {
  putPicture(pic);
}

function loopIt(name) {
  console.log('Aqui en el loopI', name);
  for (let i = 0; i < name.length; i++) {
    console.log('Aqui');
    doStuff();
  }
}







// Create 5 variables in a js file that is linked to your html file