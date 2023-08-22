import { Button } from "../button/button"
import "./model.css"
export const Model = ({style}) =>{
    return(
        <div className="box" style={{display:style}}>
            <input/>
            <input/>
            <input/>
            <button></button>
        </div>
    )
}