'use client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '@/components/HomePage'
import UserDetails from '@/components/UserDetails'

export default function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

