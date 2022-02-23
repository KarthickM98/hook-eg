import React, { useEffect, useState } from 'react'

function UseStateHook() {
    const [data,setData] = useState(0)
    const clickFun=()=>{
        setData(data+1)
    }
    useEffect(()=>{
        
    })
  return (
    <div>
        UseHooks!!
        <h2>useState hook</h2>
        <button onClick={clickFun}>clicked {data}...</button>

    </div>
  )
}

export default UseStateHook