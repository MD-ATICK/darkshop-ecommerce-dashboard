import React from 'react'
import MainLayout from '../layout/MainLayout'
import { FiSearch } from 'react-icons/fi'
import { IoMdInformationCircle } from 'react-icons/io'
import { RiSendPlaneFill } from 'react-icons/ri'
import { VscSend } from 'react-icons/vsc'




function AdminChatSeller() {
    return (
        <MainLayout>
            <div className=' h-full w-full bg-gray-200 lg:p-8'>
                <div className=' w-full flex h-full bg-white rounded-xl overflow-hidden shadow-lg'>
                    <div className=' w-full lg:w-[400px]  py-4 px-6 shadow-lg border '>
                        <div className='h-[40px] flex items-center justify-between '>
                            <h1 className='josefin text-[18px] text-stone-600 inline-block whitespace-nowrap'><span className=' font-semibold text-[22px] transform rotate-180  border-2 border-sky-500 rounded-full px-2 mr-2 text-sky-500'>D</span>Chat Sellers</h1>
                            <div className='h-full flex justify-end items-center'>
                                <input type="text" className=' bg-gray-200 outline-none rounded-lg w-[160px]  focus:w-full duration-500 h-full placeholder:text-stone-500 text-[14px] px-4' placeholder='Search' />
                                <FiSearch className=' -ml-8 text-[18px]' />
                            </div>
                        </div>

                        <div className='flex flex-col mt-4 gap-y-2'>
                            <h1 className='text-[14px] tracking-wide font-sans font-[600] text-stone-600'>Online Users</h1>
                            <div className='  overflow-x-scroll pb-3 flex w-full items-center gap-x-4'>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className='h-[75%] overflow-y-scroll  flex flex-col gap-y-2 mt-2 '>

                            <div className='flex cursor-pointer hover:bg-gray-200 rounded-xl py-2  items-end justify-between px-4'>
                                <div className='flex items-center gap-x-4'>
                                    <div className='h-10 w-10 cursor-pointer '>
                                        <div className=' relative h-10 w-10'>
                                            <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                            <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                        </div>
                                    </div>
                                    <p className='josefin text-[17px] text-stone-900 tracking-wide'>Borhan Uddin</p>
                                </div>
                                <p className=' text-gray-600 tracking-wide text-[12px]'>5 min ago</p>
                            </div>
                            <div className='flex bg-sky-500 cursor-pointer rounded-xl py-2  items-end justify-between px-4'>
                                <div className='flex items-center gap-x-4'>
                                    <div className='h-10 w-10 cursor-pointer '>
                                        <div className=' relative h-10 w-10'>
                                            <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                            <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-500 border-[3.5px] border-white'></p>
                                        </div>
                                    </div>
                                    <p className='josefin text-[17px] text-white tracking-wide'>Borhan Uddin</p>
                                </div>
                                <p className=' text-gray-100 font-[500] tracking-wide text-[12px]'>5 min ago</p>
                            </div>

                        </div>
                    </div>
                    <div className=' hidden lg:block flex-grow relative h-full'>
                        <header className='z-[99] fixed top-0 left-0 md:absolute h-[55px] bg-sky-500 flex items-center justify-between px-6 text-white w-full'>

                            <div className='flex items-center gap-x-4'>
                                <button  className='  p-2 px-[9px] text-stone-600 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-200'><VscSend className=' transform rotate-180 text-[22px]' /></button>
                                <div className='h-10 w-10 cursor-pointer'>
                                    <div className=' relative h-10 w-10'>
                                        <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                                        <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-400 border-[3.5px] border-sky-500'></p>
                                    </div>
                                </div>
                                <p className='tracking-wide text-[17px] font-[600]'>Md Atick</p>
                            </div>
                            <button><IoMdInformationCircle className=' text-white text-[30px]' /></button>
                        </header>
                        <div className='h-calc-100-60px mt-2 lg:mt-[55px] overflow-y-scroll scroll-smooth flex gap-y-4 flex-col w-full py-4 px-6'>
                            <div className=' admin flex gap-x-2'>
                                <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-9 w-9 rounded-full shadow-md' alt="" />
                                <p className='text-[13px] tracking-wide font-[500] w-fit leading-6 max-w-[500px] py-2 px-4 rounded-2xl text-white bg-sky-500'>How are you? Lorem ipsum dolor sit amet, consectciuaerat consequuntur quibusdam aperiam adipisci eum? Repellat, magnam necessitatibus! Distinctio aspernatur quidem culpa neque! Sapiente rerum et earum qui!</p>
                            </div>

                            <div className=' admin flex flex-row-reverse justify-start gap-x-2'>
                                <img src="/logo.png" className='h-9 w-9 rounded-full shadow-md' alt="" />
                                <p className='text-[13px] tracking-wide  text-stone-600  font-[400] w-fit leading-6 max-w-[500px] py-2 px-4 rounded-2xl  bg-gray-200'>How are you? Lorem ipsum dolor sit amet, et earum qui!</p>
                            </div>
                            <div className=' admin flex flex-row-reverse justify-start gap-x-2'>
                                <img src="/logo.png" className='h-9 w-9 rounded-full shadow-md' alt="" />
                                <p className='text-[13px] tracking-wide  text-stone-600  font-[400] w-fit leading-6 max-w-[500px] py-2 px-4 rounded-2xl  bg-gray-200'>ok?!</p>
                            </div>
                            <div className=' admin flex gap-x-2'>
                                <img src="https://w0.peakpx.com/wallpaper/171/49/HD-wallpaper-cartoon-characters-3d-art-funny-characters-monster.jpg" className='h-9 w-9 rounded-full shadow-md' alt="" />
                                <p className='text-[13px] tracking-wide font-[500] w-fit leading-6 max-w-[500px] py-2 px-4 rounded-2xl text-white bg-sky-500'>ok bro.</p>
                            </div>

                        </div>
                        <footer className='search w-full bg-sky-500 h-[55px] flex items-center gap-x-3 px-8 fixed md:absolute bottom-0 left-0'>
                            <button className=' h-10 w-10 bg-white rounded-full shadow-sm text-stone-600 text-[24px] transform rotate-0 duration-300 hover:rotate-180 '>+</button>
                            <div className='h-[40px] pr-8 flex justify-end items-center flex-grow'>
                                <input type="text" className=' bg-gradient-t-r from-gray-200 to-gray-400 outline-none rounded-lg w-full duration-500 h-full placeholder:text-stone-500 text-[14px] px-4' placeholder='Search' />
                                <FiSearch className=' -ml-8 text-[18px]' />
                            </div>
                            <button className=' h-10 w-10 bg-white rounded-full shadow-sm text-stone-600 text-[24px]  duration-300 flex items-center pt-[1px] pr-[2px] justify-center '> <RiSendPlaneFill /></button>
                        </footer>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default AdminChatSeller