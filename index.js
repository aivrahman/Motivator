const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const words = ['WHO\'S GONNA CARRY THE BOATS? ', 'YESTERDAY, YOU SAID TOMORROW! ', 'STOP WHEN YOU\'RE DONE! ', 'Stay HARD! ', 'Start NOW! ', 'TAKE IT! ', 'Follow your dreams '];
const btn = document.getElementById("btn");
const motivate = document.querySelector(".words"); 

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


function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

function getRandomWords(){
    return Math.floor(Math.random() * words.length); 
}

