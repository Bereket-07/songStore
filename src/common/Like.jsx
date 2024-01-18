import React from 'react';

const Like = ({data , onLike}) => {
    return ( <i 
        className={data.liked===true?"fa fa-heart":"fa fa-heart-o"}
        style={{color:data.liked===true?'red':null}}
         onClick={()=>onLike(data)}
         ></i>);
}
 
export default Like;