import React from 'react'
import Navbar from './components/navbar'
import Mainpage from './components/Halamanutama'
import Sidebar from './components/sidebar'
import RightSidebar from './components/rightbar'


const App = () => {
  return (
    <>
      <Navbar />
      <div className=''>
        <Mainpage />
      </div>
      <Sidebar />
      <RightSidebar />
    </>
  )
}

export default App
