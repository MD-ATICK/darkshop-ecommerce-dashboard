import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reducers/authReducers';
import categoryReducer from "./reducers/CategoryReducers";
import productReducer from "./reducers/ProductReducers";
import messageChatReducer from "./reducers/MessageChatReducers";



const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        product: productReducer,
        messageChat: messageChatReducer,
    }
})

export default store;