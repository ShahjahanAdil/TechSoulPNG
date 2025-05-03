import React from 'react'
import './dashboard.css'
import dummy from '../../../assets/images/dummy.jpg'
import user from '../../../assets/images/user.png'
import { GrAnalytics, GrDownload } from 'react-icons/gr'
import { IoImages } from 'react-icons/io5'
import { FaArrowUp, FaDollarSign } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { MdHistory } from 'react-icons/md'

export default function Dashboard() {
    return (
        <div className='main-container'>
            <h3 className='flex gap-2 items-center'><GrAnalytics />Dashboard</h3>
            <p className='px-2 py-1 bg-[#f3e9fe] inline-block rounded-[8px] !text-[#9137e6] mt-2'>Overview of your stock images platform</p>

            <div className='dashboard-boxes'>
                <div className="dashboard-box">
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='!text-[14px]'>Total Images</p>
                            <h4>12,354</h4>
                        </div>
                        <IoImages className='bg-[#f3e9fe] text-[#9137e6] w-10 h-10 p-3 rounded-full' />
                    </div>
                    <p className='mt-4 flex gap-2 items-center !text-[#32c345] !text-[13px]'><FaArrowUp /> 12% from last month</p>
                </div>
                <div className="dashboard-box">
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='!text-[14px]'>Active Users</p>
                            <h4>8,172</h4>
                        </div>
                        <FaUsers className='bg-[#e9f5fe] text-[#378ce6] w-10 h-10 p-3 rounded-full' />
                    </div>
                    <p className='mt-4 flex gap-2 items-center !text-[#32c345] !text-[13px]'><FaArrowUp /> 12% from last month</p>
                </div>
                <div className="dashboard-box">
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='!text-[14px]'>Premium Downloads</p>
                            <h4>1,245</h4>
                        </div>
                        <GrDownload className='bg-[#fbf6e1df] text-[#e6af37] w-10 h-10 p-3 rounded-full' />
                    </div>
                    <p className='mt-4 flex gap-2 items-center !text-[#32c345] !text-[13px]'><FaArrowUp /> 12% from last month</p>
                </div>
                <div className="dashboard-box">
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='!text-[14px]'>Revenue</p>
                            <h4>$3,545</h4>
                        </div>
                        <FaDollarSign className='bg-[#e2f9e2b4] text-[#5de637] w-10 h-10 p-3 rounded-full' />
                    </div>
                    <p className='mt-4 flex gap-2 items-center !text-[#32c345] !text-[13px]'><FaArrowUp /> 12% from last month</p>
                </div>
            </div>

            <div className='dashboard-analytics'>
                <div className='analytics-box'>
                    <h6 className='flex gap-2 items-center'>Recent Uploads <MdHistory /></h6>
                    <p>Latest images  uploaded to platform</p>
                    <div className='flex flex-col gap-6 mt-6'>
                        <div className='flex gap-5 items-center'>
                            <img src={dummy} alt="dummy" className='w-[50px] h-[50px] rounded-full' />
                            <div>
                                <p className='font-bold !text-[#333]'>Mountain Landscape 1</p>
                                <p className='!text-[13px] !text-[#888]'>Uploaded on 10/10/25</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src={dummy} alt="dummy" className='w-[50px] h-[50px] rounded-full' />
                            <div>
                                <p className='font-bold !text-[#333]'>Mountain Landscape 2</p>
                                <p className='!text-[13px] !text-[#888]'>Uploaded on 10/10/25</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src={dummy} alt="dummy" className='w-[50px] h-[50px] rounded-full' />
                            <div>
                                <p className='font-bold !text-[#333]'>Mountain Landscape 3</p>
                                <p className='!text-[13px] !text-[#888]'>Uploaded on 10/10/25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='analytics-box'>
                    <h6 className='flex gap-2 items-center'>Top Users <FaUsers /></h6>
                    <p>Users with most contribution</p>
                    <div className='flex flex-col gap-6 mt-6'>
                        <div className='flex gap-5 items-center'>
                            <img src={user} alt="user" className='w-[50px] h-[50px] rounded-full bg-[#f3e9fe] p-2' />
                            <div className='user-analytics-div flex gap-5 items-center justify-between flex-1'>
                                <div>
                                    <p className='font-bold !text-[#333]'>Username 1</p>
                                    <p className='!text-[13px] !text-[#888]'>40 uploads</p>
                                </div>
                                <p className='font-bold !text-[13px] !text-[#333]'>250 downloads</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src={user} alt="user" className='w-[50px] h-[50px] rounded-full bg-[#f3e9fe] p-2' />
                            <div className='user-analytics-div flex gap-5 items-center justify-between flex-1'>
                                <div>
                                    <p className='font-bold !text-[#333]'>Username 2</p>
                                    <p className='!text-[13px] !text-[#888]'>30 uploads</p>
                                </div>
                                <p className='font-bold !text-[13px] !text-[#333]'>200 downloads</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <img src={user} alt="user" className='w-[50px] h-[50px] rounded-full bg-[#f3e9fe] p-2' />
                            <div className='user-analytics-div flex gap-5 items-center justify-between flex-1'>
                                <div>
                                    <p className='font-bold !text-[#333]'>Username 3</p>
                                    <p className='!text-[13px] !text-[#888]'>25 uploads</p>
                                </div>
                                <p className='font-bold !text-[13px] !text-[#333]'>150 downloads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}