// Setting up the Canvas size as Window size
const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;

// Grabbing Sprite Character Sheet 
const sprite_chr = {};
sprite_chr.character = new Image();
sprite_chr.character.src = 'sprites/scientist.png';

// Setting up values ofor height and width of sprite character
const spriteWidth = 1024;
const spriteHeight = 1024;

// Variables to allow us to iterate through frames
let frameX = 0; // Column
let frameY = 0; // Row

// For Jesus_Sprite.png

// frameY = 0 -> Moving Forward Frames
// frameY = 1 -> Moving Backwards Frames
// frameY = 2 -> Moving Left Frames
// frameY = 3 -> Moving Right Frames
// frameY = 4 -> Saying Hello Frames
// frameY = 5 -> Idle Frames 

// For scientist.png

// frameY = 0 -> Chemical effect

// Speed of frames
let gameFrame = 0;
const staggerFrame = 4;
let spriteSpeed = 5;

// Positioning
let spritePositionX = 0;
let spritePositionY = 0;

// Animate frames
function handlePlayerFrame() {
    if (gameFrame % staggerFrame == 0) {
        if (frameX < 7) {
            frameX++;
        }
        else {
            frameX = 0;
        }
    }
    gameFrame++;
}

// Control framerate regardless of machine being used
let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

// Animate sprite character
function animate() {
    // Tells the browser you wish to perform an animation. It requests the browser to call a user-supplied callback function before the next repaint
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval)

        // Clear the canvas
        context.clearRect(0,0,width,height);

        // Draw the png image onto the canvas
        context.drawImage(sprite_chr.character, (frameX * spriteWidth), (frameY * spriteHeight), spriteWidth, spriteHeight, spritePositionX, spritePositionY, 250, 250);

        // Moving function that we wish to call
        moving();

        // Frame handling
        handlePlayerFrame();
    }
}


window.addEventListener('resize', function() {
    height = canvas.height = window.innerHeight;
    width = canvas.width = window.innerWidth;
})


// Now this part of the code depends on the positioning of the sprite character in the canvas

// For example for the character to move forward it must reamin less than the height of the canvas, and so we update the positioning

// Basically i am hardcoding where i want the character position to be at by subtracting certain numbers to height or width of the canvas, and depending on that position will give a different frame

function moving() {
    return NaN;
}

startAnimation(30);