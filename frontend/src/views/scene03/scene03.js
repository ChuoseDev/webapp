import { Scene03_01 } from './scene03_01'
import { Scene03_02 } from './scene03_02'
import { Scene03_03 } from './scene03_03'
import './purple.css'
import { useState, useEffect } from 'react'
import { Scene03_04 } from './scene03_04'
import { Scene03_05 } from './scene03_05'

export const Scene03 = () => {
  const [scene, setScene] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setScene(2)
    }, 500)
    setTimeout(() => {
      setScene(3)
    }, 1000)
    setTimeout(() => {
      setScene(4)
    }, 1500)
    setTimeout(() => {
      setScene(5)
    }, 2000)
  }, [])

  return (
    <div className="container">
      <div className="scene" style={{ opacity: scene === 1 ? 1 : 0 }}>
        <Scene03_01 />
      </div>
      <div className="scene" style={{ opacity: scene === 2 ? 1 : 0 }}>
        <Scene03_02 />
      </div>
      <div className="scene" style={{ opacity: scene === 3 ? 1 : 0 }}>
        <Scene03_03 />
      </div>
      <div className="scene" style={{ opacity: scene === 4 ? 1 : 0 }}>
        <Scene03_04 />
      </div>
      <div className="scene" style={{ opacity: scene === 5 ? 1 : 0 }}>
        <Scene03_05 />
      </div>
    </div>
  )
}
