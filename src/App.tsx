import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'

import GroupList from './pages/GroupList'
import GroupDetails from './pages/GroupDetails'
import CreateGroup from './pages/CreateGroup'
import Sidebar from './components/Sidebar'
import AskQuestion from './pages/AskQuestion'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <main className="flex-1">
      {children}
    </main>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        
        {/* Dashboard routes */}

        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/groups/create" element={<DashboardLayout><CreateGroup /></DashboardLayout>} />
        <Route path="/groups" element={<DashboardLayout><GroupList /></DashboardLayout>} />
        <Route path="/groups/:groupId" element={<DashboardLayout><GroupDetails /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App