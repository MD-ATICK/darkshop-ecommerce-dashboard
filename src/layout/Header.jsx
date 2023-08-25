import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function Header({ setsidebarOpen }) {

  const { data } = useSelector(state => state.auth)
  const [focus, setfocus] = useState(false);

  return (
    data && <div className='h-full text-white flex items-center justify-between '>
      <div className='flex items-center gap-x-4'>
        <button onClick={() => setsidebarOpen(true)} className=' text-white rounded-md shadow-md'> <FiMenu className='text-[25px]' /> </button>
        <div className='h-[40px]'>
          <input onBlur={() => setfocus(false)} onFocus={() => setfocus(true)} id='colo' type="text" className='h-full text-stone-800 w-[130px] bg-gray-50 py-3 px-4 rounded-md font-sans tracking-wide text-[14px] font-[600] duration-500 focus:w-[230px] md:w-[400px] md:focus:w-[400px] placeholder:text-stone-500 outline-none' placeholder='Search ...' />
        </div>
      </div>
      <div className='flex items-center gap-x-2'>
        <Link to={'/admin/dashboard/chat-messages'} className=' relative' ><BiMessageDetail className='text-white text-[25px] mr-2' /> <p className=' absolute -top-2 -right-1 h-[20px] w-[20px] bg-sky-900 rounded-full font-sans font-bold flex justify-center items-center text-[13px] pb-[2px] '>15</p></Link>

        <div className={`flex flex-col items-end  whitespace-nowrap transform ${focus ? 'w-[0px] md:w-[100px] overflow-hidden duration-500' : 'w-[80px] md:w-[100px] duration-500'}`}>
          <p className=' font-sans tracking-wide font-[600] text-white text-[14px] lg:text-[16px] text-right '>{data.user.name}</p>
          <p className=' text-right opacity-90 font-[500] tracking-wide text-[12px]'>{data.user.role}</p>
        </div>

        <button>
          <img src="/logo.png" className='h-9 w-9' alt="" />
        </button>
      </div>
    </div>
  )
}

export default Header