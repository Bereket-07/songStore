import React from 'react';


const InputField = ({type , name , onChange , newItem }) => {
    return ( 
        
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">{name}</label>
                <input type={type} name={name} value={newItem[name]} onChange={onChange} className="form-control" 
                id="formGroupExampleInput" placeholder={`write the ${name} of the newly added song`}/>
            </div>
     );
}

 
export default InputField;

