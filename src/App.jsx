import { useMemo, useState } from "react"
import MemoSample from "./comp/MemoSample";
import TagInput from "./comp/TagInput";



function App() {
 const[num, setNum] = useState(0)
 
 const doubleNum = useMemo(()=>{
    console.log("Calculating double...");
    return num*2;
 },[num] );
  return (
    <>
     
      <h1>Vite + React</h1>
      <MemoSample></MemoSample>
      <input type="number"
        onChange={(e)=> setNum(e.target.value)}
        value={num}
        />
        <p>Double : {doubleNum}</p>

      <TagInput tags={['ccna','rhcsa','aws']}></TagInput>

    </>

  )
}

export default App
