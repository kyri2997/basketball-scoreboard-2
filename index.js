let countH = document.getElementById("countH-el");
let countA = document.getElementById("countA-el");

countHome = 0;
countAway = 0;

function plus1H() {
    let result = countHome += + 1;
    countH.textContent = result;
};

function plus2H() {
    let result = countHome += + 2;
    countH.textContent = result;
};

function plus3H() {
    let result = countHome += + 3;
    countH.textContent = result;
};

function plus1A() {
    let result = countAway += + 1;
    countA.textContent = result;
};

function plus2A() {
    let result = countAway += + 2;
    countA.textContent = result;
};

function plus3A() {
    let result = countAway += + 3;
    countA.textContent = result;
};