import React from 'react'
import {INews,dataType} from '../../types/types'
import New from '../New/New'

const News:React.FC<INews>  = (data) =>{
   
   
   console.log(data)
   
    return(
        <div className='container'>
            {data.data.map(item=>{
                return(
                    <New data={item} />
                )
            })}
        </div>
    )
}

export default News;