"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"

export function useClientMotion() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return {
    isMounted,
    getMotionProps: (props: MotionProps) => {
      if (!isMounted) {
        return {
          initial: { opacity: 1 },
          animate: { opacity: 1 },
        }
      }
      return props
    },
  }
}

export function ClientMotion({
  children,
  motionProps,
  className,
}: {
  children: React.ReactNode
  motionProps: MotionProps
  className?: string
}) {
  const { getMotionProps } = useClientMotion()

  return (
    <motion.div {...getMotionProps(motionProps)} className={className}>
      {children}
    </motion.div>
  )
}

