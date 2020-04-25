import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return (count = count + 1);
  } else if (action.type === "Minus") {
    return (count = count - 1);
  } else {
    return count;
  }
};

const store = createStore(reducer);

// 스토어에 리듀서를 이용하여 데이터를 바꾸어 준다.
// 다른 함수는 불가하다 데이터를 바꾸는 것이

// 리듀서에서 액션을 취해 상태 or 변수를 처리 한다.

// dispatch 함수를 통해서 액션을 처리 해준다.
// 디스패치 함수 내부의 변수는 객체여야 한다.

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });

store.dispatch({ type: "Minus" });

console.log(store.getState());
