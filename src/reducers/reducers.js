import { ActionTypes } from "../actions/actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  console.log(num1);
  console.log(num2);
  console.log(operation);

  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case ActionTypes.APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case ActionTypes.CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };

    case ActionTypes.CLEAR_DISPLAY:
      return {
        ...state,
        total: initialState.total,
        operation: initialState.operation,
      };

    case ActionTypes.ADD_MEMORY:
      return {
        ...state,
        memory: state.total,
      };

    case ActionTypes.RECALL_MEMORY:
      return {
        ...state,
        total: calculateResult(state.total, state.memory, state.operation),
      };

    case ActionTypes.CLEAR_MEMORY:
      return {
        ...state,
        memory: initialState.memory,
      };
    default:
      return state;
  }
};

export default reducer;
