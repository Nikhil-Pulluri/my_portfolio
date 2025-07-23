'use client'
import ClickSpark from '@/Animations/ClickSpark/ClickSpark'
export default function ClientLayer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div style={{ height: '100vh', width: '100vw' }} className="overflow-x-hidden">
        {children}
      </div>
    </ClickSpark>
  )
}
