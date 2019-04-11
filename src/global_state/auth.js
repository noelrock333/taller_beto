import React from "react";
let ContextOne = React.createContext();

let initialState = {
  count: 10,
  currentColor: "#bada55"
};

let reducer = (state, action) => {
  switch (action.type) {
    case "set-jwt":
      return { ...state, jwt: action.payload };
  }
};

function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };