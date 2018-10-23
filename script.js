// Lightning exercise:
// 1. Create a basic `index.html` `main.js` project
// 2. Create three `<h3>` tags and add any text you want to each. Use javascript to listen for a click event on the header tags and `console.log` their text.


document.getElementById("first").addEventListener("click", function() {
  console.log("You clicked the first one!")
})
document.getElementById("second").addEventListener("click", function() {
  console.log("You clicked the second one!")
})
document.getElementById("third").addEventListener("click", function() {
  console.log("You clicked the third one!")
})