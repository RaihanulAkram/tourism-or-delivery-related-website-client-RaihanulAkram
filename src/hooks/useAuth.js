import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

//useAuth hook from useFirebase
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;