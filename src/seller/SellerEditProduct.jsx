import React, { useEffect, useState } from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { LuUpload, LuLoader } from 'react-icons/lu'
import axios from 'axios';
import { FadeLoader, PulseLoader, ScaleLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { add_product, get_product, single_get_product } from '../redux/reducers/ProductReducers';
import { get_category } from '../redux/reducers/CategoryReducers';
import { toast } from 'react-toastify'
import api from '../api/api';

function SellerEditProduct() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categoryes } = useSelector(state => state.category)
    const { singleProduct } = useSelector(state => state.product)
    const [loading, setloading] = useState(false);
    const [updateloading, setupdateloading] = useState(false);


    const { id } = useParams();

    const [uploadLoading, setuploadLoading] = useState(false);
    const [name, setname] = useState('');
    const [category, setcategory] = useState('');
    const [price, setprice] = useState('');
    const [brand, setbrand] = useState('');
    const [stock, setstock] = useState('');
    const [discount, setdiscount] = useState('');
    const [description, setdescription] = useState('');
    const [images, setimages] = useState([])

    const [cateModalOpen, setcateModalOpen] = useState(false);


    const UploadHanlder = (e) => {
        setuploadLoading(true)
        const files = Array.from(e.target.files)

        if (files.length === 0) return alert('pic select')
        files.map(async (file) => {
            const form = new FormData()
            form.append('image', file)
            const { data, status } = await axios.post(`https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90`, form)
            if (status === 200) {
                setuploadLoading(false)
                return setimages(prev => [...prev, data.data.url])
            }
        })
    }

    const editProductHanlder = async (e, id) => {
        e.preventDefault()
        const token = localStorage.getItem('ds-token')
        setupdateloading(true)
        if (token) {
            const { data, status } = await api.put(`/v3/edit-product/${singleProduct._id}`, { name, category: category.slug, price, brand, stock, discount, description, images, shopName: 'Atick Fashion' }, { headers: { Authorization: `Bearer ${token}` } })
            if (status === 201) {
                console.log(data)
                setupdateloading(false)
                navigate('/seller/all-products')
                return toast.success('✅ successfully edited.')
            }
        } else {
            console.log('token error in redux.')
        }
    }

    useEffect(() => {
        setloading(true)
        dispatch(get_category())
        dispatch(single_get_product(id))
        const x = setTimeout(() => {
            setloading(false)
        }, 1000);

        return () => {
            clearTimeout(x)
        }
    }, []);

    useEffect(() => {
        if (singleProduct && categoryes) {
            setname(singleProduct.name)
            setcategory(categoryes.find(c => c.slug === singleProduct.category))
            setprice(singleProduct.price)
            setbrand(singleProduct.brand)
            setstock(singleProduct.stock)
            setdiscount(singleProduct.discount)
            setdescription(singleProduct.description)
            setimages(singleProduct.images)
        }
    }, [singleProduct]);

    return (
        <SellerMainLayout>
            <div className='md:p-6 bg-white relative md:bg-gray-200 h-full w-full overflow-y-scroll'>

                {
                    loading &&
                    <div className='  absolute flex-col gap-y-4 top-0 left-0 h-screen w-full flex justify-center items-center glass z-50'>
                        <ScaleLoader speedMultiplier={0.8} color='#0091ff' />
                        <p className='text-[14px] tracking-wide text-stone-700'>data getting <span className=' tracking-widest'>...</span></p>
                    </div>
                }
                {/* box container */}
                <form action='' onSubmit={editProductHanlder} className=' bg-white h-full rounded-2xl md:shadow-lg py-4 px-8  md:overflow-y-scroll'>
                    <div className='flex items-center justify-between pb-6'>
                        <h1 className='text-[20px] md:text-[26px] tracking-wide font-[600] flex items-center gap-x-2'><span className='font-[400] text-sky-700 text-[35px]'> + </span>Edit Product</h1>
                        <Link to={'/seller/all-products'} className=' py-2 cursor-pointer md:py-3 px-3 md:px-5 text-[15px] font-sans font-[600] tracking-wider rounded-lg shadow-md bg-gradient-to-r from-sky-500 to-sky-700 text-white'>Go Products</Link>
                    </div>
                    <div className='flex gap-x-10 gap-y-4 flex-col md:flex-row'>
                        {/* left side */}
                        <div className='flex w-full flex-col gap-y-4'>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={name} onChange={(e) => setname(e.target.value)} className='input placeholder:text-stone-400 py-3 px-4 text-[16px] bg-gray-200 josefin rounded-lg outline-none' placeholder='product name' />
                                <label htmlFor="name" className='josefin focusEffect'>* Product Name</label>
                            </div>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <div className=' relative'>

                                    {category ?
                                        <div onClick={() => setcateModalOpen(!cateModalOpen)} className=' bg-gray-200 hover:text-stone-800 cursor-pointer text-stone-600 py-2 px-6 text-[14px] tracking-wide flex justify-between items-center rounded-lg'>
                                            <div className=' flex items-center gap-x-4'>
                                                <img src={category.image} className=' h-9 w-9 object-cover border border-gray-400 rounded-md' alt="" />
                                                <p className='josefin text-[17px] text-stone-800 '>{category.name}</p>
                                            </div>
                                            <p>x</p>
                                        </div>
                                        :
                                        <div onClick={() => setcateModalOpen(!cateModalOpen)} className=' bg-gray-200 hover:text-stone-800 cursor-pointer text-stone-600 py-3 px-6 text-[14px] tracking-wide flex justify-between items-center rounded-lg'>
                                            <p className='josefin text-[17px] '>Select Category</p>
                                            <p>#</p>
                                        </div>
                                    }
                                    {
                                        cateModalOpen &&
                                        <div className=' shadow-lg h-[350px] px-6 py-4 rounded-xl bg-white absolute top-[60px] left-0 w-[70%] ml-6 border-2 border-gray-200'>
                                            <div className='h-[35px] relative'>
                                                <input required={true} type="text" placeholder='search ...' className=' tracking-wide text-[14px] placeholder:text-stone-500 px-6 h-full rounded-md bg-gray-200 w-full' />
                                                <p className=' absolute top-1/2 -translate-y-1/2 transform right-5'>x</p>
                                            </div>
                                            <div className='mt-4 h-[270px] border-black  pr-4 overflow-y-scroll'>
                                                {
                                                    categoryes.map((c, i) => {
                                                        return <div onClick={() => {
                                                            setcategory(c)
                                                            setcateModalOpen(false)
                                                        }} key={i} className='py-2 px-3 rounded-lg w-full flex items-center gap-x-5 cursor-pointer hover:bg-gray-200'>
                                                            <img src={c.image} className=' h-8 w-8 object-cover' alt="" />
                                                            <p className='text-[16px] tracking-wide font-[600] font-sans text-black'>{c.name}</p>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                                <label htmlFor="name" className='josefin focusEffect'>* Category (select)</label>
                            </div>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="number" value={price} onChange={(e) => setprice(e.target.value)} className='input placeholder:text-stone-400 py-3 px-4 text-[16px] bg-gray-200 josefin rounded-lg outline-none' placeholder='price' />
                                <label htmlFor="name" className='josefin focusEffect'>* Price</label>
                            </div>
                        </div>
                        {/* left side end */}

                        {/* right side */}
                        <div className='flex w-full flex-col gap-y-4'>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={brand} onChange={(e) => setbrand(e.target.value)} className='input placeholder:text-stone-400 py-3 px-4 text-[16px] bg-gray-200 josefin rounded-lg outline-none' placeholder='brand name' />
                                <label htmlFor="name" className='josefin focusEffect'>* Brand</label>
                            </div>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="number" value={stock} onChange={(e) => setstock(e.target.value)} className='input placeholder:text-stone-400 py-3 px-4 text-[16px] bg-gray-200 josefin rounded-lg outline-none' placeholder='stock' />
                                <label htmlFor="name" className='josefin focusEffect'>* Stock</label>
                            </div>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="number" value={discount} onChange={(e) => setdiscount(e.target.value)} className='input placeholder:text-stone-400 py-3 px-4 text-[16px] bg-gray-200 josefin rounded-lg outline-none' placeholder='discount' />
                                <label htmlFor="name" className='josefin focusEffect'>* Discount (%)</label>
                            </div>
                        </div>
                        {/* right side end */}
                    </div>
                    <div className='pt-4 flex flex-col-reverse gap-y-2'>
                        <textarea value={description} onChange={(e) => setdescription(e.target.value)} name="" className='input h-[120px] placeholder:text-stone-400 resize-none py-3 px-4 text-[15px] font-[600] font-sans bg-gray-200 tracking-wide rounded-lg text-stone-700 outline-none' id="" placeholder='enter description' ></textarea>
                        <label htmlFor="name" className='josefin focusEffect'>* Description</label>
                    </div>
                    {images.length === 0 ?
                        <div className='pt-6 flex flex-col-reverse gap-y-2'>
                            <label htmlFor="images" className='cursor-pointer h-[170px] w-full  border-stone-400 bg-[#ebecee] rounded-2xl shadow-lg  border-dashed border-2 flex justify-center items-center  '>
                                {
                                    uploadLoading ?
                                        <PulseLoader size={15} speedMultiplier={0.6} color='#1c8ef3' /> :
                                        <p className='flex text-[16px] gay-4 text-stone-500 josefin flex-col items-center '><LuUpload className='text-[34px] mb-2' /> Upload Images</p>
                                }
                            </label>
                            <input multiple={true} onChange={UploadHanlder} id='images' type="file" className='hidden' />
                            <label htmlFor="name" className='josefin focusEffect'>* Product Images</label>
                        </div>
                        :
                        <div className='pt-6 flex flex-col gap-3 '>
                            <label htmlFor="name" className='josefin focusEffect'>* Product Images ({images?.length || 0})</label>
                            <div className='flex items-center gap-3 flex-wrap'>
                                {images.map((img, i) => {
                                    return <img key={i} src={img} className=' rounded-lg shadow-md h-[80px] md:h-[100px] w-[80px] md:w-[100px] object-cover' alt="" />
                                })}
                                <div className='h-[80px] md:h-[100px] cursor-pointer w-[80px] md:w-[100px] rounded-lg shadow-lg bg-[#4f4e4eaa] flex items-center justify-center'>
                                    <label htmlFor='file2' className='cursor-pointer'>
                                        {
                                            uploadLoading ? <PulseLoader size={13} speedMultiplier={0.6} color='white' /> :
                                                <LuUpload className='text-[30px] text-gray-100 mb-2' />
                                        }
                                    </label>
                                    <input multiple={true} onChange={UploadHanlder} type="file" id='file2' className=' hidden' />
                                </div>
                            </div>
                        </div>
                    }
                    <button type='submit' disabled={uploadLoading ? true : false} className={`mt-10 w-full h-[50px] duration-150 text-white font-sans text-[15px] py-3 rounded-xl tracking-wide font-[600] flex items-center gap-x-5 bg-sky-500 shadow-lg cursor-pointer hover:bg-sky-700 justify-center`}> {updateloading && <ScaleLoader height={27} color='white' />} Update a Product</button>
                </form>
                {/* box container end */}
            </div>
        </SellerMainLayout>
    )
}

export default SellerEditProduct