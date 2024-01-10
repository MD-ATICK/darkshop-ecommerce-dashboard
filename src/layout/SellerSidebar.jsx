import React from 'react'
import { GiPull } from 'react-icons/gi'
import { FaUserFriends, FaUsersSlash, FaAmazonPay } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMdChatboxes } from 'react-icons/io'
import { CiBoxList } from 'react-icons/ci'
import { BsFillChatTextFill, BsPersonBoundingBox } from 'react-icons/bs'
import { BiLogOut, BiSolidDiscount } from 'react-icons/bi'
import { MdSupportAgent, MdDashboard } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/reducers/authReducers'

function SellerSideBar({ setsidebarOpen, setlogoutLoading }) {


  const routesArray = [
    {
      _id: 1,
      title: 'Dashboard',
      icon: <MdDashboard />,
      path: '/seller/dashboard'
    },
    {
      _id: 2,
      title: 'Add Product',
      icon: '+',
      path: '/seller/add-product'
    },
    {
      _id: 6,
      title: 'All Products',
      icon: <CiBoxList />,
      path: '/seller/all-products'
    },
    {
      _id: 3,
      title: 'Discount Product',
      icon: <BiSolidDiscount />,
      path: '/seller/discount-product'
    },
    {
      _id: 4,
      title: 'Orders',
      icon: <AiOutlineShoppingCart />,
      path: '/seller/order'
    },
    {
      _id: 5,
      title: 'Payments',
      icon: <FaAmazonPay />,
      path: '/seller/payment'
    },
    {
      _id: 7,
      title: 'Chat Customer',
      icon: <IoMdChatboxes />,
      path: '/seller/chat-customer'
    },
    {
      _id: 8,
      title: 'Chat Support',
      icon: <MdSupportAgent />,
      path: '/seller/chat-support'
    },
    {
      _id: 9,
      title: 'Profile',
      icon: <BsPersonBoundingBox />,
      path: '/seller/profile'
    },
    {
      _id: 10,
      title: 'Logout',
      icon: <BiLogOut />,
      path: '/seller/logout'
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
        <button className=' cursor-pointer mt-4 py-[6px] text-[14px] tracking-wide mb-2 text-center border-2 border-yellow-400 bg-[#e3e5bcb0] px-5 rounded-lg shadow-sm flex items-center justify-center gap-x-2 font-sans font-semibold duration-150'>Seller </button>
      </div>
      <div className='flex flex-col gap-2 mt-8'>
        {
          routesArray.map((r) => {
            if (r.title === 'Logout') {
              return <nav key={r._id} onClick={LogoutHanlder} className='mt-5 w-full z-50  duration-300 transform flex justify-center px-4 items-center  overflow-hidden rounded-md'>
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

export default SellerSideBar