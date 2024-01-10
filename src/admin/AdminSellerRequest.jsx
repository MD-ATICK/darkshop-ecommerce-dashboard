import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { BiListPlus, BiSolidImageAdd } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import api from '../api/api'
import { ScaleLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

function AdminSellerRequest() {

    const [loading, setloading] = useState(true);
    const [requstedSellers, setselslerRqurest] = useState([]);

    const sellerRequestFetch = async () => {
        const token = localStorage.getItem('ds-token')
        const { data, status } = await api.get('/v4/get-sellers-request', { headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setloading(false)
            setselslerRqurest(data.sellers)
            console.log(data)
        }
    }

    useEffect(() => {
        sellerRequestFetch()
    }, []);

    return (
        <MainLayout>
            <div className=' h-[94vh] relative w-full bg-gray-200 px-4 py-2 overflow-x-scroll scroll-smooth'>
                {
                    loading &&
                    <div className='  absolute flex-col gap-y-4 top-0 left-0 h-screen w-full flex justify-center items-center glass z-50'>
                        <ScaleLoader speedMultiplier={0.8} color='#0091ff' />
                        <p className='text-[14px] tracking-wide text-stone-700'>data getting <span className=' tracking-widest'>...</span></p>
                    </div>
                }
                <div className='fixed md:static left-0 pr-7 pl-4 w-[100vw] md:w-full mb-4 md:px-10 mt-3 flex items-center gap-x-4 justify-between'>
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
                    <div className=' flex items-center gap-x-6'>
                        <div className='h-[40px] flex justify-end items-center'>
                            <input type="text" className=' bg-white outline-none rounded-lg w-[200px] md:w-[300px] focus:w-full lg:focus:w-[500px] duration-500 h-full placeholder:text-stone-500 text-[14px] px-4' placeholder='Search' />
                            <FiSearch className=' -ml-8 text-[18px]' />
                        </div>
                        {/* <button className='h-10 w-10 bg-sky-500 rounded-full shadow-sm text-white text-[24px] transform rotate-0 duration-300 hover:rotate-180 '>+</button> */}
                    </div>

                </div>

                <div className='w-[800px] md:w-full h-[80vh] bg-white rounded-2xl p-1 shadow-lg mt-16 md:mt-0'>
                    <div className='w-full relative px-2 overflow-x-scroll scroll-smooth'>
                        <div className='w-full bg-white pb-6 pt-3 rounded-2xl mt-0'>

                            <div className=' w-full  bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-5 '>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[0.3]'>No.</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[0.7] md:flex-[1.2]'>Image</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[2]'>Name</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>Email</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[1.2]'>Pay Status</p>
                                <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[1.2]'>Status</p>
                                <p className=' md:font-sans josefin text-white md:font-[600]  tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[1]'>Action</p>
                            </div>

                            <div className='h-[550px] md:h-[450px] overflow-y-scroll flex flex-col gap-y-5 bggra rounded-2xl p-4'>
                                {
                                    !loading && requstedSellers && requstedSellers.length > 0 ?
                                        requstedSellers.map((s, i) => {
                                            const { _id, avatar, role, paymentStatus, status, name, email, shopInfo } = s
                                            return <div key={_id} className=' w-full flex rounded-2xl px-1 items-center '>
                                                <p className=' md:font-sans josefin text-stone-700 md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[0.2]'>{i + 1}.</p>
                                                <p className=' md:font-sans josefin text-stone-700 md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[0.7] md:flex-[1.2] flex items-center justify-center'><img className='h-9 w-9 object-cover rounded-md shadow-md' src={avatar} alt="" /></p>
                                                <p className=' md:font-sans josefin text-stone-700 md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[2]'>{name}</p>
                                                <p className=' md:font-sans josefin text-stone-700 md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2]'>{email}</p>
                                                {
                                                    paymentStatus === 'active' ?
                                                        <p className='  text-stone-700  tracking-wider flex justify-center items-center border-gray-400 text-[14px] flex-[1.2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-600 bg-[#ccf4d5]'>{paymentStatus}</span></p>
                                                        :
                                                        <p className='  text-stone-700  tracking-wider flex justify-center items-center border-gray-400 text-[14px] flex-[1.2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-600 bg-[#f4d7cc]'>{paymentStatus}</span></p>
                                                }
                                                <p className='  text-stone-700  tracking-wider flex justify-center items-center border-gray-400 text-[14px] flex-[1.2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-yellow-600 bg-[#f4eecc]'>{status}</span></p>
                                                <Link to={`/admin/seller/details/${_id}`} className=' md:font-sans josefin text-stone-700 md:font-[600] cursor-pointer  tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[1] flex justify-center '><AiOutlineEye className='bg-green-600 text-white text-[32px] p-[6px] rounded-md shadow-md' /></Link>
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
            </div>
        </MainLayout>
    )
}

export default AdminSellerRequest