
import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidation } from "../utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();


  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

const name=useRef();
  const email = useRef();
  const password = useRef();
  const handleForm = (e) => {
    e.preventDefault();
    const message = CheckValidation(email.current.value, password.current.value);

    console.log(name);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value,)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          
          // ..
        });

    }
    else {
      //SignIn Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+"-"+errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }


  }
  const toggleSignInForm = () => {
    
    setSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />

      <div className="">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg" alt="netflix-background-image" />
      </div>
      <form className="absolute top-1/4 bg-black text-white w-3/12 mx-auto right-0 left-0 p-12 opacity-80 rounded-lg ">
        <h1 className="text-3xl font-bold m-2 mb-7">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type="text" placeholder="FullName" className="w-full p-2  m-2 bg-gray-700" />)}
        <input ref={email} type="text" placeholder="Email Address" className="w-full p-2  m-2 bg-gray-700" />
        <input ref={password} type="password" placeholder="Password" className="w-full p-2 m-2 bg-gray-700" />
        <p className="p-2 m-2 font-bold text-red-600">{errorMessage}</p>
        <button className="w-full bg-red-600 rounded-lg p-2 m-2 " onClick={handleForm} >{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-2 m-2 mt-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign-Up Now." : "Already Registered?SignIn now"}</p>
      </form>

    </div>
  )
}
export default Login;
