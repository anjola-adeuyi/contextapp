import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeToggle() {
    const context = useContext(ThemeContext);
    const { toggleTheme } = context;

    return (
        <div>
            <button onClick={toggleTheme}>Toggle theme here</button>
            
        </div>
    )
}

export default ThemeToggle
