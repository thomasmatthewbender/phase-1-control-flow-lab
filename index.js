function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks." 
  } else if (feet > 2500) {
    return "No can do."
  }
}

function ternaryCheckCity(city){

  // return ("NYC" ? "Ok, sounds good." : "No go.")
  return city === "NYC" ? "Ok, sounds good." : "No go."
}
console.log(ternaryCheckCity("NYC"))
console.log(ternaryCheckCity("Pittsburgh"))
  //let NYC = true ? "Ok, sounds good." : "No go."
  // Write your code here!
  //console.log(NYC)



  function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
    return("Thank you so much.");
    break;
    case "not as generous":
    return("Thank you.");
    break;
    default:
    return "Bye.";
  }
  }
  console.log(switchOnCharmFromTip("generous"))
  console.log(switchOnCharmFromTip("not as generous"))
  console.log(switchOnCharmFromTip())





