import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Component/Login/Firebase/firebase.init';


initializeAuthentication();



const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider)
      
  }


  //Observe user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setError({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      setError(error.message);
    })
      .finally(() => setIsLoading(false))
  }

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
    setUser,
    setError
  }
};

export default useFirebase;