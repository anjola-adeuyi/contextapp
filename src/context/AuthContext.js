import { createContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [logic, setLogic] = useState({
        isAuthenticated: false
    })

    const toggleAuth = () => {
        setLogic({
            isAuthenticated: !logic.isAuthenticated
        })
    }

    return (
        <AuthContext.Provider value={{...logic, toggleAuth}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
