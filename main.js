var runonce = 0;
var downKeys = "";
var clicked = false;

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
        if (operated.indexOf(numberArray[i]) != -1) {
          if(operatorArray[i] === "*"){
            answer = answer*Number(numberArray[i+1]);
            operated.push(numberArray[i]);
            operated.push(numberArray[i+1]);
          }
          else if(operatorArray[i] === "/"){
            answer = answer/Number(numberArray[i+1]);
            operated.push(numberArray[i]);
            operated.push(numberArray[i+1]);
          }
        }
        else if(operated.indexOf(numberArray[i+1]) != -1){
          if(operatorArray[i] === "*"){
            answer = answer*Number(numberArray[i+1]);
            operated.push(numberArray[i]);
            operated.push(numberArray[i+1]);
          }
          else if(operatorArray[i] === "/"){
            answer = Number(numberArray[i+1])/answer;
            operated.push(numberArray[i]);
            operated.push(numberArray[i+1]);
          }
        }
      }


      else if(answer == 0){
        if(operatorArray[i] === "*"){
          answer += Number(numberArray[i])*Number(numberArray[i+1]);
          operated.push(numberArray[i]);
          operated.push(numberArray[i+1]);
        }
        else if(operatorArray[i] === "/"){
          answer += Number(numberArray[i])/Number(numberArray[i+1]);
          operated.push(numberArray[i]);
          operated.push(numberArray[i+1]);
        }
      }
    }


  for (var i = 0; i < operatorArray.length; i++) {
    if(answer != 0){
      if (operated.indexOf(numberArray[i]) != -1) {
        if(operatorArray[i] === "+"){
          answer = answer+Number(numberArray[i+1]);
        }
        else if(operatorArray[i] === "-"){
          answer = answer-Number(numberArray[i+1]);
        }
      }

      else if (operated.indexOf(numberArray[i+1]) != -1){
        if(operatorArray[i] === "+"){
          answer = answer+Number(numberArray[i]);
        }
        else if(operatorArray[i] === "-"){
          answer = Number(numberArray[i]) - answer;
        }
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
    clicked = false;
  }

  return answer;
};

function charles(yolo) {
  var keyCode = yolo.keyCode;

  if(keyCode === 13) {
      clicked = true;
      document.getElementById('view').value = dotheThing(document.getElementById('view').value);
  }

  else if (keyCode === 67) {
    document.getElementById('view').value = "";
  }

  else if (keyCode === 55) {
    if(clicked === false){
      document.getElementById('view').value += "7";
    }
    else {
      document.getElementById('view').value = "7";
      clicked = false;
    }
  }

  else if (keyCode === 56) {
    if(clicked === false){
      if(downKeys.length === 0){
        document.getElementById('view').value += "8";
      }
      else {
        document.getElementById('view').value += "*";
        downKeys = "";
      }
    }
    else {
      if(downKeys.length === 0){
        document.getElementById('view').value = "8";
      }
      else {
        document.getElementById('view').value = "*";
        downKeys = "";
      }
      clicked = false;
    }
  }

  else if (keyCode === 57) {
    if(clicked === false){
      document.getElementById('view').value += "9";
    }
    else {
      document.getElementById('view').value = "9";
      clicked = false;
    }
  }

  else if (keyCode === 88) {
    if(clicked === false){
      document.getElementById('view').value += "*";
    }
    else {
      document.getElementById('view').value = "*";
      clicked = false;
    }
  }

  else if (keyCode === 52) {
    if(clicked === false){
      document.getElementById('view').value += "4";
    }
    else {
      document.getElementById('view').value = "4";
      clicked = false;
    }
  }

  else if (keyCode === 53) {
    if(clicked === false){
      document.getElementById('view').value += "5";
    }
    else {
      document.getElementById('view').value = "5";
      clicked = false;
    }
  }

  else if (keyCode === 54) {
    if(clicked === false){
      document.getElementById('view').value += "6";
    }
    else {
      document.getElementById('view').value = "6";
      clicked = false;
    }
  }

  else if (keyCode === 191) {
    if(clicked === false){
      document.getElementById('view').value += "/";
    }
    else {
      document.getElementById('view').value = "/";
      clicked = false;
    }
  }

  else if (keyCode === 49) {
    if(clicked === false){
      document.getElementById('view').value += "1";
    }
    else {
      document.getElementById('view').value = "1";
      clicked = false;
    }
  }

  else if (keyCode === 50) {
    if (clicked === false) {
      document.getElementById('view').value += "2";
    }
    else {
      document.getElementById('view').value = "2";
      clicked = false;
    }
  }

  else if (keyCode === 51) {
    if(clicked === false){
      document.getElementById('view').value += "3";
  }
    else {
      document.getElementById('view').value = "3";
      clicked = false;
    }
  }

  else if (keyCode === 189) {
    if(clicked === false){
      document.getElementById('view').value += "-";
  }
    else {
      document.getElementById('view').value = "-";
      clicked = false;
    }
  }

  else if (keyCode === 48) {
    if (clicked === false) {
      document.getElementById('view').value += "0";
  }
    else {
      document.getElementById('view').value = "0";
      clicked = false;
    }
  }

  else if (keyCode ===  190) {
    if (clicked === false) {
      document.getElementById('view').value += ".";
    }
    else {
      document.getElementById('view').value = ".";
      clicked = false;
    }
  }

  else if (keyCode === 8) {
    if(clicked === false){
      document.getElementById('view').value = document.getElementById('view').value.slice(0, (document.getElementById('view').value.length -1));
    }
    else {
      document.getElementById('view').value = "";
      clicked = false;
    }
  }

  else if (keyCode === 18) {
    downKeys = "alt";
  }

  else if (keyCode === 187) {
    if( clicked === false){
      if (downKeys.length === 0) {
        document.getElementById('view').value = dotheThing(document.getElementById('view').value);
      }
      else{
        document.getElementById('view').value += "+";
        downKeys = "";
      }
    }
    else {
      if (downKeys.length === 0) {
        document.getElementById('view').value = dotheThing(document.getElementById('view').value);
      }
      else{
        document.getElementById('view').value = "+";
        downKeys = "";
      }
    }
  }
}

function text(yolo) {

  var keyCode = yolo.keyCode;

  if(keyCode === 13) {
      clicked = true;
      document.getElementById('view').value = dotheThing(document.getElementById('view').value);
  }

  else if (keyCode === 67) {
    setTimeout(function(){
    document.getElementById('view').value = "";
  }, 1);
  }

  else if (keyCode === 187) {
    if (downKeys.length === 0) {
      document.getElementById('view').value = dotheThing(document.getElementById('view').value).slice(0, ((dotheThing(document.getElementById('view').value)).length));
    }
    else{
      setTimeout(function(){
      downKeys = "";
      }, 1);
    }
  }

  else if (keyCode === 18) {
    downKeys = "alt";
  }
}


document.addEventListener("DOMContentLoaded", function(){
  function clickHandler(event){
    event.addEventListener("click", function(){
      if (clicked === false) {
      document.getElementById('view').value += event.value;
    }
    else {
      document.getElementById('view').value = event.value;
      clicked = false;
    }
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

  document.addEventListener("keydown", charles, false);
  document.getElementById('view').addEventListener("focusin", function(){
    document.removeEventListener("keydown", charles, false);
    document.addEventListener("keydown", text, false);
  });
  document.getElementById("view").addEventListener("focusout", function(){
    document.addEventListener("keydown", charles, false);
    document.removeEventListener("keydown", text, false);
  })

    document.getElementById("multiply").addEventListener("click", function(){
    document.getElementById('view').value += "*";
  });

  document.getElementById('clear').addEventListener("click", function(){
  document.getElementById('view').value = "";
  });

  document.getElementById("equal").addEventListener("click", function(){
    clicked = true;
    document.getElementById('view').value = dotheThing(document.getElementById('view').value);
  });

});
