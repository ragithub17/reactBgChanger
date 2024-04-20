import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive")

  return (

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center
         gap-3 shadow-2xl px-3 py-2 rounded-3xl">
           <button 
           onClick={()=>setColor("green")} 
           className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
           " style={{backgroundColor:"green"}}>Green</button>
          <button 
          onClick={()=>setColor("red")} 
          className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
          " style={{backgroundColor:"red"}}>Red</button>
          <button 
          onClick={()=>setColor("blue")}
          className=" bg-blue-700 outline-none px-5 rounded-full shadow-2xl py-1 text-white
           hover:bg-blue-700 active:bg-blue-500" >Blue</button>
          <button 
          onClick={()=>setColor("violet")}
          className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
          " style={{backgroundColor:"violet"}}>Violet</button>
          <button 
          onClick={()=>setColor("gray")}
          className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
          " style={{backgroundColor:"gray"}}>Gray</button>
          <button 
          onClick={()=>setColor("orange")}
          className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
          " style={{backgroundColor:"orange"}}>Orange</button>
          <button 
          onClick={()=>setColor("tomato")}
          className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
          " style={{backgroundColor:"tomato"}}>Tomato</button>
          <button 
          onClick={()=>setColor("black")}
          className="outline-none px-5 rounded-full shadow-2xl py-1 text-white
          " style={{backgroundColor:"black"}}>Black</button>
         </div>
      </div>
    </div>
  )
}

export default App
