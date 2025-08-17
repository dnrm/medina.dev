'use client'

import * as motion from 'motion/react-client'

interface MotionDivProps {
  children: React.ReactNode
  initial?: any
  animate?: any
  transition?: any
  className?: string
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>
}
