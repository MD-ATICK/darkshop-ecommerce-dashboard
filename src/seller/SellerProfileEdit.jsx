import React, { useEffect, useState } from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { LuUpload, LuLoader } from 'react-icons/lu'
import axios from 'axios';
import { ClipLoader, FadeLoader, PulseLoader, ScaleLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { add_product, get_product, single_get_product } from '../redux/reducers/ProductReducers';
import { get_category } from '../redux/reducers/CategoryReducers';
import { toast } from 'react-toastify'
import api from '../api/api';
import { MdAddAPhoto } from 'react-icons/md'
import { GiMagicBroom } from 'react-icons/gi'
import { authuser, load } from '../redux/reducers/authReducers';
import { IoIosArrowBack } from 'react-icons/io'

function SellerProfileEdit() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false);

    const { data, fetch } = useSelector(state => state.auth)


    const { id } = useParams();

    const [avatarUploadLoading, setavatarUploadLoading] = useState(false);
    const [bannerUploadLoading, setbannerUploadLoading] = useState(false);
    const [editProfileLoading, seteditProfileLoading] = useState(false);

    const [name, setname] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [shopName, setshopName] = useState('');
    const [district, setdistrict] = useState('');
    const [division, setdivision] = useState('');
    const [subDistrict, setsubDistrict] = useState('');
    const [bio, setbio] = useState('');
    const [avatar, setavatar] = useState('');
    const [banner, setbanner] = useState('');


    const profileUploadHanlder = async (e) => {
        setavatarUploadLoading(true)
        const file = e.target.files[0]

        if (!file) return alert('profile select')
        const form = new FormData()
        form.append('image', file)
        const { data, status } = await axios.post(`https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90`, form)
        if (status === 200) {
            setavatarUploadLoading(false)
            return setavatar(data.data.url)
        }
    }
    const bannerUploadHanlder = async (e) => {
        setbannerUploadLoading(true)
        const file = e.target.files[0]

        if (!file) return alert('banner select')
        console.log('banner change')
        const form = new FormData()
        form.append('image', file)
        const { data, status } = await axios.post(`https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90`, form)
        if (status === 200) {
            setbannerUploadLoading(false)
            return setbanner(data.data.url)
        }
    }

    const authUser = async (token) => {
        dispatch(load())
        const { data, status } = await api.get('/get-user', { headers: { Authorization: `Bearer ${token}` } })
        if (status === 200) {
            dispatch(authuser({ data, status }))
        }
    }



    const EditProfileHandler = async (e) => {
        e.preventDefault()
        seteditProfileLoading(true)
        const semail = data.user.email
        const token = localStorage.getItem('ds-token')
        if (token && data.user) {
            const { data, status } = await api.post('/seller-update-profile', { name, email: semail, phoneNo, shopName, district, division, subDistrict, bio, avatar, banner }, { headers: { Authorization: `Bearer ${token}` } })
            if (status === 201) {
                console.log(data)
                await authUser(token)
                navigate('/seller/profile')
                seteditProfileLoading(false)
                toast.success('update profile successed.')
            } else {
                toast.error('edit profile failed.')
            }
        }
    }

    useEffect(() => {
        if (fetch && data) {
            setname(data.user.name)
            data.user.phoneNo && setphoneNo(data.user.phoneNo)
            data.user.avatar && setavatar(data.user.avatar)
            data.user.banner && setbanner(data.user.banner)
            data.user.bio && setbio(data.user.bio)
            if (data.user.shopInfo) {
                setshopName(data.user.shopInfo.shopName)
                setdistrict(data.user.shopInfo.district)
                setdivision(data.user.shopInfo.division)
                setsubDistrict(data.user.shopInfo.subDistrict)
            }
        }
    }, [data]);


    return (
        <SellerMainLayout>
            <div className=' bg-white relative md:bg-gray-200 h-full w-full overflow-y-scroll'>
                {/* 
                {
                    loading &&
                    <div className='  absolute flex-col gap-y-4 top-0 left-0 h-screen w-full flex justify-center items-center glass z-50'>
                        <ScaleLoader speedMultiplier={0.8} color='#0091ff' />
                        <p className='text-[14px] tracking-wide text-stone-700'>data getting <span className=' tracking-widest'>...</span></p>
                    </div>
                } */}
                {/* box container */}
                <form action='' onSubmit={EditProfileHandler} className=' bg-white h-full  md:shadow-lg  md:overflow-y-scroll'>
                    <div className='flex items-center justify-center relative  h-[260px] border-black'>
                        <div className={`h-full relative w-full rounded-br-3xl rounded-bl-3xl bg-sky-600 `} >
                            {banner && <img src={banner} className=' absolute shadow-lg rounded-br-xl rounded-bl-xl top-0 left-0 w-full h-full object-cover' alt="" />}
                            {
                                bannerUploadLoading ?
                                    <div className='absolute cursor-pointer z-10 hover:bg-[#00000046]  duration-150 hover:text-white bottom-6 right-10 rounded-full flex justify-center items-center shadow-lg'>
                                        <ScaleLoader height={25} color='white' />
                                    </div>
                                    :
                                    <label htmlFor='banner' title='choose your profile banner ' className='absolute cursor-pointer z-10 hover:bg-[#00000046] border-2 border-white duration-150 hover:text-white bottom-4 right-8 h-10 w-10 bg-white rounded-full flex justify-center items-center shadow-lg'>
                                        <GiMagicBroom className='hover:text-[24px] font-bold text-[22px]' />
                                    </label>
                            }
                            <Link to='/seller/profile' className=' cursor-pointer flex items-center gap-x-1 absolute top-3 left-3 bg-[#ffffffb2] border-2 rounded-xl tracking-wide text-[13px] border-white py-2 px-3'>
                                <IoIosArrowBack /> Back
                            </Link>
                            <input onChange={bannerUploadHanlder} type="file" id='banner' className=' hidden' />

                        </div>
                        <div className='absolute top-32 left-1/2 transform -translate-x-1/2'>
                            <img src={avatar ? avatar : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png'} className='h-[230px]  border-[6px] border-white  object-cover w-[230px] rounded-full' alt="" />
                            <label htmlFor='avatar' className='h-10 w-10 cursor-pointer rounded-full flex items-center justify-center absolute right-4 bg-white bottom-4'>
                                {
                                    avatarUploadLoading ?
                                        <ClipLoader cssOverride={{ height: '25px', width: '25px', border: '3px solid ' }} />
                                        :
                                        <MdAddAPhoto className='text-[20px]' />
                                }
                            </label>

                            <input onChange={profileUploadHanlder} type="file" id='avatar' className=' hidden' />
                        </div>
                    </div>
                    <div className='flex gap-x-10 gap-y-4 px-6 md:px-12  flex-col md:flex-row mt-[130px]'>
                        {/* left side */}
                        <div className='flex w-full flex-col gap-y-6'>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={name} onChange={(e) => setname(e.target.value)} className='input placeholder:text-stone-500 py-3 px-4 bg-gray-200 outline-none text-[16px] rounded-lg font-sans font-[600] tracking-wide text-stone-700' placeholder='Name' />
                                <label htmlFor="name" className=' focusEffect tracking-wide text-stone-700 text-[14px]'>* Product Name </label>
                            </div>

                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={shopName} onChange={(e) => setshopName(e.target.value)} className='input placeholder:text-stone-500 py-3 px-4 text-[16px] bg-gray-200 font-sans font-[600] tracking-wide  rounded-lg outline-none' placeholder='shop name' />
                                <label htmlFor="name" className='focusEffect tracking-wide text-stone-700 text-[14px] relative'>* Shop Name <span className=' absolute -top-1 left-[103px] text-[11px] bg-red-600 text-white tracking-wide rounded-md px-1 font-[500]'>new!</span></label>
                            </div>

                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={phoneNo && '+088' + phoneNo} onChange={(e) => setphoneNo(e.target.value)} className='input placeholder:text-stone-500  font-sans font-[600] tracking-wide py-3 px-4 text-[16px] bg-gray-200  rounded-lg outline-none' placeholder='phone no' />
                                <label htmlFor="name" className='focusEffect tracking-wide text-stone-700 text-[14px] relative'>* Phone Number <span className=' absolute -top-1 left-[125px] text-[11px] bg-red-600 text-white tracking-wide rounded-md px-1 font-[500]'>new!</span></label>
                            </div>
                        </div>
                        {/* left side end */}

                        {/* right side */}
                        <div className='flex w-full flex-col gap-y-6'>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={district} onChange={(e) => setdistrict(e.target.value)} className='input placeholder:text-stone-500  font-sans font-[600] tracking-wide py-3 px-4 text-[16px] bg-gray-200  rounded-lg outline-none' placeholder='district name' />
                                <label htmlFor="name" className='focusEffect tracking-wide text-stone-700 text-[14px] relative'>* district <span className=' absolute -top-1 left-[67px] text-[11px] bg-red-600 text-white tracking-wide rounded-md px-1 font-[500]'>new!</span></label>
                            </div>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={division} onChange={(e) => setdivision(e.target.value)} className='input placeholder:text-stone-500  font-sans font-[600] tracking-wide py-3 px-4 text-[16px] bg-gray-200  rounded-lg outline-none' placeholder='division' />
                                <label htmlFor="name" className='focusEffect tracking-wide text-stone-700 text-[14px] relative'>* division <span className=' absolute -top-1 left-[70px] text-[11px] bg-red-600 text-white tracking-wide rounded-md px-1 font-[500]'>new!</span></label>
                            </div>
                            <div className='flex flex-col-reverse gap-y-2'>
                                <input required={true} type="text" value={subDistrict} onChange={(e) => setsubDistrict(e.target.value)} className='input placeholder:text-stone-500  font-sans font-[600] tracking-wide py-3 px-4 text-[16px] bg-gray-200  rounded-lg outline-none' placeholder='sub district' />
                                <label htmlFor="name" className='focusEffect tracking-wide text-stone-700 text-[14px] relative'>* Sub District<span className=' absolute -top-1 left-[103px] text-[11px] bg-red-600 text-white tracking-wide rounded-md px-1 font-[500]'>new!</span></label>
                            </div>
                        </div>
                        {/* right side end */}
                    </div>
                    <div className='px-6 mt-3  md:px-12'>

                        <div className='pt-4 flex flex-col-reverse gap-y-2'>
                            <textarea value={bio} onChange={(e) => setbio(e.target.value)} name="" className='input h-[100px] placeholder:text-stone-500 resize-none py-3 px-4 text-[15px] font-[600] font-sans bg-gray-200 tracking-wide rounded-lg text-black  outline-none' id="" placeholder='enter your bio' ></textarea>
                            <label htmlFor="name" className='focusEffect tracking-wide text-stone-700 text-[14px] relative'>* Profile Bio <span className=' absolute -top-1 left-[90px] text-[11px] bg-red-600 text-white tracking-wide rounded-md px-1 font-[500]'>new!</span></label>
                        </div>
                    </div>

                    <div className='px-10 pb-4'>
                        <button type='submit' disabled={avatarUploadLoading || bannerUploadLoading ? true : false} className={`mt-10 w-full h-[50px] duration-150 text-white font-sans text-[15px] py-3 rounded-xl tracking-wide font-[600] flex items-center gap-x-5 bg-sky-500 shadow-lg cursor-pointer hover:bg-sky-700 justify-center`}> {editProfileLoading && <ScaleLoader height={27} color='white' />} Save</button>
                    </div>
                </form>
                {/* box container end */}
            </div>
        </SellerMainLayout>
    )
}

export default SellerProfileEdit