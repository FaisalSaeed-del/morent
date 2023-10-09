import React from 'react'
import Car_one from "../assets/images/car-one.png"
import Car_two from "../assets/images/car-two.png"

const AddSection = () => {
  return (
    <div className='bg-[#F6F7F9]  pt-16'>
        <div className='container '>
            
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
                <div className='background_left'>
                <div className=' flex flex-col gap-6 items-start py-6 px-6'>
                <h2 className='text-[#FFF] text-[32px] font-semibold tracking-[-0.96px] max-w-[272px]'>The Best Platform for Car Rental</h2>
                <span className='text-[#FFF] text-base font-medium max-w-[284px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</span>
                <button className='text-base font-semibold text-[#FFF] bg-primary py-2 px-6 rounded-[4px]'>Rental Car</button>
                </div>
                <img className='flex m-auto pb-4' src={Car_one} alt="" />
                </div>
                <div className='background_right hidden md:block'>
                <div className=' flex flex-col gap-6 items-start py-6 px-6'>
                <h2 className='text-[#FFF] text-[32px] font-semibold tracking-[-0.96px] max-w-[272px]'>Easy way to rent a car at a low price</h2>
                <span className='text-[#FFF] text-base font-medium max-w-[284px]'>Providing cheap car rental services and safe and comfortable facilities.</span>
                <button className='text-base font-semibold text-[#FFF] bg-[#54A6FF] py-2 px-6 rounded-[4px]'>Rental Car</button>
                </div>
                <img className='flex m-auto pb-4' src={Car_two} alt="" />
                </div>
              

            </div>

        </div>

    </div>
  )
}

export default AddSection