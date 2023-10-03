'use client'

import { Stage } from '@pixi/react'
import { useWindowSize } from 'react-use'

export default function PixiApp() {
  const { width, height } = useWindowSize()
  return (
    <Stage
      {...{ width, height }}
      raf
      options={{
        antialias: true,
        background: '#ffe',
        hello: true,
      }}
    ></Stage>
  )
}
