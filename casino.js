  // Black Jack Functions
  const deckOfCards = {
    ace:28,
    king:28,
    queen:28,
    jack:28,
    ten:28,
    nine:28,
    eight:28,
    seven:28,
    six:28,
    five:28,
    four:28,
    three:28,
    two:28
  };


const cardValues = {
  ace:[1,11],
  king:10,
  queen:10,
  jack:10,
  ten:10,
  nine:9,
  eight:8,
  seven:7,
  six:6,
  five:5,
  four:4,
  three:3,
  two:2
};

const suits =["hearts","dimonds","clubs","spades"];



function card_shuffle(deckOfCards){
  console.log("Shuffle Startting")
  let temp_key = Object.keys(deckOfCards);
  let temp_val = Object.values(deckOfCards)
  let temp_arr = [];
  let shuffle_arr = [];
  let temp_shuffle = '';
  let temp_len;

  for(let cards = 0; cards < Object.keys(deckOfCards).length; cards++){

    for(let ct = 0; ct < temp_val[cards];ct++){
        if(ct<7){
            temp_arr.push(`${temp_key[cards]} of ${suits[0]}`)
        }
        else if(ct<14){
            temp_arr.push(`${temp_key[cards]} of ${suits[1]}`)
        }
        else if(ct<21){
            temp_arr.push(`${temp_key[cards]} of ${suits[2]}`)
        }
        else{
            temp_arr.push(`${temp_key[cards]} of ${suits[3]}`)
        }
       
    }
  }
  temp_len = temp_arr.length;
  for(let shuffle_ct =0; shuffle_ct<temp_len;shuffle_ct++){
      temp_shuffle = '';
      random_num =Math.floor(Math.random()*temp_arr.length);
      temp_shuffle = temp_arr[random_num];
      delete temp_arr[random_num]
      shuffle_arr.push(temp_shuffle);
  }
  console.log(temp_arr);
  console.log(shuffle_arr);
}

function black_jack(){
  card_shuffle(deckOfCards)
}

// menu functions

function choice_handler(input_sel){

    if(input_sel ==="1" || input_sel.toLowerCase === "black jack"){
      black_jack();
    }else if(input_sel === "2" || input_sel.toLowerCase === "slot machine"){
      alert("slot machine")
    }else if(input_sel === "3" || input_sel.toLowerCase === "roulette"){
      DeviceAcceleration("roulette")
    }
    else{
      alert("Im Sorry That's Not A Game We Have, Please Try Again.")
      let try_again = prompt(
          "Casino Royal Game List\n"+
          "Pleas Enter The Gamer Number Or Game Name To Select Game!\n"+
          "\n"+
          "*1.Black Jack*\n"+
          "*2.Slot Machine*\n"+
          "*3.Roulette*\n"+
          "***************************\n"+
          "What Game Would You Like To Play?")
      choice_handler(try_again);
    }
  }
  
  
  function intro(){
      alert("Welcome to Casino Royal\nThis is a test game made by Andrew Knorr");
      return true
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
  

  