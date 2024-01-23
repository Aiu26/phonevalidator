let playGame = confirm("Do you want to play the game?");
if(playGame){
    while(playGame){
        const playerChoice = prompt("Please enter rock, paper or scissors?")
        if(playerChoice|| playerChoice ===""){
            const playerOne = playerChoice.trim().toLowerCase();
            
                if( playerOne === "rock"|| playerOne === "paper"|| playerOne=== "scissors"){
                    const computerChoice = Math.floor(Math.random()*3 + 1);
                    const playArray =["rock", "paper", "scissors"];
                    const computer= playArray[computerChoice];
                    
                    const result=
                    playerOne === computer? "Tie game!"
                    :playerOne === "rock" && computer === "paper"?`Computer Wins!!`
                    :playerOne === "paper" && computer === "scissors"?`Computer Wins!!`
                    :playerOne === "scissors" && computer === "rock"?`Computer Wins!!`
                    :`playerOne wins!`;
                    alert(result);
                    playGame= confirm("Play Again?");
                    if(!playGame)alert("Ok, thanks for playing!!");
                    continue;
            }else{
                alert("wrong value entered");
                    continue;
                }
        }else{
            alert("You changed your mind.");
            break;
            }
        }
    }else{
    alert("OK, next time maybe!!");
        }