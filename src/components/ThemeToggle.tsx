'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className={className}>[mode: ...]</button>
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${className} hover:text-black dark:hover:text-white transition-colors focus:outline-none font-medium text-[10px]`}
      aria-label="Toggle theme"
    >
      [mode: {theme}]
    </button>
  )
}
