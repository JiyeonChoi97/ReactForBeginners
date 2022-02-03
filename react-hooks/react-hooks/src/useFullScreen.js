import { useRef } from "react";

const useFullScreen = (onFullS) => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current) {
      element.current.requestFullscreen();
      if(onFullS && typeof onFullS === "function"){
        onFullS(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if(onFullS && typeof onFullS === "function"){
      onFullS(false);
    }
  }
  return {element, triggerFull, exitFull};
}


export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const {element, triggerFull, exitFull} = useFullScreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250"></img>
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
    
  );
}
