import React from 'react'

const GetStarted = () => {
  return (
<section>
      <div className="container relative">
          <div className='bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col w-[865px] min-h-[275px] max-w-full text-white text-center p-[30px]'>
            <h3 className='text-[25px] md:text-[35px] font-semibold mb-[15px]'>Get early access today</h3>
            <p className='w-[620px] max-w-full mx-auto mb-[30px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa error fugiat! Omnis ab tempore repudiandae cumque.
            </p>
            <form className='flex w-full justify-between items-center flex-wrap md:px-[60px] gap-[30px]'>
              <input type="email" placeholder='email@example.com' className='w-full md:flex-1 h-[50px]  pl-[30px] rounded-[30px] outline-none border-none text-sm text-black font-medium' />
              <button className='w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] rounded-[30px] transition-all duration-200' type='submit'>Get started for free</button>
            </form>
          </div>
      </div>
    </section>
  )
}

export default GetStarted