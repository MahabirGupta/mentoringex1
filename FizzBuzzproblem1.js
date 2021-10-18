var x;
var y;
var z;

function output() {
  const prompt = require('prompt-sync')();
  const num = prompt('Enter a number: ');
    for(i=1; i<=num; i++){
     x=i%3;
     y=i%5;
     z=i%15;
     if(x== 0 && z!=0){
       console.log("Fizz")
     }else if(y==0 && z!=0){
      console.log("Buzz")
    }else if(z==0){
      console.log("FizzBuzz");
    }else{
      console.log(i);
    }
}
}
module.exports = output;
  output();