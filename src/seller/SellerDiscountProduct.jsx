import React from 'react'
import { FiSearch } from 'react-icons/fi'
import SellerMainLayout from '../layout/SellerMainLayout'

function SellerDiscountProduct() {
    return (
        <SellerMainLayout>
            <div className=' md:p-4 bg-white md:bg-gray-200 h-full w-full'>
                <div className='w-full rounded-2xl overflow-x-scroll md:overflow-hidden'>
                    {/* box container */}
                    <div className=' w-[900px] overflow-hidden md:w-full bg-white p-6 rounded-2xl'>
                        <div className=' md:px-6 flex items-center gap-x-4 justify-between'>
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
                            <div className='h-[40px] flex justify-end items-center'>
                                <input type="text" className=' bg-gray-200 outline-none rounded-lg w-[180px] md:w-[300px] focus:w-full lg:focus:w-[500px] duration-500 h-full placeholder:text-stone-500 text-[13px] px-4 tracking-wide' placeholder='Search your discounted product ...' />
                                <FiSearch className=' -ml-8 text-[18px]' />
                            </div>
                        </div>
                        <div className=' w-full bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-6 mt-5'>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r  border-gray-100 text-[14px] flex-[0.6]'>No.</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[1.1]'>Image</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[3.1]'>Name</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[1.8]'>Category</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[1.5]'>Brand</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center border-r text-[14px]  border-gray-300 flex-[1.1]'>Price</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center border-r text-[14px]  border-gray-300 flex-[1.2]'>Discount</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center border-r text-[14px]  border-gray-300 flex-[0.8]'>Stoke</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center text-[14px]  border-gray-300 flex-[2.2]'>Action</p>
                        </div>

                        <div className='mt-6 flex flex-col gap-y-4 rounded-2xl'>
                            <div className=' w-full  flex items-center rounded-2xl px-5 '>
                                <p className=' josefin text-stone-600 font-[500]  border-r  border-gray-100 text-[20px] flex-[0.6]'>1.</p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  flex justify-center items-center border-gray-100 text-[15px] flex-[1.1]'>
                                    <img src="https://fabrilife.com/image-gallery/638741f4b169a-square.jpg" className='h-10 w-10 shadow-lg rounded-lg' alt="" />
                                </p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  border-gray-100 text-[16px] flex-[3.1]'>Brave pant to survie...</p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  border-gray-100 text-[15px] flex-[2]'>Short pant</p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  border-gray-100 text-[15px] flex-[1.5]'>mafia</p>
                                <p className=' josefin text-green-600 font-[600] text-center border-r text-[18px]  border-gray-300 flex-[1.1]'>565</p>
                                <p className=' josefin text-stone-700 font-[600] text-center border-r text-[15px]  border-gray-300 flex-[1.2]'>5%</p>
                                <p className=' josefin text-stone-700 font-[600] text-center border-r text-[15px]  border-gray-300 flex-[0.8]'>10</p>
                                <div className=' flex gap-x-2 justify-center items-center font-sans text-white font-[600] tracking-wide text-center text-[14px]  border-gray-300 flex-[2.2]'>
                                    <p className='h-10 w-10 shadow-lg cursor-pointer rounded-md bg-[#e1c41b] text-white flex justify-center items-center'>Ed</p>
                                    <p className='h-10 w-10 shadow-lg cursor-pointer rounded-md bg-[#22bb19] text-white flex justify-center items-center'>Ed</p>
                                    <p className='h-10 w-10 shadow-lg cursor-pointer rounded-md bg-[#e16a1b] text-white flex justify-center items-center'>Ed</p>
                                </div>
                            </div>
                            <div className=' w-full  flex items-center rounded-2xl px-5 '>
                                <p className=' josefin text-stone-600 font-[500]  border-r  border-gray-100 text-[20px] flex-[0.6]'>2.</p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  flex justify-center items-center border-gray-100 text-[15px] flex-[1.1]'>
                                    <img src="https://fabrilife.com/image-gallery/63889c771b9a0-square.jpg" className='h-10 w-10 shadow-lg rounded-lg' alt="" />
                                </p>
                                <p title='brave company dress is maded by me  as well very beautifyl wow asewome man@.' className=' josefin text-stone-700 font-[500]  text-center border-r  border-gray-100 text-[16px] flex-[3.1]'>Brave pant to survie...</p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  border-gray-100 text-[15px] flex-[2]'>Short pant</p>
                                <p className=' josefin text-stone-700 font-[600]  text-center border-r  border-gray-100 text-[15px] flex-[1.5]'>mafia</p>
                                <p className=' josefin text-green-600 font-[600] text-center border-r text-[18px]  border-gray-300 flex-[1.1]'>565</p>
                                <p className=' josefin text-stone-700 font-[600] text-center border-r text-[15px]  border-gray-300 flex-[1.2]'>5%</p>
                                <p className=' josefin text-stone-700 font-[600] text-center border-r text-[15px]  border-gray-300 flex-[0.8]'>10</p>
                                <div className=' flex gap-x-2 justify-center items-center font-sans text-white font-[600] tracking-wide text-center text-[14px]  border-gray-300 flex-[2.2]'>
                                    <p className='h-10 duration-150 hover:scale-105 w-10 shadow-lg cursor-pointer rounded-md bg-[#e1c41b] text-white flex justify-center items-center'>Ed</p>
                                    <p className='h-10 duration-150 hover:scale-105 w-10 shadow-lg cursor-pointer rounded-md bg-[#22bb19] text-white flex justify-center items-center'>Ed</p>
                                    <p className='h-10 duration-150 hover:scale-105 w-10 shadow-lg cursor-pointer rounded-md bg-[#e16a1b] text-white flex justify-center items-center'>Ed</p>
                                </div>
                            </div>
                        </div>

                        <div>
                        </div>
                        <div className=' text-right flex justify-end items-center pt-6 px-10'>
                            pagination
                        </div>
                    </div>
                    {/* box container end*/}
                </div>
            </div>
        </SellerMainLayout>
    )
}

export default SellerDiscountProduct