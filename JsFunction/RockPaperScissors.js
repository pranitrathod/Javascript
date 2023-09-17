const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';

const game=function () {return prompt(`${ROCK},${PAPER},${SCISSORS}`,'').toUpperCase();}


const getComputerChoice= ()=>//used arrow function here for our understanding purpose!
{
const randomValue=Math.random();
if(randomValue<0.34) return ROCK;
else if(randomValue<0.67) return PAPER;
else return SCISSORS;
}

const whoWins=function()
{
if(comp===Yourchoice)return 'DRAW!!!';
else if(comp===PAPER && Yourchoice===ROCK || comp === ROCK && Yourchoice===SCISSORS || comp===SCISSORS && Yourchoice===PAPER)return 'COMPUTER WON!!!';
else return 'YOU WON!!!';
}

const Yourchoice=game();
const comp=getComputerChoice();
if(Yourchoice!== 'ROCK' && Yourchoice!== 'PAPER' && Yourchoice!== 'SCISSORS')
{ alert(`${Yourchoice} is invalid choice!`);
}else
console.log(`Computer Choose ${comp} & You choose ${Yourchoice} , ${whoWins()}`);