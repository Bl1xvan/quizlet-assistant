import { useRef } from "react";
import { actions } from "/src/store/index";
import { useDispatch } from "react-redux";

const ReduxControls = () => {
  const initialTextRef = useRef();
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(actions.changeText(initialTextRef.current.value));
  };
  const clearText = (e) => {
    e.preventDefault();
    dispatch(actions.changeText(""));
    dispatch(actions.handleDefaultLimit());
    initialTextRef.current.value = "";
  };
  return (
    <div id="redux-controls">
      <textarea
        id="initial-text"
        ref={initialTextRef}
        onChange={handleChange}
      ></textarea>
      <div id="column-controls">
        <button type="button" className="column-btn" onClick={clearText}>
          Clear Text
        </button>
        <button type="button" className="column-btn" onClick={increment}>
          Add Columns
        </button>
        <button type="button" className="column-btn" onClick={decrement}>
          Subtract Columns
        </button>
      </div>
    </div>
  );
};

export default ReduxControls;
