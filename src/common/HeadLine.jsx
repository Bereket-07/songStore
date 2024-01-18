import React from 'react';
import './headLine.css';

const HeadLine = () => {
    return (  
        <header>
        <h1>here is my beautiful music player site</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon className="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
          <polygon className="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
        </svg>
      </header> );
}
 
export default HeadLine;