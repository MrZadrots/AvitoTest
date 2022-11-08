import React from "react"
import {Link} from "react-router-dom"
import { dataType } from "../../types/types";
import './index.css'


interface INew {
    data:dataType
}

const New:React.FC<INew> = ({data}) =>{


    const postedTime = new Date(data.time * 1000)
    const hours = postedTime.getHours()
    const minutes = postedTime.getMinutes()
    const seconds = postedTime.getSeconds()
    const time = hours + ':' + minutes + ':' + seconds;
    const date = postedTime.getDate()
    const month = postedTime.getMonth()
    const year = postedTime.getFullYear()
    const fullDate = date + '.' + month + '.' + year
    return(

        <div className="row">
            <div className="newRow">
                <h3><Link to={`newView/${data.id}`}>{data.title}</Link></h3>
                <p>{data.by}, {fullDate} {time}</p>        
                <p>{data.score} points</p>
            </div>
        </div>
    )
}

export default New;