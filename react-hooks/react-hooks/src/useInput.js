import { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange };
}


export default function App() {
  const maxLen = value => value.length <= 10;
  const name = useInput("jiyeon", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange}/> */}
      <input placeholder="Name" {...name}/>
    </div>
  );
}
