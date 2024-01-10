import React from 'react'
import MainLayout from '../layout/MainLayout'
import { BiListPlus, BiSolidImageAdd } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'
import { BiSolidEditAlt } from 'react-icons/bi'


function AdminPaymentRequest() {
    return (
        <MainLayout>
            <div className=' h-full w-full bg-gray-200 p-0 md:p-4 overflow-x-scroll'>
                <div className='w-[650px] md:w-full h-full bg-white md:rounded-2xl p-[1px] shadow-lg'>
                    <div className='pr-6 pl-3 md:px-10 mt-3 flex items-center gap-x-4 justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <p className='text-[14px] tracking-wide inline-flex font-sans font-[600]'>Page:</p>
                            <select name="" id="" className='bg-gray-200 p-1 px-2 rounded-md'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className=' flex items-center gap-x-6'>
                            <div className='h-[40px] flex justify-end items-center'>
                                <input type="text" className=' bg-gray-200 outline-none rounded-lg w-[180px] md:w-[300px] focus:w-full lg:focus:w-[500px] duration-500 h-full placeholder:text-stone-500 text-[14px] px-4' placeholder='Search' />
                                <FiSearch className=' -ml-8 text-[18px]' />
                            </div>
                            {/* <button className='h-10 w-10 bg-sky-500 rounded-full shadow-sm text-white text-[24px] transform rotate-0 duration-300 hover:rotate-180 '>+</button> */}
                        </div>

                    </div>
                    <div className='w-full relative px-4 overflow-x-scroll'>
                        <div className='w-full bg-white py-6 rounded-2xl mt-0'>

                            <div className=' w-full  bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-5 '>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[0.3]'>No.</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[2] md:flex-[2.5]'>Amount</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[2]'>Pay Status</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>Date</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>Active</p>
                            </div>

                            <div className='h-[410px] overflow-y-scroll flex flex-col gap-y-5 bggra rounded-2xl p-4'>

                                <div className=' w-full flex items-center rounded-2xl  px-0 md:px-5 '>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[17px] md:text-[18px] flex-[0.1]'>1.</p>
                                    <p className='   text-green-700 md:font-[600] md:border-r -tracking-wide  text-center pl-3 border-gray-100 text-[14px] md:text-[16px] flex-[2] md:flex-[2.5]'>$ 100</p>
                                    <p className='  text-stone-700  tracking-wider flex justify-center items-center border-gray-400 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#d3f4cc]'>Active</span></p>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>12 May 2023</p>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2] '><button className='py-2 px-4 tracking-wider bg-green-600 rounded-md text-white'>Comfirm</button></p>
                                </div>
                                <div className=' w-full flex items-center rounded-2xl  px-0 md:px-5 '>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[17px] md:text-[18px] flex-[0.1]'>1.</p>
                                    <p className='  text-green-700 md:font-[600] md:border-r text-center pl-3 border-gray-100 text-[14px] md:text-[16px] flex-[2] md:flex-[2.5]'>$ 100</p>
                                    <p className='  text-stone-700  tracking-wider flex justify-center items-center border-gray-400 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4d2cc]'>Rejected</span></p>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>12 May 2023</p>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2] '><button className='py-2 px-4 tracking-wider bg-green-600 rounded-md text-white'>Comfirm</button></p>
                                </div>
                                <div className=' w-full flex items-center rounded-2xl  px-0 md:px-5 '>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[17px] md:text-[18px] flex-[0.1]'>1.</p>
                                    <p className='   text-green-700 md:font-[600] md:border-r text-center pl-3 border-gray-100 text-[14px] md:text-[16px] flex-[2] md:flex-[2.5]'>$ 100</p>
                                    <p className='  text-stone-700  tracking-wider flex justify-center items-center border-gray-400 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-yellow-400 bg-[#f4eecc]'>Pending</span></p>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>12 May 2023</p>
                                    <p className=' md:font-sans josefin text-stone-600 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2] '><button className='py-2 px-4 tracking-wider bg-green-600 rounded-md text-white'>Comfirm</button></p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default AdminPaymentRequest