import axios from "axios"
import { Dispatch } from "react"
import { DataAction, DataActionTypes, dataType } from "../../types/types"

export const fetchDataTable = (method:number) =>{
    return async(dispatch: Dispatch<DataAction>)=>{
        if(method==1){
            try {
                dispatch({type:DataActionTypes.FETCH_DATA})
                const response = await axios.get('http://localhost:5000/api/news')
                dispatch({type:DataActionTypes.FETCH_DATA_SUCCESS,payload:response.data})
            } catch (error) {
                return dispatch({
                    type:DataActionTypes.FETCH_DATA_ERROR, 
                    payload:"Произошла ошибка загрузки данных"})
            }
        }
        else{
            try{
                const response = await axios.get('http://localhost:5000/api/news')
                dispatch({type:DataActionTypes.FETCH_DATA_SUCCESS,payload:response.data})
            } catch (error) {
                return dispatch({
                    type:DataActionTypes.FETCH_DATA_ERROR, 
                    payload:"Произошла ошибка загрузки данных"})
            }
        }
    }
}


export const updateData = (oldData:any[]) =>{
    return async(dispatch: Dispatch<DataAction>)=>{
        try {
            console.log("Я буд проверять стейт")
            dispatch({type:DataActionTypes.UPDATE_DATA})
            const response = await axios.get('http://localhost:5000/api/news')
            if(oldData != response.data){
                console.log("Я буд обновлять стейт")
                fetchDataTable(2)
                dispatch({type:DataActionTypes.UPDATE_DATA_SUCCESS,payload:response.data})
            }
            
        } catch (error) {
            return dispatch({
                type:DataActionTypes.FETCH_DATA_ERROR, 
                payload:"Произошла ошибка загрузки данных"})
        }
    }
}