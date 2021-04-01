import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history= useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // /** @type {firebase.auth.OAuthCredential} */
                // var credential = result.credential;

                // // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // // The signed-in user info.
                // var user = result.user;
                // console.log(user);
                // setUser(user);
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div>
            <p>email: {user.email}</p>
            <button onClick={handleGoogleSignIn} type="submit" className="googleBtn">Sign in with Google</button>
        </div>
    );
};

export default Login;