
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './Component/ColorBlock';
import ColorForm from './Component/ColorForm';

function App() {
  let colors = ['green', 'red', 'orange', 'yellow', 'blue', 'purple']
  let colorMap = colors.map((color, i)=>{
    return(
      // This needs a key 
      <ColorBlock key= {i} color = {color}  />
    )
  })
  return (
    <>
      {colorMap}
      {ColorForm}
    </>

  );
}

export default App;
