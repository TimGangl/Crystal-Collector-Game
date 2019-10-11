$(document).ready(function () {

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

    fluorValue = generateCrystalValue();
    labraValue = generateCrystalValue();
    opalValue = generateCrystalValue();
    rubyValue = generateCrystalValue();

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
        return Math.floor(Math.random() * (12 - 1)) + 1;

    };
    console.log(fluorValue);
    console.log(labraValue);
    console.log(opalValue);
    console.log(rubyValue);

    //reset game
    function resetGame() {
        scoreUser;
        fluorValue = generateCrystalValue();
        labraValue = generateCrystalValue();
        opalValue = generateCrystalValue();
        rubyValue = generateCrystalValue();
        generateTargetNum();
        console.log(fluorValue);
        console.log(labraValue);
        console.log(opalValue);
        console.log(rubyValue);
    };

    function tallyGems(x) {
        scoreUser += x;
        userScore.text(scoreUser);
    };

    //increment win or loss
    function compareScore() {
        if (scoreUser === numTarget) {
            winsTally++;
            wins.text(winsTally);
            resetGame();
            alert("You Won!! Good Job!");
            scoreUser = 0;
        } else if (scoreUser > numTarget) {
            lossesTally++;
            losses.text(lossesTally);
            resetGame();
            alert("You Lost! Boo Hoo!");
            scoreUser = 0;
        };
    };

    //Game---------------------------------------------------
    //add gem to score and display
    // when click crystals add to score
    fluor.on("click", function () {
        tallyGems(fluorValue);
        compareScore();
    });

    labra.on("click", function () {
        tallyGems(labraValue);
        compareScore();
    });

    opal.on("click", function () {
        tallyGems(opalValue);
        compareScore();
    });

    ruby.on("click", function () {
        tallyGems(rubyValue);
        compareScore();
    });
});