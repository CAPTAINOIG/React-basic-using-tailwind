import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='bg-dark-background gap-10 sticky top-0 z-[20] mx-auto flex w-full flex-wrap items-center justify-between border-b border-gray-500 p-2'>
            <Logo />
            <Navbar />
        </header>
    )
}

export default Header