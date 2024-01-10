import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { BiListPlus, BiSolidImageAdd } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'
import { BiSolidEditAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { add_category, get_category } from '../redux/reducers/CategoryReducers'
import axios from 'axios'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { LuLoader } from 'react-icons/lu'
import { ScaleLoader } from 'react-spinners'

function AdminCategory() {

    const [cateCreateModal, setcateCreateModal] = useState(false);
    const [pLoading, setpLoading] = useState(false);

    const dispatch = useDispatch()

    const { getloading, addloading, categoryes, fetch } = useSelector(state => state.category)

    const [cateName, setcateName] = useState('');
    const [cateImage, setcateImage] = useState('');

    const CategoryHanlder = async () => {
        if (!cateImage) return alert('fill all feild')
        setpLoading(true)
        const form = new FormData()
        form.append('image', cateImage)
        const { data, status } = await axios.post(`https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90`, form)
        if (status === 200) {
            dispatch(add_category({ cateName, cateImage: data.data.url }))
            setcateCreateModal(false)
            setpLoading(false)
            toast.success('category added successfully.')
        }

    }


    useEffect(() => {
        dispatch(get_category())
    }, []);

    return (
        <MainLayout>
            {
                getloading ? <Loader />
                    :
                    (<div className='px-2 md:px-6 py-2   overflow-hidden h-full bg-gray-200 '>
                        {/* <h1 className='text-[26px] font-bold pb-4'>CateGroy Page</h1> */}
                        <div className='flex gap-x-6 items-center py-3 w-full overflow-x-scroll h-full'>
                            <div className=' w-full h-full bg-white rounded-2xl shadow-lg'>
                                <div className='pr-6 pl-3 md:px-10 mt-6 flex items-center gap-x-4 justify-between'>
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
                                            <input type="text" className=' bg-gray-200 outline-none rounded-lg w-[120px] md:w-[250px] focus:w-[200px] lg:focus:w-[500px] duration-500 h-full placeholder:text-stone-500 text-[14px] px-4' placeholder='Search' />
                                            <FiSearch className=' -ml-8 text-[18px]' />
                                        </div>
                                        <button onClick={() => setcateCreateModal(true)} className='block md:hidden h-10 w-10 bg-sky-500 rounded-full shadow-sm text-white text-[24px] transform rotate-0 duration-300 hover:rotate-180 '>+</button>
                                        <button onClick={() => setcateCreateModal(true)} id='b1' className=' hidden b1 md:flex gap-x-2  bg-sky-500 rounded-lg shadow-sm text-white text-[15px] transform josefin py-[6px] px-4 items-center '><p className=' b2 text-[24px] rotate-0 duration-300'>+</p> Add Category</button>
                                    </div>

                                </div>
                                <div className='w-full relative px-2 md:px-4 overflow-x-scroll'>
                                    <div className='w-full bg-white py-6 rounded-2xl mt-0'>

                                        <div className=' w-full  bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-5 '>
                                            <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[1]'>No.</p>
                                            <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[2] md:flex-[2.5]'>Image</p>
                                            <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wider text-center pl-3 border-gray-100 text-[15px] md:text-[14px] flex-[4]'>Name</p>
                                            <p className=' md:font-sans josefin text-white md:font-[600] md:border-r tracking-wide text-[15px] md:text-[14px] pl-3 text-center border-gray-300 flex-[2.5]'>Action</p>
                                        </div>

                                        <div className='h-[420px] overflow-y-scroll flex flex-col gap-y-2 bggra rounded-2xl mt-4 md:p-4'>

                                            {
                                                categoryes.length > 0 && categoryes.map((c , index) => {
                                                    const { _id , name , image , slug , createdAt } = c
                                                   return <div className=' w-full duration-100 rounded-2xl flex hover:bg-gray-200 items-center  py-1 px-2'>
                                                        <p className='  text-stone-600 font-sans  tracking-wider pl-3 border-gray-100 text-[17px] font-[500]  flex-[1] text-center  rounded-lg'>{index}</p>
                                                        <p className='  text-stone-700  tracking-wider pl-3 border-gray-100 text-[14px] flex-[2.5] text-center flex justify-center'><img src={image} className='h-7 w-6 md:h-11 md:w-10 shadow-md' alt="" /></p>
                                                        <p className='  flex-[6] w-full md:flex-[4]  text-stone-800 tracking-wide text-center font-sans text-[16px] font-[600]'>{name}</p>
                                                        <p className='  text-stone-700 gap-x-2 md:gap-x-4  tracking-wider pl-3 border-gray-100 text-[14px] flex-[2.5] text-center flex fons justify-center items-center'>
                                                            <button className='h-8 md:h-10 w-8 md:w-10 bg-yellow-500 rounded-xl flex justify-center text-white items-center hover:scale-105 duration-200 shadow-md'><BiSolidEditAlt className='text-[15px] md:text-[22px]' /></button>
                                                            <button className='h-8 md:h-10 w-8 md:w-10 bg-red-500 rounded-xl flex justify-center text-white items-center hover:scale-105 duration-200 shadow-md'><AiFillDelete className='text-[15px] md:text-[22px]' /></button>
                                                        </p>
                                                    </div>
                                                })
                                            }

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {
                                cateCreateModal &&
                                <div onClick={() => setcateCreateModal(false)} className=' h-screen w-full absolute glass flex justify-center items-center'>
                                    <div onClick={(e) => e.stopPropagation()} className=' p-6 bg-white relative shadow-lg rounded-xl w-[350px]'>
                                        <button onClick={() => setcateCreateModal(false)} className=' absolute -top-3 -right-2 h-10 w-10 bg-sky-500 rounded-full shadow-sm text-white text-[26px] transform rotate-45 duration-0 hover:scale-105  '>+</button>
                                        <h1 className=' text-stone-600 josefin text-[19px]  font-semibold flex items-center gap-x-3 '> <BiListPlus className='text-[30px] text-sky-600 mb-1' />Add a Category</h1>
                                        <div className='my-3 flex flex-col gap-y-[6px]'>
                                            <label htmlFor="name" className=' font-sans text-[14px] tracking-wider font-[600] text-stone-600'>* Category Name</label>
                                            <input value={cateName} onChange={(e) => setcateName(e.target.value)} type="text" className='border-2 rounded-md px-3 border-stone-400 py-2 w-full josefin placeholder:text-stone-400 tracking-wide font-[600] ' name="" id="" placeholder='Category name' />
                                        </div>
                                        <div className='my-3 flex flex-col gap-y-2 px-4'>
                                            <label htmlFor="name" className=' -ml-4 font-sans text-[14px] tracking-wider font-[600] text-stone-600'>* Category Image</label>
                                            {
                                                cateImage ?
                                                    <label htmlFor="file" className=' w-full rounded-2xl border-2 border-dashed border-stone-400 h-auto max-h-[260px] flex flex-col cursor-pointer gap-y-1 justify-center items-center text-stone-500 font-sans tracking-wide font-[600] overflow-hidden '><img src={URL.createObjectURL(cateImage)} className=' w-full' alt="" /> </label>
                                                    :
                                                    <label htmlFor="file" className=' w-full rounded-2xl border-2 border-dashed border-stone-400 h-[180px] flex flex-col cursor-pointer gap-y-1 justify-center items-center text-stone-500 font-sans tracking-wide font-[600] '><BiSolidImageAdd className='text-[30px]' />Select Image</label>
                                            }
                                            <input type="file" onChange={(e) => e.target.files[0] && setcateImage(e.target.files[0])} className=' hidden' id='file' />
                                        </div>

                                        <button onClick={CategoryHanlder} className='mt-5 flex items-center justify-center gap-x-5 w-full py-4 rounded-xl hover:scale-105 duration-300 bg-sky-500 text-white font-sans font-[600] text-[14px] tracking-wider'>{pLoading && <ScaleLoader color='white' height={26} />} Create Category</button>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>)
            }
        </MainLayout>
    )
}

export default AdminCategory