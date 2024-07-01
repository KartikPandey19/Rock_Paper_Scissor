import{useState} from "react"
import turns from "./data//pcTurns"
export default function getGame(){
    const [res,setRes] = useState();
    const[score,setScore] = useState(0);
    const[pcscore,setPcscore] = useState(0);
    const [yvalue,setYvalue] = useState("");
    const [pvalue,setPvalue] = useState("");
    const [round,setRound] = useState(1);
    const match = (e)=>{
        setRound(round+1);
        if(round<6){
            const value = e.target.value;
        setYvalue(value);
        const value2 = turns[Math.floor(Math.random()*2)];
        setPvalue(value2);
        if(value==value2)return setRes("draw");
        else if(value=="rock" && value2=="paper"){
            setRes("pc won");
            setPcscore(pcscore+1);
        }else if(value=="rock" && value2=="scissor"){
            setRes("you won");
            setScore(score+1);
        }else if(value=="paper" && value2=="scissor"){
            setRes("pc won");
            setPcscore(pcscore+1);
        }else if(value=="paper" && value2=="rock"){
            setRes("you won");
            setScore(score+1);
        }else if(value=="scissor" && value2=="rock"){
            setRes("pc won");
            setPcscore(pcscore+1);
        }else if(value=="scissor" && value2=="paper"){
            setRes("you won");
            setScore(score+1);
        }
        }else{
            if(score>pcscore){
            alert("wooohoooo!!! You won");
            setPcscore(0);
            setScore(0);
            setRound(1);
            setYvalue("");
            setPvalue("");
            setRes("");
        }else if(score==pcscore){
            alert("ohhhhhhhhh you drewd");
            setPcscore(0);
            setScore(0);
            setRound(1);
            setYvalue("");
            setRes("");
            setPvalue("");

        }else{
            alert("oops!!! You lost");
            setPcscore(0);
            setScore(0);
            setRound(1);
            setYvalue("");
            setRes("");
            setPvalue("");

        }
    }
    }
        
        
    

    return(
      <div>
          <div className="player">
            <h1>Rock Paper Scissor</h1>
            <h5> NOTE: Best of six Round</h5>
            <h5>Round: {round}</h5>
            <button value="rock" onClick={match}>rock</button>
            <button value="paper" onClick={match}>paper</button>
            <button value="scissor" onClick={match}>scissor</button>
            <p>you: {yvalue}</p>
            <p>pc: {pvalue}</p>
            <p>{res}</p>
            <p>Your Score {score}</p>
            <p>Pc Score {pcscore}</p>
            <button onClick={()=>{
                 setScore(0);
                 setPcscore(0);
              setRound(1);

            }}>Reset</button>
            </div>

      </div>
    )
}