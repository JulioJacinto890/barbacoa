import React from 'react'

export default function page() {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b">
    {/* Logo */}
    <div className="flex items-center">
      <img src="fiverr-logo.png" alt="Fiverr logo" className="h-10" />
    </div>

    {/* Menu */}
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-800">Fiverr Pro</a></li>
        <li><a href="#" className="text-gray-800">Explora</a></li>
        <li><a href="#" className="text-gray-800">Español</a></li>
        <li><a href="#" className="text-gray-800">Conviértete en vendedor</a></li>
        <li><a href="#" className="text-gray-800">Iniciar sesión</a></li>
        <li>
          <a href="#" className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white">
            Únete
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}
