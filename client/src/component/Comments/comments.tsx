import axios from 'axios'
import React,{useCallback,useState} from 'react'
import {commentsType} from '../../types/types'
import './index.css'
interface ICommnets{
    comments:commentsType[]
}

const Comments:React.FC<ICommnets> = ({comments})=>{
    const [commentsSecond, setCommentsSecond] = useState<commentsType[]>([])
    

    const handlerController = useCallback(async (com:any, id:string, p:any)=>{
       if(p.target.classList.contains("nonActive")){
            console.log("com" , p.target)
            const fetch = await axios.post("http://localhost:5000/api/getComments",{comments:com})
            setCommentsSecond(fetch.data)
            p.target.classList.toggle("nonActive")
            p.target.textContent = "Закрыть ветку"
            return
       }
       if(!p.target.classList.contains("nonActive")){
            console.log("NONACTIVEcom" , p.target)
            setCommentsSecond([])
            p.target.classList.toggle("nonActive")
            p.target.textContent = "Открыть ветку"
            return
        }
    },[])


    return(
        <div className='row'>
            {comments.map(item =>{
                const postedTime = new Date(item.time * 1000)
                const hours = postedTime.getHours()
                const minutes = postedTime.getMinutes()
                const seconds = postedTime.getSeconds()
                const time = hours + ':' + minutes + ':' + seconds;
                const date = postedTime.getDate()
                const month = postedTime.getMonth()
                const year = postedTime.getFullYear()
                const fullDate = date + '.' + month + '.' + year
                return(
                    <div className="row blockComment">
                        <div className="nameAuthorComment">
                            <p>{item.by} {time} {fullDate}</p>
                        </div>
                        <div className="textComments">  
                            <p>{item.text}</p>
                        </div>
                        <div className="nextBlockComments">
                            {item.kids
                            
                            ?<div className="blockComment">
                                <p  className="nonActive" id={item.id} 
                                    onClick={()=>{handlerController(item.kids,item.id, event)}}>
                                    Открыть ветку
                                </p>
                                <Comments comments={commentsSecond} />
                            </div>
                            
                            :<></>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments;