import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//React's Strict Mode is a 
//tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants. In development mode, 
//React will call some lifecycle methods twice to help identify side effects and ensure they are handled correctly.



ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
