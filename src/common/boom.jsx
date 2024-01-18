import React from 'react';

const Boom = ({data , onBoom}) => {
    return ( <i 
        className={data.boom===true?"fa-solid fa-fire":"fa-solid fa-fire"}
        style={{color:data.boom===true?'red':null}}
         onClick={()=>onBoom(data)}
         ></i>);
}
 
export default Boom;