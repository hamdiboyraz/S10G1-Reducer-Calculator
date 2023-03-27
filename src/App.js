import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers";
import { initialState } from "./reducers";
import { addMemory, addOne, clearMemory, recallMemory } from "./actions";
import { applyNumber } from "./actions";
import { changeOperation } from "./actions";
import { clearDisplay } from "./actions";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

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

            <div className="row">
              {/* <CalcButton value={1} onClick={() => dispatch(addOne())} /> */}
              {/* <CalcButton value={1} onClick={() => dispatch(applyNumber(1))} /> */}
              {/* <CalcButton value={1} onClick={(e) => handleNumbers(e)} /> */}
              <CalcButton value={1} onClick={handleNumbers} />
              <CalcButton value={2} onClick={handleNumbers} />
              <CalcButton value={3} onClick={handleNumbers} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNumbers} />
              <CalcButton value={5} onClick={handleNumbers} />
              <CalcButton value={6} onClick={handleNumbers} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNumbers} />
              <CalcButton value={8} onClick={handleNumbers} />
              <CalcButton value={9} onClick={handleNumbers} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperations} />
              <CalcButton value={"*"} onClick={handleOperations} />
              <CalcButton value={"-"} onClick={handleOperations} />
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
