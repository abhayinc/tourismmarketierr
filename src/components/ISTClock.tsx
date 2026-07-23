'use client'

import { useEffect, useState } from 'react'

export function ISTClock() {
  const [time, setTime] = useState<string>('--:-- --')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      setTime(formatter.format(now))
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)
    return () => clearInterval(intervalId)
  }, [])

  if (!mounted) return <span>--:-- --</span>
  
  return <span>{time}</span>
}
