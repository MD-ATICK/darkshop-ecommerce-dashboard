import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const add_category = createAsyncThunk('category/add_category', async (cateInfo) => {
    const token = localStorage.getItem('ds-token')
    if (token) {
        const { data, status } = await api.post('/v2/add-category', cateInfo, { headers: { Authorization: `Bearer ${token}` } })
        return { data, status }
    } else {
        console.log('token error in redux.')
    }

})

export const get_category = createAsyncThunk('category/get_category', async () => {
    const token = localStorage.getItem('ds-token')
    if (token) {
        const { data, status } = await api.get('/v2/get-category', { headers: { Authorization: `Bearer ${token}` } })
        return { data, status }
    } else {
        console.log('token error in redux.')
    }
})


export const categoryReducer = createSlice({
    name: 'category',
    initialState: {
        addloading: false,
        getloading: false,
        categoryes: [],
        status: '',
        fetch: false
    },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(add_category.pending, (state, action) => {
            state.addloading = true
            state.status = null
            state.fetch = false
        })

        builder.addCase(add_category.fulfilled, (state, action) => {
            state.addloading = false
            state.categoryes = [...state.categoryes, action.payload.data.category]
            state.status = action.payload.status
            state.fetch = true
        })

        builder.addCase(get_category.pending, (state, action) => {
            state.getloading = true
            state.categoryes = []
            state.status = null
            state.fetch = false
        })

        builder.addCase(get_category.fulfilled, (state, action) => {
            state.getloading = false
            state.categoryes = action.payload.data.categoryes
            state.status = action.payload.status
            state.fetch = true
        })
    }
})

// export const { authuser, unauthorize, load, logout } = authReducer.actions

export default categoryReducer.reducer;