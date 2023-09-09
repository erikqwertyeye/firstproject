import logo from './logo.svg';
import './App.css';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import { useState } from 'react';
import { Product } from './components/product/product';

import { Melting } from './components/melting/melting';
import { Model } from './components/model/model';
import { Product2 } from './components/Product2/product2';
import { Modal } from './components/modal/modal';
function App() {
  const [isShow, setShow] = useState("none")
  const [data, setData] = useState([])
  const [itemData,setItem] = useState({name:'', desc:""})
  const handlerEdit = () =>{
    if(isShow == "none"){
      setShow("block") 
    }else (
      setShow("none")
    )
  }
  const handlerdelete = (name) =>{
    setData((state)=>{
      let x = state.filter((item) => item.name !== name )
      return [
        ...x
      ]
    })
    console.log(data,'llll');
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
        <Modal style = {isShow}/>
        
    </div>
  );
}

export default App;
