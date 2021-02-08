/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
//used variables
let body = document.querySelector("body");
let nickName = document.getElementById("nickname");
let favFood = document.getElementById("fav-food");
let homeTown = document.getElementById("hometown");
let lis = document.querySelectorAll("li");

//style the body to have font family of Arial sans-serif
body.style.fontFamily = "Arial, sans-serif";


//replacing the spans
nickName.textContent = "Aliaba";
favFood.textContent = "Any Food";
homeTown.textContent = "Osun";
//looping through the li and set it className to list-item
for (let i = 0; i < lis.length; i++) {
    lis[i].className = "list-item";
}
//set the img
let img = document.createElement("img");
img.src = "https://cutt.ly/xkrOVUK";
img.style.width = "200px";
body.appendChild(img);