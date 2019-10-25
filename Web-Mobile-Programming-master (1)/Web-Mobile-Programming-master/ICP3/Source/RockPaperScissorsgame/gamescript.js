

var playerRoll;

//rock click
function rock()
{
    playerRoll = 1;

    var computerRoll = Math.floor(Math.random() * 3 + 1);

    //draw case
    if (computerRoll === playerRoll) {

        document.getElementById("rock").innerHTML=" The Computer chose rock too, game is draw"

    }

    // rock vs  paper
    else if (playerRoll === 1 && computerRoll === 2) {
        document.getElementById("rock").innerHTML="Computer choose paper , computer wins"

    }

    // rock vs  scissors
    else {
        document.getElementById("rock").innerHTML="computer choose scissors ,  you won"


    }
}

//paper click
function paper()
{document.getElementById("rock").Text="";
    console.log(document.getElementById("rock").innerHTML)
    playerRoll = 2;
    var computerRoll = Math.floor(Math.random() * 3 + 1);

    //draw
    if (computerRoll === playerRoll) {
        document.getElementById("rock").innerHTML= " The Computer chose paper too, game is draw";

        //paper vs  rock
    } else if (playerRoll === 2 && computerRoll === 1) {
        document.getElementById("rock").innerHTML="Computer choose rock , you won";


        //paper vs  scissors
    } else {
        document.getElementById("rock").innerHTML="computer choose scissors , you lost";


    }


}

//scissors click
function scissors()
{
    playerRoll = 3;
    var computerRoll = Math.floor(Math.random() * 3 + 1);
    //draw
    document.getElementById("rock").Text="";
    if (computerRoll === playerRoll) {

        document.getElementById("rock").innerHTML=" The Computer chose scissors too, game is draw"

    }
        //scissors vs  paper
    else if (playerRoll === 3 && computerRoll === 2) {
        document.getElementById("rock").innerHTML="Computer choose paper , you lost"

    } else {
        document.getElementById("rock").innerHTML="computer choose scissors , you won"

    }

}

