import {createStore} from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifer = (state = 0, action) => {
    if(action.type === "ADD") {
        return state + 1;
    } else if(action.type === "MINUS") {
        return state - 1;
    } else {
        return state;
    }
};

const countStore = createStore(countModifer);

// reducer에 action 전송
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});