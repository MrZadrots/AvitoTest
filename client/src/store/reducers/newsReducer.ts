import { initialState,DataAction,DataState,DataActionTypes } from "../../types/types";


export const newsReducer = (state = initialState, action:DataAction): DataState =>{
    switch (action.type){
        case DataActionTypes.FETCH_DATA:
            return {loading:true, error:null, data: []};
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {loading:false, error:null, data: action.payload};
        case DataActionTypes.FETCH_DATA_ERROR:
            return {loading:false, error:action.payload, data: []};  


        case DataActionTypes.UPDATE_DATA:
            return {loading:false,error:null,data:[]};
        case DataActionTypes.UPDATE_DATA_SUCCESS:
            return {loading:false,error:null,data:action.payload};
        case DataActionTypes.UPDATE_DATA_ERROR:
            return {loading:false, error: action.payload, data:[]}
        default:
            return state
    }

}

/*export const newReducer = (state = initialStateNew, action:DataActionNew): DataStateNew =>{
    switch (action.type){
        case DataActionTypes.FETCH_DATA_NEW:
            return {loading:true, error:null, data: []};
        case DataActionTypes.FETCH_DATA_SUCCESS_NEW:
            return {loading:false, error:null, data: action.payload};
        case DataActionTypes.FETCH_DATA_ERROR_NEW:
            return {loading:false, error:action.payload, data: []};  

        default:
            return state
    }

}*/