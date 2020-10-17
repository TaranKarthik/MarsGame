canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width= 100;
rover_height = 90;


pics = ["mars.jpg","nasa_image_4.jpg","surface1.jpg","surface2.jpg"];
randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);
background_image = pics[randomNumber];
console.log("The Background Image is - (by file name) " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == "38"){
        up();
        console.log("up");
    }
    if(keypressed == "40"){
       down();
        console.log("down");
    }
    if(keypressed == "37"){
        left();
        console.log("left");
    }
    if(keypressed == "39"){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y >=0){
        document.body.style.overflow = "hidden";
        rover_y = rover_y -10;
        console.log("When up arrow is pressed, the X position is " + rover_x + " And the Y position is " + rover_y );
        uploadBackground();
        uploadrover();
    }
    
}

function down(){
    if(rover_y <= 500){
        document.body.style.overflow = "hidden";
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, the X position is " + rover_x + " And the Y position is " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >= 0){
        document.body.style.overflow = "hidden";
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, The X position is " + rover_x + " And the Y position is " + rover_y );
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 700){
        document.body.style.overflow = "hidden";
        rover_x = rover_x + 10;
        console.log("WHen right arrow is pressed, The X position is " + rover_x + "And Y is " + rover_y);
        uploadBackground();
        uploadrover();
    }
}