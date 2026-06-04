import React from 'react'
import './sidebar.css'
import homeIcon from '../assets/home (1).svg'
import searchIcon from '../assets/search.svg'
import notificationIcon from '../assets/notification.svg'
import followIcon from '../assets/follow.svg'
import chatIcon from '../assets/speech-bubble (1).svg'
import grokIcon from '../assets/grok (1).svg'
import profileIcon from '../assets/user.svg'
import moreIcon from '../assets/more (1).svg'
import logoIcon from '../assets/logo-white.svg'





const Sidebar = () => {
  return (
    <>
    <div>
        <div className="flex h-screen bg-black">
                <aside className="fixed left-0 top-0 z-20 h-screen w-78 bg-black text-white p-5 border-r-[0.5px] border-gray-600">
                    <div className="flex flex-col items-start  gap-4">
                    <button className="logo p-2  rounded-3xl flex items-center ml-6  hover:bg-gray-800 transition-colors mt-0">
                        <img src={logoIcon} alt="logo" className="w-6 h-6" />
                    </button>
                        <div className="flex flex-col items-start w-full ml-6 mt-0">
                            <a href="#" className="home p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={homeIcon} alt="home" className="w-5 h-5" />
                                <span className="font-bold text-lg">Home</span>
                            </a>
                            <a href="#" className="home p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={searchIcon} alt="search" className="w-5 h-5" />
                                <span className="font-bold text-lg">Explore</span>
                            </a>
                            <a href="#" className="home p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={notificationIcon} alt="notifications" className="w-5 h-5" />
                                <span className="font-bold text-lg">Notifications</span>
                            </a>
                            <a href="#" className="home p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={followIcon} alt="follow" className="w-5 h-5" />
                                <span className="font-bold text-lg">Follow</span>
                            </a>
                            <a href="#" className="home p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={chatIcon} alt="chat" className="w-5 h-5" />
                                <span className="font-bold text-lg">Chat</span>
                            </a>
                            <a href="#" className="home m-0 p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={grokIcon} alt="grok" className="w-5 h-5" />
                                <span className="font-bold text-lg">Grok</span>
                            </a>
                            <a href="#" className="home m-0 p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={profileIcon} alt="profile" className="w-5 h-5" />
                                <span className="font-bold text-lg">Profile</span>
                            </a>
                            <a href="#" className="home m-0 p-2 rounded-3xl flex items-center gap-2 hover:bg-gray-800 transition-colors">
                                <img src={moreIcon} alt="more" className="w-5 h-5" />
                                <span className="font-bold text-lg">More</span>
                            </a>
                            
                        </div>
                        <button className="logo p-2  rounded-3xl flex items-center ml-6 bg-white text-black mt-0 pt-2 pb-2 pl-17 pr-17 font-bold hover:bg-gray-200">
                            post
                        </button>
                    </div>
                    
                </aside>
        </div>
    </div>
    </>
  )
}

export default Sidebar