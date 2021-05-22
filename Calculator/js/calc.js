// CREATES OBJECT TO KEEP TRACK OF VALUES
const Calculator = {
    Display_Value: "0",
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

//THIS MODIFIES VALUES EACH TIME BUTTON IS PRESSED
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //THIS OVERWRITES DISPLAY_VALUE IF THE CURRENT VALUE IS 0, OTHERWISE IT ADDS ONTO IT
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//THIS SECTION HANDLES DECIMAL POINTS 
function Input_Decimal(dot) {
    //THIS ENSURES ACCIDENTAL CLICKING OF DECIMAL POINT DOESNT CAUSE BUGS IN OPERATION
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //IF DISPLAY_VALUE DOES NOT CONTAIN A DECIMAL POINT THEN IT WILL BE ADDED
        Calculator.Display_Value += dot;
    }
}

//THIS SECTION HANDLES OPERATORS
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //WHEN OPERATOR KEY IS PRESSED, CONVERTS CURRENT NUMBER DISPLAYED ON SCREEN TO A NUMBER THEN STORES RESULT IN 
    //CALCULATOR.FIRST_OPERAND IF IT DOESN'T ALREADY EXIST
    const Value_of_Input = parseFloat(Display_Value);
    //CHECKS IF OPERATOR ALREADY EXISTS AND IF WAIT_SECOND_OPERAND IS TRUE, THEN UPDATES OPERATOR AND EXITS FUNCTION
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }   else if (operator) { //CHECKS IF AN OPERATOR ALREADY EXISTS
        const Value_Now = First_Operand || 0;
        //IF OPERATOR EXISTS, PROPERTY LOOKUP IS PERFORMED FOR THE OPERATOR IN THE PERFORM_CALCULATION OBJECT
        //AND THE FUNCTION THAT MATCHES THE OPERATOR IS EXECUTED
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //ADDS A FIXED AMOUNT OF NUMBERS AFTER THE DECIMAL
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//THIS FUNCTION UPDATES SCREEN WITH CONTENTS OF DISPLAY_VALUE
function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();
//THIS SECTION MONITORS BUTTON CLICKS
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})

