import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2024 Joshua Kumassi. Built with passion and probably too much coffee.</p>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="https://www.linkedin.com/in/joshua-kumassi-80915b306/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/jaydrice" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.instagram.com/jay.d.rice/" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  )
}