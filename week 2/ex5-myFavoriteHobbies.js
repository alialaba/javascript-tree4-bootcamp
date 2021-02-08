/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */


let body = document.querySelector("body");
const createHTMLList = (arr) => {
  // your code goes in here
  arr.map((item) => {
    let ulElem = document.createElement("ul");
    let liElem = document.createElement("li");
    body.appendChild(ulElem);
    ulElem.appendChild(liElem);
    liElem.textContent = item;
    liElem.style.listStyle = "none"
  })

}
const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
createHTMLList(myHobbies)
