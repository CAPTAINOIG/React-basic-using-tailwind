import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'



const NavLinks = () => {
  return (
    <div className='md:flex gap-10'>
      <NavLink to="/about" className=' hover:text-gray-300'>About</NavLink>
      <NavLink to="/blog" className=' hover:text-gray-300'>Blog</NavLink>
      <NavLink to="/project" className=' hover:text-gray-300'>Projects</NavLink>
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className='md:w-1/3 md:justify-between'>
        <div className='hidden md:flex'>
          <NavLinks />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavbar} className='ms-20'>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='text-center flex flex-wrap flex-col gap-10 mt-4 md:mt-0'>
        <NavLinks />
      </div>
      
      )}
    </>
  )
}

export default Navbar
