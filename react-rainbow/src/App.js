
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './Component/ColorBlock';
import ColorForm from './Component/ColorForm';

function App() {
  //Change the array into a useState so the default is added with the setColor to add additional colors
  let [colors, setColor] = useState(['red', 'green', 'yellow'])
  let colorMap = colors.map((color, i)=>{
    return(
      // This needs a key 
      <ColorBlock key= {i} color = {color}  />
    )
  })
  let addColor = (newColor)=>{
    setColor([...colors, newColor])
  }
  return (
    <>
      {colorMap}
      <ColorForm addColor={addColor}/>
    </>

  );
}

export default App;
