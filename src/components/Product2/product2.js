import "./product2.css"
import { useState } from "react"
import { Modal } from "../modal/modal"
import { setcreateData } from "../../store"
export const Product2 = ({handlerEdit}) =>{
    return (
        
        <div className="bigbox">
            <div className="head">
                <div className="headtopbox">

                <div className="headlogobox">
                    <div className="haedlogo">
                        <p>Dael</p>
                    </div>
                <button onClick={() => handlerEdit()} className="createbuttonbox">
                    <div className="createbuttonbox_box1">
                        <p>CREATE</p>
                    </div>
                    <div className="createbuttonbox_box2">
                        <img src={'../createicon.png'}/>
                    </div>

                </button>
                <div className="headgeneralbox">
                    <div className="headgeneralbox_menu">
                        <img src={'../menu.png'}/>
                    </div>
                    <div className="headgeneralbox_text">
                        <p>GENERAL</p>
                    </div>
                    <div className="headgeneralbox_icon">
                        <div>10</div>
                        <img src={'../createicon.png'}/>
                    </div>
                </div>
                </div>
                <div className="headinputbox">
                    <div className="headinput">
                        <div className="headinput_box1">
                            <p>Deals in prgress</p>
                            <img src={'../deleteicon.png'}/>
                        </div>
                        <div className="headinput_box2">
                            <img src={"../plusicon.png"}/>
                            <p>search</p>
                        </div>
                    </div>
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
                        <li>
                        <div className="headbottomboxlist_icon1">
                            <p>0</p>
                        </div>
                        Inbound</li>
                        <li>
                            <div className="headbottomboxlist2_icon2">
                                <p>10</p>
                            </div>
                            Planet</li>
                        <li>
                            More
                            <div className="headbottomboxlist2_icon3">
                                <p>2</p>
                            </div>
                            </li>
                    </ul>
                </div>

            </div>
            </div>
            </div>
    
        
        

    )
}

