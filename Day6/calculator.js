const AC = document.getElementById("AC");
const Back = document.getElementById("Back")
const add = document.getElementById("add")
const add2 = document.getElementById("add2")
const divide = document.getElementById("divide")

const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")

const mul = document.getElementById("mul")
const sub = document.getElementById("sub")
const equal = document.getElementById("equals")


const area = document.getElementById("digits")

function appendValue(value){
    area.value += value;
}

AC.addEventListener("click",() =>{
    area.value = "";
})
Back.addEventListener("click",()=>{
    area.value = area.value.slice(0,-1);
})

const buttons = [
    { element: zero, val: "0" },
    { element: one, val: "1" },
    { element: two, val: "2" },
    { element: three, val: "3" },
    { element: four, val: "4" },
    { element: five, val: "5" },
    { element: six, val: "6" },
    { element: seven, val: "7" },
    { element: eight, val: "8" },
    { element: nine, val: "9" },

    { element: add, val: "+" },
    {element: add2, val: "+"},
    { element: sub, val: "-" },
    { element: mul, val: "*" },
    { element: divide, val: "/" }
];

buttons.forEach(btn =>{
    btn.element.addEventListener("click",()=>{
        appendValue(btn.val)
    })
})

equal.addEventListener("click",() =>{
    try {
        area.value = eval(area.value);
    } catch (error) {
        console.error("Error evaluating expression:", error);
        area.value = "Error";
    }
})

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    
    if (e.key >= "0" && e.key <= "9") {
        appendValue(e.key);
    }

    
    if (["+", "-", "*", "/"].includes(e.key)) {
        appendValue(e.key);
    }

    
    if (e.key === "Enter") {
        e.preventDefault();
        equal.click();
    }

    
    if (e.key === "Backspace") {
        area.value = area.value.slice(0, -1);
    }

    
    if (e.key === "Escape") {
        area.value = "";
    }
});
