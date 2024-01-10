import React, { useEffect, useRef } from 'react'
import SellerMainLayout from '../layout/SellerMainLayout'
import { IoMdInformationCircle } from 'react-icons/io'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RiSendPlaneFill } from 'react-icons/ri'
import { correct_id, messagesFetch, new_message } from '../redux/reducers/MessageChatReducers'
import { ClipLoader } from 'react-spinners'
import api from '../api/api'
import { toast } from 'react-toastify'
import { IoCheckmarkDone } from "react-icons/io5";


function SeparateCostomerChat({ socket }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const getRef = useRef()
  const sendRef = useRef()
  const scrollRef = useRef(null);


  const [content, setcontent] = useState('');
  const [images, setimages] = useState([]);
  const { data: auth_data } = useSelector(state => state.auth)

  const [msgLoading, setmsgLoading] = useState(false);


  const chat = location.state
  const token = localStorage.getItem('ds-token')

  const { messageFetch, messages } = useSelector(state => state.messageChat)


  const fileHanlder = async (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return;

    files.map(async (file) => {
      const form = new FormData()
      form.append('image', file)
      const { data: uploadData, status: uploadStatus } = await axios.post('https://api.imgbb.com/1/upload?key=57c12ab1dfd1e175a03c87dbdc436f90', form)
      if (uploadStatus === 200) {
        toast.success('uploaded.')
        return setimages(prev => [...prev, uploadData.data.url])
      }
    })
  }

  const message_send_hanlder = async (e) => {
    if (e.key === 'Enter' && auth_data) {
      setmsgLoading(true)
      setcontent('')
      setimages('')

      const randomId = Math.floor(Math.random() * 10000) + 80000
      dispatch(new_message({ _id: randomId, chat: chat._id, content, images, sender: auth_data.user }))
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }

      const { data, status } = await api.post(`/v7/message/send-message`, { chatid: chat._id, content, images }, { headers: { Authorization: `Bearer ${token}` } })
      if (socket && status === 201) {
        dispatch(correct_id({ oId: randomId, nId: data.message._id }))
        sendRef.current.play()
        setmsgLoading(false)
        socket.emit('message_send', data.message)
        console.log(data)
      }
    }
  }



  useEffect(() => {
    token && dispatch(messagesFetch(chat._id))

    if (socket) {
      console.log({ socket })

      socket.on('reciveMessage', (props) => {
        dispatch(new_message(props))
        getRef.current.play()
        toast.success('messsage get.')
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      })

      socket.emit('join', chat._id)

      return () => {
        socket.off('reciveMessage')
      }
    }


  }, []);


  return (
    <SellerMainLayout>
      <div className=' md:absolute fixed top-[55px] left-0 w-full h-[92.2vh] overflow-hidden'>
        <div id='top header' className=' z-[99] shadow-lg fixed top-0 left-0 md:absolute h-[55px] bg-gradient-to-r from-teal-700 to-teal-600 flex items-center justify-between px-6 text-white w-full'>
          <audio ref={getRef} src="/get-sound.mp3"></audio>
          <audio ref={sendRef} src="/send-sound.mp3"></audio>
          <div className='flex items-center gap-x-4'>
            <button onClick={() => {
              if (socket) {
                socket.emit('leave', chat._id)
                navigate('/seller/chat-customer')
              }
            }} className=' h-10 w-10 flex justify-center items-center hover:bg-[#188f8b72] rounded-md duration-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <div className='h-10 w-10 cursor-pointer'>
              <div className=' relative h-10 w-10'>
                <img src={'https://t3.ftcdn.net/jpg/05/65/15/22/360_F_565152212_hLG5Mtc2jMwoBOpl2dwWTi7wPmruADGq.jpg'} className='h-10 w-10 object-cover shadow-lg rounded-full' alt="" />
                <p className='h-4 w-4 absolute -top-0 -right-1 rounded-full bg-green-400 border-[3.5px] border-teal-700'></p>
              </div>
            </div>
            <p className='tracking-wide text-[17px] font-[600]'>{chat.customer.name}</p>
          </div>
          <button><IoMdInformationCircle className=' text-white text-[30px]' /></button>
        </div>

        <div id="content_bar" className='py-[55px]'>
          {
            messageFetch ?
              <div ref={scrollRef} className=' h-[78vh] pb-24 overflow-y-scroll scroll-smooth flex gap-y-2 flex-col w-full py-2 border-2 px-2 pr-8 '>
                <p className=' text-stone-600 text-[12px] mb-3 tracking-wide w-full text-center'>now start your chat with borhan uddin</p>
                {
                  messages.map((cm, i) => {
                    // Work 1 : send sound and done green kora bikaler kaj;
                    if (auth_data && cm.sender._id === auth_data.user._id) {
                      return <div key={cm._id} className=' right relative flex w-full justify-end'>
                        <div className=" py-3 pl-4 pr-6 font-sans text-[16px] tracking-wide rounded-lg bg-teal-700 w-fit text-white">
                          {/* <img src="..." className='h-20 w-20 bg-black p-1' alt="" /> */}
                          <p className=' text-right font-sans text-[16px] tracking-wide'>{cm.content}</p>
                          {
                            i === (messages.length - 1) &&
                            <p className=' absolute bottom-1 -right-6'><IoCheckmarkDone className={`text-xl ${ msgLoading ? 'text-stone-400' : 'text-green-600' } `} /></p>
                          }
                        </div>
                      </div>
                    } else {
                      return <div key={cm._id} className="left py-3 pl-4 pr-6 font-sans text-[16px] tracking-wide rounded-lg  bg-gradient-to-r from-sky-700 to-pink-800  w-fit text-white">
                        {cm.content}
                      </div>
                    }
                  })
                }
              </div>
              :
              <div className=' w-full flex justify-center items-center py-6'>
                <ClipLoader color='black' size={50} cssOverride={{ borderWidth: '5px' }} />
              </div>
          }

        </div>


        <div id='search & msg send bar' className=' search w-full bg-gradient-to-r from-teal-600 to-teal-700 h-[75px] flex items-center md:gap-x-2 gap-x-4 md:px-2 px-8 fixed md:absolute bottom-0 left-0'>
          <input type="file" id='file' multiple={true} className=' hidden' />
          <label htmlFor='file' onClick={fileHanlder} className=' h-10 w-10 cursor-pointer bg-white rounded-full shadow-sm text-stone-600 text-[24px] transform rotate-0 duration-300 hover:rotate-180 flex justify-center items-center '>+</label>
          <div className=' relative h-[50px] md:p-0 pr-8 flex justify-end items-center flex-grow'>
            <input value={content} onChange={(e) => setcontent(e.target.value)} onKeyDown={token && message_send_hanlder} type="text" className=' bg-gradient-t-r from-gray-200 to-gray-400 outline-none rounded-full w-full duration-500 h-full placeholder:text-stone-500 text-[16px] font-sans tracking-wide font-[600] px-4' placeholder='enter your message ...' />
          </div>
          <button className=' h-10 w-10  bg-white rounded-full shadow-sm text-stone-600 text-[24px]  duration-300 flex items-center pt-[1px] pr-[2px] justify-center '> <RiSendPlaneFill /></button>
        </div>
      </div>
    </SellerMainLayout>
  )
}

export default SeparateCostomerChat