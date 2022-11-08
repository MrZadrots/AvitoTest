import React from "react";
import {dataType} from '../../types/types'


interface INewView{
    dataNew:any
}
const NewView:React.FC<INewView> = ({dataNew}) =>{

    console.log("NEWVIE", dataNew)
        return(
            <div className="row">
              
    
            </div>
        )

}
export default NewView;
