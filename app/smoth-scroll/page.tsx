'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import hero_img from '@/images/hero-img.jpg'
import { gsap } from 'gsap'
import '../smoth-scroll/style.scss'

export default function SmothScroll() {
  const scrollWrapEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const body = document.body,
      height = scrollWrapEl.current!.getBoundingClientRect().height - 1,
      speed = 0.04
    gsap.set(body, { height })

    let offset = 0
    const smoothScroll = () => {
      offset = offset + (window.scrollY - offset) * speed
      gsap.set(scrollWrapEl.current, {
        transform: `translateY(-${offset}px) translateZ(0)`,
      })
      requestAnimationFrame(smoothScroll)
    }

    smoothScroll()
  }, [])
  return (
    <div className="bg-[#161616] text-[#fff] [font-family:'Neue_Machina']">
      <div
        className="fixed z-[2] top-0 left-0 overflow-hidden"
        ref={scrollWrapEl}
      >
        <div className="w-[80%] my-[160px] mx-auto [&__p]:text-[24px] [&__p]:leading-[40px] [&__p]:font-[200] [&__p]:text-[#ffffff9a] [&__h1]:text-[80px] [&__h1]:font-bold">
          <h1>:no time to explain</h1>
          <Image
            src={hero_img}
            className="w-full h-[300px] object-cover my-[40px]"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
            ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
            ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
            praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            excepturi tenetur sapiente dolor deleniti. Fuga labore pariatur
            esse. Repudiandae, voluptates nisi soluta architecto inventore hic.
            Omnis eos expedita sed architecto illum mollitia! Totam aperiam vel
            consequuntur a, ipsum sapiente sit laborum exercitationem distinctio
            labore praesentium veniam accusamus, voluptate ratione suscipit!
          </p>
          <Image
            src={hero_img}
            className="w-full h-[300px] object-cover my-[40px]"
            alt=""
          />

          <h1>:more than pretty screens</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            architecto suscipit ducimus nostrum, aut minus eius impedit vero
            numquam est optio reprehenderit itaque quis eligendi quasi
            repellendus obcaecati neque dolor ipsam nulla praesentium
            voluptatum. Est assumenda ea voluptatibus! Eaque quo ducimus, unde
            maxime enim nesciunt debitis voluptatem fuga obcaecati? Aperiam?
          </p>

          <Image
            src={hero_img}
            className="w-full h-[300px] object-cover my-[40px]"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea
            nihil quibusdam repudiandae praesentium quisquam eos, repellendus
            fugiat dolore! Neque.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>:no time to explain</h1>
          <Image
            src={hero_img}
            className="w-full h-[300px] object-cover my-[40px]"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem animi
            ipsam itaque doloribus aliquid, veniam minus laborum doloremque quos
            ullam. Quas harum iure optio dolorem ea recusandae blanditiis ipsum
            praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            excepturi tenetur sapiente dolor deleniti. Fuga labore pariatur
            esse. Repudiandae, voluptates nisi soluta architecto inventore hic.
            Omnis eos expedita sed architecto illum mollitia! Totam aperiam vel
            consequuntur a, ipsum sapiente sit laborum exercitationem distinctio
            labore praesentium veniam accusamus, voluptate ratione suscipit!
          </p>
          <Image
            src={hero_img}
            className="w-full h-[300px] object-cover my-[40px]"
            alt=""
          />

          <h1>:more than pretty screens</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            architecto suscipit ducimus nostrum, aut minus eius impedit vero
            numquam est optio reprehenderit itaque quis eligendi quasi
            repellendus obcaecati neque dolor ipsam nulla praesentium
            voluptatum. Est assumenda ea voluptatibus! Eaque quo ducimus, unde
            maxime enim nesciunt debitis voluptatem fuga obcaecati? Aperiam?
          </p>

          <Image
            src={hero_img}
            className="w-full h-[300px] object-cover my-[40px]"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea
            nihil quibusdam repudiandae praesentium quisquam eos, repellendus
            fugiat dolore! Neque.
          </p>
        </div>
      </div>
    </div>
  )
}
