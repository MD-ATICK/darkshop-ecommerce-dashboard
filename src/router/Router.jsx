import { Route, Routes } from "react-router-dom"
import Login from "../views/auth/Login"
import Home from "../views/pages/Home"
import Register from "../views/auth/Register"
import AdminLogin from "../views/auth/AdminLogin"
import AdminDashboard from "../views/admin/AdminDashboard"
import AdminOrders from "../views/admin/AdminOrders"
import AdminCategory from "../views/admin/AdminCategory"
import AdminSellers from "../views/admin/AdminSellers"
import AdminPaymentRequest from "../views/admin/AdminPaymentRequest"
import AdmindeactiveSellers from "../views/admin/AdminDerectiveSellers"
import AdminSellerRequest from "../views/admin/AdminSellerRequest"
import AdminChatSeller from "../views/admin/AdminChatSeller"
import Admin_SellerDetails from "../views/admin/Admin_SellerDetails"
import Admin_OrderDetails from "../views/admin/Admin_OrderDetails"
import SellerDashboard from "../views/seller/SellerDashhboard"
import SellerAddProduct from "../views/seller/SellerAddProduct"
import SellerAllProducts from "../views/seller/SellerAllProducts"
import SellerDiscountProduct from "../views/seller/SellerDiscountProduct"
import SellerOrders from "../views/seller/SellerOrders"
import SellerPayment from "../views/seller/SellerPayment"
import SellerChatCustomer from "../views/seller/SellerChatCustomer"
import SellerProfile from "../views/seller/SellerProfile"
import SellerSupportChat from "../views/seller/SellerSupportChat"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import AccountPending from "../views/pages/AccountPending"
import UnAuthorized from "../views/pages/UnAuthorized"
import AccountDeactive from "../views/pages/AccountDeactive"
import SellerEditProduct from "../views/seller/SellerEditProduct"
import SellerProfileEdit from "../views/seller/SellerProfileEdit"




const AllRouters = () => {
    return (
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
                    <SellerChatCustomer />
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