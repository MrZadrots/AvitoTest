import React,{useEffect,useState, } from 'react';
import {useParams} from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import NewView from '../component/NewView/newView';
import { dataType } from '../types/types';


const NewPage:React.FC = () =>{
    let {id} = useParams<{id:string}>()
    const {data,error,loading} = useTypedSelector(state=>state.data)
    const [currentNew,setCurrendNew] = useState<dataType>(data[0])
    
    useEffect(()=>{
        const currentNewFind = data.find((item:any) => item.id ==id)
        setCurrendNew(currentNewFind)
        console.log("page", currentNew)
    },[])
    return(
        <div className="container">
            <NewView  dataNew={currentNew}/>
        </div>
    )
}
export default NewPage