import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css"
import isWinner from "../../helpers/checkWinner"

function Grid({numberOfCard}){

   const [board,setBoard]=useState(Array(numberOfCard).fill(''));
    const [turn,setTurn]=useState(true);   //  true => O , false=> X
    const [winner,setWinner]=useState(null);
 
    function play(index){
        if(turn==true){
          board[index]="O";
        }
        else{
          board[index]="X";
        }
        const win=isWinner(board,turn?"O":"X");
        if(win){
        setWinner(win);
        }
        setBoard([...board])
        setTurn(!turn)
    }

   return(
     <div className="grid-wrapper">
         {
            winner&& (
              <>
              <h1 className="turn-highlight">Winner is {winner}</h1>
              </>
            )
         }
        <h1 className="turn-highlight">Current turn {(turn)?'O':'X'}</h1>
       <div className="grid">
       {board.map((element,idx)=>(<Card gameEnd={winner?turn:false} key={idx} onPlay={play} Player={element} index={idx}/>))}
       </div>
       <button className="reset" onClick={()=>{setBoard(Array(numberOfCard).fill('')) ;setTurn(true);setWinner(null)}}>Reset Game</button>
     </div>
   )
}

export default Grid;