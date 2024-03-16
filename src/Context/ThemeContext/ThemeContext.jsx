import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useContext } from "react";


const ThemeContext = createContext();
export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}