//console.log("Hello World");


let humanScore=0;
let computerScore=0;

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

    let x = prompt('Rock, Paper or Scissors','');

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

console.log('Computer: ' +computerChoice);
console.log('Human: ' +humanChoice);


playround(computerChoice, humanChoice, hInput, cInput);

function playround(computerChoice, humanChoice, humanInput, computerInput){

    if (computerChoice==2 && humanChoice == 0){
        console.log('YOU WIN!!!  ' +humanInput+' beats '+ computerInput);
        humanScore = humanScore+1;
        console.log('Computer Score: '+computerScore);
        console.log('Human Score: '+humanScore);
 
    }else if (computerChoice==0 && humanChoice == 2){
        console.log('YOU LOSE :(  ' +computerInput+' beats '+ humanInput);
        computerScore = computerScore+1;
        console.log('Computer Score: '+computerScore);
        console.log('Human Score: '+humanScore);        
 
    }else if (computerChoice>humanChoice){
        console.log('YOU LOSE :(  ' +computerInput+' beats '+ humanInput);
        computerScore = computerScore+1;
        console.log('Computer Score: '+computerScore);
        console.log('Human Score: '+humanScore);

    }else if (humanChoice>computerChoice){
        console.log('YOU WIN!!!  ' +humanInput+' beats '+ computerInput);
        humanScore = humanScore+1;
        console.log('Computer Score: '+computerScore);
        console.log('Human Score: '+humanScore);

    }else{
        console.log("IT'S A TIE!  " +humanInput+' and '+ computerInput);
    }
    return humanScore, computerScore;
}



