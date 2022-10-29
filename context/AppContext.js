import React, { createContext, useState } from "react";

export const AppContext = createContext({
    data: [],
    setData: () => {}
});

const AppContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
