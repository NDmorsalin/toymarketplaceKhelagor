/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
// import {auth} from '../firebase/firebase.config.js'
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // register by email and password
    const register = async (email, password) => {
        try {
            return await createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    // login by email and password




  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
