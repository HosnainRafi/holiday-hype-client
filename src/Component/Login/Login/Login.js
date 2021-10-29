import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {

    const {signInUsingGoogle,setUser,setError,setIsLoading} = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);
            setUser(result.user);
            setError({});
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false));
    }

    return (
        <div onClick={handleGoogleLogin} style={{cursor:"pointer"}} className="login shadow p-3 w-50 pointer text-center mx-auto bg-body rounded container login">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png"/> Sign In With Google
        </div>
    );
};

export default Login;