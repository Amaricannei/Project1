var beginning = "Hi! Name Please: ";
var quiz = "start";
var UserName ="";

var score = 0;

function randomPic() {
var calc = Math.floor(Math.random()*50)+1;
return calc;
}

var myOutputValue = "";

var main = function(input) {

  Userinput = input.toLowerCase().trim();
  var computer = randomPic();

  if (beginning == "Hi! Name Please; ") {
    UserName = Userinput;
    quiz = "start";
    return `${UserName}, your guessing from 1 to 50 time starts now`;
  } else if (Userinput == "end") {
    myOutputValue = `${Userinput} See you later.`;
    console.log(myOutputValue);
    return;
    }
  
  if (Userinput == "s") {
    quiz = "start";
    return `${UserName}, You have entered Start Zone`;
  } else if (Userinput == "d") {
    quiz ="double";
    return `${UserName}, You are entering the section to win double.`
  }

  if ( quiz == "start") {
    if ((Userinput >=1 && Userinput <=50) &&  Userinput == Computer || Userinput == computer*2) {
      score++;
      return `${UserName} it hard to get it correct, you did it!`;
    } else {
      return "Your input is incorrect only between 1 to 50"
    }
    
  }if (quiz == "double") {
    if (Userinput == computer) {
      score++;
      score++;
      return `${UserName} It's more tough to match compensated double`;
    } else {
      return "Your input is incorrect only between 1 to 50"
    }
  }

}