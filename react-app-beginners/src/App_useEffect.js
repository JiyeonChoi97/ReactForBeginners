import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('CALL THE API');
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR ", keyword);
    }
  }, [keyword])
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
