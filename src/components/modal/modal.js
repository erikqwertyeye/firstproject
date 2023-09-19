import Select from 'react-select'
import "./modal.css"
import { useState } from "react"
import { UserData} from '../product/fakedata'
import { Status } from '../product/fakedata'
import {useSelector} from 'react-redux'
export const Modal = ({ style , createbox}) => {
    const [createData, setcreateData] = useState({
        name:'',
        desc:"",
        statusId:0,
        userId:0
    })
    const isShow = useSelector((state) =>state.index.show)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]   
    let arr = []
    UserData.map(item => {
        arr.push({ label: item.firstName + '' +item.lastName, value:item.id})
        
    })
    return (
        <div>
            <div className="box" style={{ display:isShow ? 'block' : 'none'}}>
                <div className="inputbox">
                    <input onChange={(item)=>setcreateData(state=>{
                        return {
                            ...state,
                            name:item.target.value
                        }
                      
                    })} placeholder='Name'/>
                    <input onChange={(item)=>setcreateData(state=>{
                        return{
                            ...state,
                            desc:item.target.value
                        }
                    })}placeholder='Username'/>
                    <Select onChange={(item)=>setcreateData(state =>{
                        return{
                            ...state,
                            userId:item.value
                        }
                    })} options={arr}/>
                    <Select  onChange={(item)=>setcreateData(state =>{
                        return{
                            ...state,
                            statusId:item.value
                        }
                    })} options={Status}/>
                    <button onClick={()=> createbox(createData)} className="createbuttonbox">CREATE</button>
                </div>
            </div>
        </div>
    )
}