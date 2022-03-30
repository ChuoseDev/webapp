import './purple.css'
import { useState, useEffect } from 'react'
import { Scene04_05 } from './scene04_05'
import { Scene04_06 } from './scene04_06'

export const Scene04 = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [scene, setScene] = useState(1)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {
      setScene(2)
    }, 500)
  }, [])

  return (
    <div className="container">
      <div className="scene" style={{ opacity: scene === 1 ? 1 : 0 }}>
        <Scene04_05 />
      </div>
      <div className="scene" style={{ opacity: scene === 2 ? 1 : 0 }}>
        <Scene04_06 />
      </div>
    </div>
  )
}
