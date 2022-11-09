export interface dataType{
    id?:Number,
    deleted?:boolean,
    type?:String,
    by?:String,
    time:number,
    text?:String,
    dead?:boolean,
    parent?:String[],
    poll?:String,
    kids?:String[],
    url:string,
    score?:number,
    title?:String,
    parts?:String[],
    descendants?:String,
}

export interface commentsType{
    id:string,
    by?:String,
    kids?:number[],
    parent?:number,
    text?:string,
    type?:string,
    time:number
}

export enum DataActionTypes{
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',

    UPDATE_DATA = 'UPDATE_DATA',
    UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCES',
    UPDATE_DATA_ERROR = 'UPDATE_DATA_ERROR'

}




export interface DataState{
    data: any;
    loading:boolean;
    error: null | string;
}
export const initialState:DataState = {
    data: [],
    loading: false,
    error:null
}

interface FetchDataAction{
    type:DataActionTypes.FETCH_DATA,
}
interface FetchDataSuccessAction{
    type:DataActionTypes.FETCH_DATA_SUCCESS,
    payload: any[]
}
interface FetchDataErrorAction{
    type:DataActionTypes.FETCH_DATA_ERROR,
    payload:string
}  

interface UpdateDataAction{
    type:DataActionTypes.UPDATE_DATA
}
interface UpdateDataSuccessAction{
    type: DataActionTypes.UPDATE_DATA_SUCCESS,
    payload:any[]
}
interface UpdateDataErrorAction{
    type: DataActionTypes.UPDATE_DATA_ERROR,
    payload:string
}

export type DataAction = FetchDataAction | FetchDataErrorAction | FetchDataSuccessAction 
                        | UpdateDataAction |UpdateDataSuccessAction| UpdateDataErrorAction


//export interface dataTypeList extends Array<dataType>{}



export interface DataStateNew{
    data: any;
    loading:boolean;
    error: null | string;
}
export const initialStateNew:DataStateNew = {
    data: [],
    loading: false,
    error:null
}



export interface INews{
    data:dataType[]

}