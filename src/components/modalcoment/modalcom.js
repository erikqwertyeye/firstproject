import "./modalcom.css"
import { setComments } from "../../store"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react"
import { setShowCom } from "../../store"
import { UserData } from "../product/fakedata"
export const Modalcom = (item) => {
    const dispatch = useDispatch()
    const setShowCom2 = useSelector((state) => state.index.showcom)
    const commentsData = useSelector((state) => state.index.comments)
    const [comment, setcomment] = useState("")
    const ticketId = useSelector((state)=> state.index.ticketId)
    const userId = useSelector((state)=> state.index.userId)
    const qwert = () => {
        dispatch(setComments({
            comments: comment,
            userId:userId,
            ticketId: ticketId
        }))
    }
    const arr = UserData.filter((qitem) => {
        if (qitem.id == item.userId) {
            return item
        }
    })
    return (
        <div className="Modalbox" style={{ display: setShowCom2 ? 'block' : 'none' }}>
            <div className="bigbox1">
                {
                    commentsData.map(item => {

                        return (
                            <>
                                <div className="bigbox1_Personinfo">

                                    <div className="bigbox1_Personimg">
                                        {/* <img src={arr[0].img}/> */}
                                    </div>
                                    <div className="bigbox1_rightbox">
                                        <div className="bigbox1_Personinfo_name"></div>
                                        <div className="bigbox1_Personinfo_comment">
                                            <p>{item.comments}</p>
                                        </div>
                                    </div>

                                </div>
                            </>

                        )
                    })
                }
            </div>
            <div className="bigbox2">
                <div className="bigbox2_content">
                    <textarea onChange={(e) => {
                        console.log(e.target.value);
                        setcomment(e.target.value)
                    }}></textarea>
                </div>
                <div className="bigbox2_Savebox">
                    <div onClick={() => { qwert(); dispatch(setShowCom({ showcom: false })) }} className="bigbox2_Save">
                        <p>SAVE</p>
                    </div>
                </div>
            </div>


        </div>
    )
}