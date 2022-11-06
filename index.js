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

let counthome = 0
function addoneh() {
    counthome+=1
    homeScoreEl.textContent = counthome
}
function addtwoh() {
    counthome+=2
    homeScoreEl.textContent = counthome
}
function addthreeh() {
    counthome+=3
    homeScoreEl.textContent = counthome
}
function reseth() {
    counthome = 0
    homeScoreEl.textContent = counthome
}

let countguest = 0
function addoneg() {
    countguest+=1
    guestScoreEl.textContent = countguest
}
function addtwog() {
    countguest+=2
    guestScoreEl.textContent = countguest
}
function addthreeg() {
    countguest+=3
    guestScoreEl.textContent = countguest
}
function resetg() {
    countguest = 0
    guestScoreEl.textContent = countguest
}



