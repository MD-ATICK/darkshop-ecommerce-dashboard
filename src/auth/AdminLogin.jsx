import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { admin_Login } from '../redux/reducers/authReducers';
import Loader from '../components/Loader';

function AdminLogin() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(state => state)

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Loading, setLoading] = useState(false);

    const adminLoginHanlder = (e) => {
        e.preventDefault()
        dispatch(admin_Login({ email, password }))
    }


    useEffect(() => {
        if (auth.status === 201) {
            localStorage.setItem('ds-token', auth.data.token)
            toast.success('Admin Login Successfully.')
            navigate('/')
        }
    }, [auth.data]);

    return (
        auth.loading ? <Loader /> :
            <div className=' w-full h-screen flex items-center flex-col bg-gray-500 p-4 lg:p-10'>
                <div className='flex justify-between w-full bg-transparent items-center'>
                    <Link to={'/'} className=' bg-transparent'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#007ee6" className="w-6 h-6 cursor-pointer bg-transparent">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                    <Link to='/register' className=' text-sky-700 cursor-pointer text-[15px] tracking-[0.020em] bg-transparent' >Register</Link>
                </div>
                <form onSubmit={adminLoginHanlder} className='max-w-[500px] mt-10 w-full flex flex-col gap-y-6 bg-white rounded-2xl shadow-lg p-6 md:p-9'>
                    <h1 className='text-[26px] font-bold text-stone-900'><span className='text-sky-600 text-[38px]'>D</span>-Shop ~ Admin Login</h1>
                    <div className='flex gap-1 flex-col-reverse'>
                        {auth.status === 222 && auth.data.error.includes('account') && <p className='text-red-500 text-[12px] tracking-wide'>* user not exist with this email</p>}
                        <input id='email' value={email} onChange={(e) => setemail(e.target.value)} name='email' type="email" placeholder='Enter Your Email' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="email" className='email-label text-[13px] text-stone-800 tracking-wide'>* email</label>
                    </div>
                    <div className='flex gap-1 flex-col-reverse'>
                        {auth.status === 222 && auth.data.error.includes('password') && <p className='text-red-500 text-[12px] tracking-wide'>* password is not match</p>}
                        <input id='password' value={password} onChange={e => setpassword(e.target.value)} name='password' type="password" placeholder='Enter Your Password' className='email border-b-[1.5px] p-2 py-1 focus:outline-none  placeholder:text-stone-500 focus:border-stone-500 border-stone-300 text-[13px] tracking-wide' required />
                        <label htmlFor="password" className='email-label text-[13px] text-stone-800 tracking-wide'>* password</label>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <input id='check' type="checkbox" className=' accent-sky-500' required />
                        <label htmlFor="check" className='text-[13px] tracking-wide text-stone-700'>I agree to privacy policy & terms</label>
                    </div>
                    <div>
                        <Link to={'/forget-password'} className='forget text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-800 underline' ><p>forget password?</p></Link>
                    </div>
                    <button type='submit' className='bg-sky-500 hover:bg-sky-600 duration-150 rounded-lg mt-3 shadow-lg py-3 w-full text-white text-[13px] tracking-wide'>Login</button>
                    {/* <p className='forget py-0 text-[12px] tracking-wide text-right text-stone-600  hover:text-sky-800 underline' >or</p> */}
                    {/* <div>

                    <p className='forget text-[13px] tracking-wide text-center pt-3 text-stone-600  hover:text-sky-800 underline' >or</p>
                    <div className=' flex justify-center items-center gap-x-6 mt-5 '>
                        <button className='h-[46px] w-12 flex justify-center items-center rounded-xl bg-gradient-to-r from-sky-500 shadow-lg to-sky-700 text-white'>
                            goo
                        </button>
                        <button className='h-[46px] w-12 flex justify-center items-center rounded-xl bg-gradient-to-r from-sky-500 shadow-lg to-sky-700 text-white'>
                            git
                        </button>
                        <button onClick={() => toast.success('error is herer')} className='h-[46px] w-12 flex justify-center items-center rounded-xl bg-gradient-to-r from-sky-500 shadow-lg to-sky-700 text-white'>
                            fac
                        </button>

                    </div>
                </div> */}
                </form >
            </div >
    )
}

export default AdminLogin