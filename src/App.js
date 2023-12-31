import './App.css';
import { useState } from 'react';
import { Product } from './components/product/product';
import { Model } from './components/model/model';
import { Product2 } from './components/Product2/product2';
import { Modal } from './components/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { Modalcomments, isShow,setShowCom } from './store/index';
import {setcreateData} from './store/index'
import { Product3 } from './components/product3/product3';
import { Product3box } from './components/product3box/product3box';
import { Modalcom } from './components/modalcoment/modalcom';
import { Login } from './components/login/login';
function App() {

  const [isShow2, setShow2] = useState("none")
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const isShowData = useSelector((state) =>state.index.show)
  const [itemData,setItem] = useState({name:'', desc:""})
  const isShowcom = useSelector((state) =>state.index.showcom)
  const handlerEdit = () =>{
    if(isShowData){
      dispatch(isShow({show:false}))
    }else (
      dispatch(isShow({show:true}))
    )
  }
  const createbox =(itemData)=>{
      dispatch(setcreateData({data:itemData}))
  }

  return (
    <div className="App"> 
        {/* <Model itemData={itemData} style={isShow}/> 
            
        {
         fakeData.map((item) =>{
          return ( <Product handlerEdit={handlerEdit}  handlerdelete={handlerdelete} item = {item} />)
        })
        } */}
        
        <Product2 item = {setItem} handlerEdit = {handlerEdit} />
        <Modal createbox = {createbox} style = {isShow}/>
        <Product3/>
        <Modalcom/>
        {/* <Login/> */}
    </div>
  );  
  }



export default App;
