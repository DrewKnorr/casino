const player ={
    cards :[],
    card_value : '',
    points :'',
    money:0,
    name:''
}

const dealer = {
    cards :[],
    card_value : '',
    points:'',
    discard_pile:[]
}


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
    }
    scramble(newDeck);
    return newDeck;
}

function scramble(deckOfCards){
    for(let ct =0; ct < 1000; ct++){
        let index_one = Math.floor((Math.random()*deckOfCards.length));
        let index_two = Math.floor((Math.random()*deckOfCards.length));
        let temp_value = deckOfCards[index_one];

        deckOfCards[index_one] = deckOfCards[index_two];
        deckOfCards[index_two] = temp_value;
    }

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

function new_round(dealer, player,deckOfCards){
    console.log(deckOfCards.length)
    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    dealer.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    dealer.cards.push(deckOfCards[0]);
    deckOfCards.shift();

    value_sum(player);
    value_sum(dealer);

    console.log(`Deck of cards Lenght ${deckOfCards.length}`)
    console.log(Object.values(player))
    console.log(Object.values(dealer))
}

function first_round(dealer, player,deckOfCards){
    console.log(`Deck of cards Lenght ${deckOfCards.length}`)
    player.money = 200.00;

    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();

    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();

    dealer.cards.push(deckOfCards[0]);
    deckOfCards.shift();

    dealer.cards.push(deckOfCards[0]);
    deckOfCards.shift();

    value_sum(player);
    value_sum(dealer);

    console.log(`Deck of cards Lenght ${deckOfCards.length}`)
    console.log(Object.values(dealer))
    console.log(Object.values(player))
    console.log(bet);
}

function round_action(player,deckOfCards,bust){
    let cards_in_hand = '';
    for(let ct = 0; ct<player.cards.length;ct++){
        if(ct === 0){
            cards_in_hand += `a ${player.cards[ct].Value} of ${player.cards[ct].Suit}`;
        }
        else{
            cards_in_hand += ` and a ${player.cards[ct].Value} of ${player.cards[ct].Suit}`
        }
    }
    cards_in_hand = cards_in_hand.toString();
    let input_val = prompt(`You have ${cards_in_hand}\n Adding up to be ${player.card_value}\n what would you like to do`)
    console.log(player.cards[0])
    while(bust === false){
        if(input_val.toLowerCase()==='hit'){
            bust=add_card(player,deckOfCards,bust);
        }
        else{
            console.log("stay")
        }
    }
}

function add_card(player,deckOfCards,bust){
    player.cards.push(deckOfCards[0]);
    deckOfCards.shift();
    value_sum(player);
    if(player.card_value > 21){
        bust = true;

        alert(`You Bust On  A Value Of ${player.card_value}`)
        player.cards=[],
        player.card_value='',
        player.points=''
        
    }
    return bust;
}

function main(){
    let bust = false;
    let count  = false;
    let newDeckOfCards= build_deck();
    name = prompt("enter name:")
    player.name = name;
    new_round(dealer,player,newDeckOfCards);
    round_action(player,newDeckOfCards,bust);
}