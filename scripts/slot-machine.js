const slot_wheal = {
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    'J':'jackpot'
}



function machine_quit(){
    let menu= document.querySelector(".menu");
    let table = document.querySelector(".slot_machine");
    console.log(menu);
    menu.setAttribute("id","active")
    table.setAttribute("id","hidden")
}
function setup_machine(){
    let menu= document.querySelector(".menu");
    let table = document.querySelector(".slot_machine");
    console.log(menu);
    menu.setAttribute("id","hidden")
    table.setAttribute("id","active")
}


