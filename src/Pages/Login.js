import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider
} from "firebase/auth";

import { githubLogo, googleLogo } from "../assets";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/BazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const gitProvider = new  GithubAuthProvider();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(addUser({
          _id:user.uid,
          name:user.displayName,
          email:user.email,
          image:user.photoURL

        }))
        setTimeout(()=>{
          navigate("/")
          // it will navigate to home page after 1.5 second
        },1500)
        // 
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = (e) => {
    // e.preventDefault();
    // signInWithPopup(auth, gitProvider)
    //   .then((result) => {
    //     const user = result.user;
    //     dispatch(addUser({
    //       _id:user.uid,
    //       name:user.displayName,
    //       email:user.email,
    //       image:user.photoURL

    //     }))
    //     setTimeout(()=>{
    //       navigate("/")
    //       // it will navigate to home page after 1.5 second
    //     },1500)
    //     // 
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      toast.success("logout successfully!");
      dispatch(removeUser())
      
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-1 gap-1">
      <div className="w-full flex  items-center justify-center py-10 gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center duration-300 cursor-pointer hover:border-blue-600 gap-2"
        >
          <img className="w-8 " src={googleLogo} alt="googleLogo" />
          <span className="text-sm text-gray-900">sign in with google</span>
        </div>
        <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <div className="w-full flex  items-center justify-center py-5 gap-10">
        <div   onClick={handleGithubLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center duration-300 cursor-pointer hover:border-blue-600 gap-2">
          <img className="w-8 " src={githubLogo} alt="githubLogo" />
          <span className="text-sm text-gray-900">sign in with github</span>
        </div>
        <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  );
};

export default Login;
