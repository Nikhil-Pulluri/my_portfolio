'use client'
import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

export function About() {
  return (
    <div className="flex h-full mt-1 ml-[3vw] items-start bg-[#0a0a0a] text-white">
      <div className="flex flex-col justify-center h-[40rem] px-4 w-3/5">
        <p className="text-neutral-400 text-justify text-xl md:text-3xl max-w-3xl mb-10">
          Hola! I'm <span className="text-white">Nikhil Pulluri</span>. I don't just write code; I <span className="italic">sculpt digital experiences</span> as a{' '}
          <span className="text-white">Full Stack & Web3 Developer</span>. My craft is weaving intuitive front-ends with robust back-ends, creating secure and modern applications with{' '}
          <LinkPreview url="https://www.typescriptlang.org/">TypeScript</LinkPreview>, <LinkPreview url="https://nextjs.org/">Next.js</LinkPreview>, and{' '}
          <LinkPreview url="https://nestjs.com/">Nest.js</LinkPreview>.
          <br />
          <br />
          Off the digital loom, I'm often refining side projects, immersed in{' '}
          <LinkPreview url="https://www.youtube.com/watch?v=S-z6vyR89Ig&list=RDMM&index=3" imageSrc="/images/imraan-hashmi.jpeg" isStatic>
            this guy
          </LinkPreview>
          , or captivated by{' '}
          <LinkPreview url="/templates" imageSrc="/images/fight-club.jpeg" isStatic>
            this movie
          </LinkPreview>
          .
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-2/5 h-[35rem]">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white">About</h1>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white">Me?</h1>
      </div>
    </div>
  )
}
