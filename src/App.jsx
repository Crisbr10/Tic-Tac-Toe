import './App.css'
import {useState} from "react";
import confetti from 'canvas-confetti' 
import Square from './components/Square'
import {TURNS} from './components/Constants'
import { checkWinner, checkEndGame } from './logic/Board';
import { Winner } from './components/Winner';
import { Tablero } from './components/Tablero';



function App() {
  const [board,setBoard]=useState(Array(9).fill(null))
  const [turn,setTurn]=useState(TURNS.X)
  const [winner,setWinner]=useState(null)
  
  

  const resetGame=()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard=(index)=>{
    if(board[index]||winner) return
    const newBoard=[...board]
    newBoard[index]=turn
    setBoard(newBoard)

    const newTurn=()=>turn===TURNS.X ? TURNS.O :TURNS.X
    setTurn(newTurn)
    const newWinner=checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
      confetti()
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        <Tablero board={board} updateBoard={updateBoard}/>
      </section>
      <section className='turn'>
        <Square isSelected={turn===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn===TURNS.O}>{TURNS.O}</Square>
      </section>
      <Winner resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
