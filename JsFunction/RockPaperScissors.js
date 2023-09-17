const ROCK='ROCK';
const PAPER='PAPER';
const SCISSORS='SCISSORS';

const game=function ()
{
    return prompt(`${ROCK},${PAPER},${SCISSORS}`,'').toUpperCase();
}

const choice=game();
console.log(typeof choice);
if(choice!== 'ROCK' && choice!== 'PAPER' && choice!== 'SCISSORS')
{ console.log('INVALID');
}else
console.log(choice);