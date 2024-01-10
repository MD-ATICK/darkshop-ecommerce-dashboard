import { Route, Routes } from "react-router-dom"
import Login from "../auth/Login"
import Home from "../pages/Home"
import Register from "../auth/Register"
import AdminLogin from "../auth/AdminLogin"
import AdminDashboard from "../admin/AdminDashboard"
import AdminOrders from "../admin/AdminOrders"
import AdminCategory from "../admin/AdminCategory"
import AdminSellers from "../admin/AdminSellers"
import AdminPaymentRequest from "../admin/AdminPaymentRequest"
import AdmindeactiveSellers from "../admin/AdminDerectiveSellers"
import AdminSellerRequest from "../admin/AdminSellerRequest"
import AdminChatSeller from "../admin/AdminChatSeller"
import Admin_SellerDetails from "../admin/Admin_SellerDetails"
import Admin_OrderDetails from "../admin/Admin_OrderDetails"
import SellerDashboard from "../seller/SellerDashhboard"
import SellerAddProduct from "../seller/SellerAddProduct"
import SellerAllProducts from "../seller/SellerAllProducts"
import SellerDiscountProduct from "../seller/SellerDiscountProduct"
import SellerOrders from "../seller/SellerOrders"
import SellerPayment from "../seller/SellerPayment"
import SellerChatCustomer from "../seller/SellerChatCustomer"
import SellerProfile from "../seller/SellerProfile"
import SellerSupportChat from "../seller/SellerSupportChat"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import AccountPending from "../pages/AccountPending"
import UnAuthorized from "../pages/UnAuthorized"
import AccountDeactive from "../pages/AccountDeactive"
import SellerEditProduct from "../seller/SellerEditProduct"
import SellerProfileEdit from "../seller/SellerProfileEdit"
import SeparateCostomerChat from "../seller/SeparateCostomerChat"




const AllRouters = ({ socket }) => {
    return (
        socket &&
        <>
            <Routes>
                {/* Both Routes */}
                <Route path="/" element={<Home />} />

                {/* Seller Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin Routes */}
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />

                <Route path="/admin/dashboard" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdminDashboard />
                </ProtectedRoute>} />

                <Route path="/admin/order" element={<ProtectedRoute access={{ role: 'admin' }} >
                    <AdminOrders />
                </ProtectedRoute>} />

                <Route path="/admin/order/details" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <Admin_OrderDetails />
                </ProtectedRoute>} />

                <Route path="/admin/category" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdminCategory />
                </ProtectedRoute>} />

                <Route path="/admin/seller" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdminSellers />
                </ProtectedRoute>} />

                <Route path="/admin/seller/details/:id" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <Admin_SellerDetails />
                </ProtectedRoute>} />

                <Route path="/admin/payment-request" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdminPaymentRequest />
                </ProtectedRoute>} />

                <Route path="/admin/deactive-sellers" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdmindeactiveSellers />
                </ProtectedRoute>} />

                <Route path="/admin/seller-request" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdminSellerRequest />
                </ProtectedRoute>} />

                <Route path="/admin/chat-seller" element={<ProtectedRoute access={{ role: 'admin' }}>
                    <AdminChatSeller />
                </ProtectedRoute>} />



                {/* Seller Routes */}
                {/* Seller Routes */}
                <Route path="/seller/dashboard" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }} >
                    <SellerDashboard />
                </ProtectedRoute>} />

                <Route path="/seller/add-product" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerAddProduct />
                </ProtectedRoute>} />

                <Route path="/seller/edit-product/:id" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerEditProduct />
                </ProtectedRoute>} />

                <Route path="/seller/all-products" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerAllProducts />
                </ProtectedRoute>} />

                <Route path="/seller/discount-product" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerDiscountProduct />
                </ProtectedRoute>} />

                <Route path="/seller/order" element={<ProtectedRoute access={{ role: 'seller', visibility: ['active', 'deactive'] }}>
                    <SellerOrders />
                </ProtectedRoute>} />
                {/* aikane order details page ta ante hobe */}

                <Route path="/seller/payment" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerPayment />
                </ProtectedRoute>} />

                <Route path="/seller/chat-customer" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerChatCustomer socket={socket} />
                </ProtectedRoute>} />
                <Route path="/seller/chat-customer/:_id" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SeparateCostomerChat socket={socket} />
                </ProtectedRoute>} />

                {/* cchat customer single route by Id */}

                <Route path="/seller/chat-support" element={<ProtectedRoute access={{ role: 'seller', visibility: ['active', 'deactive', 'pending'] }}>
                    <SellerSupportChat />
                </ProtectedRoute>} />

                <Route path="/seller/profile" element={<ProtectedRoute access={{ role: 'seller', status: 'active' }}>
                    <SellerProfile />
                </ProtectedRoute>} />
                <Route path="/seller/edit-profile/:userid" element={<ProtectedRoute access={{ role: 'seller', visibility: ['active', 'deactive', 'pending'] }}>
                    <SellerProfileEdit />
                </ProtectedRoute>} />


                {/* others */}
                <Route path="/seller/account-pending" element={<AccountPending />} />
                <Route path="/seller/account-deactive" element={<AccountDeactive />} />
                <Route path="/unauthorized" element={<UnAuthorized />} />

            </Routes>
        </>
    )
}

export default AllRouters;