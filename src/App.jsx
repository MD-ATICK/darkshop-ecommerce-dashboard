import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import io from "socket.io-client";
import api from "./api/api";
import AdminLogin from "./auth/AdminLogin";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import {
	authuser,
	load,
	logout,
	rootFetch,
	unauthorize,
} from "./redux/reducers/authReducers";
import AllRouters from "./router/Router";

let socket;

function App() {
	const dispatch = useDispatch();
	const token = localStorage.getItem("ds-token");
	const { loading, data } = useSelector(state => state.auth);

	const authUser = async token => {
		try {
			dispatch(load());
			const { data, status } = await api.get("/v1/get-user", {
				headers: { Authorization: `Bearer ${token}` },
			});
			console.log("fetch me 😐", status, data);
			if (status === 200) {
				dispatch(authuser({ data, status }));
			} else if (status === 223) {
				dispatch(authuser({ data: "", status: 223 }));
				localStorage.removeItem("ds-token");
				dispatch(logout());
				<Navigate to={"/"} />;
				toast.error("token is expried again login.");
			}
		} catch (error) {
			console.log("error is here authUser.");
		}
	};

	// const rootFetch = async () => {
	//   const { data } = await api.get('/')
	//   console.log('✅get fetch dashboard', data)
	// }

	useEffect(() => {
		socket = io("https://darkshop-ecommerce-sever-side.onrender.com");
		// socket = io("http://localhost:4000");
		dispatch(rootFetch());

		if (data && socket) {
			socket.emit("add_user", data.user);
		}

		if (token && !data) {
			console.log("app.js 51", token);
			authUser(token);
		} else {
			unauthorize();
		}
	}, [data]);

	console.log(loading, socket);

	return (
		<>
			{loading && <Loader />}
			{socket ? (
				<BrowserRouter>
					<AllRouters socket={socket} />
				</BrowserRouter>
			) : (
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/admin/login' element={<AdminLogin />} />
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
