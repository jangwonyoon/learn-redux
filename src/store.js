import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// action creator

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// console.log(addToDo(), deleteToDo());

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 새로운 state를 리턴할수도 있고 , state를 mutate 할 수도 있다.

//  state를 mutate가 redux-toolkit 에서는 가능하다.

// redux-toolkit에서 state를 mutate가 가능한 이유는 immer에서 작동하기 때문에 그 이유는 잘 ...

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

// configureStore -> react-toolkit 적용

const store = configureStore({ reducer });

// const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
