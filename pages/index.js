import Image from 'next/image'
import Hero from '../public/illustration-hero.svg'
import MusicIcon from '../public/icon-music.svg'
import Desktop from '../public/pattern-background-desktop.svg'
import Mobile from '../public/pattern-background-mobile.svg'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen m-0 overflow-hidden'>
      <Desktop className='absolute top-0 sm:hidden md:inline-block' />
      <div className='relative max-w-[375px] shadow-lg justify-center items-center bg-verypaleblue flex flex-col rounded-2xl shadow-desaturatedblue'>
        <Hero className='w-[375px] relative rounded-t-2xl m-0' />
        <div className='flex flex-col pt-3 space-y-6 m-7'>
          <h1 className='text-3xl font-bold text-center text-darkblue'>Order Summary</h1>
          <p className='text-center text-[15px] text-desaturatedblue'>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere
            you like!
          </p>
          <div className='flex justify-center pt-5 item-center'>
            <MusicIcon className='mr-4' />
            <div className='pr-10'>
              <p className='text-darkblue text-[14px] font-semibold'>Annual Plan</p>
              <p className='text-sm text-desaturatedblue'>$59.99/year</p>
            </div>
            <a href='#' className='flex items-center justify-center text-sm text-brightblue'>
              Change
            </a>
          </div>
          <button className='shadow-lg shadow-desaturatedblue bg-brightblue hover:bg-opacity-70 text-verypaleblue'>
            Proceed to Payment
          </button>
          <button className='bg-transparent hover:text-darkblue'>Cancel Order</button>
        </div>
      </div>
    </div>
  )
}

export default App
// border-4 border-red-500
