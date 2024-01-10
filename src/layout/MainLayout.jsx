import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Loader from '../components/Loader';

function MainLayout({ children }) {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [logoutLoading, setlogoutLoading] = useState(false);

  return (
    logoutLoading ? <Loader /> :
      <main className='flex h-screen w-full'>
        <div className={`lg:w-[300px] h-screen lg:static shadow-lg shadow-[#bcbcbc]  ${sidebarOpen ? ' absolute top-0 left-0 w-[300px] z-[10]' : 'w-0 overflow-hidden'} duration-500 bg-white h-screen whitespace-nowrap`}>
          <Sidebar setsidebarOpen={setsidebarOpen} setlogoutLoading={setlogoutLoading} />
        </div>
        <div className=' flex-grow h-full overflow-y-scroll duration-300 relative '>
          <div className='bg-sky-500 text-white shadow-lg w-full sticky z-[9] top-0 left-0 h-[50px] md:h-[55px] px-2 sm:px-5'>
            <Header setsidebarOpen={setsidebarOpen} />
          </div>
          <div className='h-[92vh]'>
            {children}
          </div>
        </div>
      </main>
  )
}

export default MainLayout