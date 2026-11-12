import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <>
      <h1>Counter Application</h1>
      <h1>{count}</h1>
      <div style={{display:"flex",padding:"10px",gap:"20px"}}>
      <button onClick={()=>setCount(count+1)}>Increement</button><br></br>

      <button onClick={()=>setCount(count-1)}>Decreement</button><br></br>

      <button onClick={()=>setCount(0)}>Reset</button>
      </div>

      <p>Current count:{count}</p>
    </>
  )
}

export default Counter
