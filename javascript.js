//console.log("Hello World");


let humanScore=0;
let computerScore=0;
let round=0;
confirm('Start game?');
playGame();

function playGame(){
    for (round=1; round<6; round++){
        game();
    }
    if(round==6 && computerScore>humanScore){
        alert('GAME OVER! \n\n\nComputer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\nYOU LOSE \nBETTER LUCK NEXT TIME  ¯\_(ツ)_/¯');
    }else if(computerScore<humanScore){
        alert('GAME OVER! \n\n\nComputer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\nYOU WIN!! \nCONGRATS! ദ്ദി(｡•̀ ,<)~✩‧₊');
    }else {
        alert('GAME OVER! \n\n\nComputer Score: '+computerScore+'\nYour Score: '+humanScore+"\n\n\nIT'S A TIE! \nNOT BAD AT ALL! (◕‿◕✿)");
    }
}    

function game(){
    function getComputerChoice(){
        computer = Math.floor(Math.random()*3);

        cInput = (computer==0)?'ROCK' : (computer==1)?'PAPER' : 'SCISSORS';
        return {computer, cInput};
    }

    function getHumanChoice(flag){
        //This flag alerts the user if they input other value than the words: ROCK, PAPER or SCISSORS
        if (flag==1){
            alert('PLS input only ROCK, PAPER or SCISSORS!!!')
            flag=0;
        }

        let x = prompt('ROUND '+round+'\n\nRock, Paper or Scissors','');

        //case-sensitive: to unify the variation of inputs
        let y = x.toUpperCase();
        hInput = y;
        //converts the string to numbers for easier comparison
        let z = (y=='ROCK')?0 : (y=='PAPER')?1 :  (y=='SCISSORS')?2 : 3 ;

        //checks that the user input is a valid option, if not, the function is repeated
        human = (z==0)?z : (z==1)?z : (z==2)?z : getHumanChoice(1);
        return {human, hInput};
    }

    const computerChoice = parseInt(getComputerChoice().computer);
    const humanChoice = parseInt(getHumanChoice().human);
    const computerInput = cInput;
    const humanInput = hInput;
    
    console.log('ROUND '+round+'\n\n');
    console.log('Computer: ' +cInput);
    console.log('You: ' +hInput+'\n\n');

    playround(computerChoice, humanChoice, hInput, cInput);

    function playround(computerChoice, humanChoice, humanInput, computerInput){

        if (computerChoice==2 && humanChoice == 0){
            console.log('YOU WIN!!!  ' +humanInput+' beats '+ computerInput+'\n\n');
            humanScore = humanScore+1;
            console.log('Computer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\n');
    
        }else if (computerChoice==0 && humanChoice == 2){
            console.log('YOU LOSE :(  ' +computerInput+' beats '+ humanInput+'\n\n');
            computerScore = computerScore+1;
            console.log('Computer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\n');      
    
        }else if (computerChoice>humanChoice){
            console.log('YOU LOSE :(  ' +computerInput+' beats '+ humanInput+'\n\n');
            computerScore = computerScore+1;
            console.log('Computer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\n');

        }else if (humanChoice>computerChoice){
            console.log('YOU WIN!!!  ' +humanInput+' beats '+ computerInput+'\n\n');
            humanScore = humanScore+1;
            console.log('Computer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\n');

        }else{
            console.log("IT'S A TIE!  " +humanInput+' and '+ computerInput+'\n\n');
            console.log('Computer Score: '+computerScore+'\nYour Score: '+humanScore+'\n\n\n');
        }
        return humanScore, computerScore;
    }
}