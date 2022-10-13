
import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth=getAuth(app);
function App() {
  const [users,setUser]=useState({});
const googleProvider=new GoogleAuthProvider();
const eventHandler=()=>{
signInWithPopup(auth,googleProvider)
.then((result)=>{
const user=result.user;
setUser(user);
console.log(user);
})
.catch((error)=>{
console.error('error:',error)
})


}
const signOutButton=()=>{
  signOut(auth).then(()=>{
    setUser({});
  })
}

const gitProvider=new GithubAuthProvider();
const gitLogIn=()=>{
  signInWithPopup(auth,gitProvider)
  .then((result)=>{
    const usersss=result.user;
    console.log(usersss);
  })
  .catch((error)=>{
    console.error('error',error)
  })
}

  return (
    <div className="App">
      <div>  <button onClick={eventHandler}>Log in</button>
      <button onClick={signOutButton}>Sign out</button>
      <div>
        <h2>Name:{users.displayName}</h2>
        <h3>Email:{users.email}</h3>
        <img src={users.photoURL} alt="" />
      </div></div>
      <div>
      <div>  <button onClick={gitLogIn}>gitLog in</button>
      <button >gitSign out</button>
      </div>
    </div>
    </div>
  );
}

export default App;
