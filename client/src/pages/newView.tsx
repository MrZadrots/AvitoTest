import React,{useEffect,useState, } from 'react';
import {useParams} from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';



const NewPage:React.FC = () =>{
    let {id} = useParams<{id:string}>()
    const {data,error,loading} = useTypedSelector(state=>state.data)

    useEffect(()=>{
        const currentNew = data.find((item:any) => item.id ==id)
        console.log("page", currentNew)
    })
    return(
        <>Страница Новости</>
    )
}
export default NewPage