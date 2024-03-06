import { Browse } from "./Browse";
import { BG_URL } from "../utils/constant";
import { Header } from "./Header";
import { useRef, useState } from "react";
import {checkValidData} from '../utils/validate'
const Login=()=>
{
    const [isSignInForm, setIsSignForm]=useState(true)
    const [errorMessage, setErrorMessage]=useState(null)
    const email=useRef(null);
    const password=useRef(null);
    const toggleSignInForm=()=>
    {
        setIsSignForm(prevstate=>
            {
                return !prevstate
            })
    }
    const handleValidation=()=>
    {
            console.log(email.current.value)
            console.log(password.current.value)
           const message= checkValidData(email.current.value, password.current.value
                )

                setErrorMessage(message)
    }
    return(
        <div>
        <Header />
        <div className="absolute">
          <img className=" h-full w-full object-cover" src={BG_URL} alt="logo" />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
  { !isSignInForm &&  <input

type="text"
placeholder="Full Name"
className="p-4 my-4 w-full bg-gray-700"
/>}
           
   
          <input
             ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
        ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleValidation}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    )


}
export default Login;