import React from 'react'
import MainLayout from '../layout/MainLayout'
import { FiSearch } from 'react-icons/fi'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineEye } from 'react-icons/ai'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function AdminOrders() {
    return (
        <MainLayout>
            <div className='bg-[#e8e8e8]  py-4'>

                <h1 className='text-[26px] font-bold pl-3 text-stone-700'>All  Orders</h1>
                <div className='pr-6 pl-3 md:px-10 mt-6 flex items-center gap-x-4 justify-between'>
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
                    <div className='w-[800px] md:w-full bg-white p-6 rounded-2xl mt-6'>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex items-center gap-x-2 font-sans font-[600] text-[16px] tracking-wide'><GiBackwardTime className=' text-[28px] pt-1' /> All Orders ~ LifeTime</h1>
                            <p className=' tracking-wide text-[13px] text-stone-500 cursor-pointer hover:text-black'>View All</p>
                        </div>
                        <div className=' w-full bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-5 mt-5'>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>No.</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>Order Id</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>Price</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'>Payment Status</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'>Order Status</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6]'>Action</p>
                        </div>

                        <div className='mt-6 flex flex-col gap-y-3 bggra rounded-2xl'>
                            <div className=' w-full rounded-2xl flex items-center  py-1 px-5'>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>1.</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>#1253652846856555</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>$5,569</p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>Pending</span></p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#ccf4cd]'>Successed</span></p>
                                <p className='  text-stone-600  tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6] flex items-center gap-x-2'> <Link to='/admin/order/details?_id=1111'><AiOutlineEye className='bg-green-600 text-white hover:scale-105 duration-200 transform translate-x-6 h-8 w-[38px] rounded-lg p-[5px] cursor-pointer' /></Link>  <BiSolidArrowFromTop className='text-[20px] text-black ml-8' /></p>
                            </div>
                            <div className=' w-full rounded-lg bg-gray-300 flex items-center  py-2 px-5'>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-400 text-[14px] flex-[0.4]'>1.</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-400 text-[14px] flex-[3]'>#1253652846856555</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-400 text-[14px] flex-[1.1]'>$5,569</p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-400 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>Pending</span></p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-400 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#ccf4cd]'>Successed</span></p>
                                <p className='  text-stone-600  tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6] flex items-center gap-x-2'> <Link to='/admin/order/details?_id=1111'><AiOutlineEye className='bg-green-600 text-white hover:scale-105 duration-200 transform translate-x-6 h-8 w-[38px] rounded-lg p-[5px] cursor-pointer' /></Link> <BiSolidArrowFromTop className='text-[20px] ml-8 text-red-800' /></p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default AdminOrders