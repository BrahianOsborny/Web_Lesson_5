// cache the dom (storing for future use)
// & reset everything to 0 value
let humanCount = 0;
let AICount = 0;

function game(choice1) {

    const message =  document.getElementById("move-message");
    const pc = document.getElementById("PCmessage");



    let choice2 = "";
    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
        choice2 = "rock";
    } else if(computerChoice <= 0.67) {
        choice2 = "paper";
    } else {
        choice2 = "scissors";
    }

    console.log("User Choice: " + choice1);
    console.log("Computer Choice: " + choice2);

    if(choice1 === choice2) {
        pc.innerHTML = choice2.toString();
        message.innerHTML =  "The result is a tie!";
    }
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            // This Logic User wins
            pc.innerHTML = choice2.toString();
            message.innerHTML = "rock wins";
            humanCount++
            document.getElementById("user-score").innerHTML = humanCount;
        } else {
            pc.innerHTML = choice2.toString();
            message.innerHTML = "paper wins";
            AICount++
            document.getElementById("machine-score").innerHTML = AICount;
        }
    }
    if(choice1 === "paper") {
        if (choice2 === "rock") {
            pc.innerHTML = choice2.toString();
            message.innerHTML = "paper wins";
            humanCount++
            document.getElementById("user-score").innerHTML = humanCount;
        } else {
            if (choice2 === "scissors") {
                pc.innerHTML = choice2.toString();
                message.innerHTML = "scissors wins";
                AICount++
                document.getElementById("machine-score").innerHTML = AICount;
            }
        }
    }

    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            pc.innerHTML = choice2.toString();
            message.innerHTML = "rock wins";
            humanCount++
            document.getElementById("user-score").innerHTML = humanCount;
        } else {
            if (choice2 === "paper") {
                pc.innerHTML = choice2.toString();
                message.innerHTML = "scissors wins";
                AICount++
                document.getElementById("machine-score").innerHTML = AICount;
            }
        }
    }

};
