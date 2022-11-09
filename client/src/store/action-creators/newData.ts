import axios from "axios"
import { Dispatch } from "react"
import { DataActionNew, DataActionTypes, dataType } from "../../types/types"

export const fetchDataNew = (id:string) =>{
    return async(dispatch: Dispatch<DataActionNew>)=>{
        try {
            dispatch({type:DataActionTypes.FETCH_DATA_NEW})
            const url = `http://localhost:5000/api/new/${id}`
            const response = await axios.get(url)
            dispatch({type:DataActionTypes.FETCH_DATA_SUCCESS_NEW,payload:response.data})
        } catch (error) {
            return dispatch({
                type:DataActionTypes.FETCH_DATA_ERROR_NEW, 
                payload:"Произошла ошибка загрузки данных"})
        }
    }
}   