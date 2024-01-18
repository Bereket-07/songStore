import Axios from "axios";
import {toast} from 'react-toastify';

Axios.interceptors.response.use(null,error=>{
    const expectedError = 
    error.response&&
    error.response.status>=400&&
    error.response.status<500;

    if(!expectedError){
      console.log('logging an error' , error);
      toast('there is unexpected error');
    }
    return Promise.reject(error);
  });

  export default {
    get: Axios.get,
    post: Axios.post,
    delete: Axios.delete,
    put: Axios.put
  }