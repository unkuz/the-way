'use client'

import podderzhat from '@/images/kak-podderzhat-cheloveka-v-trudnuju-minutu-v-raznyh-situacijah-03.webp'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Page() {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const spanElList = el.current?.querySelectorAll('span')
    const mouseEnter = () => {
      gsap.set(spanElList!, {
        opacity: 0,
      })
      gsap.to(spanElList!, {
        opacity: 1,
        stagger: { from: 'random', each: 0.015 },
        ease: 'power2.out',
      })
    }

    el.current?.addEventListener('mouseenter', mouseEnter)
  }, [])

  return (
    <div className="h-screen w-screen flex justify-center items-center text-white">
      <div
        ref={el}
        className="w-[400px] h-[400px] bg-red-500 overflow-hidden cursor-pointer group relative"
      >
        <Image
          src={podderzhat}
          alt=""
          className="w-full absolute h-full object-cover group-hover:scale-150 duration-300 group-hover:grayscale-[0.4] group-hover:sepia-[.1]"
        />
        <div className="absolute top-[15px] left-[15px] w-[175px] h-[175px] bg-[#ffffff23]  text-[.8rem] p-[15px] backdrop-blur-[20px] [clip-path:polygon(0_0,75%_0,100%_25%,100%_100%,25%_100%,0_75%)] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 duration-200 ease-out">
          <div className="flex flex-col w-full h-full justify-between ">
            <div className="text-[1.8rem]">
              {'01'.split('').map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>
            <div className="w-full flex justify-end align-bottom gap-[1px]">
              {'NanoFabrics'.split('').map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-[15px] right-[15px] w-[175px] h-[175px] bg-[#ffffff23]   text-[.8rem] p-[15px] backdrop-blur-[20px] [clip-path:polygon(0_0,75%_0,100%_25%,100%_100%,25%_100%,0_75%)] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 duration-200 ease-out">
          <div className="flex flex-col w-full h-full justify-between ">
            <div>
              {'Holoprints'.split('').map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>
            <div className="w-full flex justify-end  gap-[1px]">
              {'skinsyncs'.split('').map((i, idx) => (
                <span key={idx}>{i}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
