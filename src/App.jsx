import React, {useState} from "react"; 
import Icon from "./Components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




let arr = new Array(9).fill("")
const App = () => {
   let [isCross, setIsCross] = useState(true)
   let [winMessage, setWinMessage] = useState("")

   // play Again
   const playAgain = () => {
       arr.fill("")
       setIsCross(true)
       setWinMessage("")
   }




   // Find Winner

   const findWinner = () => {
    // row 1
      if(arr[0] == arr[1] && arr[0]==arr[2] && arr[0] != ""){
          setWinMessage(arr[0]+"  has won 🎉")
      }
      // row 2: 
        else if(arr[3] == arr[4] && arr[3]==arr[5] && arr[3] != ""){
            setWinMessage(arr[3]+"  has won 🎉")
        }
        // row 3:
        else if(arr[6] == arr[7] && arr[6]==arr[8] && arr[6] != ""){
            setWinMessage(arr[6]+"  has won 🎉")
        }
        // column 1: 
        else if(arr[0] == arr[3] && arr[0]==arr[6] && arr[0] != ""){
            setWinMessage(arr[0]+"  has won 🎉")
        }
        // column 2:
        else if(arr[1] == arr[4] && arr[1]==arr[7] && arr[1] != ""){
            setWinMessage(arr[1]+"  has won 🎉")
        }
        // column 3:
        else if(arr[2] == arr[5] && arr[2]==arr[8] && arr[2] != ""){
            setWinMessage(arr[2]+"  has won 🎉")
        }
        // diagonal 1:
        else if(arr[0] == arr[4] && arr[0]==arr[8] && arr[0] != ""){
            setWinMessage(arr[0]+"  has won 🎉")
        }
        // diagonal 2:
        else if(arr[2] == arr[4] && arr[2]==arr[6] && arr[2] != ""){
            setWinMessage(arr[2]+"  has won 🎉")
        }

       else if(arr.indexOf("") == -1) {
          setWinMessage("Draw!")
       }

   }


   // change Item

   const changeItem = (index) => {

       if(winMessage){
          return  toast("Game has already been over!")
       }
       
       if(arr[index] !=""){
              return toast("Hey! try another one")
       }
       else if(arr[index] == ""){
           arr[index] =  isCross== true ? "cross" : "circle"
        
           setIsCross(!isCross)
           findWinner()
       }
          
   }


    return(
        <div>
                <ToastContainer position="bottom-left"/>
              {  
                winMessage?(
                  <div>
                         <h1 className="won">{winMessage.toUpperCase()}</h1>
                         <button onClick={playAgain}>Play Again</button>
                  </div>
                )
                : 
                (<h1> Chance is of {isCross?"Cross".toUpperCase(): "Circle".toUpperCase()}</h1>)

              }
              

                <div className="grid">
                            {
                                arr.map((value, index)=>(
                                    <div key={index} className="box" onClick={()=>changeItem(index)}> 
                                        <Icon ic={value}/>
                                    </div>
                                ))
                            }
                </div>


        </div>
    )
} 

export default App;




