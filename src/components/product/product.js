import "./product.css"
export const Product = ({item}) =>{
    return (<div className='productBox'>
        <img src={item.img} className='productimg'/>
        <div className='productName'><p>{item.name}</p></div>
    </div>)
}