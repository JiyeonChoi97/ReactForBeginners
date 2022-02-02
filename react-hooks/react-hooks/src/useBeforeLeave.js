import { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if(typeof onBefore !== "function"){
    return;
  }
  const handle = (event) => {
    const {clientY} = event;
    if(clientY <= 0){
      onBefore();
    }
  };
}

export default function App() {
  const begForLife = () => console.log("plz don't leave me");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
    
  );
}
