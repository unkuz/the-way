import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const IntroAnimation = () => {
  const refZ = useRef(null)
  const refX = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let tl = gsap.timeline()

    tl.to(refZ.current, {
      scale: 3,
      duration: 1,
      delay: 3,
    })
      .to(refZ.current, {
        scale: 400,
        duration: 2,
        rotate: '260deg',
        ease: 'expoScale(0.5,7,none)',
      })
      .set(refX.current, {
        display: 'inline-block',
      })
      .to(refX.current!.childNodes, {
        transform: 'translateY(0%)',
        scale: 1,
      })
      .set(refZ.current, {
        display: 'none',
      })
      .set(containerRef.current, {
        backgroundColor: 'black',
      })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen  relative font-au overflow-hidden"
    >
      <span
        className="uppercase text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ref={refZ}
      >
        Z
      </span>
      <div
        ref={refX}
        className="font-cuz h-[20px] text-white overflow-hidden hidden  uppercase font-bold  z-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {'This site is under development'
          .replaceAll(' ', '\xa0')
          .split('')
          .map((i, j) => (
            <span
              className="inline-block scale-0 translate-y-[100%] leading-[20px] sm:text-[.9rem]  text-[.6rem]"
              key={j}
            >
              {i}
            </span>
          ))}
      </div>
    </div>
  )
}
