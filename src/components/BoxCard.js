import { useState } from "react"
import "./boxCard.css";
export const BoxCard = ({result, children}) => {
    const [show, setShow] = useState(true)
    return (
        <div className = {show ? "" : "hidden"} >
        <div className = {`box ${result}`}>
           {children} 
        </div> 
 <button onClick={()=> setShow(!show)} className = "trigger">Hide</button>

      </div>
    )
}
