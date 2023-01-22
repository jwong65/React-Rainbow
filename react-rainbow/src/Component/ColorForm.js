import React, {useState} from "react"
  //Function for the state
  function ColorForm(props){
    let [input, setInput] = useState()

    return(
      <>
        <form>
          {/* e is for event */}
          <input type='text' onChange={(e=>{
            setInput(e.target.value)
          })}></input>
          <button type='submit'></button>
        </form>
      </>
    )
  }

export default ColorForm