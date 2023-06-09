import React, { useEffect, useRef, useState } from 'react'

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<any>(null)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
      console.log('render dang chay')
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return <div>Watch: {seconds}</div>
}

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Set visible timer</button>
      {visible && <WatchTimer />}
    </div>
  )
}
