//element var
var fluor = $("#fluorite");
var labra = $("#labradorite");
var opal = $("#opal");
var ruby = $("#ruby");
var targetNum = $("#target-num");
var wins = $("#wins");
var losses = $("#losses");
var userScore = $("#user-score");

//button values
var numTarget = 0;
var winsTally = 0;
var lossesTally = 0;
var scoreUser = 0;

var fluorValue = 0;
var labraValue = 0;
var opalValue = 0;
var rubyValue = 0;




//functions-----------

//  generate random number
function generateTargetNum() {
    var result = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    numTarget = result;
    targetNum.text(result);
}
generateTargetNum();

//display random number on screen
targetNum.text(numTarget);

// assign random values to crystals
function generateCrystalValue() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;

};

fluorValue = generateCrystalValue();
labraValue = generateCrystalValue();
opalValue = generateCrystalValue();
rubyValue = generateCrystalValue();

console.log(fluorValue);
console.log(labraValue);
console.log(opalValue);
console.log(rubyValue);


//reset game
function resetGame() {
    fluorValue = generateCrystalValue();
    labraValue = generateCrystalValue();
    opalValue = generateCrystalValue();
    rubyValue = generateCrystalValue();
    generateTargetNum();
    scoreUser = 0;
};

//increment win or loss
if (scoreUser === numTarget) {
    winsTally++;
    resetGame();
    alert("You Won!! Good Job!");
} else if (scoreUser > numTarget) {
    lossesTally++;
    resetGame();
    alert("You Lost! Boo Hoo!");
};


//display win or loss
wins.text(winsTally);
losses.text(lossesTally);
//display alert for win or loss


//add gem to score and display
function tallyGems(x) {
    scoreUser += x;
    userScore.text(scoreUser);
}
// when click crystals add to score
fluor.on("click", function () {
    tallyGems(fluorValue);
});

labra.on("click", function () {
    tallyGems(labraValue);
});

opal.on("click", function () {
    tallyGems(opalValue);
});

ruby.on("click", function () {
    tallyGems(rubyValue);
});
console.log(scoreUser);

function gamePlay() {
    resetGame();
    fluor.on("click", function () {
        tallyGems(fluorValue);
    });

    labra.on("click", function () {
        tallyGems(labraValue);
    });

    opal.on("click", function () {
        tallyGems(opalValue);
    });

    ruby.on("click", function () {
        tallyGems(rubyValue);
    });
};
gamePlay();