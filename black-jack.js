function build_deck(){
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    let newDeck = new Array();

    for (let ct=0; ct<cards.length; ct++){
        for(let ct_2=0; ct_2<suits.length; ct_2++){
            let value = cards[ct];
            let weight = 0;
                if(value ==='Jack'|| value ==='Queen'|| value ==='King'){
                    weight = 10;
                }
                else if(value ==='Ace'){
                    weight = 11;
                }
                else{
                    weight = value
                }
            const card = { Value: value, Suit: suits[ct_2], Weight: weight };

            newDeck.push(card);
        }
        for(let ct =0; ct < 1000; ct++){
            let index_one = Math.floor((Math.random()*newDeck.length));
            let index_two = Math.floor((Math.random()*newDeck.length));
            let temp_value = newDeck[index_one];
    
            newDeck[index_one] = newDeck[index_two];
            newDeck[index_two] = temp_value;
        }
    }
    return newDeck;
}

//Deck Build End


function player_create(name){
    const player = {
        cards :[],
        card_value : '',
        money:200,
        bet:0,
        name:name
    }
    return player;
}

function dealer_create(){
    const dealer = {
        cards :[],
        card_value : '',
        points:''
    }
    return dealer;
}
function clear_hand(player){
    let temp_arr = player.cards;
    console.log(temp_arr);
    for(let ct = 0; ct < temp_arr.length; ct++){
        player.cards= [];
    }
    
}

function player_clear(player){
    player.cards= [];
    player.card_value='';
    player.money='';
    player.bet='';
    player.name='';
}
//Player settings end 


function play_again(player){
    let quit_var = prompt("Play Again? \n Yes or No?")
    console.log(quit_var.toLowerCase())
    if(quit_var.toLowerCase() === 'yes'){
        return false;
    }
    else{
        player_clear(player)
        return true;
    }
}

function bet_check(input_val,player){
    while(input_val > player.money){
        input_val = prompt(`Im Sorry but you only have $${player.money}\nPlease try agian.`)
    }
    return input_val;
}
//system functions end

function dealer_play(dealer,deckOfCards){
    if(dealer.card_value < 15){
        dealer.cards.push(deckOfCards[0]);
        deckOfCards.shift();

    }
}

//dealer command end

function add_card(player,deckOfCards){
    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    console.log("card added");
    console.log()
}

function new_hand(player, dealer, deckOfCards){
    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();

    dealer.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    dealer.cards.push(deckOfCards[0]);
    deckOfCards.shift();

}

function cards_show(player){
    let cards_in_hand = '';
    for(let ct = 0; ct<player.cards.length;ct++){
        if(ct === 0){
            cards_in_hand += `a ${player.cards[ct].Value} of ${player.cards[ct].Suit}`;
        }
        else{
            cards_in_hand += ` and a ${player.cards[ct].Value} of ${player.cards[ct].Suit}`
        }
    }
    return cards_in_hand;
}

function value_sum(input_obj){
    let result = 0;
    let temp_val_one = 0;
    for(let ct =0; ct<input_obj.cards.length; ct++){
        temp_val_one = Object.values(input_obj.cards)[ct];
        temp_val_one = temp_val_one.Weight;
        result += Number(temp_val_one)
    }
    
    input_obj.card_value = result;
}

function round_win(player,dealer){
    let player_value = 21 - player.card_value;
    let dealer_value = 21 - dealer.card_value;
    
    if(Number(player.card_value) > 21){
        alert(`You Bust... \n -${player.bet} from account`);
        player.money -= Number(player.bet);
        player.bet =0;
    }
    else if(dealer.card_value > 21){
        alert(`Dealer Bust... \n ${player.bet} added to account`)
        player.money += Number(player.bet);
        player.bet =0;
    }
    else if(player_value < dealer_value){
        alert(`You Win !!! \n ${player.bet} added to account`)
        player.money += Number(player.bet);
        player.bet =0;
    }
    else{
        alert(`Dealer Wins... \n -${player.bet} from account`)
        player.money -= Number(player.bet);
        player.bet =0;
    }
    clear_hand(player);
    clear_hand(dealer);
}

function round(player,dealer,deck){
    let hit_loop = true;
    let bet = prompt(`Your Have $${player.money}\nHow Much Would You Like To Bet?`);
    player.bet=bet_check(bet,player);
    new_hand(player,dealer, deck);


    


    
    while(hit_loop===true){
        
        let cards_in_hand = cards_show(player);
        cards_in_hand = cards_in_hand.toString();

        value_sum(player)
        if(Number(player.card_value) > 21){
            hit_loop=false;
            console.log("bust")
        }else
        {

            let input_val = prompt(`You have ${cards_in_hand}\n Adding up to be ${player.card_value}\n what would you like to do`)
            if(input_val.toLowerCase()==='stay'){
                hit_loop= false;
            }
            else if(input_val.toLowerCase()==='hit'){
                add_card(player,deck)
            }
            else{
                alert("sorry that is not an option")
            }
        }
    }

    
    dealer_play(dealer,deck);

    round_win(player,dealer);

}




function game(){
    let quit = false;
    let deck = build_deck();
    alert("Welcome To The Casino Royal Black Jack Table");
    let player = player_create(prompt("Enter Your Name:"))
    let dealer = dealer_create();
    
    while(quit === false){
        console.log(player);
        console.log(dealer);
        round(player,dealer,deck)
        quit=play_again(player);
    }
}