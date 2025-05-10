import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuthContext } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function Home() {
    const { user, logout } = useAuth0()
    const { userData, handleLogout } = useAuthContext()

    const logoutFunctions = () => {
        if (!user) {
            return handleLogout()
        }
        logout()
        handleLogout()
    }

    return (
        <div className='p-10'>
            <div>Home</div>
            {
                user || userData.userID && <button className='bg-blue-300' onClick={logoutFunctions}>Logout</button>
            }
            {
                userData?.role?.includes("admin") && <Link to="/admin/dashboard" className='link bg-[#666] text-[#fff] p-2 rounded-[8px] mt-5'>Admin Panel</Link>
            }
        </div>
    )
}