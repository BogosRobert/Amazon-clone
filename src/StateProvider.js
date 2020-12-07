// set up data layer
// We need it to track the basket

import React, { createContext, useContext, useReducer} from "react";


// this is hte data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how it is used inside a component

export const useStateValue = () => useContext(StateContext);