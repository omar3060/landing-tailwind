import React from 'react'

const FeatureBox = ({icon, title, desc}) => {
  return (
    <div className='element-center flex-col text-center text-white'>
      <img src={`/images/${icon}`} alt="icon-img" className='w-[80px] h-[80px] object-contain' />
      <h4 className='font-semibold text-xl mt-5 mb-2'>{title}</h4>
      <p className='font-normal text-sm w-[300px] md:w-[300px]'>{desc}</p>
    </div>
  )
}

export default FeatureBox