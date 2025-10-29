import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/home'
import Projects from './pages/projects'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<div className="p-12 text-center"> <h2 className="text-3xl font-bold">404 — Not Found</h2> <p className="mt-4">The page you requested could not be found.</p> </div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

