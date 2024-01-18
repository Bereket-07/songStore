import React from 'react';
import { ToastContainer } from 'react-toastify';

const ListGroup = ({onPopUp , onLablleChange , onDisplay}) => {
    return ( 
            <React.Fragment >
                <ToastContainer/>
                <ul className="list-group" >
                    
                    <button className="list-group-item btn btn-info" 
                     onClick={onPopUp}>Add Ur song here
                     </button>
                    <button className="list-group-item btn btn-info" 
                      onClick={onDisplay}>{onLablleChange()}
                    </button>
                </ul>
            </React.Fragment>
     );
}
 
export default ListGroup;