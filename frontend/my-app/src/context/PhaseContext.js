import React,{createContext,useState} from 'react'

const PhaseContext =createContext();

function PhaseContextProvider(props) {
const [phase, setphase] = useState(undefined)
const [day,setday] = useState(0)

    return (
        <PhaseContext.Provider value={{phase,setphase,day,setday}}>
            {props.children}
        </PhaseContext.Provider>
    )
}

export default PhaseContext
export {PhaseContextProvider}
