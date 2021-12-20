document.getElementById("send2").style.display="none";
document.getElementById("send3").style.display="none";

function logout(){
    window.location="main.html";
}
function sendquestion(){
    document.getElementById("question").innerHTML="How to earn money in youtube ?";
    document.getElementById("op1").innerHTML="by giving out content regularly";
    document.getElementById("op2").innerHTML="by waiting for a certain amount of subs to upload anything";
    document.getElementById("op3").innerHTML="by giving up yt cause of not much reaction on channel after some time";
    document.getElementById("op4").innerHTML="by increasing subs using option 1";

}
function answersend(){
    var get_answer=document.getElementById("answerer").value;
    var actual_answer="option 4";
    if(actual_answer == get_answer){
        document.getElementById("question").innerHTML="How to earn money in youtube ?";
        document.getElementById("op1").innerHTML="corect answer !!";
        document.getElementById("op2").innerHTML="corect answer !!";
        document.getElementById("op3").innerHTML="corect answer !!";
        document.getElementById("op4").innerHTML="corect answer !!";
        document.getElementById("send2").style.display="visible";
        document.getElementById("answerer").value="";
    }
}

function answersend2(){
    document.getElementById("question").innerHTML="What is the most biggest channel on youtube ?";
    document.getElementById("op1").innerHTML="pewdiepie";
    document.getElementById("op2").innerHTML="Mr beast";
    document.getElementById("op3").innerHTML="Music";
    document.getElementById("op4").innerHTML="T SERIES";   
    document.getElementById("send3").style.display="visible";
}

function question_3(){
    document.getElementById("question").innerHTML="When was youtube created ?";
    document.getElementById("op1").innerHTML="14 feb,1999";
    document.getElementById("op2").innerHTML="14 feb, 2000";
    document.getElementById("op3").innerHTML="14 feb, 2001";
    document.getElementById("op4").innerHTML="14 feb,2005";  
}