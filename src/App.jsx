import React, { useState } from 'react'
import Navbar from './components/navbar'
import Mainpage from './components/Halamanutama'
import Sidebar from './components/sidebar'
import RightSidebar from './components/rightbar'

const App = () => {
  const [activeTab, setActiveTab] = useState('For You')

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className='pt-20'>
        <Mainpage activeTab={activeTab} />
      </div>
      <Sidebar />
      <RightSidebar />
    </>
  )
}

export default App
