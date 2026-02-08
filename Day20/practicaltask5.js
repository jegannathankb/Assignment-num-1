
function pizza() {
  console.log("You selected: Pizza ");
}


function burger() {
  console.log("You selected: Burger ");
}

function sandwich() {
  console.log("You selected: Sandwich ");
}

function pasta() {
  console.log("You selected: Pasta ");
}
function showMenu(choice) {
  switch (choice) {
    case 1:
      pizza();
      break;
    case 2:
      burger();
      break;
    case 3:
      sandwich();
      break;
    case 4:
      pasta();
      break;
    default:
      console.log("Invalid choice. Please select 1 to 4.");
  }
}
showMenu(1); 
showMenu(3); 
showMenu(5); 