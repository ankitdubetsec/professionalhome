import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';
import Main from './Main';
setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function App() {
    return (
        
           <Main/>
        
    ); 
}


export default App;