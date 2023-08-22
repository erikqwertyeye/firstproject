import logo from './logo.svg';
import './App.css';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import { useState } from 'react';
import { Product } from './components/product/product';
import { fakeData } from './components/product/fakedata';
import { Melting } from './components/melting/melting';
import { Model } from './components/model/model';
function App() {
  const [isShow, setShow] = useState("none")
  const [data, setData] = useState(fakeData)
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
        <Model style={isShow}/>
        <button onClick={() => {
          if(isShow == "none"){
            setShow("block") 
          }else (
            setShow("none")
          )
          
          
          
          
          }}>click</button>
        {
         fakeData.map((item) =>{
          return ( <Product handlerdelete={handlerdelete} item = {item} />)
        })
        }
       
    </div>
  );
}

export default App;
