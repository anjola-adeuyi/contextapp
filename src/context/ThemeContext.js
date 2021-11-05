import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [logic, setLogic] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    })

    const toggleTheme = () => {
        setLogic({
            // light: logic.light,
            // dark: logic.dark,
            ...logic,
            isLightTheme: !logic.isLightTheme
        })
    }

    return (
        <div>
            <ThemeContext.Provider value={{...logic, toggleTheme: toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
            
        </div>
    )
}

export default ThemeContextProvider
