// this is for my truths and lie game 

// global variable 
let fname = ""

//greet function
function greet(){
    let greetParagraph = document.getElementById("greet");

    // get values form the form
    fname = document.getElementById("fname").value;
    let Lname = document.getElementById("Lname").value;
    let age = document.getElementById("age").value;

    // show result
    greetParagraph.innerHTML = "greetings " + age + "year old " + fname + Lname;
}
function trivia(){
    fname = document.getElementById("fname").value;
// get handle to the result of the parapgraph
    let triviaAnswer = document.getElementById("trivia-answer")

    //get results of selected trivia answer
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    
    // process asnwer
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", your wrong lil man";
    }
    if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", your wrong lil man";
    }
    else{
        triviaAnswer.innerHTML = fname + ", your right big man";
    }
}

function trivia(){
    fname = document.getElementById("fname").value;
    let truthNlieAnswer = document.getElementById("truthNlie")

    //get results of selected trivia answer
    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let lieSelected = document.getElementById("lie").checked;
    
    // process asnwer
    if (truth1Selected) {
        truthNlieAnswer.innerHTML = fname + ", your wrong lil man, thats a truth";
    }
    if (truth2Selected) {
        truthNlieAnswer.innerHTML = fname + ", your wrong lil man, thats a truth";
    }
    if (lieSelected) {
        truthNlieAnswer.innerHTML = fname + ", your right big man, thats my liu";
    }
}