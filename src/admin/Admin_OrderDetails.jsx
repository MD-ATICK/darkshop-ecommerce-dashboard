import React from 'react'
import MainLayout from '../layout/MainLayout'
import { SiInformatica } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { VscSend } from 'react-icons/vsc'


function Admin_OrderDetails() {

    const navigate = useNavigate()

    return (
        <MainLayout>
            <div className='md:p-8 md:bg-gray-200 h-full w-full'>
                <div className=' bg-white relative rounded-2xl md:p-4 px-4 overflow-hidden shadow-lg h-fit md:h-full w-full flex flex-col overflow-y-scroll md:flex-row'>
                    <button onClick={() => navigate('/admin/order')} className=' absolute top-4 right-6 pr-3 bg-gray-200 p-2 px-[9px] text-stone-600 rounded-lg cursor-pointer hover:bg-gray-200'><VscSend className=' transform rotate-180 text-[25px]' /></button>
                    <div className='flex-1 flex flex-col justify-center md:items-center pb-6  '>
                        <div className='pb-2'>
                            <div>
                                <h1 className='text-[20px] mt-3 md:text-[22px] josefin font-[500] text-stone-500 flex items-center gap-x-3'> <span className='text-[24px] text-sky-700'>#</span>Order Details :</h1>
                            </div>
                            <div className=''>

                                <div className='pl-2 md:pl-12 pt-[6px] md:pt-[2px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Id : </label>
                                    <p className=' font-sans font-semibold tracking-wide text-sky-800'>#fdlsjldf54f54454</p>
                                </div>
                                <div className='pl-2 md:pl-12 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Deliverd to : </label>
                                    <p className='josefin text-[16px] md:text-[18px] flex items-center gap-x-2 bg-green-200 rounded-xl cursor-pointer px-3 py-[6px] md:py-2'> <img src="/logo.png" className='md:h-9 h-7 w-7 md:w-9 shadow-md rounded-full' alt="" /> Borhan Uddin</p>
                                </div>
                                <div className='pl-2 md:pl-12 pt-[2px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Address : </label>
                                    <p className='josefin'>Rangpur , dhaka , upojela , bangladesh</p>
                                </div>
                                <div className='pl-2 md:pl-12 pt-[4px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Payment Status : </label>
                                    <span className=' py-1 px-3 rounded-lg text-[15px] border-[2px] border-green-500 bg-[#ccf4cd] josefin'>Paid</span>
                                </div>
                                <div className='pl-2 md:pl-12 pt-[4px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Price : </label>
                                    <p className='josefin text-[17px]'>$9,8900</p>
                                </div>
                                <div className='pl-2 md:pl-12 pt-[8px] md:pt-[10px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Status Choose : </label>
                                    <select name="" id="" className='josefin py-2 px-4 text-[17px] rounded-md bg-[#dbccf4] border-2 border-purple-500'>
                                        <option value="" className='bg-[#dbccf4] border-2 border-purple-500 font-sans text-[15px] px-3 tracking-wider font-[600]'>pending</option>
                                        <option value="" className='bg-[#dbccf4] border-2 border-purple-500 font-sans text-[15px] px-3 tracking-wider font-[600]'>pending</option>
                                        <option value="" className='bg-[#dbccf4] border-2 border-purple-500 font-sans text-[15px] px-3 tracking-wider font-[600]'>pending</option>
                                    </select>
                                </div>


                            </div>
                        </div>
                        <div className='pl-0 md:pl-20 pr-4 w-full'>
                            <div>
                                <h1 className='text-[16px] mt-4 md:text-[18px] wf josefin font-[500] text-stone-500 flex items-center gap-x-3'><span className='text-[18px] text-sky-700'>#</span> Seller Details :</h1>
                            </div>
                            <div className='flex items-center gap-x-8 ml-4 md:ml-10 bg-gray-300 rounded-xl p-2 w-full md:w-fit px-4 pr-8'>
                                <img src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?size=626&ext=jpg&ga=GA1.2.2085806453.1691262919&semt=sph" className='h-[60px] w-[60px] rounded-xl object-cover' alt="" />
                                <div className=''>
                                    <div className='  md:pt-[0px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Id : </label>
                                        <p className='font-sans text-[14px] font-[600] tracking-wide'>#fkdfjls6s5fd56sf4</p>
                                    </div>
                                    <div className='  md:pt-[0px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Name : </label>
                                        <p className='font-sans text-[14px] font-[600] tracking-wide'>Md Atick</p>
                                    </div>
                                    <div className=' pt-[2px] md:pt-[0px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Eamil : </label>
                                        <p className='font-sans text-[14px] font-[600] tracking-wide'>sakib@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' md:pl-20 px-2 w-full'>
                            <div>
                                <h1 className='text-[16px] mt-2 md:text-[17px] josefin font-[500]  text-stone-500 flex items-center gap-x-3'><span className='text-[18px] text-sky-700'>#</span> Customer Details :</h1>
                            </div>
                            <div className='flex items-center w-full gap-x-8 ml-2 md:ml-10 bg-gray-300 rounded-xl p-2 md:w-fit px-4 pr-8'>
                                <img src="https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?size=626&ext=jpg&ga=GA1.2.2085806453.1691262919&semt=sph" className='h-[60px] w-[60px] rounded-xl object-cover' alt="" />
                                <div className=''>
                                    <div className='  md:pt-[0px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Id : </label>
                                        <p className='font-sans text-[14px] font-[600] tracking-wide'>#fkdfjls6s5fd56sf4</p>
                                    </div>
                                    <div className='  md:pt-[0px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Name : </label>
                                        <p className='font-sans text-[14px] font-[600] tracking-wide'>Md Atick</p>
                                    </div>
                                    <div className=' pt-[2px] md:pt-[0px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Eamil : </label>
                                        <p className='font-sans text-[14px] font-[600] tracking-wide'>sakib@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 h-full overflow-hidden'>
                        <h1 className='text-[20px] mt-4 md:text-[20px] josefin font-[500] text-stone-500 flex items-center gap-x-2'> <span className='text-[24px] text-sky-700'>#</span>Order Items (5) :</h1>
                        <div className='md:ml-10 mt-2  md:h-[420px] overflow-y-scroll flex flex-col gap-y-5'>
                            <div className='flex  gap-x-4'>
                                <img src="https://fabrilife.com/image-gallery/638741f4b169a-square.jpg" className='rounded-md w-[100px] shadow-lg' alt="" />
                                <div>
                                    <p className='josefin text-[17px]'>Stave shirt able Winterness World.</p>
                                    <p className='josefin text-[14px] leading-4  md:text-[16px] text-stone-700'>Category  : <span className='text-sky-900 text-[16px] josefin'>T-shirt</span></p>
                                    <p className='josefin text-[14px] leading-5 md:text-[16px] text-stone-700'>Brand  : <span className='text-sky-900 text-[16px] josefin'>Fabrilife</span></p>
                                    <div className='flex items-center gap-x-10 leading-5'>
                                        <p className='josefin text-stone-700  text-[14px] md:text-[16px]'>Price  : <span className='text-sky-900 text-[18px] font-[500] tracking-wide  josefin'>$8,685</span></p>
                                        <p className='josefin text-stone-700   text-[14px] md:text-[16px]'>Quantity  : <span className='text-sky-900 text-[22px] font-[500] tracking-wide  josefin'>5</span></p>
                                    </div>

                                </div>
                            </div>
                            <div className='flex  gap-x-4'>
                                <img src="https://fabrilife.com/image-gallery/638741f4b169a-square.jpg" className='rounded-md w-[100px] shadow-lg' alt="" />
                                <div>
                                    <p className='josefin text-[17px]'>Stave shirt able Winterness World.</p>
                                    <p className='josefin text-stone-700'>Category  : <span className='text-sky-900 text-[16px] josefin'>T-shirt</span></p>
                                    <p className='josefin text-stone-700'>Brand  : <span className='text-sky-900 text-[16px] josefin'>Fabrilife</span></p>
                                    <div className='flex items-center gap-x-10'>
                                        <p className='josefin text-stone-700'>Price  : <span className='text-sky-900 text-[18px] font-[500] tracking-wide  josefin'>$8,685</span></p>
                                        <p className='josefin text-stone-700'>Quantity  : <span className='text-sky-900 text-[22px] font-[500] tracking-wide  josefin'>5</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='md:px-8 px-4 mt-7'>
                            <h1 className='text-[20px] mt-3 bg-green-300 py-1 text-center rounded-xl shadow-sm  md:text-[18px] josefin font-[500] text-stone-700 flex justify-center items-center gap-x-2'>Sub Total :  <span className='text-[26px] text-sky-800 font-semibold pt-1 josefin tracking-wide'>$5865</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Admin_OrderDetails