import React, { createContext, useReducer } from 'react';
import newsReducer from './reducers/newsReducer';
export const NewsContext = createContext();

const Store = ({ children }) => {

    const initial = {
        loading: true,
        isAutoSugesstion: false,
        latestNews: [],
        searchNews: [],
        errorMessage: ''
    }
    const [state, dispatch] = useReducer(newsReducer, initial);
    
    return (
        <NewsContext.Provider
            value={{ state, dispatch }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export default Store;
