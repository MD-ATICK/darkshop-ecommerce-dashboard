import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { FiSearch } from 'react-icons/fi'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineEye } from 'react-icons/ai'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import api from '../api/api'
import { useState } from 'react'
import { ScaleLoader } from 'react-spinners'


function AdminSellers() {

    const [loading, setloading] = useState(true);
    const [sellers, setsellers] = useState([]);

    const sellerFetch = async () => {
        const token = localStorage.getItem('ds-token')
        const { data, status } = await api.get('/v4/get-sellers', { headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setloading(false)
            setsellers(data.sellers)
            console.log(data)
        }
    }

    useEffect(() => {
        sellerFetch()
    }, []);

    return (
        <MainLayout>
            <div className='bg-[#e8e8e8] relative  py-2'>
                {
                    loading &&
                    <div className='  absolute flex-col gap-y-4 top-0 left-0 h-screen w-full flex justify-center items-center glass z-50'>
                        <ScaleLoader speedMultiplier={0.8} color='#0091ff' />
                        <p className='text-[14px] tracking-wide text-stone-700'>data getting <span className=' tracking-widest'>...</span></p>
                    </div>
                }
                <h1 className='text-[28px] font-semibold text-stone-700 pl-3 '>All  Orders</h1>
                <div className='pr-6 pl-3 md:px-10 mt-2 flex items-center gap-x-4 justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-[14px] tracking-wide inline-flex font-sans font-[600]'>Page:</p>
                        <select name="" id="" className='bg-white p-1 px-2 rounded-md'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='h-[40px] flex justify-end items-center'>
                        <input type="text" className=' bg-white outline-none rounded-lg w-[180px] md:w-[300px] focus:w-full lg:focus:w-[500px] duration-500 h-full placeholder:text-stone-500 text-[14px] px-4' placeholder='Search' />
                        <FiSearch className=' -ml-8 text-[18px]' />
                    </div>
                </div>

                <div className='w-full min-h-screen relative px-4 overflow-x-scroll'>
                    <div className='min-w-[800px] lg:w-full bg-white py-3 px-6 rounded-2xl mt-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex items-center gap-x-2 font-sans font-[600] text-[16px] tracking-wide'><GiBackwardTime className=' text-[28px] pt-1' /> All Product Sellers </h1>
                            <p className=' tracking-wide text-[13px] text-stone-500 cursor-pointer hover:text-black'>View All</p>
                        </div>
                        <div className=' w-full bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-5 mt-5'>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.5]'>No.</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1]'>Image</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.8]'>Name</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2.2]'>Email</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.2]'>Pay Status</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1]'>Division</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1]'>District</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-[14px] pl-3 border-gray-300 flex-[.8]'>Action</p>
                        </div>

                        <div className='mt-6 flex flex-col gap-y-1 bggra rounded-2xl'>

                            {
                                !loading && sellers && sellers.length > 0 ?
                                    sellers.map((s, i) => {
                                        const { _id, avatar, role, paymentStatus, status, name, email, shopInfo } = s
                                        return <div key={_id} className=' w-full  flex  rounded-2xl py-2 px-5 items-center'>
                                            <p className=' font-sans text-stone-600 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.5]'>{i+1}.</p>
                                            <p className=' font-sans text-stone-600 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1]'><img src={avatar} className='h-10 w-10 rounded-md shadow-md object-cover' alt="" /></p>
                                            <p className=' font-sans text-stone-600 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.8]'>{name}</p>
                                            <p className=' font-sans text-stone-600 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2.2]'>{email}</p>
                                            {
                                                paymentStatus === 'active' ?
                                                    <p className='  text-stone-700  tracking-wider pl-3 border-gray-400 text-[14px] flex-[1.2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#daf4cc]'>{paymentStatus}</span></p>
                                                    :
                                                    <p className='  text-stone-700  tracking-wider pl-3 border-gray-400 text-[14px] flex-[1.2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>{paymentStatus}</span></p>
                                            }
                                            <p className=' font-sans text-stone-600 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1]'>{shopInfo?.division || 'unknown'}</p>
                                            <p className=' font-sans text-stone-600 font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1]'>{shopInfo?.district || 'unknown'}</p>
                                            <Link to={`/admin/seller/details?_id=${_id}`} className=' font-sans text-stone-600 font-[600] tracking-wide text-[14px] pl-3 border-gray-300 flex-[.8] '> <span className='h-10 w-11 bg-green-600 rounded-lg shadow-md flex justify-center items-center'> <AiOutlineEye className='text-[24px] cursor-pointer text-white' /> </span> </Link>
                                        </div>
                                    })
                                    :
                                    <p className='text-[13px] tracking-wide text-stone-700 py-8 text-center'>no data found.</p>
                            }
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default AdminSellers