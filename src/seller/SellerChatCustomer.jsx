import React, { useEffect } from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { nijerChatsFetch } from '../redux/reducers/MessageChatReducers'
import { ClipLoader } from 'react-spinners'

function SellerChatCustomer({socket}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem('ds-token')
    const { nijerChats, chatFetch } = useSelector(state => state.messageChat)



    useEffect(() => {
        token && !nijerChats && dispatch(nijerChatsFetch())
        
    }, []);

    return (
        <SellerMainLayout>
            <div className='h-[91vh] w-fulllg:p-8'>
                <div className=' h-full w-full flex bg-white rounded-xl overflow-hidden shadow-lg'>
                    <div className=' w-full  py-4 md:px-1 px-6 shadow-lg border '>

                        <div id='user search and menu bar' className='h-[40px] px-2 flex items-center justify-between '>
                            <button className='h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 duration-150'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>
                            <div className='h-full relative flex justify-end items-center w-[250px]'>
                                <input type="text" className=' bg-teal-600 text-white outline-none rounded-lg w-[200px]  focus:w-full duration-500 font-sans tracking-wide font-semibold h-full placeholder:font-[500] placeholder:text-gray-100 text-[17px] px-4' placeholder='search user...' />
                                <FiSearch className=' absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-white' />
                            </div>
                        </div>


                        {/* all chat here ...!! */}
                        <div id='all user bar' className='sn py-4 h-[75%] px-1 mt-2 overflow-y-scroll flex flex-col gap-y-2 '>
                            {
                                !chatFetch ? <div className=' w-full flex justify-center items-center py-6'>
                                    <ClipLoader color='black' size={50} cssOverride={{ borderWidth: '5px' }} />
                                </div> : nijerChats.map(nc => {
                                    return <div onClick={() => navigate(`/seller/chat-customer/${nc._id}`, { state: nc })} className='flex w-full cursor-pointer bg-gray-200 hover:bg-teal-600 hover:text-white duration-200 rounded-xl py-[6px]  items-end justify-between px-4'>
                                        <div className='flex items-center gap-x-5'>
                                            <div className='h-10 w-10 cursor-pointer '>
                                                <div className=' relative h-10 w-10'>
                                                    <img src={nc.customer?.avatar || 'https://t3.ftcdn.net/jpg/05/65/15/22/360_F_565152212_hLG5Mtc2jMwoBOpl2dwWTi7wPmruADGq.jpg'} className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                                    <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                                </div>
                                            </div>
                                            <div className=' flex flex-col '>
                                                <p className=' font-sans tracking-wide font-semibold text-[16px] capitalize'>{nc.customer.name}</p>
                                                <p className=' font-sans tracking-wide font-semibold text-[14px] capitalize text-stone-800'> <span className=' text-black pr-1 font-semibold'>you: </span> hi jan ? bat caicu?</p>
                                            </div>
                                        </div>
                                        <p className='tracking-wide text-[12px]'>5 min ago</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>

        </SellerMainLayout>
    )
}

export default SellerChatCustomer