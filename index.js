//The array of different values that will be included in Hex color code
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Words of motivation for the user
const words = ['WHO\'S GONNA CARRY THE BOATS? ', 'YESTERDAY, YOU SAID TOMORROW! ', 'STOP WHEN YOU\'RE DONE! ', 'Stay HARD! ', 'Start NOW! ', 'TAKE IT! ', 'Follow your dreams '];
const btn = document.getElementById("btn");
const motivate = document.querySelector(".words"); 

//Functionality of clicking the button where random values are generated for phrases and hex code (5 values)
btn.addEventListener("click", function () {
    let hexColor = "#";
    let motivateMe = "";
    for (let i = 0; i < 6; i++) {
        hexColor += hex [getRandomNumber()];
        motivateMe = words [getRandomWords()];
    }
    
    document.body.style.backgroundColor = hexColor;
    motivate.textContent = motivateMe
});

//Generate random number
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
//Generate random phrases
function getRandomWords(){
    return Math.floor(Math.random() * words.length); 
}

