


let count = 1;
while (count <= 20) {
  console.log(count);
  count += 2;
}


function slice() {
    console.log('large slices');
    console.log('small slices');
    console.log('cut in dices');
}

for (let i = 0; i < 15; i++) {
    slice();
}

function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls){
    for(let i = 0; i < numRolls; i++){
        rollDie();
    }
}


function greet(nickname){
    console.log(`Hi, ${nickname}!`);
}



function isValidPassword(password, username) {
    if (password.lenght < 8) {
        return false;
    }
    if (password.indexof(' ') !== -1) {
        return false;
    }
    if (password.indexof(username) !== -1) {
        return false;
    }
    return true;
}

function avg(arr) {
    let total = 0;
    for (let num of arr) {s
        total += num;
    }
    let res = total / arr.lenght;
    return res
}


function getCard(){
   const values =  ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
   
   const valIdx = Math.floor(Math.random() * values.length);
   const value = values [valIdx];

   const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
   const suitIdx = Math.floor(Math.random() * suits.length);
   const suit = suits[suitIdx];
   console.log(value, suit);
}

function diff(b,c){
    return (b-c)
}

function prod(d,e){
    return (d*e)
}

function printDay(num){
    let dates = 
    {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
    };
    return dates[num];
}

function element(arr){
    return arr[arr.length-1];
}

function compare(f,g){
    if (f===g){
        return 'Numbers are equal';
    } else if(f > g){
        return 'First is greater'
    } 
    return 'Second is greater'
}

function letterCount(str1, letter){
    let finalCount = 0;
    for(let i = 0; i < str1.length; i++){
        if(str1[i].toLowerCase() === letter.toLowerCase()){
            finalCount++;
        }
    }
    return finalCount;
}

function lettering(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i = 0; i < str.length; i++){
        if (finalObj[str[i]] === undefined){
            finalObj[str[i]] = 1;
        } else {
            finalObj[str[i]]++;
        }
    }
    return finalObj;
}



function manipulate(arr, command, position,val){
if(command === 'remove'){
    if(position === 'end'){
      return arr.pop();
    }
      return arr.shift();
  }
  else if(command === 'add'){
    if(position === 'end'){
      arr.push(val)
      return arr;
    }
    arr.unshift(val)
    return arr;
  }
}

function palindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}


function RPS(){

    function determineComputer(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissor";
    }
  
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
  
  
    let answers = ["rock", "paper", "scissor"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === computerChoice) return "Tie!";
  
    if(userChoice === "rock" && computerChoice === "paper") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "paper" && computerChoice === "scissor") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "scissor" && computerChoice === "rock") {
      return "You lose, computer picked " +  computerChoice;
    }
  
    return "You win! Computer picked" +  computerChoice;
  }


console.log('Hello world!');

function greet (name){
    console.log ('Hello,' + name);
}
greet('Robert');


//While loop
let number = 0;
while (number <= 100){
    console.log(number);
    number = number + 5;
}

//For loops
for(let p = 0; p <= 15 ; p++){
    console.log(p);
}
//For loop increase by count of 3's
for(let m = 0; m < 9 ; m+= 3){
    console.log(m);
}
//
for(let q = 30; q > -10 ; q -= 2.5){
    console.log(q);
}

for(let zoo = 0; zoo < 545648 ; zoo+= 45544){
    console.log(zoo);
}



//First class functions
// function pie(){
//     console.log('Sweet Pies!')
// }function repeat(func){
// func();
//    func();
// func();
// func();
// func();}

// function repeatNum(num,func){
//     for (let i = 0;i < num; i++){
//         func();
//     }
// }
//  function diss(){
//     console.log("hey chump");
//  }

// // Timers
// greet();
// setTimeout(diss, 3000);

//setInterval(diss,2000)

// function counter(){
//     console.log('countDown 4')
// }function repeat(counter) {
//     counter('3');
//     counter('2');
//     counter('1');
//     counter("Done!");
// }
// // function repeatNum(num,counter){
// //          for (let i = 0;i < num; i++){
// //              counter();
// //          }
// // }
// counter();
// setInterval(1000);



// function countDown(){
//     console.log("4");
//     console.log("3");
//     console.log("2");
//     console.log("1");
//     console.log("Done!");
//  }

// setTimeout(countDown, 1000);

// function countDown() {
//     console.log("Done!");
//   }
//   console.log("4");
//   setTimeout(4000);
//   console.log("3");
//   setTimeout(1000);
//   console.log("2");
//   setTimeout(countDown, 1000);
//   console.log("1");


function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }


  function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log('It took' + times + 'try/tries.');
      }
    },1000)
  }











