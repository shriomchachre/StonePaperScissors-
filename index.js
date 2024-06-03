let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userC = document.querySelector("#user");
const compC = document.querySelector("#comp");

const getCompch = () => {
    const op = ["rock", "paper", "scissor"];
    const ind = Math.floor(Math.random()*3);
    return op[ind];
}

const draw = () => {
    user = 0;
    comp = 0;
    userC.innerText = user;
    compC.innerText = user;
    msg.innerText = "Game Draw, Play Again."
    msg.style.backgroundColor = "#081b31";
}

const winner = (userWin, userch, compch) => {
    if(userWin){
        user++;
        userC.innerText = user;
        msg.innerText = `YOU WON! Your ${userch} beats ${compch}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comp++;
        compC.innerText = user;
        msg.innerText = `YOU LOSE!! ${compch} beats Your ${userch}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userch) => {
    const compch = getCompch();

    if(userch === compch){
        draw();
    }
    else{
        let userWin = true;
        if(userch === "rock"){
            userWin = compch === "paper" ? false : true;
        }
        else if(userch === "paper"){
            userWin = compch === "scissor" ? false : true;
        }
        else{
            userWin = compch === "rock" ? false : true;
        }

        winner(userWin, userch, compch );
    }
}

choices.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userch = ch.getAttribute("id");
        playgame(userch);
    });
});

