import React, { useRef } from 'react'

const Local = () => {
    const data = useRef();
    const handleClick = () =>{
        console.log(data.current.value,'Initial Value')
        localStorage.setItem("InputVal",data.current.value)
    }
    console.log(localStorage.getItem("InputVal"), "****")
  return (
    <div>
        <input ref={data}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Local