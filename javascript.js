let humanScore=0;
let computerScore=0;
let round=1;

const choiceText=document.querySelector('.round');

const roundEnd=document.querySelector('.roundEnd');
const results=document.querySelector('.results');

const div=document.createElement('div');            //round message win or lose
const divVS=document.createElement('div');          //shows choices
divVS.classList.add('vs');

const divScore=document.createElement('div');
divScore.classList.add('divScore');
const score=document.createElement('div');
score.classList.add('score');
const divScoreHuman=document.createElement('div');
divScoreHuman.classList.add('divScoreHuman');
const scoreH=document.createElement('p'); 
const scoreH2=document.createElement('p'); 
const divScoreComputer=document.createElement('div');
divScoreComputer.classList.add('divScoreComputer');
const scoreC=document.createElement('p'); 
const scoreC2=document.createElement('p'); 

const divEnd=document.createElement('div');
divEnd.classList.add('divEnd');
const end=document.createElement('p');
const end2=document.createElement('p');
const endScore=document.createElement('p');
end.classList.add('end');
end2.classList.add('end2');
endScore.classList.add('endScore');

const restart=document.createElement('button');
restart.textContent='Play Again';

playGame();

function playGame(){
    const input=document.querySelector('.options');
    input.addEventListener('click',(event)=>{
        if(round>5){
            if(computerScore>humanScore){
                end.textContent='YOU LOSE:(';
                end2.textContent='BETTER LUCK NEXT TIME  ¯\_(ツ)_/¯';

            }else if(computerScore<humanScore){
                end.textContent='YOU WIN!!';
                end2.textContent='CONGRATS! ദ്ദി(｡•̀ ,<)~✩‧₊';

            }else {
                end.textContent="IT'S A TIE!";
                end2.textContent='NOT BAD AT ALL! (◕‿◕✿)';
               
            }
            endScore.textContent='You:  '+humanScore+ '  |  '+'CPU:  '+computerScore;

            restart.onclick=()=>window.location.reload();

            divEnd.appendChild(endScore);
            divEnd.appendChild(end);
            divEnd.appendChild(end2);
            divEnd.appendChild(restart);

            results.appendChild(divEnd);



            
            return;
         }
        let human;        
        let target = event.target;

        switch(target.id){
            case 'rock':
                human=0;
            break;
            case 'paper':
                human=1;
            break;
            case 'scissors':
                human=2;
            break;
        }
        playRound(human);
        round++;

        });
}
    
function playRound(human){

    const computerChoice = parseInt(Math.floor(Math.random()*3));
    const humanChoice = parseInt(human);
    const computerInput = (computerChoice==0)?'Rock' : (computerChoice==1)?'Paper' : 'Scissors';
    const humanInput = (humanChoice==0)?'Rock' : (humanChoice==1)?'Paper' : 'Scissors';
    
    divVS.textContent=humanInput+ '  VS  '+computerInput;
    results.appendChild(divVS);
    choiceText.textContent='Round '+round;
    choiceText.style='font-weight:bold;';
    
    if (computerChoice==2 && humanChoice == 0){
        div.textContent= 'YOU WIN!!!';
        humanScore = humanScore+1;

    }else if (computerChoice==0 && humanChoice == 2){
        div.textContent= 'YOU LOSE :(';
        computerScore = computerScore+1;      

    }else if (computerChoice>humanChoice){
        div.textContent= 'YOU LOSE :(';
        computerScore = computerScore+1;

    }else if (humanChoice>computerChoice){
        div.textContent= 'YOU WIN!!!';
        humanScore = humanScore+1;

    }else{
        div.textContent= "IT'S A TIE!";
    }
    results.appendChild(div);

    score.textContent='SCORE';
    scoreH.textContent='YOU';
    scoreH2.textContent=humanScore;
    scoreC.textContent='CPU';
    scoreC2.textContent=computerScore;
        
    divScoreHuman.appendChild(scoreH);
    divScoreHuman.appendChild(scoreH2);
    divScoreComputer.appendChild(scoreC);
    divScoreComputer.appendChild(scoreC2);

    divScore.appendChild(score);
    divScore.appendChild(divScoreHuman);
    divScore.appendChild(divScoreComputer);

    roundEnd.appendChild(divScore);


return humanScore, computerScore;
}
