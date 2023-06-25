/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useContext, createContext} from 'react'

const AuthContext = createContext()



const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState({
      user: {},
      token: "",
    });
    useEffect(()=>{
        const data = localStorage.getItem("loginDetails")
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.existUser,
                token: parseData.token
            })
        }
    }, [])
    return(
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook

const useAuth = ()=> useContext(AuthContext)

export {useAuth, AuthProvider}
