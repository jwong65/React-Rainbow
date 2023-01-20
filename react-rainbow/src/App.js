
import './App.css';
import ColorBlock from './Component/ColorBlock';

function App() {
  let colors = ['green', 'red', 'yellow']
  let colorMap = colors.map((color)=>{
    return(
      // This needs a key for unique?
      <ColorBlock color = {color}/>
    )
  })
  return (
    <>
      {colorMap}
    </>

  );
}

export default App;
