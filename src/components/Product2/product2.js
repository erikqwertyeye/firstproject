import "./product2.css"
import { Modal } from "../modal/modal"
export const Product2 = ({handlerEdit}) =>{
    return (
        
        <div className="bigbox">
            <div className="head">
                <div className="headlogo">
                <button onClick={() => handlerEdit()} className="createbuttonbox">CREATE</button>
                </div>
                  
                <div className="headinputbox">
                    <input className="headinput"/>
                </div>
            </div>
            <div className="productbigbox">
            <div className="product2Box">
            <div className="product2imgbox">
                <p>$46</p>
                <div className="product2imgboxtopbox"></div>
                <div className="product2imgboxbottombox"></div>
            </div>
            <div className="product2cont1">
                <div className="product2cont1Dealbox">
                    <p>Deal #71</p>
                </div>
                <div className="product2cont1Pricebox">
                    <p>413.91</p>
                </div>
                <div className="product2cont1Datebox">
                    <p>yesterday 3:46pm</p>
                </div>
                <div className="product2cont1Personbox">
                    <p>Responsible person</p>
                </div>
                
            </div>
            <div className="product2cont2"></div>
            <div className="product2cont3"></div>

        </div>
        <div className="product3Box">
            <div className="product3imgbox">
                <div className="product3imgboxtopbox"></div>
            </div>
            <div className="product3cont1"></div>
        </div>
        <div className="product4Box">
            <div className="product4imgbox">
                <div className="product4imgboxtopbox"></div>
            </div>
            <div className="product4cont1"></div>
            <div className="product4cont2"></div>
        </div>
        <div className="product5Box">
            <div className="product5imgbox">
                <div className="product5imgboxtopbox"></div>
            </div>
            <div className="product5cont1"></div>
          
        </div>
        <div className="product6Box">
            <div className="product6imgbox">
                <div className="product6imgboxtopbox"></div>
            </div>
            <div className="product6cont1"></div>
          
        </div>
            </div>
        </div>
        
        

    )
}

