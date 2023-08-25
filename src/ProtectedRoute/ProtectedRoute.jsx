

import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute({ access, children }) {

    // access : { role , status || visibility}

    const { data, loading, fetch } = useSelector(state => state.auth)

    if (!loading && data && data.user) {
        if (data.user && data.user.role === access.role) {

            if (access.status) {
                // status deoya takle
                if (access.status === data.user.status) {
                    return children
                } else if (data.user.status === 'pending') {
                    return <Navigate to={'/seller/account-pending'} replace={true} />
                } else {
                    return <Navigate to={'/seller/account-deactive'} replace={true} />
                }

            } else {
                // visibility takle ja hobe
                if (access.visibility) {
                    if (access.visibility.find(r => r === data.user.status)) { // some or find equeal.
                        return children;
                    } else {
                        return <Navigate to={'/seller/account-pending'} replace={true} />
                    }
                } else {
                    return children; // extra
                }
            }

        } else {
            // login kore o jodi seller hoye admin access korte cai
            return <Navigate to={'/unauthorized'} replace={true} />
        }

    } else if (fetch === true) {
        // login na korle
        return <Navigate to={'/login'} replace={true} />
    }

}

export default ProtectedRoute