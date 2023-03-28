import { useContext, createContext, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";

/**
 * 
 * 1. Create Context
 * 2. Create Provider
 * 3. useContext
 */

const initialState = {
    boarding_types : [],
    school_level: [],
    school_boards: [],
    locations: [], 
    school_fees: [] 
}

const FilterContext = createContext(initialState);






const FilterProvider = ({children}) => {

    const [state, filterDispatch] = useReducer(filterReducer, initialState);

    return (
                <FilterContext.Provider value={{state, filterDispatch}}>
                    {children}
                </FilterContext.Provider>
    )
}


const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
