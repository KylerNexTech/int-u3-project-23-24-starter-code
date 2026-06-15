// Declare variables below to save the different divs of your story.

let optionOne = document.querySelector(".option-one")
let optionTwo = document.querySelector(".option-two")
let optionThree = document.querySelector(".option-three")
let Image = document.querySelector(".Image")
let computerScore = document.querySelector("#computerScore")
let yourScore = document.querySelector("#youScore")



let computerinteger;
let yourinteger;
let result;
let ending = 0;

let playerScore = 0;
let otherScore = 0;

// 0 = Rock, 1 = Paper, 2 = Scissors
function callPick() {
    let computerinteger = Math.floor(Math.random() * 3);
    
    if (computerinteger == 0) {
        Image.src = "rock.png"
    }
    if (computerinteger == 1) {
        Image.src = "paper.png"
    }
    if (computerinteger == 2) {
        Image.src = "Scissors.png"
    }
    return computerinteger;
}

// 0 < 1 < 2 < 0
// 1 = Win, 2 = Loss, 3 = Draw
function vsPick(computerint, yourint){
    if (computerint==yourint) {
        result = 3;
        console.log("Draw")
        return result;
    }
        

    if (computerint == 0) {
        if (yourint == 1) {
            result = 1;
            playerScore += 1
            scoreUpdate(otherScore, playerScore)
            return result;
        }
        if (yourint == 2) {
            result = 2;
            otherScore +=1 
            scoreUpdate(otherScore, playerScore)
            return result;
        }
    }
    if (computerint == 1) {
        if (yourint == 2) {
            result = 1;
            playerScore += 1
            scoreUpdate(otherScore, playerScore)
            return result;
        }
        if (yourint == 0) {
            result = 2;
            otherScore +=1 
            scoreUpdate(otherScore, playerScore)
            return result;
        }   
    }
    if (computerint == 2) {
        if (yourint == 0) {
            result = 1;
            playerScore += 1
            scoreUpdate(otherScore, playerScore)
            return result;
        }
        if (yourint == 1) {
            result = 2;
            otherScore +=1 
            scoreUpdate(otherScore, playerScore)
            return result;
        }   
    }

}


function scoreUpdate(otherScore, playerScore) {
    if (otherScore == 1) {
        computerScore.innerHTML = "Computer: 1";
    }
    if (otherScore == 2) {
        computerScore.innerHTML = "Computer: 2";
    }
    if (otherScore == 3) {
        ending = 1
        computerScore.innerHTML = "Computer Wins"
    }
    if (playerScore == 1) {
        yourScore.innerHTML = "You: 1";
    }
    if (playerScore == 2) {
        yourScore.innerHTML = "You: 2";
    }
    if (playerScore == 3) {
        yourScore.innerHTML = "You Win";
        ending = 1
    }
}
// console.log(vsPick(callPick(), yourinteger))




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOne.addEventListener('click', function rock(){
    if (ending == 0) {
        yourinteger = 0
        vsPick(callPick(), yourinteger)
    }
});

optionTwo.addEventListener('click', function paper(){
    if(ending == 0) {
        yourinteger = 1
        vsPick(callPick(), yourinteger)
    }
});


optionThree.addEventListener('click', function scissors(){
    if (ending == 0) {   
        yourinteger = 2
        vsPick(callPick(), yourinteger)
    }    
});