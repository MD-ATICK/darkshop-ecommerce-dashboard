import React, { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import AllRouters from "./router/Router"
import { useDispatch, useSelector } from "react-redux";
import api from "./api/api";
import { authuser, load, unauthorize } from "./redux/reducers/authReducers";
import Loader from "./views/components/Loader";
import axios from 'axios'


function App() {

  const dispatch = useDispatch()
  const { loading, data } = useSelector(state => state.auth)

  const authUser = async (token) => {
    dispatch(load())
    const { data, status } = await api.get('/get-user', { headers: { Authorization: `Bearer ${token}` } })
    if (status === 200) {
      dispatch(authuser({ data, status }))
    }
  }

  const rootFetch = async () => {
    const { data } = await axios.get('https://darkshop-ecommerce-server.vercel.app/')
    console.log('✅get fetch dashboard', data)
  }

  useEffect(() => {
    rootFetch()
    const token = localStorage.getItem('ds-token')
    console.log('app.jsx', token, data)
    token ? !data && authUser(token) : unauthorize()
  }, []);

  return (
    <>
      {
        loading ?
          <Loader /> :
          <BrowserRouter>
            <AllRouters />
          </BrowserRouter>
      }
    </>
  )
}

export default App
