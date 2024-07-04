import Icons from "../Icon/Icon";
import "./Card.css"
function Card({gameEnd,Player,onPlay,index}){
     let icon=<Icons/>
     if(Player=="X"){
        icon=<Icons name="cross"/>
     }
     else if(Player=="O"){
        icon=<Icons name="circle"/>
     }
     
   return(
    <div className="card" onClick={()=>{!gameEnd&&Player==""&&onPlay(index)}}>
        {icon}
    </div>
   )
    
}
export default Card;