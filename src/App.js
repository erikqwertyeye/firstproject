import './App.css';
import { useState } from 'react';
import { Product } from './components/product/product';
import { Model } from './components/model/model';
import { Product2 } from './components/Product2/product2';
import { Modal } from './components/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from './store/index';
function App() {
 // const [isShow, setShow] = useState("none")
  const [isShow2, setShow2] = useState("none")
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const isShowData = useSelector((state) =>state.index.show)

  const [itemData,setItem] = useState({name:'', desc:""})
  const handlerEdit = () =>{
    dispatch(isShow({show:true}))
    if(isShowData){
      dispatch(isShow({show:false}))
    }else (
      dispatch(isShow({show:true}))

    )
  }
  const createbox =()=>{
    if(isShow2 == "none"){
      setShow2("block") 
    }else (
      setShow2("none")
    )
  }
  
  return (
    <div className="App"> 
        {/* <Model itemData={itemData} style={isShow}/> 
            
        {
         fakeData.map((item) =>{
          return ( <Product handlerEdit={handlerEdit}  handlerdelete={handlerdelete} item = {item} />)
        })
        } */}
        
         <Product2 handlerEdit = {handlerEdit}/>
        <Modal createbox = {createbox} style = {isShow}/>
    </div>
  );  
  }



export default App;
