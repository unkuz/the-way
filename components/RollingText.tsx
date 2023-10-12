import { useRef } from 'react'
import { gsap } from 'gsap'
import { clsx } from 'clsx'

type Props = {
  text: string
  speed?: number
  className?: string
  hoverColor?: string
}

export const RollingText = ({
  text,
  speed = 0.015,
  className = '',
  hoverColor,
}: Props) => {
  const elRef = useRef<HTMLDivElement>(null)

  const onHover = () => {
    elRef.current!.childNodes.forEach((i) => {
      gsap.to(i.childNodes, {
        transform: 'translateY(-100%)',
        stagger: {
          each: speed,
        },
      })
    })
  }
  const onLeave = () => {
    elRef.current!.childNodes.forEach((i) => {
      gsap.to(i.childNodes, {
        transform: 'translateY(0%)',
        stagger: {
          each: speed,
          ease: 'cubic-bezier(0.76,0,0.24,1)',
        },
      })
    })
  }

  return (
    <div
      ref={elRef}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
      className={clsx(
        'h-[50px] [&__span]:text-[50px] [&__span]:leading-[50px] overflow-hidden cursor-pointer',
        className
      )}
    >
      {[...new Array(2)].map((_i, idx) => (
        <div key={idx} className="last:text-blue-400 flex">
          {text
            .replaceAll(' ', '\xa0')
            .split('')
            .map((character, idxCharacter) => {
              return (
                <span className="inline-block" key={idxCharacter}>
                  {character}
                </span>
              )
            })}
        </div>
      ))}
    </div>
  )
}
