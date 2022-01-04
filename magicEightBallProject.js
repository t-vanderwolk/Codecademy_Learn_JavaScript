let userName = 'D'
userName ? console.log ('Hello, `${userName}`')
: console.log('Hello!')

let userQuestion = 'Will i bust my ass on my electric skate board?'
let randomNumber = Math.floor(Math.random()*8); 
let eightBall= '';

switch(randomNumber)
  { case 0:
  eightBall = 'it is going DOWN!'
 break;
case 1:
eightBall = 'the jury is still out'
break;
case 2 : 
eightBall = 'YOU KNOW THE ANWSER' 
break;
case 3 :
eightBall = 'Cannot predict now'
break;
case 4 : 
eightBall = 'Do not count on it'
break;
case 5 :
eightBall = 'My sources says no'
break;
case 6 : 
eightBall = 'Youre screwed!'
break
case 7 :
eightBall = 'Signs point to yes'
}
console.log(eightBall)
