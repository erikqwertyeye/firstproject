import Select from 'react-select'
import "./modal.css"
import { useState } from "react"
import { UserData,} from '../product/fakedata'
import { Status } from '../product/fakedata'
export const Modal = ({ style,handlerEdit }) => {
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
            <div className="box" style={{ display: style }}>
                <div className="inputbox">
                    <input />
                    <input />
                    <Select options={arr}/>
                    <Select options={Status}/>
                    <button className="createbuttonbox">CREATE</button>
                </div>
            </div>
        </div>
    )
}