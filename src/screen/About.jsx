import React from 'react'
import Footeer from '../components/Footer'
import { useNavigate } from 'react-router'

const About = () => {
 let navigate= useNavigate()
  return (
    <div className='h-[100%] w-full mt-30 px-35 '>
      <div className='flex flex-col items-center'>
        <div className="animate-box bg-[#C8F400]  h-[65px] w-[65px] flex justify-center items-center rounded-3xl ">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-ink fill-ink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          </div>
          <h1 className='text-5xl mt-5 font-bold font-[display1]'>About <span className='text-[#C8F400]'>SkyMart</span></h1>
          <p className='text-center mt-5 text-[18px] text-[var(--grey-color)] font-medium font-[display2]'>SkyMart is a next-generation e-commerce platform built to make online <br />shopping fast, fair, and enjoyable — for everyone.</p>


      </div>
      <div className='grid grid-cols-4 gap-4 py-14'>
        <div className='border-1 rounded-2xl flex flex-col items-center py-5 justify-center'>
          <div className='text-[var(--secondary-color)]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package text-volt mx-auto mb-2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
          </div>
          <h1 className='font-[display1] text-2xl font-bold'>20K+</h1>
          <p className='font-[display2] text-xs font-bold  text-[var(--grey-color)]'>Products</p>
        </div>
        <div className='border-1 rounded-2xl flex flex-col items-center py-5 justify-center'>
          <div className='text-[var(--secondary-color)]'>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users text-volt mx-auto mb-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h1 className='font-[display1] text-2xl font-bold'>50K+</h1>
          <p className='font-[display2] text-xs font-bold  text-[var(--grey-color)]'>Happy Customers</p>
        </div>
        <div className='border-1 rounded-2xl flex flex-col items-center py-5 justify-center'>
          <div className='text-[var(--secondary-color)]'>
     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-volt mx-auto mb-2"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          </div>
          <h1 className='font-[display1] text-2xl font-bold'>4.9</h1>
          <p className='font-[display2] text-xs font-bold  text-[var(--grey-color)]'>Avg. Rating</p>
        </div>
        <div className='border-1 rounded-2xl flex flex-col items-center py-5 justify-center'>
          <div className='text-[var(--secondary-color)]'>
   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck text-volt mx-auto mb-2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
          </div>
          <h1 className='font-[display1] text-2xl font-bold'>99%</h1>
          <p className='font-[display2] text-xs font-bold  text-[var(--grey-color)]'>On-time Delivery</p>
        </div>

      </div>
      <div className='p-7 border-1 rounded-2xl'>
        <h1 className='font-[display1] font-bold text-2xl'>our Story</h1>
        <p className='text-sm font-medium mt-4 font-[display2] text-[var(--grey-color)]'>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually  <i className='text-[#a0a0a0]'>enjoyable?</i></p>
        <p className='text-sm mt-5 font-medium font-[display2] text-[var(--grey-color)]'>Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.</p>
        <p className='text-sm mt-5 font-medium font-[display2] text-[var(--grey-color)]'>We're still the same team at heart: obsessed with speed, transparency, and making  feel good about every purchase you make here.</p>
    

      </div>
      <div className='mt-10'>
        <h1 className='font-[display1] font-bold text-2xl capitalize text-center'>what we stand for</h1>
        <div className='grid grid-cols-2 mt-5 gap-5 grid-rows-2'>
          <div className='border-1 rounded-2xl p-7 flex gap-4 transition-all duration-200 hover:border-[#3F4A0D]'>
            <div class="w-10 h-10 bg-volt/10 rounded-xl bg-[#23280F] flex items-center text-[var(--secondary-color)] justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check text-volt"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
            <div>
              <h1 className='font-[display1] text-xm font-bold'>Trust</h1>
              <p className='font-[display2] text-[var(--grey-color)] text-[14px] font-medium'>Every product is verified for quality and authenticity before listing.</p>
            </div>
          </div>
          <div className='border-1 rounded-2xl p-7 flex gap-4 transition-all duration-200 hover:border-[#3F4A0D]'>
            <div class="w-10 h-10 bg-volt/10 rounded-xl bg-[#23280F] flex items-center text-[var(--secondary-color)] justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck text-volt"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></div>
            <div>
              <h1 className='font-[display1] text-xm font-bold'>Speed</h1>
              <p className='font-[display2] text-[var(--grey-color)] text-[14px] font-medium'>We obsess over delivery times so your orders arrive when promised.</p>
            </div>
          </div>
          <div className='border-1 rounded-2xl p-7 flex gap-4 transition-all duration-200 hover:border-[#3F4A0D]'>
            <div class="w-10 h-10 bg-volt/10 rounded-xl bg-[#23280F] flex items-center text-[var(--secondary-color)] justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake text-volt"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg></div>
            <div>
              <h1 className='font-[display1] text-xm font-bold'>Community</h1>
              <p className='font-[display2] text-[var(--grey-color)] text-[14px] font-medium'>Built around real customer feedback, not just business metrics.</p>
            </div>
          </div>
          <div className='border-1 rounded-2xl p-7 flex gap-4 transition-all duration-200 hover:border-[#3F4A0D]'>
            <div class="w-10 h-10 bg-volt/10 rounded-xl bg-[#23280F] flex items-center text-[var(--secondary-color)] justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-volt"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
            <div>
              <h1 className='font-[display1] text-xm font-bold'>Quality</h1>
              <p className='font-[display2] text-[var(--grey-color)] text-[14px] font-medium'>Built around real customer feedback, not just business metrics.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
         <h1 className='font-[display1] font-bold text-2xl capitalize text-center'>Meet the Team</h1>
         <div className='grid grid-cols-4 gap-4 mt-5'>
          <div className='flex flex-col justify-center border-1 items-center py-5 rounded-2xl'>
            <div className='h-[50px] w-[50px] bg-[var(--secondary-color)] flex justify-center items-center text-black font-[display1] font-bold text-2xl rounded-2xl'>A</div>
            <h1 className='font-[display2] mt-2 font-bold text-[14px]'>Aryan Shah</h1>
            <p className='text-xm text-[var(--grey-color)] text-[12px] font-medium'>Founder & CEO</p>
          </div>
          <div className='flex flex-col justify-center border-1 items-center py-5 rounded-2xl'>
            <div className='h-[50px] w-[50px] bg-[#3B82F6] text-white flex justify-center items-center text-black font-[display1] font-bold text-2xl rounded-2xl'>P</div>
            <h1 className='font-[display2] mt-2 font-bold text-[14px]'>Priya Mehta</h1>
            <p className='text-xm text-[var(--grey-color)] text-[12px] font-medium'>Head of Product</p>
          </div>
          <div className='flex flex-col justify-center border-1 items-center py-5 rounded-2xl'>
            <div className='h-[50px] w-[50px] bg-[#A855F7] text-white flex justify-center items-center text-black font-[display1] font-bold text-2xl rounded-2xl'>R</div>
            <h1 className='font-[display2] mt-2 font-bold text-[14px]'>Rohan Verma</h1>
            <p className='text-xm text-[var(--grey-color)] text-[12px] font-medium'>Lead Engineer</p>
          </div>
          <div className='flex flex-col justify-center border-1 items-center py-5 rounded-2xl'>
            <div className='h-[50px] w-[50px] bg-[#F43F5E] text-white flex justify-center items-center text-black font-[display1] font-bold text-2xl rounded-2xl'>S</div>
            <h1 className='font-[display2] mt-2 font-bold text-[14px]'>Sneha Kapoor</h1>
            <p className='text-xm text-[var(--grey-color)] text-[12px] font-medium'>Design Director</p>
          </div>
         </div>
      </div>
      <div className='border-[#3F4A0D] mt-12 mb-30 border-1 rounded-3xl gap-5  py-8  flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold font-[display1]'>Ready to shop?</h1>
        <p className='font-medium text-[14px] text-[var(--grey-color)] '>Explore thousands of products at unbeatable prices.</p>
      <div
      onClick={()=>[
        navigate("/dashboard/shop")
      ]} 
       className='flex justify-between items-center gap-2 bg-[var(--secondary-color)] text-black py-3.5 px-7 rounded-2xl hover:bg-[#E2FF66] cursor-pointer'>
        <h1 className='font-[display1] font-bold text-xm'>Browse Products</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </div>

      </div>
      
     
    </div>
  )
}

export default About
