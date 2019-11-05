const player ={
    cards :[],
    points :'',
    money:''
}

const dealer = {
    cards :[],
    points:'',
    discard_pile:[]
}


function build_deck(){
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let newDeck = new Array();

    for (let ct=0; ct<cards.length; ct++){
        for(let ct_2=0; ct_2<suits.length; ct_2++){
            let value = cards[ct];
            let weight = 0;
            switch(value){
                case value ==='J'|| value ==='Q'|| value ==='K':
                    weight = 10;
                    break;
                case value ==='A':
                    weight = 11;
                default:
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
        console.log(temp_value);

        deckOfCards[index_one] = deckOfCards[index_two];
        deckOfCards[index_two] = temp_value;
    }

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

    console.log(deckOfCards.length)
    console.log(Object.values(player.cards))
    console.log(Object.values(dealer.cards))
}



function main(){
   deckOfCards= build_deck();
   new_round(dealer,player,deckOfCards);
}