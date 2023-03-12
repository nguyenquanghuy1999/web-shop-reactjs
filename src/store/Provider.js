import { useReducer } from "react";
import Context from "./Context";
import reducer from "./state/reducer";
import { initState } from "./state/reducer";

function Provider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;