'use client';

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../app/firebase";

export default function Home() {

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    
      .then((result) => {
        console.log(result);
        console.log(result.user);
        console.log(result.providerId);
      })
      .catch((error) => {
        console.log(error);
      });
  
  }




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <button onClick={googleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In with Google
      </button>
    </main>
  );
}
