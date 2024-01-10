import React from 'react'
import MainLayout from '../layout/MainLayout'
import { FaApplePay, FaUsers } from 'react-icons/fa'
import { SiShopee } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineEye } from 'react-icons/ai'
import Charts from 'react-apexcharts'

function AdminDashboard() {


    const barchart = {
        options: {
            colors: ['#da842e', '#1cb350', '#0190b0ce'],
            plotOptions: {
                bar: { // Use 'bar' instead of 'radius' for bar charts
                    borderRadius: 2, // Adjust the border radius as needed
                },
            },
            chart: {
                background: 'white',
                padding: 30,
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: 'white',
                width: 1,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        colors: 'black', // Font color
                        fontSize: '13px', // Font size
                        fontFamily: 'Poppins, sans-serif', // Font family
                    },
                },
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        labels: {
                            style: {
                                colors: 'black', // Font color
                                fontSize: '13px', // Font size
                                fontFamily: 'Poppins, sans-serif', // Font family
                            },
                        },
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart: {
                            height: '550px'
                        }
                    }
                }
            ]
        },
        series: [
            {
                name: "Orders",
                data: [34, 56, 45, 48, 93, 12, 8, 45, 96, 26, 35, 28]
            },
            {
                name: "Earning",
                data: [38, 65, 63, 36, 25, 52, 41, 14, 96, 17, 71, 29]
            },
            {
                name: "Sellers",
                data: [19, 48, 26, 23, 45, 86, 42, 35, 96, 15, 75, 28]
            },
        ],
    }

    return (
        <MainLayout>
            <div className='p-3 py-6 md:p-6 lg:px-8 lg:py-5 h-full overflow-y-scroll bg-gray-200'>

                {/* Top Short Web Status Tap */}
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-8 gap-y-4'>
                    <div className='flex bg-white shadow-lg rounded-2xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#1c9446]'>$12,500</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Total Sales</p>
                        </div>
                        <p className='h-10 w-10 bg-[#0de07638] rounded-full flex items-center justify-center'><FaApplePay className='text-[25px]' /></p>
                    </div>
                    <div className='flex bg-white shadow-lg rounded-2xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#52028ffc]'>16</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Products</p>
                        </div>
                        <p className='h-10 w-10 bg-[#8e72a764] rounded-full flex items-center justify-center'><SiShopee className='text-[17px]' /></p>
                    </div>
                    <div className='flex bg-white shadow-lg rounded-2xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#0190b0ce]'>58</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Total Sellers</p>
                        </div>
                        <p className='h-10 w-10 bg-[#0d7ae038] rounded-full flex items-center justify-center'><FaUsers className='text-[20px]' /></p>
                    </div>
                    <div className='flex bg-white shadow-lg rounded-2xl items-center justify-between p-5'>
                        <div >
                            <h1 className=' text-[22px] md:text-[35px] font-bold font-sans text-[#da842e]'>06</h1>
                            <p className='text-[13px] tracking-wide text-stone-500'>Orders</p>
                        </div>
                        <p className='h-10 w-10 bg-[#c7531d48] rounded-full flex items-center justify-center'><AiOutlineShoppingCart className='text-[20px]' /></p>
                    </div>
                </div>

                <div className=' w-full flex flex-wrap mt-5 p-1 '>
                    <div className='w-full lg:w-7/12 lg:pr-3  py-7 rounded-2xl bg-white shadow-lg -z-0  '>
                        <Charts options={barchart.options} series={barchart.series} type='bar' height={400} />
                    </div>
                    <div className=' w-full lg:w-5/12 mt-6 md:mt-0 md:pl-8 md:pr-2'>
                        <div className=' w-full h-[480px] overflow-y-scroll p-5 px-0 pt-0 bg-white shadow-lg rounded-xl'>
                            <div className='flex sticky top-0 left-0  py-2 shadow-lg w-full px-5 bg-white justify-between items-center'>
                                <h1 className='flex items-center gap-x-2 font-sans font-[600] text-[15px] tracking-wide'><GiBackwardTime className=' text-[28px] pt-1' /> Resent Seller Message</h1>
                                <p className=' tracking-wide text-[13px] text-stone-500 cursor-pointer hover:text-black'>View All</p>
                            </div>

                            <div className='mt-4 px-5 flex flex-col gap-y-3'>

                                <div id='admin' className='flex gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-[#ebedf4] to-gray-200 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[14px] font-sans font-[600] tracking-wide text-[#00964b]'>Admin</h1>
                                            <p className=' text-stone-500 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-stone-600'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='customer' className='flex flex-row-reverse gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-sky-700 to-sky-500 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[13px] font-sans font-[600] tracking-wide text-[#f6f6f6]'>Costomer</h1>
                                            <p className=' text-gray-100 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-white'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='admin' className='flex gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-[#ebedf4] to-gray-200 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[14px] font-sans font-[600] tracking-wide text-[#00964b]'>Admin</h1>
                                            <p className=' text-stone-500 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-stone-600'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='customer' className='flex flex-row-reverse gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-sky-700 to-sky-500 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[13px] font-sans font-[600] tracking-wide text-[#f6f6f6]'>Costomer</h1>
                                            <p className=' text-gray-100 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-white'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='admin' className='flex gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-[#ebedf4] to-gray-200 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[14px] font-sans font-[600] tracking-wide text-[#00964b]'>Admin</h1>
                                            <p className=' text-stone-500 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-stone-600'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='customer' className='flex flex-row-reverse gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-sky-700 to-sky-500 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[13px] font-sans font-[600] tracking-wide text-[#f6f6f6]'>Costomer</h1>
                                            <p className=' text-gray-100 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-white'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='customer' className='flex flex-row-reverse gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-sky-700 to-sky-500 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[13px] font-sans font-[600] tracking-wide text-[#f6f6f6]'>Costomer</h1>
                                            <p className=' text-gray-100 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-white'>hello how are you?</p>
                                    </div>
                                </div>
                                <div id='customer' className='flex flex-row-reverse gap-x-2'>
                                    <img src="/logo.png" className='h-8 w-8 flex-[0.09] rounded-full shadow-md' alt="" />
                                    <div className='bg-gradient-to-r from-sky-700 to-sky-500 flex-[0.92] rounded-xl p-3'>
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-[13px] font-sans font-[600] tracking-wide text-[#f6f6f6]'>Costomer</h1>
                                            <p className=' text-gray-100 text-[12px] tracking-wide'>4 days ago</p>
                                        </div>
                                        <p className='text-[12px] tracking-wide pt-1 text-white'>hello how are you?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full overflow-x-scroll'>
                    <div className=' w-[800px] md:w-full bg-white p-6 rounded-2xl mt-6'>
                        <div className='flex justify-between items-center'>
                            <h1 className='flex items-center gap-x-2 font-sans font-[600] text-[16px] tracking-wide'><GiBackwardTime className=' text-[28px] pt-1' /> Resent Orders</h1>
                            <p className=' tracking-wide text-[13px] text-stone-500 cursor-pointer hover:text-black'>View All</p>
                        </div>
                        <div className=' w-full bg-sky-600 flex  rounded-2xl shadow-lg py-4 px-5 mt-5'>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>No.</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>Order Id</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>Price</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'>Payment Status</p>
                            <p className=' font-sans text-white font-[600] tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'>Order Status</p>
                            <p className=' font-sans text-white font-[600] tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6]'>Action</p>
                        </div>

                        <div className='mt-6 flex flex-col gap-y-3 rounded-2xl'>
                            <div className=' w-full rounded-2xl flex items-center  py-2 px-5'>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>1.</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>#1253652846856555</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>$5,569</p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>Pending</span></p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#ccf4cd]'>Successed</span></p>
                                <p className='  text-stone-600  tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6]'><AiOutlineEye className='bg-gray-300 text-stone-700 hover:scale-105 duration-200 transform translate-x-6 h-8 w-[38px] rounded-lg p-[5px] cursor-pointer' /></p>
                            </div>
                            <div className=' w-full rounded-2xl flex items-center  py-2 px-5'>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[0.4]'>1.</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[3]'>#1253652846856555</p>
                                <p className='  text-stone-600  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[1.1]'>$5,569</p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-red-400 bg-[#f4cccc]'>Pending</span></p>
                                <p className='  text-stone-700  tracking-wider border-r pl-3 border-gray-100 text-[14px] flex-[2]'><span className=' py-1 px-3 rounded-lg text-[13px] border-[2px] border-green-500 bg-[#ccf4cd]'>Successed</span></p>
                                <p className='  text-stone-600  tracking-wide text-[14px] pl-3 border-gray-300 flex-[1.6]'><AiOutlineEye className='bg-gray-300 text-stone-700 hover:scale-105 duration-200 transform translate-x-6 h-8 w-[38px] rounded-lg p-[5px] cursor-pointer' /></p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    )
}

export default AdminDashboard