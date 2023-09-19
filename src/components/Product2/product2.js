import "./product2.css"
import { useState } from "react"
import { Modal } from "../modal/modal"
export const Product2 = ({handlerEdit}) =>{
    return (
        
        <div className="bigbox">
            <div className="head">
                <div className="headtopbox">

                <div className="headlogobox">
                    <div className="haedlogo">
                        <p>Dael</p>
                    </div>
                <button onClick={() => handlerEdit()} className="createbuttonbox">CREATE</button>
                </div>
                <div className="headinputbox">
                    <input className="headinput"/>
                </div>
                <div className="headLine"></div>
            </div>
            <div className="headbottombox">
                <div className="headbottomboxlist1">
                    <ul>
                        <li>Pipeline</li>
                        <li>List</li>
                        <li>Activites</li>
                        <li>Calendar</li>
                    </ul>
                </div>
                <div className="headbottomboxlist2">
                    <ul>My:
                        <li>Inbound</li>
                        <li>Planet</li>
                        <li>More</li>
                    </ul>
                </div>

            </div>
            </div>
            <div className="productbigbox">
            <div className="product2Box">
            <div className="product2imgbox">
                <div className="product2imgboxtopbox">
                    <p>New </p>
                </div>
                <div className="product2imgboxmiddlebox">
                    <p>$46</p>
                </div>
                <div className="product2imgboxbottombox">
                    <p>+ Quick Deal</p>
                </div>
            </div>
            <div className="product2cont1">
                <div className="product2cont1infobox">
                <div className="product2cont1Dealbox">
                    <p>Deal #71 </p>
                </div>
                <div className="product2cont1Pricebox">
                    <p>413.91</p>
                </div>
                <div className="product2cont1Datebox">
                    <p>yesterday 3:46pm </p>
                </div>
                <div className="product2cont1Personbox">
                    <p>Emily Walker</p>
                </div>
                <div className="product2cont1botombox">
                    <div className="product2cont1botomboxActivity">
                        <p>+ Activity</p>
                    </div>
                    <div className="product2cont1botomboxPerson">
                        <div className="product2cont1botomboxPersonnDate">
                            <p>yesterday</p>
                        </div>
                        <div className="product2cont1botomboxPersonnImg">
                            <div></div>
                        </div>

                    </div>

                </div>
                </div>
                <div className="product2cont1iconbox">
                    <div className="product2cont1iconboxicon1"></div>
                    <div className="product2cont1iconboxicon2"></div>
                    <div className="product2cont1iconboxicon3"></div>
                    <div className="product2cont1iconboxicon4"></div>

                </div>
            </div>
          

        </div>
        <div className="product3Box">
            <div className="product3imgbox">
                <div className="product3imgboxtopbox"></div>
            </div>
     
        </div>
        <div className="product4Box">
            <div className="product4imgbox">
                <div className="product4imgboxtopbox"></div>
            </div>
 
        </div>
        <div className="product5Box">
            <div className="product5imgbox">
                <div className="product5imgboxtopbox"></div>
            </div>

          
        </div>
        <div className="product6Box">
            <div className="product6imgbox">
                <div className="product6imgboxtopbox"></div>
            </div>
   
          
        </div>
            </div>
        </div>
        
        

    )
}

