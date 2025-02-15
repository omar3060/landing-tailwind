import React from 'react'

const TestimonialBox = ({name, image, desc, position}) => {
  return (
    <div className='bg-[#21293C] p-[30px] pt-[40px] text-white rounded-[5px] shadow-[8px_8px_1px_8px_#1c202c] basis-full md:basis-[40%] lg:basis-[30%] '>
      <p className='text-sm font-normal tracking-[0.8px]'>{desc}</p>
       <div className='mt-[30px] flex gap-4'>
        <img src={`/src/assets/images/${image}`} alt="profile image" className='w-[50px] h-[50px] rounded-full object-contain'/>
        <div>
          {/* here we put block class cause strong is inline element does not respect margin so if we don't put block class margin ain't work in such a case */}
          <strong className='block mb-[5px]'>{name}</strong>
          <p className='text-sm font-normal'>{position}</p>
        </div>
       </div>
    </div>
  )
}

export default TestimonialBox