import { cn } from '@/lib/utils'
import { IconLayoutNavbarCollapse } from '@tabler/icons-react'
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from 'motion/react'

import { useRef, useState } from 'react'

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingDockMobile = ({ items, className }: { items: { title: string; icon: React.ReactNode; href: string }[]; className?: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={cn('relative block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className="absolute inset-y-0 left-full ml-2 flex flex-row gap-2">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a href={item.href} key={item.title} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900">
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800">
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  )
}

const FloatingDockDesktop = ({ items, className }: { items: { title: string; icon: React.ReactNode; href: string }[]; className?: string }) => {
  let mouseY = useMotionValue(Infinity)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={cn('hidden md:block', className)}>
      {/* Extended hover trigger area */}
      <motion.div className="fixed right-0 top-0 w-24 h-full z-40" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />

      {/* Dock container */}
      <motion.div
        onMouseMove={(e) => mouseY.set(e.pageY)}
        onMouseLeave={() => {
          mouseY.set(Infinity)
          setIsHovered(false)
        }}
        onMouseEnter={() => setIsHovered(true)}
        initial={{ x: '100%' }}
        animate={{ x: isHovered ? '0%' : '100%' }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.8,
        }}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-16 items-center gap-4 rounded-2xl bg-gray-50 py-4 px-3 flex flex-col dark:bg-neutral-900 z-50"
      >
        {items.map((item) => (
          <IconContainer mouseY={mouseY} key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  )
}

function IconContainer({ mouseY, title, icon, href }: { mouseY: MotionValue; title: string; icon: React.ReactNode; href: string }) {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 }

    return val - bounds.y - bounds.height / 2
  })

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  // Transform for left translation on hover
  let xTransform = useTransform(distance, [-150, 0, 150], [0, -12, 0])

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  let x = useSpring(xTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height, x }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-nowrap text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white z-[100]"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  )
}
