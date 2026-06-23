import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCoursal from './VideoCoursal'

const Highlight = () => {
  useGSAP(()=>{
    gsap.to('#title', {
      opacity: 1,
      y: -40
    })
    gsap.to('.link', {
      opacity: 1,
      y: -40,
      duration: 1,
      stagger: '0.25'
    })
  }, [])


  return (
    <section id='highlight' className='w-screen overflow-hidden h-full common-padding bg-zinc-900'>
      <div className="screen-max-width">
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className='section-heading'>Get the Highlights.</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film&nbsp; 
              <img src={watchImg} alt="watch" className='ml-2' />
            </p>
            <p className='link'>
              Watch the event&nbsp;
              <img src={rightImg} alt="watch" className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCoursal />
      </div>
    </section>
  )
}

export default Highlight
