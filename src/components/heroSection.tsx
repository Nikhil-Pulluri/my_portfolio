'use client'

import { useState, useEffect } from 'react'
import SplitText from '@/TextAnimations/splitText'
import DecryptedText from '@/TextAnimations/decryptedText'
import clsx from 'clsx'

export default function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [moved, setMoved] = useState(false)
  const [introTriggered, setIntroTriggered] = useState(false)

  useEffect(() => {
    if (animationComplete) {
      const timeout = setTimeout(() => {
        setMoved(true)
        setTimeout(() => {
          setIntroTriggered(true)
        }, 750)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [animationComplete])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden ">
      <div
        className={clsx(
          'transition-all duration-1000 ease-in-out absolute',
          moved ? 'top-[15%] left-[5%] translate-x-0 translate-y-0 text-left' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'
        )}
      >
        <SplitText
          text="Hey There!"
          className="text-9xl font-semibold"
          delay={10}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 60 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => {
            console.log('animation done')
            setAnimationComplete(true)
          }}
        />
        {introTriggered && (
          <div className="mt-6 flex flex-col gap-2">
            <div>
              <DecryptedText
                text="This is Nikhil Pulluri,"
                sequential={true}
                animateOn="view"
                revealDirection="start"
                speed={60}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed text-3xl"
                parentClassName="all-letters"
                encryptedClassName="encrypted text-3xl"
              />
            </div>
            <div>
              <DecryptedText
                text="A Full Stack & Web3 Developer"
                sequential={true}
                animateOn="view"
                revealDirection="start"
                speed={60}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed text-3xl"
                parentClassName="all-letters"
                encryptedClassName="encrypted text-3xl"
              />
            </div>
            <div>
              <DecryptedText
                text="from India."
                sequential={true}
                animateOn="view"
                revealDirection="start"
                speed={60}
                maxIterations={10}
                characters="ABCD1234!?"
                className="revealed text-3xl"
                parentClassName="all-letters"
                encryptedClassName="encrypted text-3xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
