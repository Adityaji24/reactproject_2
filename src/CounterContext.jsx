import { createContext, useState } from "react";
const myContext=createContext();

const CounterContext=({children})=>{
    const[cnt,setCnt]=useState(0);
    <myContext.Provider value={{cnt,setCnt}}>
        {children}
    </myContext.Provider>
    return(
        <>
        
        </>
    )
}
export default CounterContext
export {myContext}