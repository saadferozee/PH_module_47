import React, { useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";


import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Login = () => {

    const [user, setUser] = useState(null);
    const handleGoogleSigninButton = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(Error => console.log(Error))
    }
    const handleGithubSigninButton = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => console.log(error))
    }
    const handleSignOutButton = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch(() => console.log('An error happened while signing out.'))
    }

    return (
        <div className='min-h-64'>
            <div className='border my-[5%] min-h-[30vh] mx-[5%] p-[5%] flex flex-col justify-between'>
                <h1 className='border pt-2.5 pb-3 text-5xl font-light text-center'>Sign Up Process</h1>
                {
                    user ?
                        <button
                            className='border-2 w-fit py-1 px-5 mx-auto hover:cursor-pointer hover:shadow-lg hover:shadow-red-400 hover:bg-red-600 hover:text-white hover:text-shadow-lg flex items-center'
                            onClick={handleSignOutButton}
                        >Sign Out <PiSignOutBold className='ml-1.5' /></button>
                        :
                        <div className='flex justify-center gap-2.5'>
                            <button
                                className='border-2 w-fit py-1 px-5 hover:cursor-pointer hover:shadow-lg hover:shadow-amber-200 hover:bg-amber-400 hover:text-white hover:text-shadow-lg flex items-center'
                                onClick={handleGoogleSigninButton}
                            >Sign In with Google <FaGoogle className='ml-1.5' /></button>
                            <button
                                className='border-2 w-fit py-1 px-5 hover:cursor-pointer hover:shadow-lg hover:shadow-amber-200 hover:bg-amber-400 hover:text-white hover:text-shadow-lg flex items-center'
                                onClick={handleGithubSigninButton}
                            >Sign In with GitHub <FaGithub className='ml-1.5' /></button>
                        </div>
                }
            </div>
            <div className='border m-[5%] p-[2%] text-center'>
                {
                    user ?
                        <div className=''>
                            <img className='w-[15%] mx-auto rounded-full' src={user.photoURL} alt="Photo Permission Error" />
                            <h1 className='font-semibold text-5xl'>{user.displayName}</h1>
                            <h4>{user.email}</h4>
                        </div>
                        :
                        <h1>No User</h1>
                }
            </div>
        </div>
    );
};

export default Login;