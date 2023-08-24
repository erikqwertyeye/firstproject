import { useState } from "react";
import { Button } from "../button/button"
import "./model.css"
export const Model = ({style,itemData}) =>{
    const [data, setData] = useState()
    onchange = (e) =>{
        setData(e.target.value)
    }
    console.log(itemData);
    return  (
        <div className="box" style={{display:style}}>
            <input onchange = {()=>onchange()}value={itemData.name}/>
            <input value={itemData.desc}/>
            <input/>
            <button>UPDATE</button>
        </div>
    )
}