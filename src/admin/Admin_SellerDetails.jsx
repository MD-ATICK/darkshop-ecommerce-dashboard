import React, { useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { GrContactInfo } from 'react-icons/gr'
import { VscSend } from 'react-icons/vsc'
import { useState } from 'react'
import { ClipLoader, ScaleLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import api from '../api/api'

function Admin_SellerDetails() {

    const navigate = useNavigate()

    const { id } = useParams()

    const [sellerDetails, setsellerDetails] = useState('');
    const [sellerstatus, setsellerstatus] = useState('');
    const [loading, setloading] = useState(true);
    const [changeLoading, setchangeLoading] = useState(false);



    const sellerDetailsFetch = async () => {
        if (id) {
            const token = localStorage.getItem('ds-token')
            const { data, status } = await api.get(`/v4/single-seller/${id}`, { headers: { Authorization: `Bearer ${token}` } })
            console.log(data)
            if (status === 200) {
                setloading(false)
                setsellerDetails(data.seller)
                console.log(data)
            }
        }
    }

    const changeStatusHanlder = async () => {
        console.log(status)
        setchangeLoading(true)
        if (sellerDetails) {
            const token = localStorage.getItem('ds-token')
            const { data, status } = await api.put(`/v4/change-status`, { sellerid: sellerDetails._id, sellerstatus }, { headers: { Authorization: `Bearer ${token}` } })
            if (status === 201) {
                console.log(data)
                setsellerDetails(data.updatedUser)
                setchangeLoading(false)
                toast.success('status changed successed.')
            }
        }
    }


    useEffect(() => {
        sellerDetailsFetch()
    }, []);

    useEffect(() => {
        if (sellerDetails) {
            setsellerstatus(sellerDetails.status)
        }
    }, [sellerDetails]);

    return (
        <MainLayout>
            <div className='md:p-10 p-4 relative h-full md:bg-gray-200 w-full md:flex items-center'>
                {
                    loading &&
                    <div className='  absolute flex-col gap-y-4 top-0 left-0 h-screen w-full flex justify-center items-center glass z-50'>
                        <ScaleLoader speedMultiplier={0.8} color='#0091ff' />
                        <p className='text-[14px] tracking-wide text-stone-700'>seller info getting <span className=' tracking-widest'>...</span></p>
                    </div>
                }

                <div className=' rounded-[30px] md:shadow-lg bg-white md:p-10 md:flex w-full'>
                    <div className='flex-1 relative flex my-4 mt-9 lg:mb-0 flex-row md:flex-col justify-center md:items-center gap-x-6 '>
                        <button onClick={() => navigate('/admin/seller')} className=' absolute -top-11 left-0 p-2 px-[9px] text-stone-600 rounded-lg cursor-pointer hover:bg-gray-200'><VscSend className=' transform rotate-180 text-[25px]' /></button>
                        <div className=' w-[150px] relative md:w-[300px]'>
                            <img className=' w-full aspect-square rounded-xl md:rounded-full shadow-lg object-cover ' src={sellerDetails?.avatar} alt="" />
                            <span className=' py-[2px] px-2 absolute top-2 right-1 rounded-lg text-[12px] border-[2px] border-yellow-400 bg-[#fef48863] josefin'>admin</span>
                        </div>
                        <div>
                            <p className='pt-3 josefin text-[16px] md:text-center'>{sellerDetails?.name}</p>
                            <p className='josefin text-[16px] md:text-center tracking-wide'>{sellerDetails?.email}</p>
                            <div className='flex items-center gap-x-6 mt-4 md:mt-4'>
                                <select name="" id="" value={sellerstatus} onChange={(e) => setsellerstatus(e.target.value)} className='py-2 md:py-3 px-6 bg-gray-300 rounded-md josefin'>
                                    <option value="pending" className='text-[14px] tracking-wide font-sans font-[600]'>pending</option>
                                    <option value="active" className='text-[14px] tracking-wide font-sans font-[600]'>active</option>
                                    <option value="deactive" className='text-[14px] tracking-wide font-sans font-[600]'>deactive</option>
                                </select>
                                <button onClick={changeStatusHanlder} disabled={sellerDetails?.status === sellerstatus ? true : false} className={`josefin h-[50px] py-2 md:py-3 px-6 text-[14px] ${sellerstatus === sellerDetails?.status ? 'bg-stone-600 cursor-not-allowed' : ' bg-green-600 cursor-pointer'} hover:bg-green-700 rounded-lg shadow-md text-white flex items-center gap-x-3`}> {changeLoading && <ClipLoader color="white" cssOverride={{ border: '5px solid white' }} />} Change</button>
                            </div>
                        </div>

                    </div>

                    <div className='flex-1 px-8 md:pl-16 flex gap-y-6 md:gap-y-10 flex-col'>
                        <div className=''>
                            <div>
                                <h1 className='text-[20px] mt-4 md:text-[22px] josefin font-[500] text-stone-500 flex items-center gap-x-3'> Basic Infomation :</h1>
                            </div>
                            <div className=' bg-gray-200 rounded-xl shadow-md py-3'>

                                <div className=' pl-12 pt-[4px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Name : </label>
                                    <p className='josefin'>{sellerDetails?.name}</p>
                                </div>
                                <div className=' pl-12 pt-[4px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Eamil : </label>
                                    <p className='josefin'>{sellerDetails?.email}</p>
                                </div>
                                <div className=' pl-12 pt-[4px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Role : </label>
                                    <span className=' py-[2px] px-4 rounded-lg text-[15px] border-[2px]  josefin'>{sellerDetails?.role}</span>
                                </div>
                                {sellerDetails?.status === 'pending' &&
                                    <div className=' pl-12 pt-[6px] md:pt-[10px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Status : </label>
                                        <span className=' py-1 px-3 rounded-lg text-[15px] border-[2px] border-yellow-500 bg-[#f4f3cc] josefin'>{sellerDetails?.status}</span>
                                    </div>
                                    || sellerDetails?.status === 'active' &&
                                    <div className=' pl-12 pt-[6px] md:pt-[10px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Status : </label>
                                        <span className=' py-1 px-3 rounded-lg text-[15px] border-[2px] border-green-500 bg-[#ccf4cd] josefin'>{sellerDetails?.status}</span>
                                    </div>
                                    || sellerDetails?.status === 'deactive' &&
                                    <div className=' pl-12 pt-[6px] md:pt-[10px] flex items-center gap-x-2'>
                                        <label htmlFor="name" className='josefin text-stone-600'>Status : </label>
                                        <span className=' py-1 px-3 rounded-lg text-[15px] border-[2px] border-purple-500 bg-[#e3ccf4] josefin'>{sellerDetails?.status}</span>
                                    </div>
                                }
                                {
                                    sellerDetails?.paymentStatus === 'active' ?
                                        <div className=' pl-12 pt-[6px] md:pt-[10px] flex items-center gap-x-2'>
                                            <label htmlFor="name" className='josefin text-stone-600'>Payment Status : </label>
                                            <span className=' py-1 px-3 rounded-lg text-[15px] border-[2px] border-green-500 bg-[#ccf4cd] josefin'>{sellerDetails?.paymentStatus}</span>
                                        </div>
                                        :
                                        <div className=' pl-12 pt-[6px] md:pt-[10px] flex items-center gap-x-2'>
                                            <label htmlFor="name" className='josefin text-stone-600'>Payment Status : </label>
                                            <span className=' py-1 px-3 rounded-lg text-[15px] border-[2px] border-red-500 bg-[#f4d1cc] josefin'>{sellerDetails?.paymentStatus}</span>
                                        </div>
                                }
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className=' text-[20px] md:text-[22px] josefin font-[500] text-stone-500 flex items-center gap-x-3'> Seller Address :</h1>
                            </div>
                            <div className='py-3 rounded-xl shadow-md bg-gray-200'>
                                <div className=' pl-12 pt-[0px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Shop Name : </label>
                                    <span className=' py-1 px-3 rounded-lg text-[16px]  josefin'>{sellerDetails?.shopInfo?.shopName}</span>
                                </div>
                                <div className=' pl-12 pt-[0px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Divisoin : </label>
                                    <span className=' py-1 px-3 rounded-lg text-[16px]  josefin'>{sellerDetails?.shopInfo?.division}</span>
                                </div>
                                <div className=' pl-12 pt-[0px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>District : </label>
                                    <span className=' py-1 px-3 rounded-lg text-[16px]  josefin'>{sellerDetails?.shopInfo?.district}</span>
                                </div>
                                <div className=' pl-12 pt-[0px] md:pt-[6px] flex items-center gap-x-2'>
                                    <label htmlFor="name" className='josefin text-stone-600'>Upojela : </label>
                                    <span className=' py-1 px-3 rounded-lg text-[16px] josefin'>{sellerDetails?.shopInfo?.subDistrict}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </MainLayout>
    )
}

export default Admin_SellerDetails