'use client'
import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useImmer } from 'use-immer'

const PERCENT = 15

export const Dev = () => {
  const ref = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const [percent, setPercent] = useImmer<number>(0)
  const timer = useRef<NodeJS.Timer>()

  useEffect(() => {
    gsap
      .to(ref.current!, {
        translateY: '-200vh',
        duration: 1,
        ease: 'power4.inOut',
        delay: 3,
      })
      .then(() => {
        setPercent(PERCENT)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="w-full h-screen overflow-hidden">
      <main ref={ref} className="w-full">
        <div className="w-full h-[200vh] bg-black ">
          <div className="h-[100vh] flex justify-center items-center ">
            <span className="font-au text-white text-[3rem] tracking-widest">
              CRUNKUZ
            </span>
          </div>
        </div>
        <div
          ref={ref2}
          className="w-full h-screen  flex justify-center items-center text-[1rem] flex-col gap-[10px]"
        >
          <span className="font-bold tracking-tighter font-[.9rem] uppercase">
            {`_This site is under development`}
          </span>
          <div className="w-[150px] h-[3px] relative overflow-hidden">
            <div className="h-full  bg-black animate-loading absolute "></div>
          </div>
        </div>
      </main>
    </div>
  )
}
