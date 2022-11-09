import React,{useEffect,useState, useCallback} from 'react';
import {useParams, Link} from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import NewView from '../component/NewView/newView';
import { commentsType, dataType } from '../types/types';
import { useAppDispatch } from '../hooks/useAppDispatch';
import axios from 'axios';
import './index.css'

const NewPage:React.FC = () =>{
    let {id} = useParams<{id:string}>()


    const [loading,setLoading] = useState<boolean>()
    const [error,seError] = useState(false)
    const [isCommetns,setIsComments] = useState(false)
    const [data,setData] = useState<dataType>({
        id:1,
        time:1,
        url:"1"
    })

    const [comments, setComments] = useState([])
    const fetchData = useCallback(async()=>{
        const fetch = await axios.get(`http://localhost:5000/api/new/${id}`)
        console.log(fetch.data)
        setData(fetch.data.new)
        setComments(fetch.data.comments)
        setIsComments(fetch.data.isComments)
    },[])
    
    useEffect(()=>{
        setLoading(true)
        fetchData()
        setLoading(false)
    },[fetchData])


    const clickHandler = useCallback(async ()=>{
        const fetch = await axios.post("http://localhost:5000/api/getComments",{comments:id})
        setComments(fetch.data)
        console.log("Обновил")
    },[])
    if (loading){
        return(<h1>Загрузка</h1>)
    }
    if(error){
        return(<h1>{error}</h1>)
    }


    return(
        <div className="container">
            <div className="header">
                <div className="row">
                    <Link id="return"  to="/">Вернуться на главную</Link>
                    <a id="refresh" onClick={clickHandler}>Обновить</a>
                </div>
            </div>
            <NewView dataNew={data} comments={comments} isComments={isCommetns}/>
        </div>
        
    )


}
export default NewPage