import Select from 'react-select'
import "./modal.css"
import { useState } from "react"
import { UserData} from '../product/fakedata'
import { Status } from '../product/fakedata'
import { setData } from '../../store/index'
import {useDispatch, useSelector} from 'react-redux'
import { isShow } from '../../store/index'
export const Modal = ({ style , createbox}) => {
    const data = useSelector(state => state.index.data)
    const dispatch = useDispatch()
    const [createData, setcreateData] = useState({
        name:'',
        desc:"",
        statusId:0,
        userId:0,
        id:0
    })
    const isShow2 = useSelector((state) =>state.index.show)
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
            <div className="box" style={{ display:isShow2 ? 'block' : 'none'}}>
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
                    <Select className='select1' onChange={(item)=>setcreateData(state =>{
                        return{
                            ...state,
                            userId:item.value
                        }
                    })} options={arr}/>
                    <Select className='select2' onChange={(item)=>setcreateData(state =>{
                        return{
                            ...state,
                            statusId:item.value
                        }
                    })} options={Status}/>
                    <button onClick={() => {
                        dispatch(setData({ data: {
                            name:createData.name,
                            desc:createData.desc,
                            statusId:createData.statusId,
                            userId:createData.userId,
                            id:data.length>0?data[data.length-1].id+1: 1
                        } }));
                        dispatch(isShow({show:false}))
                    }} className="createbuttonbox">CREATE</button>
                </div>
            </div>
        </div>
    )
}