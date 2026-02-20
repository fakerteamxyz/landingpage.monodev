"use client"
import Link from 'next/link'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-mono tracking-tighter">monodev<span className="text-violet-500">.id</span></span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="#contact" className="text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800 transition-colors">
                Konsultasi
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X /> : <Menu />}
            </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link href="#" className="block py-2 px-3 text-white bg-violet-700 rounded-sm md:bg-transparent md:text-violet-500 md:p-0 md:dark:text-violet-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="#services" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Layanan</Link>
            </li>
            <li>
              <Link href="#portfolio" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Portfolio</Link>
            </li>
             <li>
              <Link href="#contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-500 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontak</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
