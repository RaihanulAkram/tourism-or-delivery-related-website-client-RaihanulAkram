import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Implement Google Sign In

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }

    // Implement Logout

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegister = e => {
        console.log(email, password);
        e.preventDefault();

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contains two uppercase letters");
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError("Password must contains one special case letter.");
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Password must contains two digits.");
            return;
        }
        if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
            setError("Password must contains three lowercase letters.");
            return;
        }
        if (!/.{8}/.test(password)) {
            setError("Password must contains 8 characters.");
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        } else {
            registerNewUser(email, password);
        }
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth]);


    return {
        user,
        error,
        isLogin,
        signInUsingGoogle,
        logout,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleResetPassword,
        handleNameChange,
        processLogin
    }
}

export default useFirebase;