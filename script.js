'use strict';

let score=20;
let highscore=0;
let secretNumber = Math.round(Math.random()*19)+1;

document.querySelector('.check').addEventListener('click', function(){
   const val= Number(document.querySelector('.guess').value);
   if(!val){
       document.querySelector('.message').textContent="Hey put any number, i'm not dumb!๐คจ";
   }
   else if(val<secretNumber){
        if(val<secretNumber && val<1){
            document.querySelector('.message').textContent='Stop putting fuzzy number, 0 is the range';
            
        }else{
        document.querySelector('.message').textContent='Number is too low ๐ซโ';
        }
        score--;
        document.querySelector('.score').textContent=score;
   }
   else if(val>secretNumber){
       if(score>1){
        if(val>secretNumber && val>20){
            document.querySelector('.message').textContent="Don't cross your limits, 20 is the range ๐น";
        }else{
        document.querySelector('.message').textContent='Number is too high ๐';
        }
        score--;
        document.querySelector('.score').textContent=score;}
        else{
            document.querySelector('.message').textContent='You lost the game ๐ฅ';
            document.querySelector('.score').textContent=0;
        }
   
    }
   else if(val===secretNumber){
     confetti.start();
    document.querySelector('.message').textContent='๐ Correct Number ๐';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='rgb(6, 146, 25)';
    document.querySelector('.number').style.width='20rem';
    document.querySelector('.number').style.color='#FC5185';
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

   }
});

document.querySelector('.play-again').addEventListener('click', 
function(){
    confetti.stop();
    score=20;
    secretNumber = Math.round(Math.random()*19)+1;
    document.querySelector('.message').textContent='Start Guessing...';
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='rgb(25, 26, 25)';
    document.querySelector('.number').style.width='15rem';
}
);
