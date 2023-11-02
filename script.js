function getButton(){

 alert(`Robot says: Hi stranger, let's play, I mean, guessing battle?🐾`);
 
 alert(`You need to guess the number I'm thinking of, don't worry, I'll be honest and you'll have as many chances as you want.`);
 
 let player = prompt(`First we must introduce ourselves properly, My name is RobotCat🐱🤖, please tell me your name:`);

 
  if(player == '' || null){
  alert(`I need to know my opponent's name to have an honorable battle.😾`);

  player = prompt(`First we must introduce ourselves properly 😾, please tell me your name:`);

    if(player == '' || null){
      player = prompt(`Okay...I only had one rule and you apparently don't like saying your name, so I'll give you one myself.😼`, "Boring Person");
    }
  }

  let number = prompt(`Hello ${player}! Now that we're introduced, let's play, I mean battle! Choose a number between 1 and 3.🐱`); 

  if(number < 0 || number > 4 || number == '' || null){
    prompt(`Please set a valid value between 1 and 3.😾`);
  } else{
    robotCat = Math.floor(Math.random() * 3) + 1;
    alert(`You chose ${number}🧝🏽, I chose ${robotCat}😼`)

    if(number != robotCat){
      alert(`unfortunately you made a mistake...😿`);
    }else{
      alert(`You won, congratulations!🏆`);
    }

    if (confirm(`${player}, Would you like to try again?😻`)){
      alert(`Click the button again to restart the game  😺`);
    } else {
      alert(`Thanks for the visit!😽`)
    }
  }
}
