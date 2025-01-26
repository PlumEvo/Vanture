import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium culpa mollitia amet enim dolorem aspernatur velit ut a deleniti accusamus perspiciatis fugit saepe provident vero dolorum, porro hic omnis accusantium magnam!
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Get in Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-213-456-7890</li>
                    <li>contact@ily.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'> Copyright 2024 @ Vanture.com - All Rights Reserved </p>
        </div>

    </div>
  )
}

export default Footer
