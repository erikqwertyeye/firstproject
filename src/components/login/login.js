import { useState } from "react"
import "./login.css"
import { UserData } from "../product/fakedata"
import { setuserId } from "../../store"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
    export const Login =()=>{
        const navigate = useNavigate()
        const [value,setValue]= useState({
            username: "",
            password:""
        })

        const dispatch = useDispatch();
        const handlerLogin=()=>{
            const arr = UserData.filter((item) =>{
                if(item.username == value.username && item.password == value.password ){
                    console.log(item);
                    dispatch(setuserId({userId:item.id}))
                    navigate("/home");
                }
            })
        }

        return(
            <div className="loginpage">
                <form>
                    <label>
                        <input value={value.username} onChange={(event)=>{
                            setValue((state)=> {
                                return {
                                    ...state,
                                    username:event.target.value
                                }
                            })
                        }} placeholder="Username" type="text"  className="loginSurname"/>
                        <input value={value.password} onChange={(event)=>{
                            setValue((state)=>{
                                return{
                                    ...state,
                                    password:event.target.value
                                }
                            })
                        }} placeholder="password" type="password" className="loginNumber"/>

                    </label>
                </form>
            <button onClick={()=>handlerLogin()} className="loginbutton"></button>
            
            
        </div>
    )
}