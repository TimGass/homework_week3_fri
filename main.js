var runonce = 0;
var downKeys = "";
var clicked = false;

function dotheThing(thing){
  return eval(thing);
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
      document.getElementById('view').value += "7";
  }

  else if (keyCode === 56) {
      if(downKeys.length === 0){
        document.getElementById('view').value += "8";
      }
      else {
        document.getElementById('view').value += "*";
        downKeys = "";
      }
  }

  else if (keyCode === 57) {
      document.getElementById('view').value += "9";
  }

  else if (keyCode === 88) {
      document.getElementById('view').value += "*";
  }

  else if (keyCode === 52) {
      document.getElementById('view').value += "4";
  }

  else if (keyCode === 53) {
      document.getElementById('view').value += "5";
  }

  else if (keyCode === 54) {
      document.getElementById('view').value += "6";
  }

  else if (keyCode === 191) {
      document.getElementById('view').value += "/";
  }

  else if (keyCode === 49) {
      document.getElementById('view').value += "1";
  }

  else if (keyCode === 50) {
      document.getElementById('view').value += "2";
  }

  else if (keyCode === 51) {
      document.getElementById('view').value += "3";
  }

  else if (keyCode === 189) {
      document.getElementById('view').value += "-";
  }

  else if (keyCode === 48) {
      document.getElementById('view').value += "0";
  }

  else if (keyCode ===  190) {
      document.getElementById('view').value += ".";
  }

  else if (keyCode === 8) {
      document.getElementById('view').value = document.getElementById('view').value.slice(0, (document.getElementById('view').value.length -1));
  }

  else if (keyCode === 16) {
    downKeys = "shift";
  }

  else if (keyCode === 187) {
      if (downKeys.length === 0) {
        document.getElementById('view').value = dotheThing(document.getElementById('view').value);
      }
      else{
        document.getElementById('view').value += "+";
        downKeys = "";
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
      document.getElementById('view').value = dotheThing(document.getElementById('view').value);
    }
    else{
      downKeys = "";
    }
  }

  else if (keyCode === 18) {
    downKeys = "alt";
  }
}


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
