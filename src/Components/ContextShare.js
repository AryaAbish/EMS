import React, { createContext, useState } from 'react'

//context creation
export const registerContext=createContext()

//update context
export const updateContext=createContext()

function ContextShare({children}) {
    //state for registerContext
    const [registerUpdate,setRegisterUpdate]=useState("")
    //state for update context
    const [UpdateStatus,setUpdateStatus]=useState("")

  return (
    <div>
        <updateContext.Provider value={{UpdateStatus,setUpdateStatus}}>
          <registerContext.Provider value={{registerUpdate,setRegisterUpdate}}>
              {children}
          </registerContext.Provider>
        </updateContext.Provider>
    </div>
  )
}

export default ContextShare