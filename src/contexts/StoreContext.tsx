/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext } from "react";

const StoreContext = createContext({});

export const useStoreContext = () => {
    return useContext(StoreContext);
} 

export const StoreContextProvider = ({children}: {children : ReactNode}) => {
    return <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>
}