import Select from 'react-select'
import "./modal.css"
import { useState } from "react"
import { UserData} from '../product/fakedata'
import { Status } from '../product/fakedata'
import {useSelector} from 'react-redux'
export const Modal = ({ style , createbox}) => {
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
                    <input placeholder='Name'/>
                    <input placeholder='Username'/>
                    <Select options={arr}/>
                    <Select options={Status}/>
                    <button onClick={()=> createbox()} className="createbuttonbox">CREATE</button>
                </div>
            </div>
        </div>
    )
}