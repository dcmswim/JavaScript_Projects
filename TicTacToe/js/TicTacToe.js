//THIS VARIABLE KEEPS TRACK OF PLAYER'S TURN
let activePlayer = "X";

//THIS ARRAY STORES AN ARRAY OF MOVES - USED TO DETERMINE WIN CONDITIONS
let selectedSquares = [];

//THIS FUNCTION IS FOR PLACING X'S OR O'S INSIDE A SQUARE
function placeXOrO(squareNumber) {
    //THIS CONDITION ENSURES A SQUARE HASN'T ALREADY BEEN SELECTED
    //.SOME() METHOD USED TO CHECK ELEMENT OF SELECTEDSQUARE ARRAY TO SEE IF IT CONTAINS THE SQUARE NUMBER CLICKED ON
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //THIS VARIABLE RETRIEVES HTML ELEMENT ID THAT WAS CLICKED
        let select = document.getElementById(squareNumber);
        //THIS CONDITION CHECK'S PLAYER TURN
        if (activePlayer === "X") {
            //PLACES X OR O DEPENDING ON WHICH PLAYER'S TURN IT IS
            select.style.backgroundImage = 'url("images/catx.jpg")';
        }   else {
            select.style.backgroundImage = 'url("images/dogo.jpg")';
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }
        audio('./media/meow_place.mp3');
        if (activePlayer === "O") {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000)
        }
        return true;
    }

    //THIS FUNCTION SELECTS A RANDOM SQUARE
    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9 ));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//THIS FUNCTION PARSES THE SELECTEDSQUARES ARRAY TO SEARCH FOR WIN CONDITIONS
//DRAWWINLINE FUNCTION IS CALLED TO DRAW A LINE OF CONDITION IS MET
function checkWinConditions() {
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520)}
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520)}
    //THIS CONDITION CHECKS FOR A TIE (IF NO MATCH FOUND ABOVE)
    else if (selectedSquares.length >= 9) {
        //PLAYS TIE GAME SOUND
        audio("./media/raspberry_tie.mp3");
        setTimeout(function () {resetGame(); }, 1000);
    }
    //CHECKS IF ARRAY INCLUDES 3 STRINGS - USED TO CHECK FOR EACH WIN CONDITION
    function arrayIncludes(squareA, squareB, squareC) {
        //THESE VARIABLES USED TO CHECK FOR 3 IN A ROW
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //IF THE 3 VARIABLES PASSED ARE ALL INCLUDED IN THE ARRAY TRUE IS RETURNED AND OUR ELSE IF CONDITION EXECUTES THE DRAWWINLINE FUNCTION
        if (a === true && b === true & c === true) { return true }
    }
}

// THIS FUNCTION MAKES BODY ELEMENT TEMPORARILY UNCLICKABLE
function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000 );
}

//THIS FUNCTION TAKES STRING PARAMETER OF THE PATH SET EARLIER FOR PLACEMENT SOUNDS
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//THIS FUNCTION USES HTML CANVAS TO DRAW WIN LINES
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines")
    const c = canvas.getContext("2d");
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //THIS FUNCTION INTERACTS WITH CANVAS TO DRAW LINE
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, 0.8)";
        c.stroke();
        //  THIS CONDITION CHECKS IF LINE HAS REACHED ENDPOINT
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y <y2) { y += 10; }
            //THIS CONDITION CANCELS ANIMATION LOOP IF END POINTS REACHED
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //THIS FUNCTION CLEARS CANVAS AFTER WIN LINE IS DRAWN
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    //THIS LINE DISALLOWS CLICKING WHILE WIN SOUND IS PLAYING
    disableClick();
    audio("./media/winner.mp3");
    animateLineDrawing();
    //BRIEF DELAY THEN CLEARS CANVAS AND RESETS GAME AND RE-ALLOWS CLICKING
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//THIS FUNCTION RESETS THE GAME AFTER A WIN OR TIE
function resetGame() {
    //THIS FOR LOOP ITERATES THROUGH EACH HTML SQUARE ELEMENT
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage=""
    }
    //THIS RESETS THE ARRAY SO THAT IT IS EMPTY
    selectedSquares = [];
}