let boxes = document.querySelectorAll("input");

if (location.reload) {
  boxes.forEach((element) => {
    element.value = "";
  });
}

var player_turn = true;
var gameState = ["" , "" , "" , "" , "" , "" , "" , "" , ""]
boxes.forEach((element) => {
    if(player_turn == true){
        element.addEventListener("click", function () {
            if(this.value == ""){
                this.value = "X";
                gameState[this.id] = "X"
                player_turn = false
                winner()
                computerTurn()
            }
        });
    }
});
function emptySpaces() {
    spaces = []
    boxes.forEach((element) => {
        if(element.value == ""){
            spaces.push(element.id)
        }
    });
    return spaces
}
function computerTurn() {
    if(player_turn == false && emptySpaces().length != 0){
        let spaces = emptySpaces()
        let random = Math.floor(Math.random() * spaces.length);
        boxes[spaces[random]].value = "0"
        gameState[spaces[random]] == "0"
        player_turn = true
        winner()
    }
}
function winner() {
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


    for (let index = 0; index < winningCombinations.length; index++) {
        let winningCondition = winningCombinations[index]

        let a = gameState[winningCondition[0]]
        let b = gameState[winningCondition[1]]
        let c = gameState[winningCondition[2]]

        if(a === "" || b === "" || c === "") continue

        if(a == b && b==c){
            document.getElementById('winner').innerHTML = "Winner "+a
            restartGame()
        }
        
    }
}


function restartGame() {
    gameState = ["" , "" , "" , "" , "" , "" , "" , "" , ""]
    player_turn = true;
    boxes.forEach((element) => {
        element.value = "";
      });
}