import logo from './logo.svg';
import './App.css';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import { useState } from 'react';
import { Product } from './components/product/product';
import { fakeData } from './components/product/fakedata';
function App() {
  const [data,setData] = useState()
  const [color,setColor] = useState('black')

  const changeColor = () =>{
      setColor(data)
      
}
  return (
    <div className="App">
    
      {fakeData.map((item) =>{
         return ( <Product item = {item} />)
      })}
    </div>
  );
}

export default App;
