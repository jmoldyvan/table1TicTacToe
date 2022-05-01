
//TODO Make classes tidy up 

let score1 = 0
let score2 = 0
let turnCount = 1;
let board = []
const boxElements = document.querySelectorAll('.box')
const btn = document.querySelector('.reset');
btn.addEventListener('click', resetbut);
const winBox = document.querySelector('.win')





//hard Reset clear board and reset score.
function resetbut(){
 boxElements.forEach(element =>{
      element.innerText = ''
      score1 = 0
      score2 = 0
      document.querySelector('.player2').innerText = `Player Two:  ${score2}`
      document.querySelector('.player1').innerText = `Player One:  ${score1}`
    })  
}

//Soft reset board
function reset () {
  if(turnCount ===  0 ){
   winBox.addEventListener('click', clear) 
    document.querySelector('.container').addEventListener('click',  clear)
    function clear(){
    boxElements.forEach(element =>{
      element.innerText = ''
   document.querySelector('.container').removeEventListener('click', clear)
      winBox.innerText = ''
    })  
      turnCount = 1
  }
  }       
}

//Event Listeners 

boxElements.forEach(element =>{
  element.addEventListener('click', function addXO(event){
    reset()
    let boxInside = event.target
    if(turnCount === 1 && boxInside.innerHTML === '') {
       boxInside.innerHTML = '<h2>X</h2>'
       turnCount += 1
       console.log(boxInside.innerText)
      fillBoard()
      winner()
     } else if(turnCount === 2 && boxInside.innerHTML === '') {
       boxInside.innerHTML = '<h2 class="x">O</h3>'
       turnCount -= 1
       console.log(boxInside.innerText)
      fillBoard()
      winner()
     }
  })
}
)

//fill board array with values X or O 





 function fillBoard () {
   board = []
boxElements.forEach(element =>{
  board.push(element.innerText) 
}
)
console.log(board)
 }

// Find out If a player has Won 

function winner () {

  //player one 8 ways too win
  if (board[0] === 'X' && board[1] === 'X'&& board[2] === 'X'){
    console.log('player One Wins')
    win()
  }
  else if (board[3] === 'X' && board[4] === 'X'&& board[5] === 'X'){
    console.log('player One Wins')
     win()
  }
  else if (board[6] === 'X' && board[7] === 'X'&& board[8] === 'X'){
    console.log('player One Wins')
     win()
  }
  else if (board[0] === 'X' && board[3] === 'X'&& board[6] === 'X'){
    console.log('player One Wins')
     win()
  }
  else if (board[1] === 'X' && board[4] === 'X'&& board[7] === 'X'){
    console.log('player One Wins')
     win()
  }
  else if (board[2] === 'X' && board[5] === 'X'&& board[8] === 'X'){
    console.log('player One Wins')
     win()
  }
  else if (board[0] === 'X' && board[4] === 'X'&& board[8] === 'X'){
    console.log('player One Wins')
     win()
  }
  else if (board[2] === 'X' && board[4] === 'X'&& board[6] === 'X'){
    console.log('player One Wins')
     win()
  }
    
//player two tests
    
  else if (board[0] === 'O' && board[1] === 'O'&& board[2] === 'O'){
    console.log('player two Wins')
     win()
  }
  else if (board[3] === 'O' && board[4] === 'O'&& board[5] === 'O'){
    console.log('player One Wins')
     win()
  }
  else if (board[6] === 'O' && board[7] === 'O'&& board[8] === 'O'){
    console.log('player two Wins')
     win()
  }
  else if (board[0] === 'O' && board[3] === 'O'&& board[6] === 'O'){
    console.log('player two Wins')
     win()
  }
  else if (board[1] === 'O' && board[4] === 'O'&& board[7] === 'O'){
    console.log('player two Wins')
     win()
  }
  else if (board[2] === 'O' && board[5] === 'O'&& board[8] === 'O'){
    console.log('player two Wins')
     win()
  }
  else if (board[0] === 'O' && board[4] === 'O'&& board[8] === 'O'){
    console.log('player two Wins')
     win()
  }
  else if (board[2] === 'O' && board[4] === 'O'&& board[6] === 'O'){
    console.log('player two Wins')
     win()
  }
    
  //final draw test 

  else if (board[0] != '' && board[1] != '' &&board[2] != '' &&board[3] != '' &&board[4] != '' &&board[5] != '' &&board[6] != '' &&board[7] != '' &&board[8] != '' ){
  winBox.innerText = 'DRAW WE ALL WIN!'
  turnCount = 0
  winBox.addEventListener('click', reset)
  }
}

// display winner and set board

function win (){
  console.log(turnCount)
  if (turnCount === 2){
  turnCount = 0
  winBox.addEventListener('click', reset)
  score1 += 1 
  winBox.innerText = 'Player one wins!'
  document.querySelector('.player1').innerText = `Player One:  ${score1}`
  }
  else if (turnCount ===1){
  winBox.innerText = 'Player two wins!'
  turnCount = 0
  winBox.addEventListener('click', reset)
  score2 += 1
  document.querySelector('.player2').innerText = `Player Two:  ${score2}`
  }
}


































// //This works but if you click in the wrong place it make the whole container an x. but doesnt not work if you use box as the queryselector
// document.querySelector('.container').addEventListener('click', function addXO(event){
//   let boxInside = event.target
//   console.log(boxInside)
//  console.log(turnCount)
//   if(turnCount%2!==0) {
//     boxInside.innerHTML = '<h2>X</h2>'
//     turnCount += 1
//   } else if(turnCount%2===0) {
//     boxInside.innerHTML = '<h2>O</h2>'
//     turnCount += 1
//   }
// })



// document.querySelector('.box').addEventListener('click', function addXO(){
//   let boxInside = event.target
//   console.log(boxInside)
//  console.log(turnCount)
//   if(turnCount%2!==0) {
//     boxInside.innerHTML = '<h2>X</h2>'
//     turnCount += 1
//   } else if(turnCount%2===0) {
//     boxInside.innerHTML = '<h2>O</h2>'
//     turnCount += 1
//   }
// })



// class Game{
//   constructor(x,o){
//     this.x = x;
//     this.o = o;
//   }

  
  
// }

