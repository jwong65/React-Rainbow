import React from 'react'

function ColorBlock(property){
    return(
        <div className='colorBlock' style={{'backgroundColor': property.color}}>
            <p>This is {property.color}</p>

        </div>
    )
}
export default ColorBlock