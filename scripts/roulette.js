function build_wheel(){
    let wheel={
        0:'green', 
        28:'black', 
        9:'red', 
        26:'black', 
        30:'red', 
        11:'black', 
        7:'red',
        20:'black',
        32:'red', 
        17:'black', 
        5:'red', 
        22:'black', 
        34:'red', 
        15:'black', 
        3:'red', 
        24:'black', 
        36:'red', 
        13:'black', 
        1:'red', 
        00:'black', 
        27:'red', 
        10:'black', 
        25:'red', 
        29:'black', 
        12:'red', 
        8:'black', 
        19:'red', 
        31:'black', 
        18:'red', 
        6:'black', 
        21:'red', 
        33:'black', 
        16:'red', 
        4:'black', 
        23:'red', 
        35:'black',
        14:'red', 
        2: 'black'
    }
    return wheel;
}

function roulette_quit(){
    let menu= document.querySelector(".menu");
    let table = document.querySelector(".roulette_table");
    console.log(menu);
    menu.setAttribute("id","active")
    table.setAttribute("id","hidden")
}
function setup_table(){
    let menu= document.querySelector(".menu");
    let table = document.querySelector(".roulette_table");
    console.log(menu);
    menu.setAttribute("id","hidden")
    table.setAttribute("id","active")
}

function wheel_spin(wheel){
    let random=Math.floor(Math.random() * 35)
    console.log(random);
    let temp_val = wheel[random];
    console.log(temp_val)
    let result = `${random} ${temp_val}`;
    console.log(result);
    return result;
}

function win_check(input_val,spin_val){
    
}

function roulette_game(){
    setup_table();
    const newWheel = build_wheel();
    console.log(newWheel);
    let quit = false;
    alert("Welcome To The Roulette Table!!");
    while(quit===false){
        let input_val = prompt("place your bet!");
        input_val = input_val.toLowerCase();
        let spin_val = wheel_spin(newWheel);
        
        
    }

    wheel_spin(newWheel);
}