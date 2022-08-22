import { createContext, useContext, useRef } from "react";

const ContextApp = createContext();

export const AppProvider = ({ children }) => {
	const themeRef = useRef(null);
	const obj = { themeRef };
	return <ContextApp.Provider value={obj}>{children}</ContextApp.Provider>;
};

export const useGlobal = () => useContext(ContextApp);
