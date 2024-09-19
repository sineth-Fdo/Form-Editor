'use client';
import React from 'react'
import { FaCloud } from 'react-icons/fa'
import { BiTrash } from "react-icons/bi";

interface IContentProps {
    name?: string;
    
}

const ContentBottom = (props : IContentProps) => {

    const {
        name = 'Save & Publish',
    } = props;
    
  return (
    <button className={`relative w-[47%] h-10 flex justify-around ${name === "Delete" ? 'px-8' : 'px-3'} items-center ${name === "Delete" ? 'bg-[#ffffff]' : 'bg-[#000000]'}  rounded-md mb-3 ${name === "Delete" ? 'hover:bg-[#ffbcdc6c]' : 'hover:bg-[#000000bb]'} cursor-pointer`}>
            {
                name === 'Delete' ? <span><BiTrash className="text-[#f94444]"/></span> : (
                    <span><FaCloud className="text-[#fff]"/></span>
                )
            }
            
            <h1 className={`text-[12px] ${name === "Delete" ? 'text-[#f94444]' : 'text-[#ffffff]'}`}>{name}</h1>
    </button>
  )
}

export default ContentBottom