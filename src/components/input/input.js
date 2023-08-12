import { type } from "@testing-library/user-event/dist/type";
import s from "./input.css"
import { useState } from "react"
export const Input = ({tip , placeholder, value}) =>{

const [data , setData]= useState(value || 10)
let color , type
let background - 
if(value >1 && value<=5){
    color = "red";
    type = "string";
    
}else if(value >6 && value <=10){
    color = "blue"
    type = "number"
}else if(value >=11){
    color = "display-none"
}


return (<input type={tip} value={data} style={{color}}placeholder={placeholder} />)

}
