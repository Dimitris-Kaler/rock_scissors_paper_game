const gameContainer = document.getElementById("container")
const winningMessage = document.getElementById("resultWinningMessage")
const lostMessage = document.getElementById("resultLostMessage")
const resetBtn1 = document.getElementsByClassName("reset")[0]
const resetBtn2 = document.getElementsByClassName("reset")[1]

let winningsPerGame = document.getElementById("gameLength")
console.log(gameLength)

let start = document.querySelector("#button")
//let pick = document.getElementsByTagName("select")[0].value;
let playerScore = 0
let comScore = 0
let comChoice = document.querySelector("#randomChoice")
let chosenElement = document.getElementsByClassName("choice")[0]
let computerChosenElement = document.getElementsByClassName("choice")[1]
let playerChoice = document.getElementById("myChoice")
let playerWinningCounter = document.getElementsByClassName("playerWinning")[0]
//console.log(playerWinningCounter)
let comWinningCounter = document.getElementsByClassName("comWinning")[0]
let pcImages = ["images/rock_left.png","images/scissors_left.png","images/paper_left.png"]


countGame = (event) => {
    let gameLength = document.getElementById("gameLength").value
    //VALIDATION
    if (gameLength == "" || isNaN(gameLength)) {
        alert("please choose the number of winnings to end the game")
    } else if (gameLength < 1 || gameLength > 50) {
        //event.preventDefault()
        alert("the number must be between 1 and 50");
    }
    else {
        winningsPerGame.disabled = true;
        start.disabled = true



        let pick = document.getElementsByTagName("select")[0].value;
        //console.log(pick)
        //console.log(playerChoice)

        if (pick == "rock") {
            playerChoice.style.background = "url('images/rock.png') center center no-repeat"
            playerChoice.style.backgroundSize = "contain"
            chosenElement.innerHTML = "rock"
        }
        if (pick == "scissors") {
            playerChoice.style.background = "url('images/scissors.png') center center no-repeat"
            playerChoice.style.backgroundSize = "contain"
            chosenElement.innerHTML = "scissors"
        }
        if (pick == "paper") {
            playerChoice.style.background = "url('images/paper.png') center center no-repeat"
            playerChoice.style.backgroundSize = "contain"
            chosenElement.innerHTML = "paper"
        }


        //1st WAY TO TAKE RANDOM VALUE

        // pcImages.sort(function (a, b) {
        //     return 0.5 - Math.random()
        // })

        // let pcSelect = pcImages[0]

        //2 WAYTO TO TAKE RANDOM VALUE

        const randomValue = (list) => {
            pcSelect = list[Math.floor(Math.random() * list.length)];
            return pcSelect
        };
        randomValue(pcImages)

        if (pcSelect == "images/rock_left.png") {
            computerChosenElement.innerHTML = "rock"
        }
        if (pcSelect == "images/scissors_left.png") {
            computerChosenElement.innerHTML = "scissors"
        }
        if (pcSelect == "images/paper_left.png") {
            computerChosenElement.innerHTML = "paper"
        }
        console.log(pcSelect)
        comChoice.style.background = `url(${pcSelect})center center no-repeat`
        comChoice.style.backgroundSize = "contain"


        //COMPARISON



        let comparisonResult = document.getElementById("comparison")


        function gameReset() {
            setTimeout(function () {
                start.disabled = false
                chosenElement.innerHTML = ""
                computerChosenElement.innerHTML = ""
                comparisonResult.innerHTML = ""
                pcSelect == ""
                comChoice.style.background = ""
                playerChoice.style.background = ""
            }, 2000)

        }

        function playerWin() {
            playerScore++
            playerWinningCounter.innerHTML = playerScore;
            if (playerScore == gameLength) {
                setTimeout(function () {
                    gameContainer.style.display = "none"
                    winningMessage.style.display = "block"
                    resetBtn1.addEventListener("click", () => {
                        window.location.reload()
                    })

                }, 2000)

            }
        }

        function comWin() {
            comScore++
            comWinningCounter.innerHTML = comScore;
            if (comScore == gameLength) {
                setTimeout(function () {
                    gameContainer.style.display = "none"
                    lostMessage.style.display = "block"
                    resetBtn2.addEventListener("click", () => {
                        window.location.reload()
                    })
                }, 2000)
                //alert("GAMEOVER!!YOU LOSE!")
                // gameReset()
                //window.location.reload(true)
            }
        }

        if (chosenElement.innerHTML == computerChosenElement.innerHTML) {
            comparisonResult.innerHTML = "The result is a tie!"
        }
        if (chosenElement.innerHTML == "rock" && computerChosenElement.innerHTML == "scissors") {
            comparisonResult.innerHTML = "rock wins"
            playerWin()

        }
        if (chosenElement.innerHTML == "rock" && computerChosenElement.innerHTML == "paper") {
            comparisonResult.innerHTML = "paper wins"
            comWin()
        }
        if (chosenElement.innerHTML == "scissors" && computerChosenElement.innerHTML == "rock") {
            comparisonResult.innerHTML = "rock wins"
            comWin()
        }
        if (chosenElement.innerHTML == "scissors" && computerChosenElement.innerHTML == "paper") {
            comparisonResult.innerHTML = "scissors wins"
            playerWin()
        }
        if (chosenElement.innerHTML == "paper" && computerChosenElement.innerHTML == "rock") {
            comparisonResult.innerHTML = "paper wins"
            playerWin()
        }
        if (chosenElement.innerHTML == "paper" && computerChosenElement.innerHTML == "scissors") {
            comparisonResult.innerHTML = "scissors wins"
            comWin()
        }

    }
    gameReset()



    // //end game winner
    // if (playerScore == gameLength) {
    //     alert("CONGRATULATIONS!!YOU WIN!")
    //     gameReset()
    //     chosenElement.innerHTML == ""
    //     computerChosenElement.innerHTML == ""
    // }


    // if (comScore == gameLength) {
    //     alert("GAMEOVER!!YOU LOSE!")
    //     gameReset()
    //     chosenElement.innerHTML == ""
    //     computerChosenElement.innerHTML == ""

    // }


}


start.addEventListener("click", countGame)


