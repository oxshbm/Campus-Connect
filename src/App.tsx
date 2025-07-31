import './App.css'
import { BrowserRouter } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      {/* <h1 className="text-3xl font-bold underline">Campus Connect</h1>
      <p className="text-gray-500 dark:text-gray-400">A hyperlocal social media app for students</p>
      <br></br>
      <Button variant ="contained">Get Started! </Button> */}
      <Dashboard/>
    </BrowserRouter>
  )
}

export default App
