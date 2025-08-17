'use client'

import { useColorModeValue } from '@/components/ui/color-mode'

interface ColorModeValuesProps {
  light: string
  dark: string
  children: (value: string) => React.ReactNode
}

export function ColorModeValues({ light, dark, children }: ColorModeValuesProps) {
  const value = useColorModeValue(light, dark)
  return <>{children(value)}</>
}
