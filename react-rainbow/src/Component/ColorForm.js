import React, {useState} from "react"
  //Function for the state
  function ColorForm(props){
    let [input, setInput] = useState('')

    //Function for submitting
    const handleSubmit = (e)=>{
        e.preventDefault()
        //Add color which is in App.js which will add the new color
        props.addColor(input)
    }

    return(
      <>
        <form onSubmit={handleSubmit}>
          {/* e is for event */}
          <input type='text' onChange={(e)=>{setInput(e.target.value)}} />
          <button type='submit'>Submit the color</button>
        </form>
      </>
    )
  }

export default ColorForm