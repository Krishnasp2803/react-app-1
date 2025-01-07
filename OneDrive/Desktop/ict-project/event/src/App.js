import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          

        </Routes>
        </Router>
    </div>
  )
}

export default App