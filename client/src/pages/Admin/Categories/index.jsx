import React, { useState } from 'react'
import './categories.css'
import { FiPlus } from 'react-icons/fi'
import { TbCategory2 } from 'react-icons/tb'
import { CgEditExposure, CgTrashEmpty } from 'react-icons/cg'
import { BiInfoCircle } from 'react-icons/bi'
import { MdEdit } from 'react-icons/md'

const categories = [
    {
        category: "nature",
        subcategory: ["mountains", "lakes", "rivers"]
    },
    {
        category: "technology",
        subcategory: ["computer", "laptop"]
    },
]

export default function Categories() {

    const [openModel, setOpenModel] = useState(false)
    const [openCatModel, setOpenCatModel] = useState(false)
    const [openSubCatModel, setOpenSubCatModel] = useState(false)

    return (
        <div className='main-container'>
            <div className='categories-top flex gap-5 justify-between items-center'>
                <div>
                    <h3 className='flex gap-2 items-center'><TbCategory2 /> Categories</h3>
                    <p className='px-2 py-1 bg-[#f3e9fe] inline-block rounded-[8px] !text-[#9137e6] mt-2'>Manage categories of images</p>
                </div>
                <button className='flex gap-2 items-center bg-[#9137e6] text-[#faf5ff] px-[20px] py-[8px] rounded-[12px] transition-all duration-200 ease-in hover:bg-[#ab62f4]'
                    onClick={() => setOpenModel(true)}
                >
                    Add New Category <FiPlus />
                </button>
            </div>

            <div className='categories-container'>
                {
                    categories.map((cat, i) => {
                        return (
                            <div key={i} className='category-box'>
                                <div>
                                    <p className='font-bold capitalize !text-[#333]'>{i + 1}. {cat.category}</p>
                                    <div className="flex flex-wrap justify-start gap-2 mt-2">
                                        {cat.subcategory.map((sub, j) => (
                                            <span
                                                key={j}
                                                className="px-3 py-1 bg-[#f3e9fe] text-[#9137e6] !text-[12px] text-sm rounded-full capitalize"
                                            >
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex justify-end gap-5 mt-5'>
                                    <CgEditExposure className='text-[16px] text-blue-500 cursor-pointer' onClick={() => setOpenSubCatModel(true)} />
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' onClick={() => setOpenCatModel(true)} />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={`category-model absolute top-0 left-0 bg-[#9393931c] w-full h-full z-100 ${openModel ? 'category-model-open opacity-100' : 'category-model-close opacity-50'}`}>
                <div className={`category-model-box w-[500px] bg-white p-5 rounded-[12px] transition-all duration-200 ease-linear ${openModel ? 'scale-100' : 'scale-75'}`}>
                    <p className='font-bold !text-[#333] flex gap-1 items-center'><BiInfoCircle /> Add New Category</p>
                    <p className='mb-4'>Create a new category for organizing images</p>
                    <input type="text" name="category" id="category" placeholder='Enter category to add' className='w-full px-3 py-2 bg-white rounded-[12px]' />
                    <div className='flex gap-3 justify-end mt-6'>
                        <button className='px-[20px] py-[8px] bg-[#ddd] rounded-[10px] transition-all duration-200 ease-in hover:bg-[#d2d2d2]'
                            onClick={() => setOpenModel(false)}
                        >
                            Cancel
                        </button>
                        <button className='px-[20px] py-[8px] text-[#faf5ff] bg-[#9137e6] rounded-[10px] flex gap-2 items-center transition-all duration-200 ease-in hover:bg-[#ab62f4]'>Create category</button>
                    </div>
                </div>
            </div>

            <div className={`category-model absolute top-0 left-0 bg-[#9393931c] w-full h-full z-100 ${openSubCatModel ? 'category-model-open opacity-100' : 'category-model-close opacity-50'}`}>
                <div className={`category-model-box w-[500px] bg-white p-5 rounded-[12px] transition-all duration-200 ease-linear ${openSubCatModel ? 'scale-100' : 'scale-75'}`}>
                    <p className='font-bold !text-[#333] mb-5 flex gap-1 items-center'><BiInfoCircle /> Add New Subcategory</p>
                    <input type="text" name="category" id="category" placeholder='Enter subcategory to add' className='w-full px-3 py-2 bg-white rounded-[12px]' />
                    <div className='flex gap-3 justify-end mt-6'>
                        <button className='px-[20px] py-[8px] bg-[#ddd] rounded-[10px] transition-all duration-200 ease-in hover:bg-[#d2d2d2]'
                            onClick={() => setOpenSubCatModel(false)}
                        >
                            Cancel
                        </button>
                        <button className='px-[20px] py-[8px] text-[#faf5ff] bg-[#9137e6] rounded-[10px] flex gap-2 items-center transition-all duration-200 ease-in hover:bg-[#ab62f4]'>Add subcategory</button>
                    </div>

                    <div>
                        <p className='font-bold !text-[#333] mb-5 flex gap-1 items-center mt-8'><BiInfoCircle /> Manage Subcategories</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between bg-[#f3e9fe] p-2 rounded-[12px]'>
                                <li className='text-[#9137e6]'>Montains</li>
                                <div className='flex gap-2 items-center'>
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex justify-between bg-[#f3e9fe] p-2 rounded-[12px]'>
                                <li className='text-[#9137e6]'>Lakes</li>
                                <div className='flex gap-2 items-center'>
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex justify-between bg-[#f3e9fe] p-2 rounded-[12px]'>
                                <li className='text-[#9137e6]'>Rivers</li>
                                <div className='flex gap-2 items-center'>
                                    <MdEdit className='text-[16px] text-blue-500 cursor-pointer' />
                                    <CgTrashEmpty className='text-[16px] text-red-500 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`category-model absolute top-0 left-0 bg-[#9393931c] w-full h-full z-100 ${openCatModel ? 'category-model-open opacity-100' : 'category-model-close opacity-50'}`}>
                <div className={`category-model-box w-[500px] bg-white p-5 rounded-[12px] transition-all duration-200 ease-linear ${openCatModel ? 'scale-100' : 'scale-75'}`}>
                    <p className='font-bold !text-[#333] mb-5 flex gap-1 items-center'><BiInfoCircle /> Update Category</p>
                    <input type="text" name="category" id="category" placeholder='Enter category to update' className='w-full px-3 py-2 bg-white rounded-[12px]' />
                    <div className='flex gap-3 justify-end mt-6'>
                        <button className='px-[20px] py-[8px] bg-[#ddd] rounded-[10px] transition-all duration-200 ease-in hover:bg-[#d2d2d2]'
                            onClick={() => setOpenCatModel(false)}
                        >
                            Cancel
                        </button>
                        <button className='px-[20px] py-[8px] text-[#faf5ff] bg-[#9137e6] rounded-[10px] flex gap-2 items-center transition-all duration-200 ease-in hover:bg-[#ab62f4]'>Update category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}