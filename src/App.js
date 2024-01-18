import React from 'react';
import Main from './components/mainFolder/main';
import HeadLine from './common/HeadLine';
import './App.css';

const App=()=>{
  return(
    <React.Fragment>
        <HeadLine/>
        <Main/>
    </React.Fragment>
  )
}
export default App;