import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="bg-transparent backdrop-blur-lg text-white m-0 border-b border-gray-600 fixed w-full z-10">
            <div className="flex justify-center text-sm font-medium m-0">
                <div className="bg-transparent hover:bg-white/20 transition duration-300 pt-4 pb-4 pl-40 pr-15 m-0">
                <button className="relative group">
                For You
                </button>
                </div>
                <div className="bg-transparent hover:bg-white/20 transition duration-300 pt-4 pb-4 pl-15 pr-59 m-0">
                <button className="relative group text-white ">
                Following
                </button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Navbar