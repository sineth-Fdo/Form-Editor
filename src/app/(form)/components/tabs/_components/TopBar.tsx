import React from 'react'
import { RiBox3Fill } from "react-icons/ri";
import { RiSettings4Fill } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className=' w-[100%] h-14 flex'>
    <div className=' w-[90%] flex justify-start items-center'>
        <div className=' flex justify-center items-center group cursor-pointer'>
                <span className='text-[12px] mr-1 group-hover:text-blue-500 transition-colors duration-200'><RiBox3Fill /></span>
                <h3 className='text-[12px] text-[#00000081] group-hover:text-blue-500 transition-colors duration-200 '>Dashboard</h3>
        </div>
        <div className=' w-[90px] flex justify-start items-start ml-2'>
                <h3 className='text-[12px] text-[#00000081]'> &gt; My Form</h3>
        </div>
        
    </div>
    <div className=' w-[20%] flex justify-end items-center'>
        <RiSettings4Fill 
            className='text-[18px] text-[#000000] cursor-pointer'
        />
    </div>
</div>
  )
}

export default TopBar