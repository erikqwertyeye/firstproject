    import { Model } from "../model/model"
import "./product.css"
    export const Product = ({item , handlerdelete,handlerEdit}) =>{
        return (<div className='productBox'>
            <img src={item.img} className='productimg'/>
            <div className='bottombigbox'>
                <div className='productName'><p>{item.name}</p></div>
            <div onClick={() => handlerdelete(item.name)} className="productDelete">   
                <img src={item.delete}/>
            </div>
            <button onClick={()=>handlerEdit(item)}>click</button>
            </div>
        </div>)
    }