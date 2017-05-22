// write your code here to make the tests pass

function TennisGame(nameOne, nameTwo, playerOneScore = 0, playerTwoScore = 0) {
    this.playerOneName = nameOne;
    this.playerTwoName = nameTwo;
    this.playerOneScore = playerOneScore;
    this.playerTwoScore = playerTwoScore;
    this.playerOneScores = function () {
        this.playerOneScore++;
    }
    this.playerTwoScores = function () {
        this.playerTwoScore++;
    }
    this.isDeuce = function () {
        if (this.playerOneScore === this.playerTwoScore && this.playerOneScore >= 3) {
            return true;
        }
        else {
            return false;
        }
    }
    this.playerWithHighestScore = function () {
        if (this.playerOneScore > this.playerTwoScore) {
            return this.playerOneName;
        }
        else {
            return this.playerTwoName;
        }
    }
    this.hasAdvantage = function () {
        if (this.isDeuce && this.playerOneScore != this.playerTwoScore && this.playerOneScore > 3 || this.playerTwoScore > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    this.hasWinner = function () {
        if (this.playerOneScore > 3 || this.playerTwoScore > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    this.translateScore = function (score) {
        var escore = '';
        switch (score) {
            case 0:
                escore = 'Love';
                break;
            case 1:
                escore = 'Fifteen';
                break;
            case 2:
                escore = 'Thirty';
                break;
            case 3:
                escore = 'Forty';
                break;
            default:
                break;
        }
        return escore;
    }
    this.getScore = function () {
        if (this.playerOneScore >= 3 && this.playerOneScore - this.playerTwoScore >= 2) {
            return (this.playerOneName + ' wins');
        }
        else if (this.playerTwoScore >= 3 && this.playerTwoScore - this.playerOneScore >= 2) {
            return (this.playerTwoName + ' wins');
        }
        else if (this.playerOneScore >= 4 && this.playerOneScore - this.playerTwoScore === 1) {
            return ('Advantage ' + this.playerOneName);
        }
        else if (this.playerTwoScore >= 4 && this.playerTwoScore - this.playerOneScore === 1) {
            return ('Advantage ' + this.playerTwoName);
        }
        else if (this.playerOneScore > 2 && this.playerOneScore === this.playerTwoScore) {
            return 'Deuce';
        }
        else if (this.playerOneScore = 1 && this.playerOneScore === this.playerTwoScore) {
            return 'Fifteen all';
        }
        else if (this.playerOneScore = 2 && this.playerOneScore === this.playerTwoScore) {
            return 'Thirty all';
        }
        else {
            return 'Fifteen, Thirty';
        }
    }
}
/*
var playerOneScore = 0;
var playerTwoScore = 0;
var play;
var isDeuce = false;
var hasWinner = false;
var hasAdvantage = false;

function playerWithHighestScore();
function translateScore();
function getScore();

function playGame() {

    getScore()
    {
        //randomly choose a winner
        play = math.floor(math.random()) + 1;
        //as long as no player has 40 points yet 
        if (playerOneScore != 3 && playerTwoScore != 3) {
            if (play === 1) {
                playerOneScore++;
            }
            else {
                playerTwoScore++;
            }
        }
    }


    translateScore(playerOneScore)
    {
        switch (playerOneScore) {
            case '0':
                return 'Love';
            case '1':
                return 'Fifteen';
            case '2':
                return 'Thirty';
            case '3':
                return 'Forty';
        }
    }
    translateScore(playerTwoScore)
    {
        switch (playerTwoScore) {
            case '0':
                return 'Love';
            case '1':
                return 'Fifteen';
            case '2':
                return 'Thirty';
            case '3':
                return 'Forty';
        }
    }


}


*/