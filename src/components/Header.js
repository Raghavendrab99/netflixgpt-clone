import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { netflix_emoji_logo, NetflixLogo, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });

    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //User SignIn or SignUp
                const { uid, email } = user;
                dispatch(addUser({ uid: uid, email: email }))
                navigate("/browse");

            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        //unsubscribe will be called when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleGPTSearch = () => {
        //toggle GPT Search
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    };

    return (
        <div className='absolute w-full px-6 py-2 bg-gradient-to-b from-black z-10 flex flex-colmd:flex-row justify-between'>
            <img className='w-44 h-20 mx-auto md:mx-0'
                src={NetflixLogo} alt="netflix_logo" />
            {user && (<div className='flex justify-between p-2 text-center mx-auto md:mx-0'>
                {showGptSearch && <select className='px-2 py-2 bg-gray-900 text-white my-3 rounded-md' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
                <button className='px-2 py-2 m-4 bg-purple-400 rounded-sm' onClick={handleGPTSearch}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
                <img className='hidden md:block w-12 h-12 m-2' src={netflix_emoji_logo} alt="emoji_logo" />
                <button className='text-white ' onClick={handleSignOut}>(SignOut)</button>
            </div>)}
        </div>
    )
}

export default Header;