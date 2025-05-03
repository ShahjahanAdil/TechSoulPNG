import React, { useState, useRef } from 'react'
import { BiSearch, BiShield, BiUser } from 'react-icons/bi'
import { CgTrashEmpty } from 'react-icons/cg'
import { FaUsers } from 'react-icons/fa'
import { GrFilter } from 'react-icons/gr'
import { MdEdit } from 'react-icons/md'

export default function Users() {

    const [actionPos, setActionPos] = useState({ top: 0, left: 0 })
    const [showActions, setShowActions] = useState(false)
    const buttonRef = useRef(null)

    const handleActionClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const dropdownWidth = 220

        setActionPos({
            top: rect.bottom + window.scrollY + 8,
            left: rect.right + window.scrollX - dropdownWidth,
        })
        setShowActions(!showActions)
    }

    return (
        <div className='main-container relative'>
            <h3 className='flex gap-2 items-center'><FaUsers /> Users</h3>
            <p className='px-2 py-1 bg-[#f3e9fe] inline-block rounded-[8px] !text-[#9137e6] mt-2'>Manage users and their permissions</p>

            <div className='flex gap-5 justify-between mt-8'>
                <form className='relative'>
                    <input type="text" name="searchUser" id="searchUser" placeholder='Search users...' className='px-3 py-2 bg-white rounded-[12px] w-[100%] md:w-[250px]' />
                    <BiSearch className='absolute right-[10px] top-1 text-[#666] bg-white h-[90%]' />
                </form>
                <div>
                    <p className='flex gap-2 items-center border border-gray-200 bg-white px-[10px] py-[8px] rounded-[10px]'><GrFilter /> Filter</p>
                </div>
            </div>

            <div className="w-full overflow-visible mt-8 rounded-[12px]">
                <div className='overflow-x-auto rounded-[12px]'>
                    <table className="min-w-[600px] w-full text-sm text-left bg-white">
                        <thead className="text-xs uppercase bg-[#f3e9fe] text-[#9137e6] border-b border-gray-200">
                            <tr>
                                <th className="p-4 whitespace-nowrap">Username</th>
                                <th className="p-4 whitespace-nowrap">Email</th>
                                <th className="p-4 whitespace-nowrap">Role</th>
                                <th className="p-4 whitespace-nowrap">Subscription</th>
                                <th className="p-4 whitespace-nowrap">Registered Date</th>
                                <th className="p-4 whitespace-nowrap text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 text-[#333]">Shah Jahan</td>
                                <td className="p-4 text-[#333]">sj@gmail.com</td>
                                <td className="p-4 text-[#333]">Admin</td>
                                <td className="p-4 text-[#333]">Premium</td>
                                <td className="p-4 text-[#333]">2025-04-27</td>
                                <td className="relative p-4 text-[#333] text-end">
                                    <button
                                        ref={buttonRef}
                                        className='text-[18px] font-bold px-2 pb-2 rounded-[8px] hover:bg-[#e9d6fe]'
                                        onClick={handleActionClick}
                                    >
                                        ...
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 text-[#333]">Shah Jahan</td>
                                <td className="p-4 text-[#333]">sj@gmail.com</td>
                                <td className="p-4 text-[#333]">User</td>
                                <td className="p-4 text-[#333]">Free</td>
                                <td className="p-4 text-[#333]">2025-04-27</td>
                                <td className="relative p-4 text-[#333] text-end">
                                    <button
                                        ref={buttonRef}
                                        className='text-[18px] font-bold px-2 pb-2 rounded-[8px] hover:bg-[#e9d6fe]'
                                        onClick={handleActionClick}
                                    >
                                        ...
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {showActions && (
                <div
                    className='fixed flex flex-col gap-3 items-start w-[220px] min-h-[100px] p-3 bg-white rounded-[12px] shadow-md z-50'
                    style={{ top: `${actionPos.top}px`, left: `${actionPos.left}px` }}
                >
                    <button className='flex gap-2 items-center transition-all duration-150 ease-linear hover:text-gray-600'><BiShield /> Make Admin</button>
                    <button className='flex gap-2 items-center transition-all duration-150 ease-linear hover:text-gray-600'><BiUser /> Make Regular User</button>
                    <button className='flex gap-2 items-center transition-all duration-150 ease-linear text-blue-500 hover:text-blue-300'><MdEdit /> Edit User</button>
                    <button className='flex gap-2 items-center transition-all duration-150 ease-linear text-red-500 hover:text-red-300'><CgTrashEmpty /> Delete User</button>
                </div>
            )}
        </div>
    )
}