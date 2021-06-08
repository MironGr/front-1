import React from 'react'

export default function ButtonLine() {
    function lineClick() {
        console.log('line click!')
    }

    return (
        <button 
            className="btn btn-primary m-2" 
            type="buttons"
            onClick={lineClick}>
                Create line
        </button>
    )
}
