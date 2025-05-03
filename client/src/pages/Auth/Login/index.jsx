import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader'
import axios from 'axios'
import { useAuthContext } from '../../../contexts/AuthContext'

const initialState = { email: "", password: "" }

export default function Login() {

    const { dispatch } = useAuthContext()
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleLogin = async (e) => {
        e.preventDefault()

        const { email, password } = state
        if (!email || !password) { return window.toastify("Please fill all fields", "warning") }

        setLoading(true)
        await axios.post(`${import.meta.env.VITE_HOST}/auth/login`, { email, password })
            .then(res => {
                const { status, data } = res
                if (status === 200) {
                    setState(initialState)
                    localStorage.setItem("pngjwt", data.token)
                    dispatch({ type: "SET_LOGGED_IN", payload: { user: data.user } })
                    navigate("/")
                }
            })
            .catch(err => {
                console.error('Frontend POST error', err.message)

                if (err.response) {
                    const { status, data } = err.response
                    if (status === 401) {
                        return window.toastify(data.message, "info")
                    }
                    return window.toastify(data?.message || "Login failed", "error")
                }

                window.toastify("Network error. Please try again later.", "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="auth-container w-full h-screen p-5 flex flex-col justify-center items-center bg-[#f8f8f8]">
            <div className="auth-box w-full max-w-[450px] min-h-[300px] rounded-[5px] p-5 sm:p-8 bg-white">
                <form onSubmit={handleLogin}>
                    {/* <div className='flex items-center justify-center mb-5'>
                        <img src={logo} alt="logo" className='w-[175px] sm:w-[200px]' />
                    </div> */}

                    <h2 className='!text-[22px] sm:!text-[26px] font-bold'>Login Account</h2>
                    <p className='mb-5'>Login to continue your session</p>

                    <div>
                        <label htmlFor="email" className='font-bold mb-2 inline-block'>Email:</label>
                        <input type="text" name="email" id="email" placeholder='johnpaul@gmail.com' className='w-full px-[10px] py-[8px] rounded-[5px] mb-4'
                            value={state.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password" className='font-bold mb-2 inline-block'>Password:</label>
                        <input type="password" name="password" id="password" placeholder='Enter password' className='w-full px-[10px] py-[8px] rounded-[5px] mb-4'
                            value={state.password} onChange={handleChange} />
                    </div>

                    <button className='bg-[#9137e6] cursor-pointer w-full px-[10px] py-[8px] rounded-[5px] mt-5' onClick={handleLogin}>Login</button>

                    <p className='mt-5'>Don't have an account? <Link to='/auth/signup' className='text-[#9137e6] font-bold hover:underline'>Signup now</Link></p>
                </form>
            </div>
        </div>
    )
}