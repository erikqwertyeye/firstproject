import "./product3box.css"
import { Product3cont } from "../product3cont/product3cont"
import { useSelector } from "react-redux"
export const Product3box = ({title, id}) =>{
    const data = useSelector((state) => state.index.data)
    console.log(data.length);
    return (
        <div className="product3_box">
            <div className="product2imgbox">
                <div className="product2imgboxtopbox">
                    <p>{title}</p>
                </div>
            </div>
           {data.length >0 && data.map((item) =>  item.statusId === id && <Product3cont item={item} /> )}
        </div>
    )
}