import React from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { AiOutlineEye} from 'react-icons/ai'
import { GiBackwardTime} from 'react-icons/gi'

function SellerOrders() {
    return (
        <SellerMainLayout>
            <div className='p-6 bg-gray-200 h-full w-full'>

            <div className='w-full overflow-x-scroll'>
                    <div className=' w-[800px] md:w-full bg-white p-6 rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex items-center gap-x-2 font-sans font-[600] text-[16px] tracking-wide'><GiBackwardTime className=' text-[28px] pt-1' /> All Orders</h1>
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

                        <div className='mt-6 flex flex-col gap-y-3 rounded-2xl'>
                            <div className=' w-full rounded-2xl flex items-center  py-2 px-5'>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>1.</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>#1253652846856555</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>$5,569</p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>Pending</span></p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#ccf4cd]'>Successed</span></p>
                                <p className='  text-stone-600  tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6]'><AiOutlineEye className='bg-gray-300 text-stone-700 hover:scale-105 duration-200 transform translate-x-6 h-8 w-[38px] rounded-lg p-[5px] cursor-pointer' /></p>
                            </div>
                            <div className=' w-full rounded-2xl flex items-center  py-2 px-5'>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>1.</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>#1253652846856555</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>$5,569</p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>Pending</span></p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#ccf4cd]'>Successed</span></p>
                                <p className='  text-stone-600  tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6]'><AiOutlineEye className='bg-gray-300 text-stone-700 hover:scale-105 duration-200 transform translate-x-6 h-8 w-[38px] rounded-lg p-[5px] cursor-pointer' /></p>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>

        </SellerMainLayout>
    )
}

export default SellerOrders