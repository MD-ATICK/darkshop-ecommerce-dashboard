import React from 'react'
import { GiPull } from 'react-icons/gi'
import { FaUserFriends, FaUsersSlash, FaAmazonPay } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { LuLoader } from 'react-icons/lu'
import { BsFillChatTextFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { MdCategory, MdDashboard } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/reducers/authReducers'

function Sidebar({ setsidebarOpen, setlogoutLoading }) {


  const routesArray = [
    {
      _id: 1,
      title: 'Dashboard',
      icon: <MdDashboard />,
      path: '/admin/dashboard'
    },
    {
      _id: 2,
      title: 'Orders',
      icon: <AiOutlineShoppingCart />,
      path: '/admin/order'
    },
    {
      _id: 3,
      title: 'Category',
      icon: <MdCategory />,
      path: '/admin/category'
    },
    {
      _id: 4,
      title: 'Sellers',
      icon: <FaUserFriends />,
      path: '/admin/seller'
    },

    {
      _id: 6,
      title: 'Deactive Sellers',
      icon: <FaUsersSlash />,
      path: '/admin/deactive-sellers'
    },
    {
      _id: 7,
      title: 'Request Sellers',
      icon: <LuLoader />,
      path: '/admin/seller-request'
    },
    {
      _id: 5,
      title: 'Payment Request',
      icon: <FaAmazonPay />,
      path: '/admin/payment-request'
    },
    {
      _id: 8,
      title: 'Chat Seller',
      icon: <BsFillChatTextFill />,
      path: '/admin/chat-seller'
    },
    {
      _id: 9,
      title: 'Logout',
      icon: <BiLogOut />,
      path: '/admin/logout'
    },
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutHanlder = () => {
    alert('sure logout?')
    setlogoutLoading(true)
    localStorage.removeItem('directDash')
    localStorage.removeItem('ds-token')
    dispatch(logout())
    setlogoutLoading(false)
    navigate('/')
  }



  return (
    <div className='w-full relative'>
      <button onClick={() => setsidebarOpen(false)} className='lg:hidden bg-sky-600 py-[6px] px-3  rounded-md inline-block text-white absolute top-16 -right-10 cursor-pointer '>
        <GiPull className='text-[25px]' />
      </button>
      <div className=' flex items-center justify-between px-4'>
        <h1 className='text-[26px] font-bold text-stone-700 '><span className='text-sky-600 text-[32px]'>D</span>-Shop</h1>
        <button className=' cursor-pointer mt-4 py-[6px] text-[14px] tracking-wide mb-2 text-center border-2 border-green-600 bg-[#bce5c4b0] px-5 rounded-lg shadow-md flex items-center justify-center gap-x-2 font-sans font-semibold duration-150'>Admin </button>
      </div>
      <div className='flex flex-col gap-2 mt-8'>
        {
          routesArray.map((r) => {
            if (r.title === 'Logout') {
              return <nav key={r._id} onClick={LogoutHanlder} className='mt-8 w-full z-50  duration-300 transform flex justify-center px-4 items-center  overflow-hidden rounded-md'>
                <button className={` items-center gap-x-3 duration-300 text-white ml-2 w-full text-center flex justify-center hover:bg-red-500 bg-red-600 hover:scale-105 rounded-xl py-3 px-6 text-[20px]`}>{r.icon} <p className='josefin text-[18px]'>{r.title}</p> </button>
              </nav>
            }
            return <nav key={r._id} className=' w-full z-50 duration-300 transform'>
              <NavLink className={` flex items-center gap-x-3 duration-300 hover:bg-gray-200 ml-2 rounded-tl-xl rounded-bl-xl py-3 px-6`} to={r.path}>{r.icon} <p>{r.title}</p> </NavLink>
            </nav>
          })
        }
      </div>
    </div>
  )
}

export default Sidebar