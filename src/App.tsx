import './App.css'
import Button from '@mui/material/Button';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


function App() {


  return (
    <>
    <h1 className="text-3xl font-bold underline">Campus Connect</h1>
    <p className="text-gray-500 dark:text-gray-400">A hyperlocal social media app for students</p>
    <br></br>
     <header>
      <SignedOut>
        <SignInButton />
      </SignedOut> 
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </header>


    </>
  )
}

export default App
