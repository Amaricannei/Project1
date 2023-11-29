var Stage = "Hi! Name Please: ";

var UserName ="";
var score = 0;

var myOutputValue;




var main = function(input) {
  var Userinput = Number(input.toLowerCase().trim());
  var Stageinput = input.toLowerCase().trim();

  function randomPic() {
    var calc = Math.floor(Math.random()*50)+1;
    return calc;
        }

  if (Stage == "Hi! Name Please: ") {
    UserName = input.trim();
    Stage = "start";
    
    return `${UserName}, your guessing from 1 to 50 time starts now <br> Stage: ${Stage.toUpperCase()}`;
    
  }
  
    
    if (Stageinput == "s") {
      Stage = "start";
      return `${UserName}, You have entered Start Zone`;
    } else if (Stageinput == "d") {
      Stage ="double";
      return `${UserName}, You are entering the section to win double.`
    } else if (Stageinput == "end") {
      Stage = "Hi! Name Please: ";
      return "Please write new player's name, Thank you!"
    }

    
    if ( Stage == "start") {
      if (!isNaN(Userinput) && Userinput >= 1 && Userinput <= 50) {
        var logic= randomPic();
        console.log('line 35',logic)
        if ((Userinput >=1 && Userinput <=50) &&  (Userinput == logic || Userinput == logic*2)) {
        score++;
        return `${UserName} it hard to get it correct, you did it! No. you picked ${logic} & Your Score ${score} <br> For new player type 'END'`;
      } else {
        myOutputValue = `Your No.: ${Userinput} and Bot picked: ${logic} & Your Score ${score}<br> For new player type 'END'`;
        return myOutputValue;
      }

      }else {
        return "Your input is incorrect only enter no numbers between 1 to 50.";
      
    } 
  }

    if (Stage == "double") {
      if (!isNaN(Userinput) && Userinput >= 1 && Userinput <= 50) {
        var logic = randomPic();

        console.log('line 48',logic)
        if (Userinput == logic) {
        score++;
        score++;
        return `${UserName} It's more tough to match compensated double, Your No. ${logic} & Your Score ${score}<br> For new player type 'END'`;
      }  else {
        myOutputValue = `Your No.: ${Userinput} and Bot picked: ${logic} & Your Score ${score}<br> For new player type 'END'`;
        return myOutputValue;
      }

      } else {
        return "Your input is incorrect only enter no numbers between 1 to 50.";
      
    } 
    }
    
      return "Your input is incorrect only enter no numbers between 1 to 50.";

  

  };

  
  
  