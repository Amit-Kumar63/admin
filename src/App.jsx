import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './components/DashboardLayout'
import UploadImage from './pages/UploadImage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/rarostock" element={<DashboardLayout/>} >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="upload" element={<UploadImage />} />
    </Route>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
