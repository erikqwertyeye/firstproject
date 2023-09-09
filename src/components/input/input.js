
import s from "./input.css"
import { useState } from "react"
export const Input = ({tip , placeholder,setData, value}) =>{



const oneChange = (e) =>{
    setData(e.target.value)     







        
}
return (<input type={tip}  onChange={(e) =>oneChange(e)} placeholder={placeholder} />)

}
