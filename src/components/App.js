import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
  return(
    <div id ="join">
      {/* Access prop 'words' and print it using .join like words.join(',')*/}
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join  />
    </div>
  )
}


export default App;
