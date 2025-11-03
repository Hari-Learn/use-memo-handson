import { useMemo, useState } from "react"



function App() {
 const[num, setNum] = useState(0)
 
 const doubleNum = useMemo(()=>{
    console.log("Calculating double...");
    return num*2;
 },[num] );
  return (
    <>
     
      <h1>Vite + React</h1>
      <input type="number"
        onChange={(e)=> setNum(e.target.value)}
        value={num}
        />
        <p>Double : {doubleNum}</p>
    </>

  )
}

export default App
