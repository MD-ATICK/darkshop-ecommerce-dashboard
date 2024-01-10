import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import MainLayout from '../layout/MainLayout';
import TypeWriterComponent from 'typewriter-effect';
import { FaUserTie } from 'react-icons/fa'
import { RiAdminFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { MdDashboard } from 'react-icons/md'
import { sellerLogin } from '../redux/reducers/authReducers';
import api from '../api/api';

function Home() {


  const [loginModal, setloginModal] = useState(false);
  const { data, status, loading } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const directDash = localStorage.getItem('directDash')


  const testimonialArray = [
    {
      name: "Antonio",
      avatar: 'https://i.seadn.io/gae/Vys9W6HBhxTz3hcxxY3sR1ZPr_fTzfVrQTMjqrcMRsmFMX5AGiPb7oQ4IGqT2PCuSjZXfFNVhPbrLY6_njLVfbhd7kFZFDLSAe6BuEk?auto=format&dpr=1&w=1000',
      title: 'Seniour Developer',
      description: "This is the best applicaiton I've used!"
    },
    {
      name: "Antonio",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw032NNu_pWr0LkatXjwrdgSTZE2_5AWJj6yev-EgOgwEDi62qnbzsBg8KGOP7G8vOKmY&usqp=CAU',
      title: 'Seniour Developer',
      description: "This is the best applicaiton I've used!"
    },
    {
      name: "Antonio",
      avatar: 'https://wallpaperaccess.com/full/3441790.jpg',
      title: 'Seniour Developer',
      description: "This is the best applicaiton I've used!"
    },
    {
      name: "Antonio",
      avatar: 'https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/637e1ec0dd2efe581950764a_3JiMrY13vXQDcWcfo7SfIIymuYLyMAktedMPKnUiR5vM8M6v3Wlq-3dW0D5Zzqy_TlY3bA7aTFtfg0ujwbvy92eTDikrGgWZbjtwq0qmZS4NXhcxFFfgA6q2rBqW0lJ85g3XjfCCoFoKVCwISb6GnyVMmniXv41KsxRsUs_1j8zzAandSfUPm5R0xfkZAw.jpeg',
      title: 'Seniour Developer',
      description: "This is the best applicaiton I've used!"
    },
  ]

  useEffect(() => {
    // const directDash = localStorage.getItem('directDash')
    // !loading && data && directDash && directDash === 'true' ? navigate(data.user.role === 'seller' ? '/seller/dashboard' : '/admin/dashboard') : !loading && data && directDash && localStorage.setItem('directDash', 'false')
    data && navigate(data.user.role === 'seller' ? '/seller/dashboard' : '/admin/dashboard')
  }, [data]);

  return (
    <>
      {
        loginModal && <div onClick={(e) => {
          e.stopPropagation()
          setloginModal(false)
        }} className='glass fixed h-screen w-full flex justify-center items-center'>
          <div className='w-[280px] flex flex-col items-center justify-center gap-y-4 rounded-2xl shadow-lg bg-white p-8'>
            <h1 className='text-[23px] font-bold'><span className=' text-sky-600 text-[28px]'>Login</span> ~ Method</h1>
            <Link to={'/login'} className=' cursor-pointer mt-4 py-3 text-[14px] tracking-wide text-center border-2 border-sky-600 bg-[#bcd3e5b0] w-full rounded-lg shadow-lg flex items-center justify-center gap-x-2 font-sans font-semibold hover:bg-sky-600 hover:text-white duration-150'>Seller Login <FaUserTie className='text-[17px]' /></Link>
            <Link to={'/admin/login'} className=' cursor-pointer mt-4 py-3 text-[14px] tracking-wide text-center border-2 border-green-600 bg-[#bce5c4b0] w-full rounded-lg shadow-lg flex items-center justify-center gap-x-2 font-sans font-semibold hover:bg-green-600 hover:text-white duration-150'>Admin Login <RiAdminFill className='text-[20px]' /></Link>
          </div>
        </div>
      }

      <div className={`${loginModal ? 'h-screen overflow-hidden' : 'h-full'} w-full`}>
        <header className='w-full py-4 md:py-6 px-4 flex justify-between'>
          <img src="./logo.png" className='h-10 opacity-80 w-10 rounded-full' alt="" />
          {!loading && data ?
            <p className='text-[16px] tracking-wide text-stone-600'>Hi, <span className=' font-[600]'>{data.user.name}</span></p>
            :
            <button onClick={() => setloginModal(true)} className='py-3 px-5 rounded-lg text-white text-[13px] bg-sky-500 hover:bg-sky-600 shadow-lg font-[500] tracking-wide'>Sign in</button>}
        </header>
        {
          !loading && data &&
          <div className='flex gap-x-3 px-6 items-center'>
            <input checked={localStorage.getItem('directDash' === 'fasle' ? false : true)} onChange={() => localStorage.setItem('directDash', directDash === 'true' ? 'false' : 'true')} id='check' type="checkbox" className=' accent-sky-500' required />
            <label htmlFor="check" className='text-[13px] tracking-wide text-stone-700'>Direct Dashbaord on</label>
          </div>
        }
        <main className='py-2 px-4 flex items-center justify-center gap-y-2 flex-col text-center'>
          <h1 className='text-[30px] font-bold text-stone-800'><span className=' text-[40px] text-sky-500'>D</span>-Shop Dashboard 👋</h1>
          <div className=' text-[30px] text-sky-700 bg-clip-text font-bold'>
            <TypeWriterComponent
              options={{
                strings: [
                  "Chatbox.",
                  "Photo Generation.",
                  "Music Generation.",
                  "Code Generation.",
                  "Video Generation."
                ],
                autoStart: true,
                loop: true,
              }} />
          </div>
          <button className=' text-[14px] text-center font-[400] text-stone-600 tracking-wide py-6'>Fully fanctional ecommerce website admin and seller dashbaord</button>
          {
            !loading && data ?
              <Link to={data.user.role === 'seller' ? '/seller/dashboard' : '/admin/dashboard'} className='mb-10 shadow-lg py-3 text-[14px] px-4 rounded-lg bg-gradient-to-r  from-sky-500 hover:from-sky-700 hover:to-sky-500 to-sky-700 duration-300 text-white border-2 border-sky-500 flex items-center gap-x-2'>Go to Console <MdDashboard className='text-[18px]' /> </Link>
              :
              <button onClick={() => setloginModal(true)} className='mb-10 shadow-lg py-3 text-[14px] px-4 rounded-lg bg-gradient-to-r  from-sky-500 hover:from-sky-700 hover:to-sky-500 to-sky-700 duration-300 text-white border-2 border-sky-500'>Get Started</button>
          }
        </main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 pb-24">
          {
            testimonialArray.map((i, index) => {
              const { name, avatar, title, description } = i

              return <div key={index} className=" shadow-lg bg-gradient-to-r from-[#192642] to-[#162b57] flex flex-col gap-y-5 p-6 px-8 rounded-2xl border-none text-white">
                <div className=' flex items-center bg-transparent gap-x-4'>
                  <img loading='lazy' src={avatar} className='h-9 w-9 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-700 to-pink-800' alt="" />
                  <div className=' bg-transparent'>
                    <p className=' bg-transparent'>{name}</p>
                    <p className=' text-stone-400 bg-transparent text-[13px] tracking-wide'>{title}</p>
                  </div>
                </div>
                <div className=' bg-transparent'>
                  <p className=' font-[500] pb-6 tracking-wide text-gray-100 bg-transparent text-[16px]'>{description}</p>
                </div>
              </div>
            })
          }
        </div>
        <footer className='text-center bg-[#181818] fixed bottom-0 left-0 w-full py-4 flex items-center justify-center gap-x-2 text-[14px] tracking-wide text-white'>
          <img src="./logo.png" className='h-7 w-7 bg-transparent mr-3' alt="" />
          <p className=' tracking-wide bg-transparent'><span className=' bg-transparent font-semibold text-sky-600 text-[18px]'>D</span>-Shop is provied by <a href="https://www.facebook.com/admin.atick69" className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 underline text-[16px] pl-1'>Md. Atick</a></p>
        </footer>
      </div >

    </>
  )
}

export default Home