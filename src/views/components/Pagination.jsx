import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'


function Pagination({ pageNo, setpageNo, productPerPage, totalProductsLength, showPaginationBox }) {

  let total_page = Math.ceil(totalProductsLength / productPerPage)
  let start_page = pageNo

  let difference = total_page - pageNo

  if (difference <= showPaginationBox) {
    start_page = total_page - showPaginationBox
  }

  let end_page = start_page < 0 ? showPaginationBox : showPaginationBox + start_page

  if (start_page <= 0) {
    start_page = 1
  }

  const createBtn = () => {
    const btns = []

    for (let i = start_page; i < end_page; i++) {
      btns.push(
        <li key={i} onClick={() => {
          setpageNo(i)
        }} className={` ${pageNo === i ? 'bg-purple-900 shadow-lg shadow-purple-400/50 text-white' : ' bg-slate-600 hover:bg-slate-800 shadow-lg hover:shadow-purple-500/20 hover:text-white text-gray-100'} w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer`}>
          {i}
        </li>
      )
    }

    return btns;
  }

  return (
    <ul className=' flex gap-3 mt-2'>
      {
        pageNo > 1 && <li onClick={() => setpageNo(pageNo - 1)} className=' w-[40px] h-[40px] cursor-pointer text-[18px] flex justify-center items-center text-center rounded-full bg-slate-700 text-white'>
          <HiChevronDoubleLeft />
        </li>
      }
      {
        createBtn()
      }
      {
        pageNo < (total_page - 1) && <li onClick={() => setpageNo(pageNo + 1)} className=' w-[40px] h-[40px] cursor-pointer text-[18px] flex justify-center items-center text-center rounded-full bg-slate-700 text-white'>
          <HiChevronDoubleRight />
        </li>
      }
    </ul>
  )

}

export default Pagination