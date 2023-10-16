let userscore = 0;
let compscore = 0;

function userchoose(userchosen) {
    document.querySelector(".Lower").style.display = "none";
    document.querySelector(".result-contianer").style.display = "flex";

    switch (userchosen) {
        case ('rock'):
            document.querySelector('#RockUser').style.display = "flex";
            break;
        case ('scissors'):
            document.querySelector('#ScissorsUser').style.display = "flex";
            break;
        case ('paper'):
            document.querySelector('#PaperUser').style.display = "flex";
            break;
    }

    let computerOption = ['rock', 'scissors', 'paper']
    let computerChoise = computerOption[Math.floor(Math.random() * 3)]
    switch (computerChoise) {
        case ('rock'):
            document.querySelector('#RockPc').style.display = "flex";
            break;
        case ('scissors'):
            document.querySelector('#ScissorsPc').style.display = "flex";
            break;
        case ('paper'):
            document.querySelector('#PaperPc').style.display = "flex";
            break;
    }

    if (userchosen == computerChoise) {
        document.querySelector(".next ").style.display = "none";
        document.querySelector(".WinLose").innerHTML = "<h1>TIE UP</h1><button onclick='homepage()' >PLAY AGAIN</button>"

    } else if (userchosen == 'rock') {

        switch (computerChoise) {
            case ('paper'):
                defeat();
                break;
            case ('scissors'):
                victory();
                break;
        }
    } else if (userchosen == 'scissors') {

        switch (computerChoise) {
            case ('rock'):
                defeat();
                break;
            case ('paper'):
                victory();
                break;
        }
    } else {

        switch (computerChoise) {
            case ('scissors'):
                defeat();
                break;
            case ('rock'):
                victory();
                break;
        }
    }

}

function victory() {
    document.querySelector(".WinLose").innerHTML = '<h1>YOU WIN</h1> <h2>AGAINST PC</h2> <button onclick="homepage()">PLAY AGAIN</button>'

    document.querySelectorAll(".PcwinAnimation").forEach((span) => {
        span.style.display = "none"
    })
    document.querySelectorAll(".UserwinAnimation").forEach((span) => {
        span.style.display = "block"
    })
    document.querySelector(".WinLose").childNodes[1].innerText = "YOU WIN";
    document.querySelector(".next ").style.display = "block";
    userscore = parseInt(localStorage.getItem("US")) + 1;
    if (localStorage.getItem("US")) {
        localStorage.setItem("US", userscore)
    }
    document.querySelector(".Yscore-number").innerText = localStorage.US;
}

function defeat() {
    document.querySelector(".WinLose").innerHTML = '<h1>YOU LOST</h1> <h2>AGAINST PC</h2> <button onclick="homepage()">PLAY AGAIN</button>'
    document.querySelectorAll(".UserwinAnimation").forEach((span) => {
        span.style.display = "none"
    })
    document.querySelectorAll(".PcwinAnimation").forEach((span) => {
        span.style.display = "block"
    })
    document.querySelector(".WinLose").childNodes[1].innerText = "YOU LOST";
    document.querySelector(".next ").style.display = "none";

    compscore = parseInt(localStorage.getItem("CS")) + 1;
    if (localStorage.getItem("CS")) {
        localStorage.setItem("CS", compscore)
    }
    document.querySelector(".Cscore-number").innerText = localStorage.CS;

}
window.onload = pageload();

function pageload() {
    if (localStorage.getItem("US") != undefined) {
        document.querySelector(".Yscore-number").innerText = localStorage.US;
    } else {
        localStorage.setItem("US", 0)
        document.querySelector(".Yscore-number").innerText = localStorage.US;
    }


    if (localStorage.getItem("CS") != undefined) {
        document.querySelector(".Cscore-number").innerText = localStorage.CS;
    } else {
        localStorage.setItem("CS", 0)
        document.querySelector(".Cscore-number").innerText = localStorage.CS;
    }

    console.log("page loaded")
}