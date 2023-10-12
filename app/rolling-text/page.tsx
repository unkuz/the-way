'use client'
import { RollingText } from '@/components/RollingText'

export default function Main() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <RollingText text={'CONTACT US'} speed={0.03} />
    </div>
  )
}
