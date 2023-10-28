import "./product3cont.css"
import { setShowCom } from "../../store"
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from "../product/fakedata";
import { setTicketId } from "../../store/index";
export const Product3cont=({item})=>{
    const dispatch = useDispatch();
        const isShowcom = useSelector((state) =>state.index.showcom)
        const handlercommit =()=>{
            console.log(item.id)
            if(isShowcom){
              dispatch(setShowCom({showcom:false}))
            }else{
                dispatch(setShowCom({showcom:true}))
                dispatch(setTicketId({ticketId:1}))  
            }
          }
    const arr = UserData.filter((useritem) => {
        if(useritem.id == item.userId){
            return item
        }
    })
    return(
        <div className="product2cont1">
            <div className="product2cont1infobox">
                <div className="product2cont1Dealbox">

                </div>
                <div className="product2cont1Pricebox">{item.name}</div>
                <div className="product2cont1Datebox">{item.desc}</div>
                <div className="product2cont1Personbox">{item.userId}</div>
                <div className="product2cont1botombox">
                    <div className="product2cont1botomboxActivity">
                        <p>+ Activity</p>
                    </div>
                    <div className="product2cont1botomboxPerson">
                        <div className="product2cont1botomboxActivity">
                            <div className="product2cont1botomboxPersonnImg">
                                <div>
                                    <img src={arr[0].img}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product2cont1iconbox">
                <div className="product2cont1iconboxicon1">
                    <p>0</p>
                </div>
                <div className="product2cont1iconboxicon2">
                    <img src={'../phone.jpg'}/>
                </div>
                <div className="product2cont1iconboxicon3">
                    <img src={'../lettericon.png'}/>
                </div>
                <div onClick={()=>handlercommit() } className="product2cont1iconboxicon4">
                    <img src={'../letter2icon.png'}/>
                </div>
                
            </div> 
           
        </div>
    )
}