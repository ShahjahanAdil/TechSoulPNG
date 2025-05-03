import React from 'react'
import './images.css'
import dummy from '../../../assets/images/dummy.jpg'
import { IoImages } from 'react-icons/io5'
import { FiUpload } from 'react-icons/fi'
import { GrFilter } from 'react-icons/gr'
import { MdEdit } from 'react-icons/md'
import { CgTrashEmpty } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

export default function Images() {

    const navigate = useNavigate()

    return (
        <div className='main-container'>
            <div className='images-top flex gap-5 justify-between items-center'>
                <div>
                    <h3 className='flex gap-2 items-center'><IoImages /> Images</h3>
                    <p className='px-2 py-1 bg-[#f3e9fe] inline-block rounded-[8px] !text-[#9137e6] mt-2'>Manage your images stock</p>
                </div>
                <button className='flex gap-2 items-center bg-[#9137e6] text-[#faf5ff] px-[20px] py-[8px] rounded-[12px] transition-all duration-200 ease-in hover:bg-[#ab62f4]' onClick={() => navigate('/admin/upload')}>
                    Upload New Image <FiUpload />
                </button>
            </div>

            <div className='flex gap-5 justify-between mt-8'>
                <form className='relative'>
                    <input type="text" name="searchImage" id="searchImage" placeholder='Search images...' className='px-3 py-2 bg-white rounded-[12px] w-[100%] md:w-[250px]' />
                    <BiSearch className='absolute right-[10px] top-1 text-[#666] bg-white h-[90%]' />
                </form>
                <div>
                    <p className='flex gap-2 items-center border border-gray-200 bg-white px-[10px] py-[8px] rounded-[10px]'><GrFilter /> Filter</p>
                </div>
            </div>

            <div className="w-full overflow-x-auto mt-8 rounded-[12px]">
                <table className="min-w-[600px] w-full text-sm text-left bg-white">
                    <thead className="text-xs uppercase bg-[#f3e9fe] text-[#9137e6] border-b border-gray-200">
                        <tr>
                            <th className="p-4 whitespace-nowrap">Image</th>
                            <th className="p-4 whitespace-nowrap">Title</th>
                            <th className="p-4 whitespace-nowrap">Category</th>
                            <th className="p-4 whitespace-nowrap">Licensing</th>
                            <th className="p-4 whitespace-nowrap">Status</th>
                            <th className="p-4 whitespace-nowrap">Upload Date</th>
                            <th className="p-4 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-4 text-[#333]">
                                <img src={dummy} alt="dummy" className='w-[40px] h-[40px] rounded-full' />
                            </td>
                            <td className="p-4 text-[#333]">Apple MacBook Pro 17"</td>
                            <td className="p-4 text-[#333]">Electronic</td>
                            <td className="p-4 text-[#333]">Free</td>
                            <td className="p-4 text-[#333]">Published</td>
                            <td className="p-4 text-[#333]">2025-04-27</td>
                            <td className="p-4 text-[#333]">
                                <div className='flex gap-3 items-center'>
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-4 text-[#333]">
                                <img src={dummy} alt="dummy" className='w-[40px] h-[40px] rounded-full' />
                            </td>
                            <td className="p-4 text-[#333]">Samsung S25 Ultra</td>
                            <td className="p-4 text-[#333]">Mobiles</td>
                            <td className="p-4 text-[#333]">Premium</td>
                            <td className="p-4 text-[#333]">Pending</td>
                            <td className="p-4 text-[#333]">2025-04-27</td>
                            <td className="p-4 text-[#333]">
                                <div className='flex gap-3 items-center'>
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-4 text-[#333]">
                                <img src={dummy} alt="dummy" className='w-[40px] h-[40px] rounded-full' />
                            </td>
                            <td className="p-4 text-[#333]">Landscape</td>
                            <td className="p-4 text-[#333]">Nature</td>
                            <td className="p-4 text-[#333]">Premium</td>
                            <td className="p-4 text-[#333]">Published</td>
                            <td className="p-4 text-[#333]">2025-04-27</td>
                            <td className="p-4 text-[#333]">
                                <div className='flex gap-3 items-center'>
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}