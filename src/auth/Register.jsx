import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { seller_register } from '../redux/reducers/authReducers';
import { toast } from 'react-toastify';


function Register() {

  const { auth } = useSelector(state => state)

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [comfirmpassword, setcomfirmpassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const RegisterHanlder = (e) => {
    e.preventDefault()
    if (password !== comfirmpassword) {
      alert('error not match.')
      return setcomfirmpassword('')
    }
    dispatch(seller_register({ name, email, password, comfirmpassword }))
  }


  useEffect(() => {
    if (auth.status === 201) {
      localStorage.setItem('ds-token', auth.data.token)
      toast.success('seller register Successfully.')
      navigate('/')
    }
  }, [auth.data]);



  return (
    <div className=' w-full h-screen flex items-center flex-col bg-gray-500 p-4 lg:p-8'>
      <div className='flex justify-between w-full bg-transparent items-center'>
        <Link to={'/login'} className=' bg-transparent'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#007ee6" className="w-6 h-6 cursor-pointer bg-transparent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <Link to='/' className=' text-sky-700 cursor-pointer text-[14px] tracking-[0.020em] bg-transparent' >home</Link>
      </div>
      <form onSubmit={RegisterHanlder} className='max-w-[500px] mt-8 md:mt-4 w-full flex flex-col gap-y-8 bg-white rounded-2xl shadow-lg p-6 md:p-10'>
        <h1 className='text-[28px] font-bold text-stone-900'><span className='text-sky-600 text-[40px]'>D</span>-Shop ~ Register</h1>
        <div className='flex gap-1 flex-col-reverse'>
          {/* <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p> */}
          <input value={name} onChange={(e) => setname(e.target.value)} id='name' name='name' type="name" placeholder='enter your name' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
          <label htmlFor="name" className='email-label text-[13px] text-stone-800 tracking-wide'>* name</label>
        </div>
        <div className='flex gap-1 flex-col-reverse'>
          {/* <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p> */}
          <input value={email} onChange={(e) => setemail(e.target.value)} id='email' name='email' type="email" placeholder='enter Your Email' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
          <label htmlFor="email" className='email-label text-[13px] text-stone-800 tracking-wide'>* email</label>
        </div>
        <div className='flex gap-1 flex-col-reverse'>
          {/* <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p> */}
          <input value={password} onChange={(e) => setpassword(e.target.value)} id='password' name='password' type="password" placeholder='new password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
          <label htmlFor="password" className='email-label text-[13px] text-stone-800 tracking-wide'>* password</label>
        </div>
        <div className='flex gap-1 flex-col-reverse'>
          {/* <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p> */}
          <input value={comfirmpassword} onChange={(e) => setcomfirmpassword(e.target.value)} id='newpassword' name='newpassword' type="password" placeholder='again type new Password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
          <label htmlFor="newpassword" className='email-label text-[13px] text-stone-800 tracking-wide'>* comfirm password</label>
        </div>
        <div className='flex gap-x-3 items-center'>
          <input id='check' type="checkbox" className=' accent-sky-500' required />
          <label htmlFor="check" className='text-[13px] tracking-wide text-stone-700 cursor-pointer'>I agree to privacy policy & terms</label>
        </div>
        {/* <Link to={'/forget-password'} className='forget text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-600 underline' >forget password?</Link> */}
        <button type='submit' className='bg-sky-500 rounded-lg mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide'>Register</button>
      </form>
    </div>
  )
}

export default Register