'use client'

import { Container, Sprite, Stage, useTick, withFilters } from '@pixi/react'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use'
import { GlitchFilter, GlitchFilterOptions } from 'pixi-filters'
import { slice } from 'lodash'
import { random } from 'lodash'

const Filters = withFilters(Container, {
  glitch: GlitchFilter,
})

const RotatingBunny = () => {
  const [rotation, setRotation] = useState(0)
  const [glitch, setGlitch] = useState<Partial<GlitchFilterOptions>>({
    slices: 10,
    seed: 200,
    direction: -180,
  })

  useTick((delta) => {
    // if (delta) {
    //   setRotation(rotation + 0.1 * delta)
    // }
    // console.log('random(0, 20)', random(0, 20))
    setGlitch((prev) => ({
      ...prev,
      slice: random(2, 20),
      seed: random(0, 1),
      // direction: random(-0, 20),
    }))
    // console.log('glitch', glitch)
  })

  const click = () => {
    console.log('CLICK2')
  }

  return (
    <Filters glitch={glitch}>
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        anchor={0.5}
        scale={4}
        rotation={rotation}
        mousedown={click}
        pointerdown={click}
        click={click}
      />
    </Filters>
  )
}

const PixiApp = () => {
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
  }, [])
  return (
    <Stage
      width={width}
      height={height}
      renderOnComponentChange={true}
      options={{
        antialias: true,
        background: 'white',
        hello: true,
      }}
    >
      <Container position={[bunnyX, bunnyY]}>
        <RotatingBunny />
      </Container>
    </Stage>
  )
}

export default PixiApp
