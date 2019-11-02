function intro(){
    alert("Welcome to Casino Royal\nThis is a test game made by Andrew Knorr");
    return true
}



function choice_handler(input_sel){
  alert(input_sel)
  if(input_sel ===1 || input_sel.toLowerCase === "black jack"){
    alert("black jack")
  }else if(input_sel === 2 || input_sel.toLowerCase === "slot machine"){
    alert("slot machine")
  }else if(input_sel === 3 || input_sel.toLowerCase === "roulette"){
    DeviceAcceleration("roulette")
  }
  else{
    alert("Im Sorry That's Not A Game We Have, Please Try Again.")
    let try_again = prompt(
        "Casino Royal Game List\n"+
        "Pleas Enter The Gamer Number Or\n Game Name To Select Game"+
        "*1.Black Jack*\n"+
        "*2.Slot Machine*\n"+
        "*3.Roulette*\n"+
        "***************************\n"+
        "What Game Would You Like To Play?")
    choice_handler(menu_option);
  }
}


function menu(){
    let quit = false;
    let intro_ran = false;

    while(quit === false){
        if (intro_ran === false){
          intro_ran=intro();
        }

      let menu_option = prompt(
        "Casino Royal Game List\n"+
        "Pleas Enter The Gamer Number Or\n Game Name To Select Game"+
        "*1.Black Jack*\n"+
        "*2.Slot Machine*\n"+
        "*3.Roulette*\n"+
        "***************************\n"+
        "What Game Would You Like To Play?")
      console.log(menu_option)
      choice_handler(menu_option);
      quit = true;
    }
}

menu();
