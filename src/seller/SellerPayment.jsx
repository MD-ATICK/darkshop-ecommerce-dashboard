import React from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { FaApplePay, FaUsers } from 'react-icons/fa'
import { SiShopee } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'
import Charts from 'react-apexcharts'
import { AiOutlineEye } from 'react-icons/ai'

function SellerPayment() {
    return (
        <SellerMainLayout>
            <div className='px-3 md:px-6 py-3 bg-gray-200 overflow-hidden h-full w-full overflow-y-scroll'>
                {/* top status bar */}
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-8 gap-y-4'>
                    <div className='flex bg-white shadow-lg rounded-xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#1c9446]'>$12,500</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Total Sales</p>
                        </div>
                        <p className='h-10 w-10 bg-[#0de07638] rounded-full flex items-center justify-center'><FaApplePay className='text-[25px]' /></p>
                    </div>
                    <div className='flex bg-white shadow-lg rounded-xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#52028ffc]'>16</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Avaialbe Amount</p>
                        </div>
                        <p className='h-10 w-10 bg-[#8e72a764] text-[20px] font-semibold rounded-full flex items-center justify-center'>$</p>
                    </div>
                    <div className='flex bg-white shadow-lg rounded-xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#0190b0ce]'>58</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Withdrawal Amount</p>
                        </div>
                        <p className='h-10 w-10 bg-[#0d7ae038] rounded-full flex items-center justify-center'><FaUsers className='text-[20px]' /></p>
                    </div>
                    <div className='flex bg-white shadow-lg rounded-xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#da842e]'>06</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Pending Amount</p>
                        </div>
                        <p className='h-10 w-10 bg-[#c7531d48] rounded-full flex items-center justify-center'><AiOutlineShoppingCart className='text-[20px]' /></p>
                    </div>
                </div>
                <div className=' w-full h-full mt-4 flex flex-col md:flex-row gap-8'>
                    {/* left side */}
                    <div className=" p-6 flex-1 rounded-xl h-[490px] bg-white shadow-lg text-stone-700 ">
                        <div className='flex flex-col gap-y-2'>
                            <p className='flex items-center gap-x-3 text-stone-700  text-[15px] tracking-wide font-[500]'><span>sd</span> Withdraw Request Amount :</p>
                            <form action="" className='h-[40px] gap-x-12 rounded-lg overflow-hidden flex items-center justify-between'>
                                <input type="number" placeholder='Enter withdraw amount' className=' h-full w-full outline-none rounded-lg bg-gray-200 text-stone-700 text-[12px] tracking-wider px-6 placeholder:text-stone-400' />
                                <button className=' h-full px-6 font-sans tracking-wide font-[600] text-[14px] hover:scale-105 duration-150 text-white bg-sky-600 rounded-lg shadow-md'>Submit</button>
                            </form>
                        </div>

                        <div className='mt-5 h-full'>
                            <h1 className='flex items-center gap-x-2 font-sans tracking-wide  text-[18px] font-[600]'>⌛ Pending Withdraw Requestes :</h1>
                            <div className='flex mt-3 items-center justify-between px-4 py-3 font-sans text-[14px] font-[500] tracking-wide rounded-lg shadow-md bg-sky-500 text-white'>
                                <p className='border-r flex-[0.5] text-center'>No</p>
                                <p className='border-r flex-[1] text-center'>Amount</p>
                                <p className='border-r flex-[1] text-center'>Status</p>
                                <p className=' flex-[1] text-center'>Date</p>
                            </div>
                            <div className='h-[60%] pt-5 flex flex-col gap-y-0 cursor-pointer rounded-lg overflow-y-scroll'>
                                <div className='flex hover:bg-gray-200 py-[12px] px-3 items-center justify-between  font-sans text-[14px] font-[500] tracking-wide rounded-lg text-stone-800'>
                                    <p className=' text-center flex-[0.6]'>1.</p>
                                    <p className=' text-green-700 text-center josefin font-semibold flex-[1]'>$100</p>
                                    <p className=' text-center flex-[1]'>
                                    <span className=' py-1 px-3 rounded-lg text-[13px] font-[500] border-[2px] border-purple-600 bg-[#e0ccf4]'>pending</span>
                                    </p>
                                    <p className='  text-center font-[400] text-[13px] flex-[1.2]'>12 June 2022</p>
                                </div>
                                <div className='flex hover:bg-gray-200 py-[12px]  px-3 items-center justify-between  font-sans text-[14px] font-[500] tracking-wide rounded-lg text-stone-700'>
                                    <p className=' text-center flex-[0.6]'>1.</p>
                                    <p className=' text-green-700 text-center josefin font-semibold flex-[1]'>$100</p>
                                    <p className=' text-center flex-[1]'>
                                        <span className=' py-1 px-3 rounded-lg text-[13px] font-[500] border-[2px] border-purple-600 bg-[#e0ccf4]'>pending</span>
                                    </p>
                                    <p className='  text-center font-[400] text-[13px] flex-[1.2]'>12 June 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* left side end */}

                    {/* right side */}
                    <div className="flex-1 bg-white h-[490px] rounded-xl shadow-lg">
                        <div className=' mt-2 p-6 h-full'>
                            <h1 className='flex items-center gap-x-2 font-sans tracking-wide  text-[18px] font-[600]'>✅ Successfully Withdraw Requestes :</h1>
                            <div className='flex mt-3 items-center justify-between px-4 py-3 font-sans text-[14px] font-[500] tracking-wide rounded-lg shadow-md bg-sky-500 text-white'>
                                <p className='border-r flex-[0.5] text-center'>No</p>
                                <p className='border-r flex-[1] text-center'>Amount</p>
                                <p className='border-r flex-[1] text-center'>Status</p>
                                <p className=' flex-[1] text-center'>Date</p>
                            </div>
                            <div className='h-[80%]  pt-2 flex flex-col gap-y-0 cursor-pointer rounded-lg overflow-y-scroll'>
                                <div className='flex hover:bg-gray-200 py-[12px] px-3 items-center justify-between  font-sans text-[14px] font-[500] tracking-wide rounded-lg text-stone-800'>
                                    <p className=' text-center flex-[0.6]'>1.</p>
                                    <p className=' text-green-700 text-center josefin font-semibold flex-[1]'>$100</p>
                                    <p className=' text-center flex-[1]'>
                                        <span className=' py-1 px-3 rounded-lg text-[13px] font-[500] border-[2px] border-green-500 bg-[#ccf4cd]'>Active</span>
                                    </p>
                                    <p className='  text-center font-[400] text-[13px] flex-[1.2]'>12 June 2022</p>
                                </div>
                                <div className='flex hover:bg-gray-200 py-[12px]  px-3 items-center justify-between  font-sans text-[14px] font-[500] tracking-wide rounded-lg text-stone-700'>
                                    <p className=' text-center flex-[0.6]'>1.</p>
                                    <p className=' text-green-700 text-center josefin font-semibold flex-[1]'>$100</p>
                                    <p className=' text-center flex-[1]'>
                                    <span className=' py-1 px-3 rounded-lg text-[13px] font-[500] border-[2px] border-green-500 bg-[#ccf4cd]'>Active</span>
                                    </p>
                                    <p className='  text-center font-[400] text-[13px] flex-[1.2]'>12 June 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right side end */}
                </div>
            </div>
        </SellerMainLayout>
    )
}

export default SellerPayment