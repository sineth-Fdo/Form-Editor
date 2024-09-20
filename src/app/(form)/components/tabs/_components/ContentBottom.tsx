'use client';
import React from 'react';
import { FaCloud } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';

interface IContentProps {
  name?: string;
  icons?: string;
  onClick?: () => void;
}

const ContentBottom = (props: IContentProps) => {
  const {
    name = 'Save & Publish',
    icons = 'NO',
    onClick
  } = props;

  return (
    <button
      className={`relative w-[47%] h-10 flex justify-around ${
        name === 'Delete' ? 'px-8' : 'px-3'
      } items-center ${name === 'Delete' || name === 'Discard' ? 'bg-[#ffffff]' : 'bg-[#000000]'} rounded-md mb-3 ${
        name === 'Delete' || name === 'Discard' ? 'hover:bg-[#ffbcdc6c]' : 'hover:bg-[#000000bb]'
      } cursor-pointer`}

      onClick={onClick}
    >
      {icons !== 'NO' && (
        name === 'Delete' || name === 'Discard' ? (
          <span>
            <BiTrash className="text-[#f94444]" />
          </span>
        ) : (
          <span>
            <FaCloud className="text-[#fff]" />
          </span>
        )
      )}
      <h1 className={`text-[12px] ${name === 'Delete' || name === 'Discard' ? 'text-[#f94444]' : 'text-[#ffffff]'}`}>
        {name}
      </h1>
    </button>
  );
};

export default ContentBottom;
