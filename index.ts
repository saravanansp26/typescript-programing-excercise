// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let arr = [1, 5, 10, 2, 5, 3, 7, 6, 9, 4, 8];
console.log('arr[i]');

printArray();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  let j = i;
  let temp = arr[i];

  while (j > 0 && arr[j - 1] > temp) {
    arr[j] = arr[j - 1];
    j--;
  }
  arr[j] = temp;
}

console.log('afterSorting');
printArray();

function printArray() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
