import api from "../../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const nijerChatsFetch = createAsyncThunk('messageChat/nijerChatsFetch', async () => {
    const token = localStorage.getItem('ds-token')
    const { data, status } = await api.get('/v6/chat/one-customer-all-chats?person=seller', { headers: { Authorization: `Bearer ${token}` } })
    if (status === 200) {
        return data.chats;
    }
})
export const messagesFetch = createAsyncThunk('messageChat/messagesFetch', async (chatid) => {
    const token = localStorage.getItem('ds-token')
    const { data, status } = await api.get(`/v7/message/one-chat-all-messages/${chatid}`, { headers: { Authorization: `Bearer ${token}` } })
    if (status === 200) {
        return data.messages;
    }
})

const messageChatSlice = createSlice({
    name: 'messageChat',
    initialState: {
        nijerChats: '',
        chatFetch: false,
        messages: [],
        messageFetch: false,
        latestMessage: '',
    },
    reducers: {
        new_message: (state, action) => {
            state.messages = [...state.messages, action.payload]
            state.latestMessage = action.payload
        },
        correct_id: (state, action) => {
            state.messages.find(cm => cm._id === action.payload.oId)._id = action.payload.nId
            state.messages = state.messages
        }
    },
    extraReducers: (builder) => {
        builder.addCase(nijerChatsFetch.pending, (state, action) => {
            state.chatFetch = false
            state.nijerChats = []
        })
        builder.addCase(nijerChatsFetch.fulfilled, (state, action) => {
            state.chatFetch = true
            state.nijerChats = action.payload
        })


        builder.addCase(messagesFetch.pending, (state, action) => {
            state.messageFetch = false
            state.messages = []
        })
        builder.addCase(messagesFetch.fulfilled, (state, action) => {
            state.messageFetch = true
            state.messages = action.payload
        })
    }
})

export const { new_message, load_reducer, correct_id } = messageChatSlice.actions;
export default messageChatSlice.reducer;