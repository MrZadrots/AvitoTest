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
    url?:String,
    score?:number,
    title?:String,
    parts?:String[],
    descendants?:String,
}
export enum DataActionTypes{
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
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

export type DataAction = FetchDataAction | FetchDataErrorAction | FetchDataSuccessAction


export interface dataTypeList extends Array<dataType>{}


export interface INews{
    data:dataType[]

}