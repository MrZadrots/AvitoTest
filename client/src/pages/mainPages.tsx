import React,{useEffect,useState,useCallback} from 'react';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { fetchDataTable, updateData } from '../store/action-creators/data'
import { dataType } from '../types/types'
import News from '../component/News/News';


const MainPage:React.FC = () =>{
    const dispatch = useAppDispatch()
    const {data,error,loading} = useTypedSelector(state=>state.data)

    
    useEffect(()=>{
        dispatch(fetchDataTable(1))

    },[])

    const clickHandler = useCallback(()=>{
        dispatch(updateData(data))
    },[])
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatch(updateData(data))
        },60000)
        return () => clearTimeout(timer);
    },[data])
    if (loading){
        return(<h1>Загрузка</h1>)
    }
    if(error){
        return(<h1>{error}</h1>)
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <a href="#" onClick={clickHandler}>Обновить</a>
                </div>
            </div>
            <News data={data}/>
        </>
    )
}
export default MainPage