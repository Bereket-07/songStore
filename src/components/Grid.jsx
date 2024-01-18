import React from 'react';
import music from '../photos/pexels-dominika-roseclay-1021876.jpg';
import Like from '../common/Like';
import Boom from '../common/boom';

 const Grid = ({onUpdate , onDelete , posts , onLike , onBoom,editidedPost , onChangeUpdate , onSave }) => {
    return ( 
         <div className='post'>
                {posts.map(post=>
                <div className="card" key={post.id + post.title}> 
                    <img src={music} className="img-fluid" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title"> 
                        {editidedPost && editidedPost.id === post.id ? (
                            <input
                            type="text"
                            value={editidedPost.title}
                            onChange={onChangeUpdate}
                            />
                        ) : (
                            post.title
                        )}
                    </h5>
                        <p className="card-text">{post.body}</p>
                        <Boom 
                        data={post}
                        onBoom={onBoom}
                        />
                    <div className='btn-1' >
                        <Like
                         data={post}
                         onLike={onLike}
                        />
                            {editidedPost && editidedPost.id === post.id ? (
                                <button className="btn" onClick={()=>onSave(post)}><i>save</i></button>
                                ) : (
                                <button className='btn  ' onClick={()=>onUpdate(post.id)}><i className="fa-solid fa-pen-nib"></i></button>
                                )}
                          
                        <button className='btn ' onClick={()=>onDelete(post)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
          </div>
       )}
    </div>);
 }
  
 export default Grid;