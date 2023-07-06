    
    
    function getComputerChoice(){
    const selection =["rock", "paper", "scissors"];
    const randomChoice = selection[Math.floor(Math.random() * 3)];//computer choice randomly
        return randomChoice;
    }


   function playRound(playerSelection, computerSelection){

        if (playerSelection ==="rock" && computerSelection === "paper"){
            return "You lose! Paper beats Rock";
                }
    
                else if(playerSelection ==="paper" && computerSelection==="rock"){
                    return "You win! Paper beats Rock";
                }
    
                else if(playerSelection==="scissors" && computerSelection=== "rock"){
                    return "You lose! Rock beats Scissors";
                }
    
                else if (playerSelection==="paper" && computerSelection==="scissors"){
                return "You lose! Scissors beats Paper";
                }
    
                else if (playerSelection==="scissors" && computerSelection==="paper"){
                    return "You win! Scissors beats Paper";
                    }
    
                    else if (playerSelection==="rock" && computerSelection==="scissors"){
                        return "You win! Rock beats Scissors";
                    }
    
                    else if (playerSelection === computerSelection){
                        return "Draw";
                        }
                    }
                        function game(){

                            const playerSelection = prompt("enter Rock, Paper or Scissors").toLowerCase();
                            const computerSelection = getComputerChoice();
                            console.log(playRound(playerSelection, computerSelection));
        
                            }
                            game();
                            game();
                            game();
                            game();
                            game();        
                    
                   