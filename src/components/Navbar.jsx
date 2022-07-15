import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="relative container mx-auto p-6 ">
        <div className="flex item-center justify-between ">
            <div className="pt-2 flex item-center justify-between space-x-8 ">
        <i className="fa-solid fa-clapperboard ">Movie-Mania</i>       

            </div>
        

        <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400">Pricing</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Premium</a>
            <a href="#" className="hover:text-gray-400">Career</a>
            <a href="#" className="hover:text-gray-400">Community</a>
        </div>

        <button className="btn">Button</button>
        </div>

      </nav>
    </>
  )
}

export default Navbar
