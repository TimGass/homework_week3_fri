var runonce = 0;

function dotheThing(thing){
  var numberArray = [];
  var operatorArray = [];
  var lastTerm = 0;
  var answer = 0;
  var operated = [];
  for(x = 0; x < thing.length; x++){
    if((thing.charAt(x) === "/") || (thing.charAt(x) === "*") || (thing.charAt(x) === "-") || (thing.charAt(x) === "+")){
      numberArray.push(thing.slice(lastTerm, (x)));
      operatorArray.push(thing.slice(x, x+1));
      lastTerm = x+1;
    }
  }

  numberArray.push(thing.slice(lastTerm));

  for (var i = 0; i < operatorArray.length; i++) {
      if(answer != 0){
        if(operatorArray[i] === "*"){
          answer = answer*Number(numberArray[i+1]);
        }
        else if(operatorArray[i] === "/"){
          answer = answer/Number(numberArray[i+1]);
        }
      }

      else if(answer == 0){
        if(operatorArray[i] === "*"){
          answer += Number(numberArray[i])*Number(numberArray[i+1]);
        }
        else if(operatorArray[i] === "/"){
          answer += Number(numberArray[i])/Number(numberArray[i+1]);
        }
    }
  }

  for (var i = 0; i < operatorArray.length; i++) {
    if(answer != 0){
      if(operatorArray[i] === "+"){
        answer = answer+Number(numberArray[i+1]);
      }
      else if(operatorArray[i] === "-"){
        answer = answer-Number(numberArray[i+1]);
      }
    }
    else if (answer == 0) {
      if(operatorArray[i] === "+"){
        answer += Number(numberArray[i]) + Number(numberArray[i+1]);
      }
      else if(operatorArray[i] === "-"){
        answer += Number(numberArray[i]) - Number(numberArray[i+1]);
      }
    }
  }

  if(operatorArray.length === 0){
    answer = thing;
  }

  return answer;
};

document.addEventListener("DOMContentLoaded", function(){
  function clickHandler(event){
    event.addEventListener("click", function(){
      document.getElementById('view').value += event.value;
    }, false);
  };

  clickHandler(document.getElementById("seven"));
  clickHandler(document.getElementById("eight"));
  clickHandler(document.getElementById("nine"));
  clickHandler(document.getElementById("divide"));
  clickHandler(document.getElementById("four"));
  clickHandler(document.getElementById("five"));
  clickHandler(document.getElementById("six"));
  clickHandler(document.getElementById("one"));
  clickHandler(document.getElementById("two"));
  clickHandler(document.getElementById("three"));
  clickHandler(document.getElementById("subtract"));
  clickHandler(document.getElementById("zero"));
  clickHandler(document.getElementById("decimal"));
  clickHandler(document.getElementById("add"));

    document.getElementById("multiply").addEventListener("click", function(){
    document.getElementById('view').value += "*";
  });

  document.getElementById('clear').addEventListener("click", function(){
  document.getElementById('view').value = "";
  });

  document.getElementById("equal").addEventListener("click", function(){
    console.log(document.getElementById('view').value);
    document.getElementById('view').value = dotheThing(document.getElementById('view').value);
    console.log(document.getElementById('view').value);
    console.log(document.getElementById('view').value);
  });

});
