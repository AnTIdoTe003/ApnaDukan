import { useState, useEffect, useContext, createContext, Children } from "react";


const authContext = createContext()



const AuthProvider = () =>{
const [auth, setAuth] = useState({
    user:null,
    token:''
})
return(
 <authContext.Provider value={[auth, setAuth]}>
    {Children}
 </authContext.Provider>
)
}

// custom Hook

const useAuth =()=> useContext(authContext)

export {useAuth, AuthProvider}