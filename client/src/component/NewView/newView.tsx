import React from "react";
import {commentsType, dataType} from '../../types/types'
import './index.css'
import Comments from '../Comments/comments'



interface INewView{
    dataNew:dataType,
    comments:commentsType[]
    isComments:boolean
}
const NewView:React.FC<INewView> = ({dataNew,comments, isComments}) =>{

    const postedTime = new Date(dataNew.time * 1000)
    const hours = postedTime.getHours()
    const minutes = postedTime.getMinutes()
    const seconds = postedTime.getSeconds()
    const time = hours + ':' + minutes + ':' + seconds;
    const date = postedTime.getDate()
    const month = postedTime.getMonth()
    const year = postedTime.getFullYear()
    const fullDate = date + '.' + month + '.' + year

    return(
        <div className="container containerNewView">
            <div className="row">
                <h1>{dataNew.title}</h1>
                <p>by {dataNew.by} {fullDate} {time}</p>
            </div>
            <div className="row">
                <p>This article is available via links: <a href={dataNew.url}>{dataNew.url}</a> </p>
            </div>
            <div className="row">
                <h3>Comments</h3>
                {isComments?<Comments comments={comments}/>:<p>Comments not found</p>}
            </div>
        </div>

    )

}
export default NewView;
