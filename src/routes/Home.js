import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo, actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStatetoProps(state) {
  return { toDos: state };
}

function mapDispatchtoProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);

//  mapStatetoProps -> connect를 사용하여 store와 component를 연결 한다.
