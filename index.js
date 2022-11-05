// Selectors
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

// let homeScoreBtnOne = document.getElementById("home-score-btn-1");
// let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
// let homeScoreBtnThree = document.getElementById("home-score-btn-3");
// let resetHomeScore = document.getElementById("reset-home-score-btn");

// let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
// let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
// let guestScoreBtnThree = document.getElementById("guest-score-btn-3");
// let guestHomeScore = document.getElementById("reset-guest-score-btn");

let count = 0
function addoneh() {
    count+=1
    homeScoreEl.textContent = count
}
function addtwoh() {
    count+=2
    homeScoreEl.textContent = count
}
function addthreeh() {
    count+=3
    homeScoreEl.textContent = count
}
function reseth() {
    count = 0
    homeScoreEl.textContent = count
}


function addoneg() {
    count+=1
    guestScoreEl.textContent = count
}
function addtwog() {
    count+=2
    guestScoreEl.textContent = count
}
function addthreeg() {
    count+=3
    guestScoreEl.textContent = count
}
function resetg() {
    count = 0
    guestScoreEl.textContent = count
}



