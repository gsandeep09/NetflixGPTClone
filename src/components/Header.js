import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {

const navigate=useNavigate();
const user=useSelector((store)=>store.user);

  const handleSignOut=()=>{
    
signOut(auth).then(() => {
  // Sign-out successful.
  
  navigate("/");
}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className="absolute bg-gradient-to-b from-black w-full flex justify-between ">
      <div className="w-48 px-8 py-2   top-0 left-28 ">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix-logo" />
      </div>
      {user&&(<div>
        <button className="bg-red-500 p-2 m-4" onClick={handleSignOut}>Signout</button>
      </div>)}
    </div>
  )
}
export default Header;