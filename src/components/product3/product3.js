import "./product3.css"
import { Product3box } from "../product3box/product3box"
export const Product3 =()=>{
    return(<div className="productbox">
        <Product3box title={'new'} id={1}/>
        <Product3box title={'in progress'} id={2}/>
        <Product3box title={'testing'} id={3}/>
        <Product3box title={'done'} id={4}/>
    </div>)
}