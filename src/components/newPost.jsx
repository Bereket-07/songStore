import React from 'react';
import InputField from './inputField';


const NewPost = ({onInputChange , newItem , onAddtionOfNewItem , }) => {
    return (
      <form >
            <InputField 
            name="title"
            type="text"
            onChange={onInputChange}
            newItem={newItem}
            />
            <InputField 
            name="body"
            type="text"
            onChange={onInputChange}
            newItem={newItem}
            />
            <button type="button" className="btn btn-primary" onClick={onAddtionOfNewItem}>
            Add To List
        </button>
    </form>
       );
}
 
export default NewPost;