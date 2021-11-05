import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function BookList() {
    const context = useContext(ThemeContext);
    const {isLightTheme, light, dark } = context;
    const theme = isLightTheme ? light : dark;
    console.log(context)
    return (
        <div>
            <div className="book-list" style={{color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{background: theme.ui }} >the way of kings</li>
                    <li style={{background: theme.ui }} >the name of winds</li>
                    <li style={{background: theme.ui }} >the final empire</li>
                </ul>
            </div>
            
        </div>
    )
}

export default BookList
