import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext'

function Header() {
    const themeContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);

    const {isLightTheme, light, dark } = themeContext;
    const theme = isLightTheme ? light : dark;

    const { isAuthenticated, toggleAuth }= authContext;

    return (
    <nav onClick={toggleAuth} style={{cursor: "pointer", background:theme.ui, color:theme.syntax}}>
        <h1>Context App</h1>
        <div>{
            isAuthenticated ? "Logged in" : "Logged out" }</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </nav>
    )
}

export default Header
