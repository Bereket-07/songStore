import React from 'react';
import Like from '../common/Like';
import Boom from '../common/boom';

const Table = ({onUpdate , onDelete , posts , onLike , data , onBoom ,editidedPost , onChangeUpdate , onSave}) => {
    return (  
        <table className='table table-primary  table-sm'>
             <thead className="table-dark">
              <tr>
                <th>TITLE</th>
                <th></th>
                <th></th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
             </thead>
             <tbody> 
              {posts.map(post=>
                  <tr key={post.id + post.title}>
                     <td>
                        {editidedPost && editidedPost.id === post.id ? (
                            <input
                            type="text"
                            value={editidedPost.title}
                            onChange={onChangeUpdate}
                            />
                        ) : (
                            post.title
                        )}
                    </td>
                      <td><Like
                        onLike={onLike}
                        data={post}
                      /></td>
                      <td>
                        <Boom
                        onBoom={onBoom}
                        data={post}
                        />
                      </td>
                      <td>
                            {editidedPost && editidedPost.id === post.id ? (
                                <button className='btn btn-primary' onClick={()=>onSave(post)}>Save</button>
                                ) : (
                                <button className='btn btn-info btn-sm ' onClick={()=>onUpdate(post.id)}>UPDATE</button>
                                )}
                          </td>
                          <td><button className='btn btn-danger btn-sm ' onClick={()=>onDelete(post)}>DELETE</button></td>
                  </tr>
                      )}  
             </tbody> 
          </table> 
    );
}
 
export default Table;