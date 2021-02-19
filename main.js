canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car_1_width = 150;
car_1_height = 90;
car_1_X = 10;
car_1_Y = 160;
car_1_image = "Car_1.png";


background_image = "road.png";

car_2_width = 150;
car_2_height = 90;
car_2_X = 10;
car_2_Y = 340;
car_2_image = "Car_2.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadcar_1;
    car_1_imgTag.src = car_1_image;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadcar_2;
    car_2_imgTag.src = car_2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
} 

function uploadcar_1() {
    ctx.drawImage(car_1_imgTag , car_1_X , car_1_Y , car_1_width , car_1_height);
}

function uploadcar_2() {
    ctx.drawImage(car_2_imgTag , car_2_X , car_2_Y , car_2_width , car_2_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown() {

    keyPressed = e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed == "38") {
        car_1up();
        console.log("up arrow key");
    }

    if(keyPressed == "40") {
        car_1down();
        console.log("down arrow key");
    }

    if(keyPressed == "37") {
        car_1left();
        console.log("left arrow key");
    }

    if(keyPressed == "39") {
        car_1right();
        console.log("right arrow key");
    }

    if(keyPressed == "87") {
        car_2up();
        console.log("w key");
    }

    if(keyPressed == "87") {
        car_2down();
        console.log("s key");
    }

    if(keyPressed == "87") {
        car_2left();
        console.log("a key");
    }

    if(keyPressed == "87") {
        car_2right();
        console.log("d key");
    }
}

