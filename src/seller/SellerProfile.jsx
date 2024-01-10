import React from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { useState } from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners'
import api from '../api/api';
import { toast } from 'react-toastify';
import { BiSolidLockOpenAlt } from 'react-icons/bi'

function SellerProfile() {

    const [changepassShow, setchangepassShow] = useState(false);
    const { data: { user }, fetch, loading } = useSelector(state => state.auth)

    const [error, seterror] = useState('');

    const [oldpassword, setoldpassword] = useState('');
    const [newpassword, setnewpassword] = useState('');
    const [verifyEmail, setverifyEmail] = useState('');

    const [changeLoading, setchangeLoading] = useState(false);

    const ChangePasswordHanlder = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('ds-token')
        setchangeLoading(true)
        if (user && token) {
            console.log('cng', { oldpassword, newpassword, verifyEmail, role: user.role })
            const { data, status } = await api.post('/change-password', { oldpassword, newpassword, role: user.role, email: verifyEmail }, { headers: { Authorization: `Bearer ${token}` } })
            if (status === 201) {
                setchangeLoading(false)
                setoldpassword('')
                setnewpassword('')
                setverifyEmail('')
                seterror('')
                console.log('change successd✅')

                toast.success('password change successed')
            } else {
                setchangeLoading(false)
                seterror(data)
            }
        }

    }


    return (
        <SellerMainLayout>
            {
                fetch && user &&

                <div className=' bg-gray-200  h-full w-full md:p-5 overflow-hidden'>
                    {/* <p onClick={() => setchangepassShow(!changepassShow)} className='p-4 bg-white cursor-pointer'>hi</p> */}
                    {/* box container */}
                    <div className='relative h-full w-full flex flex-col md:flex-row gap-x-8 overflow-hidden  items-start'>

                        <div className='flex-1  overflow-y-scroll border-black  bg-white w-full md:rounded-xl  h-full shadow-lg'>
                            <div className="profile w-full h-[230px] flex flex-col relative justify-center items-center">
                                <div className='h-full bg-sky-600 rounded-br-[20px] rounded-bl-[20px] w-full'>
                                    {user && user.banner && <img src={user.banner} className=' absolute hover:scale-105 duration-150 shadow-lg rounded-br-xl rounded-bl-xl top-0 left-0 w-full h-full object-cover' alt="" />}
                                </div>
                                <img className=' absolute top-20 border-[8px] hover:scale-105 duration-100 border-white transform -translate-x-1/2 left-1/2 h-[250px] w-[250px] rounded-full object-cover' src={user && user.avatar ? user.avatar : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png'} alt="" />
                            </div>
                            <div className='mt-[100px] w-full flex flex-col items-center justify-center'>
                                <p className=' text-[15px] tracking-wide text-stone-700'>{user.name}</p>
                                <p className='text-[13px] tracking-wide text-stone-700'>{user.email}</p>
                                { user.bio &&<p className='text-[14px] tracking-wide pt-3 text-stone-700 font-sans font-[600] text-center px-8'>Bio ~ {user.bio}</p> }
                            </div>
                            <div className='px-8 mt-6'>
                                <div className=' flex items-center gap-x-3 text-stone-600'>
                                    <AiOutlineShop className='text-[25px]' />
                                    <p className='text-[17px] tracking-wide font-sans font-[700]'>Personal Info</p>
                                </div>
                                <div className='rounded-2xl py-2 pb-8 px-8  flex flex-col gap-y-0'>

                                    <div className='pl-2 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className=' text-stone-700 text-[15px] tracking-wide'>Name : </label>
                                        <p className='text-[16px] font-[600] tracking-wide font-sans  text-stone-900'>{user.name}</p>
                                    </div>
                                    <div className='pl-2 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='text-[15px] tracking-wide text-stone-600'>Role : </label>
                                        <span className=' py-1 rounded-lg text-[15px] font-[600] font-sans tracking-wide text-yellow-600 '>{user.role}</span>
                                    </div>
                                    <div className='pl-2 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='text-[15px] tracking-wide text-stone-600'>Status : </label>
                                        <span className=' py-[4px] px-3 rounded-lg text-[15px] text-white shadow-lg font-[500] bg-[#179b1d]'>{user.status}</span>
                                    </div>

                                    <div className='pl-2 pt-[4px] md:pt-[6px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='text-[15px] tracking-wide text-stone-600'>Payment Status : </label>
                                        <span className=' py-1 px-3 rounded-lg text-[15px] text-white tracking-wide font-[500] border-[2px] border-red-500 bg-[#c26226] shadow-lg'>{user.paymentStatus}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='px-8'>
                                <div className=' flex items-center gap-x-3 text-stone-600'>
                                    <AiOutlineShop className='text-[25px]' />
                                    <p className='text-[17px] tracking-wide font-sans font-[700]'>Shop Info</p>
                                </div>
                                {user.shopInfo ?
                                    <div className='px-7 flex flex-col gap-y-2'>
                                        <div className='pl-2 pt-[10px] md:pt-[6px] flex items-center gap-x-2'>
                                            <label htmlFor="name" className=' text-stone-700 text-[14px] tracking-wide'>Shop Name : </label>
                                            <p className='text-[17px]  font-[500] text-black'>{user.shopInfo.shopName}</p>
                                        </div>
                                        <div className='pl-2 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                            <label htmlFor="name" className=' text-stone-700 text-[14px] tracking-wide'>District : </label>
                                            <p className='text-[15px]  font-[500] text-stone-700'>{user.shopInfo.district}</p>
                                        </div>
                                        <div className='pl-2 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                            <label htmlFor="name" className=' text-stone-700 text-[14px] tracking-wide'>Division : </label>
                                            <p className='text-[15px]  font-[500] text-stone-700'>{user.shopInfo.division}</p>
                                        </div>
                                        <div className='pl-2 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                            <label htmlFor="name" className=' text-stone-700 text-[14px] tracking-wide'>Sub Districk : </label>
                                            <p className='text-[15px]  font-[500] text-stone-700'>{user.shopInfo.subDistrict}</p>
                                        </div>
                                    </div> :
                                    <p className='px-8 py-2 text-[14px] tracking-wide text-stone-600'>Not found data.</p>
                                }
                            </div>
                            <div className='flex items-center gap-x-5 pb-4 pt-10 px-8'>
                                <button onClick={() => setchangepassShow(true)} className='py-3 md:hidden text-white text-[13px] tracking-wide bg-orange-500 rounded-xl font-[500] shadow-md w-full '>Change Password</button>
                                <Link to={`/seller/edit-profile/${user._id}`} className='py-3 text-white text-center text-[13px] tracking-wide bg-sky-500 rounded-xl font-[500] shadow-md w-full'>Edit profile </Link>
                            </div>

                        </div>

                        <div className={`flex-1 w-full absolute md:static transform  md:rounded-xl shadow-lg border-2 border-stone-200  duration-500 ${changepassShow ? 'bottom-0' : '-bottom-[450px]'}  left-0 overflow-hidden bg-white  rounded-3xl `}>
                            <div onClick={() => setchangepassShow(false)} className=' w-full flex md:hidden justify-center'>
                                <div className='  mt-4 h-5 w-16 rounded-full cursor-pointer bg-sky-500 border-2 border-sky-600 text-[11px] tracking-wide text-center text-white flex justify-center items-center'>close </div>
                            </div>
                            <div className='py-5 px-8'>
                                <h1 className='josefin text-[20px] flex items-center gap-x-2'><BiSolidLockOpenAlt className=' text-sky-700 pb-1 text-[24px]' /> Change Password</h1>
                                <form action='' onSubmit={ChangePasswordHanlder} className='pt-4 flex flex-col gap-y-4'>
                                    <div className='flex flex-col-reverse gap-y-1'>
                                        {error && error.held === 'email' && <p className=' tracking-wide text-[13px] text-red-600'>* {error.error}</p>}
                                        <input value={verifyEmail} onChange={(e) => setverifyEmail(e.target.value)} type="email" placeholder='enter account email' className='py-3 px-5 bg-gray-200 rounded-lg  text-[14px] text-stone-800 tracking-wide placeholder:text-stone-600 ' required />
                                        <label htmlFor="email" className='text-[15px] text-stone-600 tracking-wide'>* email</label>
                                    </div>
                                    <div className='flex flex-col-reverse gap-y-1'>
                                        {error && error.held === 'oldpassword' && <p className=' tracking-wide text-[13px] text-red-600'>* {error.error}</p>}
                                        <input value={oldpassword} onChange={(e) => setoldpassword(e.target.value)} type="password" placeholder='old passoword' className='py-3 px-5 bg-gray-200 rounded-lg  text-[14px] text-stone-800 tracking-wide placeholder:text-stone-600 ' required />
                                        <label htmlFor="password" className='text-[15px] text-stone-600 tracking-wide'>* old Password</label>
                                    </div>
                                    <div className='flex flex-col-reverse gap-y-1'>
                                        <input value={newpassword} onChange={(e) => setnewpassword(e.target.value)} type="text" placeholder='new password' className='py-3 px-5 bg-gray-200 rounded-lg  text-[14px] tracking-wide text-stone-800 placeholder:text-stone-600 ' required />
                                        <label htmlFor="email" className='text-[15px] text-stone-600 tracking-wide'>* new password</label>
                                    </div>
                                    <button type='submit' className='h-[55px] tracking-wider duration-150 hover:scale-105 text-white  bg-gradient-to-r from-sky-500 rounded-xl to-sky-700 text-[13px] flex items-center justify-center gap-x-3 mt-3'> {changeLoading && <ScaleLoader color='white' />} Change Password</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    {/* box container end */}
                </div>

            }
        </SellerMainLayout>
    )
}

export default SellerProfile