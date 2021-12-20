function play(){
    var x="Squider.m4a";
    x.play();
}
function correct(){
document.getElementById("player1_marbel").innerHTML=5;
document.getElementById("player2_marbel").innerHTML=6;
document.getElementById("tell_result").innerHTML="Oh No !! player 2 eliminated !!";
}

function wrong(){
    document.getElementById("player1_marbel").innerHTML=5;
    document.getElementById("player2_marbel").innerHTML=6;
    document.getElementById("tell_result").innerHTML="Wrong guess , turn of player 2 ";
    window.location="main.html";
}
function correct2(){
    document.getElementById("player1_marbel").innerHTML=5;
    document.getElementById("player2_marbel").innerHTML=6;
    document.getElementById("tell_result").innerHTML="Oh no, player 1 eliminated !!";
}
function wrong2(){
    document.getElementById("player1_marbel").innerHTML=5;
    document.getElementById("player2_marbel").innerHTML=6;
    document.getElementById("tell_result").innerHTML="Wrong guess, turn of player 1 !!";
    window.location="main.html";
}