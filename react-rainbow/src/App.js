
import './App.css';
import ColorBlock from './Component/ColorBlock';

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
    </>

  );
}

export default App;
