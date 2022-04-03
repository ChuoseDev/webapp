import { Scene03_01 } from './scene03_01'
import { Scene03_02 } from './scene03_02'
import { Scene03_03 } from './scene03_03'
import './purple.css'
import { useState, useEffect } from 'react'
import { Scene03_04 } from './scene03_04'
import { Scene03_05 } from './scene03_05'
import { Scene03_06 } from './scene03_06'
import { Scene03_07 } from './scene03_07'
import { Scene03_08 } from './scene03_08'
import { Scene03_09 } from './scene03_09'
import { Scene03_10 } from './scene03_10'
import { Scene03_11 } from './scene03_11'
import { useNavigate } from 'react-router'

export const Scene03 = () => {
  const [scene, setScene] = useState(1)
  const navigate = useNavigate()

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
    setTimeout(() => {
      setScene(6)
    }, 2500)
    setTimeout(() => {
      setScene(7)
    }, 3000)
    setTimeout(() => {
      setScene(8)
    }, 3500)
    setTimeout(() => {
      setScene(9)
    }, 4000)
    setTimeout(() => {
      setScene(10)
    }, 4500)
    setTimeout(() => {
      setScene(11)
    }, 5000)
    setTimeout(() => {
      navigate('/scene041')
    }, 7000)
  }, [])

  return (
    <div
      className="container"
      style={{ opacity: scene < 2 ? 0 : 1, transition: 'ease-in-out 1s' }}
    >
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
      <div className="scene" style={{ opacity: scene === 6 ? 1 : 0 }}>
        <Scene03_06 />
      </div>
      <div className="scene" style={{ opacity: scene === 7 ? 1 : 0 }}>
        <Scene03_07 />
      </div>
      <div className="scene" style={{ opacity: scene === 8 ? 1 : 0 }}>
        <Scene03_08 />
      </div>
      <div className="scene" style={{ opacity: scene === 9 ? 1 : 0 }}>
        <Scene03_09 />
      </div>
      <div className="scene" style={{ opacity: scene === 10 ? 1 : 0 }}>
        <Scene03_10 />
      </div>
      <div className="scene" style={{ opacity: scene === 11 ? 1 : 0 }}>
        <Scene03_11 />
      </div>
    </div>
  )
}
