import "./melting.css"
import { useState } from "react"
export const Melting = () =>{
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    return (
        <div className="bigbox">
            <div className="topbigbox">
                <div onClick={() => setCount(count + 1)} className="button1">
                    <p>click me </p>
                </div>
                <div onClick={() => setCount2(count2 + 1)} className="button2">
                    <p>click me </p>
                </div>
            </div>
            <div className="middlebigbox">
                <div className="button1_count">
                    <p>{count}</p>
                </div>
                <div className="button2_count">
                    <p>{count2}</p>
                </div>

            </div>
            <div className="bottombigbox">
            <p>{count + count2}</p>
            </div>
        </div>
    )
}