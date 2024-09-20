import React from 'react';
import BigPreview from './tabs/_components/BigPreview';
import SmallPreview from './tabs/_components/SmallPreview';

const RightPreview = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#ffffff] flex justify-center items-center'>
      <div className='w-[98%] h-[98%] bg-[#000] rounded-2xl flex justify-center items-center'>
          <BigPreview />
          {/* <SmallPreview /> */}
      </div>
    </div>
  );
};

export default RightPreview;
