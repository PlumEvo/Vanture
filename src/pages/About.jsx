import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div className='text-2xl pt-8 border-t'>
      <Title text1={'About'} text2={'Us'}/>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-left'>
          <p>Vanture stands for out of passion ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusamus adipisci consectetur molestiae. Quos voluptas sint obcaecati totam architecto qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, placeat.</p>
          <p>Inspiring , Discovering , Exploring consectetur adipisicing elit. Quis, alias laborum inventore architecto ullam labore accusantium numquam libero ut molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, officiis?</p>
          <b className='text-gray-800'>Our Mission</b>        
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iure consequuntur tenetur nam nobis sit nostrum distinctio fugit amet maiores! Deleniti libero esse sint cumque sapiente nobis totam distinctio iste.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us ?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 smm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem alias debitis magnam dolore illum labore provident similique nobis rem?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 smm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem alias debitis magnam dolore illum labore provident similique nobis rem?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 smm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, exercitationem alias debitis magnam dolore illum labore provident similique nobis rem?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About