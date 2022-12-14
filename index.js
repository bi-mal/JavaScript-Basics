//Solving codewars challenges

// Problem 1 : Given two arrays of strings a1 and a2 return a sorted array r in 
//             lexicographical order of the strings of a1 which are substrings 
//             of strings of a2.

let array1=["xyz", "live", "strong"];
let array2=["live", "strong"];

let array3=array1.filter(word=>{
    index=array2.findIndex(x=>x.includes(word));
    if(index==-1)
      return false;
    else
      return true;
  })

console.log("array1"+array1);
console.log(array3);

//Problem 2:Write a function that takes a string of parentheses, and determines 
        // if the order of the parentheses is valid. The function should return true 
        // if the string is valid, and false if it's invalid.

        function validParentheses(parens) {
          // your code here ..
          let arr=[];
          for(let i=0;i<parens.length;i++){
            if(parens.charAt(i)=='(')
              arr.push(1);
            else{
              if(arr.length==0)
                return false;
              else
                arr.pop();
            }
          }
          if(arr.length==0)
            return true;
          else
            return false;
        }

//Problem 3: Write a function that accepts an array of 10 integers (between 0 and 9),
          //that returns a string of those numbers in the form of a phone number.

          function createPhoneNumber(numbers){
            numbers.unshift('('); 
            numbers.splice(4,0,')');
            numbers.splice(5,0," ");
            numbers.splice(9,0,'-');
            
            return numbers.join("");
          }

//Problem 4: List filtering

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((element)=> typeof element=='number')
}

//Problem 5: Our football team has finished the championship.
  //Our team's match results are recorded in a collection of strings.
  //Each match is represented by a string in the format "x:y", 
  //where x is our team's score and y is our opponents score.

  function points(games) {
    let points=0;
    for(let i=0;i<games.length;i++){
      if(games[i].charAt(0)>games[i].charAt(2))
        points=points+3;
      else if(games[i].charAt(0)==games[i].charAt(2))
        points=points+1;
    }
    return points;
  }

  //Problem 6: Rock, paper, scissors
  //Let's play! You have to return which player won! In case of a draw return Draw!.

  let rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    let rules = {
      rock: "scissors", 
      paper: "rock", 
      scissors: "paper"
    };
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

  //Problem 7: Write a function, persistence, that takes in a positive parameter num
    //and returns its multiplicative persistence, which is the number of times 
    //you must multiply the digits in num until you reach a single digit.

    function persistence(num) {
      //code me
      let digits=num.toString().split('').map(Number);
      let result=0;
      let recursion=0;
      while(digits.length>1){
          result=digits.reduce((prev,current)=>prev*current);
          digits=result.toString().split('').map(Number);
          recursion++;
      }
      console.log(recursion);
   }
  
   persistence(999);

   //stopWatch Problem

   function StopWatch(){
    let duration=0;
    let initial=0;
    let isStarted=false;
    let isResetted=true;

    this.start= function(){
        if(isStarted){
            throw new Error('it is already started');
        }
        initial=Date.now();
        isStarted=true;
        isResetted=false;
    }
    this.stop= function(){
        if(!isStarted){
            throw new Error('it is already stopped');
        }
        duration=duration+(Date.now()-initial)/1000;
        isStarted=false;
        isResetted=false;
    }
    this.reset=function(){
        duration=0;
        isResetted=true;
    }
    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    })
}