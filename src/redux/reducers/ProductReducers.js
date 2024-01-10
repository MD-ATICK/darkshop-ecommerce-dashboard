import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api/api';
import { toast } from "react-toastify";


export const add_product = createAsyncThunk('product/add_product', async (productInfo) => {
    const token = localStorage.getItem('ds-token')
    if (token) {
        const { data, status } = await api.post('/v3/add-product', productInfo, { headers: { Authorization: `Bearer ${token}` } })
        return { data, status }
    } else {
        console.log('token error in redux.')
    }

})

export const get_product = createAsyncThunk('product/get_product', async () => {
    const token = localStorage.getItem('ds-token')
    if (token) {
        const { data, status } = await api.get('/v3/get-product', { headers: { Authorization: `Bearer ${token}` } })
        return { data, status }
    } else {
        console.log('token error in redux.')
    }
})


export const single_get_product = createAsyncThunk('product/single_get_product', async (id) => {
    const token = localStorage.getItem('ds-token')
    if (token) {
        const { data, status } = await api.get(`/v3/single-get-product/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        console.log(data)
        return { data, status }
    } else {
        console.log('token error in redux.')
    }
})

export const productReducer = createSlice({
    name: 'product',
    initialState: {
        singleProduct: null,
        getloading: false,
        products: [],
        status: '',
        fetch: false,
    },
    reducers: {

        delete_product: (state, action) => {
            const pid = action.payload
            const spduct = JSON.stringify(state.products)
            const newProduct = JSON.parse(spduct).filter(p => (p._id).toString() !== pid.toString())
            state.products = newProduct
        }
    },

    extraReducers: (builder) => {

        builder.addCase(add_product.pending, (state, action) => {
            state.status = null
            state.fetch = false
        })
        builder.addCase(add_product.fulfilled, (state, action) => {
            state.status = action.payload.status
            state.fetch = true
        })


        builder.addCase(get_product.pending, (state, action) => {
            state.getloading = true
            state.products = []
            state.status = null
            state.fetch = false
        })
        builder.addCase(get_product.fulfilled, (state, action) => {
            state.getloading = false
            state.products = action.payload.data.products
            state.status = action.payload.status
            state.fetch = true
        })


        builder.addCase(single_get_product.pending, (state, action) => {
            state.fetch = false
            state.singleProduct = null
        })
        builder.addCase(single_get_product.fulfilled, (state, action) => {
            state.fetch = true
            state.singleProduct = action.payload.data.product
        })

    }
})

export const { delete_product } = productReducer.actions

export default productReducer.reducer;