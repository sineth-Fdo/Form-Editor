'use client';
import LeftPreview from './components/LeftPreview'
import RightPreview from './components/RightPreview'

const FormEditor = () => {

  return (
    <div className='w-screen h-[100%] flex '>
        <LeftPreview />
        <RightPreview/>
    </div>
  )
}

export default FormEditor
