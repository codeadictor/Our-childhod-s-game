let userScore=0;
let compScore=0;


const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const numberOfGame = document.querySelector("#numberofgame");

const genCompChoice = ()=>{
    // rock , paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
} 

// Drow condition 
const drawGame = () =>{
   //console.log("game was draw");
   msg.innerText = "Game Was Draw ! Play Again";
   msg.style.backgroundColor = "#004E64";
   occurenceOfGame++;
    numberOfGame.innerText = occurenceOfGame;
   

}

// show result 
 const showWinner = (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    
    // update score
    userScorePara.innerText = userScore;
    // console.log("You Win !");
    msg.innerText = `You Win ! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";

  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You Lose ");
     msg.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
     msg.style.backgroundColor = "red";


  }
 }

// user choice
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice); 
    // generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice : ", compChoice);
    // ab fight done me ho rhi hai to jeetne wala kaun hai isko nikalenge if ele condition check krakar 
    if(compChoice === userChoice){
        // Draw Game
        drawGame();   
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            // comp may select any one from these two scissors and paper
           userWin =  compChoice ==="scissors"? true: false;
        }
        else if(userChoice === "scissors"){
              // paper rock
              userWin = compChoice === "paper"? true:false;
        }
        else//(userChoice === "paper")
        {
            // rock and scissors
            userWin = compChoice ==="rock"? true: false;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
   
    playGame(userChoice);

     })
})


