import React, { useEffect, useState } from 'react'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineEye } from 'react-icons/ai'
import SellerMainLayout from '../layout/SellerMainLayout'
import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { delete_product, get_product } from '../redux/reducers/ProductReducers'
import Pagination from '../components/Pagination'
import { ClipLoader, ScaleLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import api from '../api/api'

function SellerAllProducts() {

    const dispatch = useDispatch()
    const [pageNo, setpageNo] = useState(1);
    const [productPerPage, setproductPerPage] = useState(5);
    const [deleteLoading, setdeleteLoading] = useState('');

    const { fetch, products, getloading } = useSelector(state => state.product)

    // 2 ta important kotha :  page no 2 dore
    // skip : (2 - 1)*10 and limit : 10  ... Done

    const deleteHandler = async (id) => {
        setdeleteLoading(id)
        const token = localStorage.getItem('ds-token')
        const { data, status } = token && await api.delete(`/v3/delete-product/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            setTimeout(() => {
                dispatch(delete_product(id))
                toast.success('product deleted successed.')
                setdeleteLoading('')
            }, 1000);
        }
    }

    useEffect(() => {
        dispatch(get_product())
    }, []);

    return (
        <SellerMainLayout>
            <div className=' md:p-3 bg-white md:bg-gray-200 h-full w-full'>
                {
                    getloading &&
                    <div className='  absolute flex-col gap-y-4 top-0 left-0 h-screen w-full flex justify-center items-center glass z-50'>
                        <ScaleLoader speedMultiplier={0.8} color='#0091ff' />
                        <p className='text-[14px] tracking-wide text-stone-700'>product getting <span className=' tracking-widest'>...</span></p>
                    </div>
                }
                <div className='w-full overflow-x-scroll rounded-2xl overflow-hidden'>
                    {/* box container */}
                    <div className=' w-[900px] overflow-hidden md:w-full bg-white p-4 rounded-2xl'>
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
                                <input type="text" className=' bg-gray-200 outline-none rounded-lg w-[180px] md:w-[300px] focus:w-full lg:focus:w-[500px] duration-500 h-full placeholder:text-stone-500 text-[14px] px-4 tracking-wide' placeholder='Search your product' />
                                <FiSearch className=' -ml-8 text-[18px]' />
                            </div>
                        </div>



                        <div className=' w-full bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-6 mt-3'>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r  border-gray-100 text-[14px] flex-[0.6]'>No.</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[1.1]'>Image</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[3]'>Name</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[1.8]'>Category</p>
                            <p className=' font-sans text-white font-[600] tracking-wider text-center border-r  border-gray-100 text-[14px] flex-[1.5]'>Brand</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center border-r text-[14px]  border-gray-300 flex-[1.1]'>Price</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center border-r text-[14px]  border-gray-300 flex-[1.2]'>Discount</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center border-r text-[14px]  border-gray-300 flex-[0.8]'>Stock</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-center text-[14px]  border-gray-300 flex-[2.2]'>Action</p>
                        </div>

                        <div className='mt-4 overflow-y-scroll h-[410px] flex flex-col gap-y-6 rounded-2xl'>
                            {
                                fetch && !getloading && products?.map((p, i) => {
                                    const { _id, images, name, category, brand, price, discount, stock } = p
                                    return <div title={_id} key={i} className=' w-full  flex items-center rounded-2xl px-5 '>
                                        <p className=' josefin text-stone-600 font-[500]  border-r  border-gray-100 text-[17px] flex-[0.6]'>{i + 1}.</p>
                                        <p className=' josefin text-stone-700 font-[600]  text-center border-r  flex justify-center items-center border-gray-100 text-[15px] flex-[1.1]'>
                                            <img loading='lazy' src={images[0]} className='h-10 w-10 shadow-lg rounded-lg' alt="" />
                                        </p>
                                        <p title={name} className=' text-stone-700 font-[500] tracking-wide  text-center border-r  border-gray-100 text-[13px] flex-[3] overflow-hidden'>{name}</p>
                                        <p className=' text-stone-700 font-[500] tracking-wide  text-center border-r  border-gray-100 text-[13px] flex-[2]'>{category}</p>
                                        <p className='  text-stone-800 font-[500] tracking-wide  text-center border-r  border-gray-100 text-[14px] flex-[1.5]'>{brand}</p>
                                        <p className=' josefin text-green-700 font-[600] text-center border-r text-[18px]  border-gray-300 flex-[1.1]'>${price}</p>
                                        <p className=' josefin text-red-700 font-[600] text-center border-r text-[15px]  border-gray-300 flex-[1.2]'>{discount}%</p>
                                        <p className=' josefin text-stone-700 font-[600] text-center border-r text-[17px]  border-gray-300 flex-[0.8]'>{stock}</p>
                                        <div className=' flex gap-x-3 justify-center items-center font-sans text-white font-[600] tracking-wide text-center text-[14px]  border-gray-300 flex-[2.2]'>
                                            <Link to={`/seller/edit-product/${_id}`} className='h-10 duration-150 hover:scale-105 w-10 shadow-lg cursor-pointer rounded-md bg-[#e1c41b] text-white flex justify-center items-center'> <AiFillEdit className='text-white text-[22px]' /></Link>
                                            <p className='h-10 duration-150 hover:scale-105 w-10 shadow-lg cursor-pointer rounded-md bg-[#22bb19] text-white flex justify-center items-center'><AiOutlineEye className='text-white text-[21px]' /></p>
                                            <p onClick={() => deleteHandler(_id)} className='h-10 duration-150 hover:scale-105 w-10 shadow-lg cursor-pointer rounded-md bg-[#e16a1b] text-white flex justify-center items-center gap-x-3'> {deleteLoading && deleteLoading.toString() === _id.toString() ? <ClipLoader color='white' speedMultiplier={.8} cssOverride={{ border: '4px solid', height: '28px', width: '28px' }} /> : <AiFillDelete className='text-white text-[22px]' />}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className=' text-right absolute flex justify-end items-center right-1/2 translate-x-1/2  pt-5 md:py-[14px] w-[98.6%] rounded-br-2xl rounded-bl-2xl bg-white px-10'>
                            <Pagination
                                pageNo={pageNo}
                                setpageNo={setpageNo}
                                productPerPage={productPerPage}
                                totalProductsLength={60}
                                showPaginationBox={4}
                            />
                        </div>
                    </div>
                    {/* box container end*/}
                </div>
            </div>
        </SellerMainLayout>
    )
}

export default SellerAllProducts