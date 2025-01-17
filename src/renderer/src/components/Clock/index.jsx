import { useEffect, useState } from 'react'

export default function Clock() {
  const [dateState, setDateState] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])

  return (
    <span>
      {dateState.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
      {' - '}
      {dateState.toLocaleString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })}
    </span>
  )
}
