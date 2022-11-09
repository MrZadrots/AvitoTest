import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchDataTable } from '../store/action-creators/data'
import { dataType } from '../types/types'
import News from '../component/News/News';


const MainPage:React.FC = () =>{
    const dispatch = useAppDispatch()
    const {data,error,loading} = useTypedSelector(state=>state.data)

    
    useEffect(()=>{
        dispatch(fetchDataTable())

    },[])

    if (loading){
        return(<h1>Загрузка</h1>)
    }
    if(error){
        return(<h1>{error}</h1>)
    }
    return(
        <News data={data}/>
    )
}
export default MainPage