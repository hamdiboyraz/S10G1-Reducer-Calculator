import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers/reducers";
import { initialState } from "./reducers/reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  addMemory,
  recallMemory,
  clearMemory,
} from "./actions/actions";

// Variables
const numpad = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
];

const operations = ["+", "*", "-"];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state);

  const handleNumbers = (e) => {
    dispatch(applyNumber(parseInt(e.target.value)));
  };

  const handleOperations = (e) => {
    dispatch(changeOperation(e.target.value));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleAddMemory = () => {
    dispatch(addMemory());
  };

  const handleRecallMemory = () => {
    dispatch(recallMemory());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory} />
              <CalcButton value={"MR"} onClick={handleRecallMemory} />
              <CalcButton value={"MC"} onClick={handleClearMemory} />
            </div>

            {numpad.map((row, index) => (
              <div key={index} className="row">
                {row.map((value) => (
                  <CalcButton
                    key={value}
                    value={value}
                    onClick={handleNumbers}
                  />
                ))}
              </div>
            ))}

            <div className="row">
              {operations.map((value) => (
                <CalcButton
                  key={value}
                  value={value}
                  onClick={handleOperations}
                />
              ))}
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
