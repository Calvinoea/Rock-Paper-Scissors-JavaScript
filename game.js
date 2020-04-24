const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();
  
  if (userInput == 'rock' || userInput =="paper" || userInput == "scissors" || userInput === 'bomb'){
    
    return userInput
     
    
  } else {
    
    
    console.log("Error")
    
    
  }

}


const getComputerChoice = () => {
  
 let compChoice = Math.random() * (2 - 0) + 0
 
 if (compChoice >= 1){
   
   return 'rock'
   
 } else if(compChoice < 0.5){
   
   return 'paper'
   
 } else{
   
   return 'scissors'
 }
  
}



const determineWiner = (userChoice, computerChoice) => {
  
  if (userChoice == computerChoice){
    
    return "tie"
    
  } else if (userChoice == 'rock' ){
    
    if(computerChoice == 'paper'){
      
      return 'computer won'
      
    } else {
      
      return 'user won'
    }
    
    
  } else if (userChoice == 'paper'){
    
    
    if(computerChoice == 'scissors' ){
      
      return 'computer won'
      
    } else {
      
      return 'user won'
      
    }
    
    
  } else if (userChoice == 'scissors'){
    
    if (computerChoice == 'rock'){
      
      return 'computer won'
      
    } else if (computerChoice == 'paper'){
      
      return 'user won'
      
    }
    
    
  }
  
  if (userChoice === 'bomb'){
    
    return 'Congrats, you won'
  }
  
  
}

const playGame = () => {
  
  
  const userChoice = getUserChoice('bomb');
  
  const computerChoice = getComputerChoice();
  console.log('You:' + userChoice);
  console.log('The computer:' + computerChoice);

  console.log(determineWiner(userChoice,computerChoice));

}


playGame()

