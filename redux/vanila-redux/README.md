#Vanilla Redux

Learning Vanilla-Redux and React-Redux

- 문법

    ```tsx
    import {createStore} from "redux";
    
    const reducer = (data, action) => {};
    const store = createStore(reducer);
    ```
  store : data를 넣을 수 있는 장소 생성

  reducer : data modify function
  
  action : redux에서 function을 부를때 쓰는 두번째 parameter, 혹은 argument
  
  > dispatch → reducer에 action 전송 </br>
  subscribe → store 안에 있는 변화들을 알 수 있게 해줌 </br>
  getState → 현재 data 값 알려줌
  >