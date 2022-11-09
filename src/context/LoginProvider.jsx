import { useContext } from "react";
import { createContext, useState } from "react";

export const LoginContext = createContext();


const LoginProvider = ({children}) => {
    const [user, setUser] = useState({email:"", password:""});

    const values = {user, setUser}
    return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
    );
};

export const useLoginContext= () => {
    return useContext(LoginContext);
};

export default LoginProvider