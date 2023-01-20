
import './App.css';
import ColorBlock from './ColorBlock';

function App() {
  let colors = ['green', 'red', 'yellow']
  let colorMap = colors.map((color)=>{
    return(
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
