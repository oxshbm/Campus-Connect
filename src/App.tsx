import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
