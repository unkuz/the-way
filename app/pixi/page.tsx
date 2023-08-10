'use client'

import { Container, Sprite, Stage, withFilters } from '@pixi/react'
import { gsap } from 'gsap'
import { GlitchFilter, RGBSplitFilter } from 'pixi-filters'
import { PointerEventHandler, useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'

const Filters = withFilters(Container, {
  glitch: GlitchFilter,
  rgbSplit: RGBSplitFilter,
})

let i = 0

// let texture = new PIXI.VideoResource(
//   'http://media.w3.org/2010/05/sintel/trailer.mp4',
//   { autoPlay: true }
// )

const RotatingBunny = () => {
  const [glitch, setGlitch] = useState({ slices: 20 })

  const [rgbSplit, setRgbSplit] = useState<{
    red: [number, number]
    green: [number, number]
    blue: [number, number]
  }>({
    red: [0, 1],
    green: [0, 1],
    blue: [0, 1],
  })

  // useTick((delta) => {
  //   i += 0.5 * delta
  //   setSeed(Math.sin(i))
  // })

  useEffect(() => {
    const ctx = gsap.context(() => {
      let glitch = {
        slices: 20,
      }

      gsap.to(glitch, {
        slices: 0,
        snap: 'slices',
        duration: 4,
        ease: 'none',
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
        onUpdate: () => {
          console.log('glitch', glitch)
          // setGlitch(pick(glitch, ['slices']))
        },
      })

      return () => {
        ctx.revert()
      }

      // gsap.to(rgbSplit, {
      //   duration: 0.5,
      //   repeat: -1,
      //   // red: [random(-2, 2), random(-2, 2)],
      //   // green: [random(-2, 2), random(-2, 2)],
      //   // blue: [random(-2, 2), random(-2, 2)],
      //   onUpdate: () => {
      //     setRgbSplit(pick(rgbSplit, ['red', 'green', 'blue']))
      //   },
      // })
    })
  }, [])

  return (
    <Filters glitch={glitch} rgbSplit={{ ...rgbSplit }}>
      <Sprite
        source={'done_by_daikazoku63_dei6ez3_6.mp4'}
        anchor={0.5}
        scale={1}
        width={1500}
        height={900}
        zIndex={5}
      />
    </Filters>
  )
}

export default function PixiApp() {
  const { width, height } = useWindowSize()

  const [bunnyX, setBunnyX] = useState(0)
  const [bunnyY, setBunnyY] = useState(0)

  useEffect(() => {
    const cb = () => {
      setBunnyX(window.innerWidth / 2)
      setBunnyY(window.innerHeight / 2)
    }
    cb()
    window.addEventListener('resize', cb)
    return () => {
      window.removeEventListener('resize', cb)
    }
  }, [])

  const aha: PointerEventHandler = (e) => {
    // console.log('e', e)
    // setBunnyX(e.clientX)
    // setBunnyY(e.clientY)
    // console.log('e', e.clientX)
  }
  const fire: PointerEventHandler = (e) => {
    // console.log('e', e)
  }
  return (
    <Stage
      width={width}
      height={height}
      renderOnComponentChange={true}
      options={{
        antialias: true,
        background: 'transparent',
        hello: true,
      }}
      onPointerMove={aha}
      onPointerDown={fire}
    >
      <Container position={[bunnyX, bunnyY]}>
        <RotatingBunny />
      </Container>
    </Stage>
  )
}
