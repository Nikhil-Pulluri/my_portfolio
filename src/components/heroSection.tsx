'use client'
import SplitText from '@/TextAnimations/splitText'

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <SplitText
        text="Hello There!"
        className="text-9xl font-semibold text-center"
        delay={10}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 60 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={() => console.log('animation done')}
      />
    </div>
  )
}
