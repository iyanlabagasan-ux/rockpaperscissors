
// setting up images of rock papers scissors
const aipick = ["rock.png", "paper.png", "scissors.png"]

function play(answer) {


    // RNG
    const result = Math.round(Math.random() * 2)
    console.log(result)

    // // Replacing image
    document.getElementById("game-image").src = aipick[result]

    // Determine Match Results
    
        const computer = result
        const player = answer

        let resultData = "result"
        
        if (player == 0 && computer == 1) 
        { //player: rock & ai: paper
          resultData = "AI WINS"
        } 
        else if (player == 0 && computer == 2)
        { //player: rock & ai: scissors
          resultData = "PLAYER WINS"
        } 
        else if (player == 1 && computer == 0)
        { //player: paper & ai: rock
          resultData = "PLAYER WINS"
        }
        else if (player == 1 && computer == 2)
        { //player: paper & ai: scissors
          resultData = "AI WINS"
        } 
        else if (player == 2 && computer == 0)
        { //player: scissors & ai: rock
          resultData = "AI WINS"
        } 
        else if (player == 2 && computer == 1)
        { //player: scissors & ai: paper
          resultData = "PLAYER WINS"
        }
        else
        {
            resultData = "TIE"
        }
        addResult(resultData, computer, player)
}

const picknames = ["Rock", "Paper", "Scissors"]

function addResult(result, aipick, playerpick) {
    //Timestamp
    const timestamp = new Date().toLocaleString()

    const logs = document.getElementById("result")
    
    // Display bg + timestamp + Player Pick: + AI Pick: + Result: 
    
    logs.innerHTML += `<div class=
    "bg-${result == "PLAYER WINS" ? "green" : "red"}-500">  
    ${timestamp} 
    ||
    Player Pick : ${picknames[playerpick]}
    VS
    AI Pick : ${picknames[aipick]} || 
    Result : ${result} 
    </div>`
}
