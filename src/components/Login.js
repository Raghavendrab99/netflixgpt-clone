import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Netflix_BackgroundImage } from '../utils/constants';


const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true);

    const [errMessage, seterrMessage] = useState(null);

    const email = useRef(null);

    const password = useRef(null);



    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //validate the form data
        console.log(email.current.value);
        console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message);
        seterrMessage(message);

        if (message) return;

        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrMessage(errorCode + "-" + errorMessage)
                    // ..
                });
        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrMessage(errorCode + "-" + errorMessage);
                });
        }

    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img className='h-screen object-cover md:w-screen object-cover' src={Netflix_BackgroundImage} alt="backgroundimage" /></div>

            <form className='w-full absolute bg-black bg-opacity-80 md:w-3/12 p-12 my-36 mx-auto right-0 left-0 rounded-md text-white' onSubmit={(e) => e.preventDefault()}>
                <h1 className='text-lg md:py-2 font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className='p-2 my-3 w-full bg-gray-700'
                    type='text'
                    placeholder='First Name'
                    required />}
                <input
                    className='p-2 my-3 w-full bg-gray-700'
                    ref={email}
                    type='text'
                    placeholder='Email address'
                    required />
                <input
                    className='p-2 my-3 w-full bg-gray-700'
                    ref={password}
                    type='password'
                    placeholder='Password'
                    required />
                <p className='text-red-700 font-bold p-2'>{errMessage}</p>
                <button className='p-3 my-3 w-full bg-red-800 rounded-lg'
                    onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='p-3 my-3 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? Sign Up now" : "Already Registered!! SignIn Now.."}</p>
            </form>

        </div>

    )
}

export default Login