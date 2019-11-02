function intro(){
    alert("Welcome to Casino Royal\nThis is a test game made by Andrew Knorr");
    return true
}



function choice_handler(input_sel){
    if(input_sel ===1 || input_sel.toLowerCase === "black jack"){
        console.log("black jack")
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
        "*1.black jack*\n"+
        "*2.Slot Machine*\n"+
        "*3.Roulette*\n"+
        "***************************\n"+
        "What Game Would You Like To Play?")
      choice_handler(menu_option);
      quit = true;
    }
}

menu();
