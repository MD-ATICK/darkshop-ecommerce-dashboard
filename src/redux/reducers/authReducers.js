import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const admin_Login = createAsyncThunk('auth/admin_Login', async (loginInfo) => {
    const { data, status } = await api.post('/admin-login', loginInfo, { withCredentials: true })

    return { data, status }
})

export const seller_register = createAsyncThunk('auth/seller_register', async (registerinfo) => {
    const { data, status } = await api.post('/seller-register', registerinfo, { withCredentials: true })

    return { data, status }
})

export const seller_login = createAsyncThunk('auth/seller_login', async (logininfo) => {
    const { data, status } = await api.post('/seller-login', logininfo, { withCredentials: true })
    return { data, status }
})

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        data: null,
        status: '',
        fetch: false
    },
    reducers: {
        load: (state) => {
            state.loading = true
        },
        authuser: (state, action) => {
            state.data = action.payload.data
            state.status = action.payload.status
            state.loading = false
            state.fetch = true
        },
        unauthorize: (state) => {
            state.data = ''
            state.loading = false
        },
        logout: (state) => {
            state.data = null,
                state.status = ''
        }
    },
    extraReducers: (builder) => {
        // adimin login ~ direct
        builder.addCase(admin_Login.pending, (state, action) => {
            state.loading = true
            state.data = null
            state.status = null
            state.fetch = false

        })
        builder.addCase(admin_Login.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.status = action.payload.status
            state.fetch = true
        })

        // seller register
        builder.addCase(seller_register.pending, (state, action) => {
            state.loading = true
            state.data = null
            state.status = null
            state.fetch = false
        })
        builder.addCase(seller_register.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.status = action.payload.status
            state.fetch = true
        })

        // seller login
        builder.addCase(seller_login.pending, (state, action) => {
            state.loading = true
            state.data = null
            state.status = null
            state.fetch = false

        })
        builder.addCase(seller_login.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.status = action.payload.status
            state.fetch = true

        })

    }
})

export const { authuser, unauthorize, load, logout } = authReducer.actions

export default authReducer.reducer;