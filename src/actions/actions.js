// export const ADD_ONE = "ADD_ONE";
// export const APPLY_NUMBER = "APPLY_NUMBER";
// export const CHANGE_OPERATION = "CHANGE_OPERATION";
// export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
// export const ADD_MEMORY = "ADD_MEMORY";
// export const RECALL_MEMORY = "RECALL_MEMORY";
// export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const ActionTypes = {
  ADD_ONE: "ADD_ONE",
  APPLY_NUMBER: "APPLY_NUMBER",
  CHANGE_OPERATION: "CHANGE_OPERATION",
  CLEAR_DISPLAY: "CLEAR_DISPLAY",
  ADD_MEMORY: "ADD_MEMORY",
  RECALL_MEMORY: "RECALL_MEMORY",
  CLEAR_MEMORY: "CLEAR_MEMORY",
};

export const addOne = () => {
  return { type: ActionTypes.ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: ActionTypes.APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: ActionTypes.CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: ActionTypes.CLEAR_DISPLAY };
};

export const addMemory = () => {
  return { type: ActionTypes.ADD_MEMORY };
};

export const recallMemory = () => {
  return { type: ActionTypes.RECALL_MEMORY };
};

export const clearMemory = () => {
  return { type: ActionTypes.CLEAR_MEMORY };
};
