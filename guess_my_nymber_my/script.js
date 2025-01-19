
// so i am using let and const randmly have to learn more.
// and i think i shold avoid querySelector instid i should use getById
let inpGuess = document.querySelector("#input-guess-id");
let lblStatus = document.querySelector("#instructions");
const pageBackGround = document.querySelector("body");
let number = parseInt(Math.random() * 19 + 1);
// how can we conferm if this number is only between 1-20;
// can we store this for further use even after reload or re-run or compile or interprate
let currentScore = 10; // doubt if i hould only diclare as an integer 
const maxScore = currentScore;
let scoreStatus = document.querySelector(".current-score");

let correctGuessDisplay = document.getElementById("result");
let checkBtn = document.querySelector(".btn-guess");
const btnReset = document.getElementById("again");
//color
const originalColor = "darkslategray";



function scoreDecrementAndUpdate() {
    if (currentScore > 0) {
        --currentScore;
        scoreStatus.innerHTML = `${currentScore}/${maxScore}`;
        btnReset.innerHTML = "Reset!"
    }
    else if (currentScore == 0) {

    }
    else { }
}

inpGuess.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        checkClick();
        inpGuess.value = "";
    }

});


function checkClick() {
    if (currentScore == 0) {
        correctGuessDisplay.innerHTML = `Game Over`;
        pageBackGround.style.backgroundColor = "red";

        inpGuess.setAttribute("disabled", "");
        return;
    }
    else {
        console.log(inpGuess.value == "");
        if (inpGuess.value == "") {

            return;
        }

        else if (inpGuess.value < 1 || inpGuess.value > 20) {
            // lblStatus.innerHTML("Error Please Enter valid number!");
            // why cant we use like above
            // give me naming convension for this way wrinting 
            lblStatus.innerHTML = "Error Please Enter valid number!";

            let titleRange = document.querySelector(".range");
            // titleRange.style.
            // how to make GLOW an range of number in top when wring number is enterd

            // checkBtn.addEventListener("click", function ()

            titleRange.classList.add("invalidInput")
            setTimeout(() => { titleRange.classList.remove("invalidInput") }, 250)

            scoreDecrementAndUpdate();

        }
        else if (inpGuess.value > number) {
            lblStatus.innerHTML = `Your guess ${inpGuess.value} is too high`;
            scoreDecrementAndUpdate();


        }
        else if (inpGuess.value < number) {
            lblStatus.innerHTML = `Your guess ${inpGuess.value} is too low`;
            scoreDecrementAndUpdate();


        }
        else if (inpGuess.value == number) {
            lblStatus.innerHTML = `Correct!`;
            pageBackGround.style.backgroundColor = "limegreen";
            // later i am thinking ot add confety for celebration ans some sound effect
            correctGuessDisplay.innerHTML = `${inpGuess.value}`;
            inpGuess.setAttribute("disabled", "");
            btnReset.innerHTML = "Play Again!"
            return;
        }
    }
    inpGuess.value = "";
    console.log(number);

}

function againReset() {
    console.log(number);

    // location.reload();
    correctGuessDisplay.innerHTML = "?";
    inpGuess.removeAttribute("disabled");
    inpGuess.value = "";
    inpGuess.setAttribute("autofocus", "true");
    // here requierd and autofoucus is not working after reset

    currentScore = maxScore; // is there way to give the inetial most value instid of using another variable;
    scoreStatus.innerHTML = `${currentScore}/${maxScore}`;// check for this line positioning 
    lblStatus.innerHTML = "Start Guessing";
    pageBackGround.style.backgroundColor = originalColor;
    // is there is an way to return to an intial propery in JS 
    // after some modifications (in this case background color) without using dublicate 
    btnReset.innerHTML = "Reset!"
    number = parseInt(Math.random() * 19 + 1);//instid of defining number again cant we call from same place

}
scoreStatus.innerHTML = `${currentScore}/${maxScore}`;// check for this line positioning 
