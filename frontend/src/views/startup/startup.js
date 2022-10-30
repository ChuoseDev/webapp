import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage } from 'konvas'
import { useNavigate } from 'react-router'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Startup = () => {
  const [scene, setScene] = useState(0)
  const [opacity, setOpacity] = useState(0.3)
  const navigate = useNavigate()
  useEffect(() => {
    setOpacity(1)
    setTimeout(() => {
      setScene(1)
    }, 300)
    setTimeout(() => {
      setScene(2)
    }, 1500)
    setTimeout(() => {
      setScene(3)
    }, 2500)
    setTimeout(() => {
      setScene(4)
    }, 2700)
  }, [])

  useEffect(() => {
    if (scene === 4) {
      setScene(5)
      setOpacity(0)
      setTimeout(() => {
        navigate('/consent')
      }, 1500)
    }
  }, [scene])

  const stageProps = {
    width: window.screen.width,
    height: window.screen.height,
  }

  const chuoseLogoProps = {
    image: 'images/logo.svg',
    x: (window.innerWidth - 308 * scaleHeight()) / 2,
    y: 370 * scaleHeight(),
    height: 72 * scaleHeight(),
    width: 308 * scaleHeight(),
    opacity: 0,
    scene,
    animation: {
      1: { opacity: 1, duration: 0.5 },
      2: { y: 523 * scaleHeight(), duration: 0.4 },
      3: { opacity: 0, duration: 0.5 },
    },
  }

  const backgroundProps = {
    image: 'images/CloudBackground.svg',
    height: 891 * scaleHeight(),
    width: 1404 * scaleHeight(),
    x: -62 * scaleHeight(),
    y: -86 * scaleHeight(),
    scene,
    animation: {
      2: {
        x: -2 * scaleHeight(),
        y: -92 * scaleHeight(),
        height: 1046 * scaleHeight(),
        width: 1649 * scaleHeight(),
        duration: 1,
      },
      3: {
        x: -277 * scaleHeight(),
        y: -206 * scaleHeight(),
        height: 1244 * scaleHeight(),
        width: 1962 * scaleHeight(),
        duration: 1,
      },
    },
  }
  const jumboChuoseProps = {
    image: 'images/jumboLogo.svg',
    width: 448 * scaleWidth(),
    height: 437 * scaleWidth(),
    y: 500 * scaleHeight(),
    opacity: 0,
    scene,
    animation: {
      1: { opacity: 1, duration: 0.5 },
      2: { y: window.innerHeight, duration: 0.6 },
    },
  }

  return (
    <div style={{ opacity, transition: 'opacity ease-in-out 1.5s' }}>
      <Stage {...stageProps}>
        <Layer>
          <AnimateImage {...backgroundProps} />
          <AnimateImage {...chuoseLogoProps} />
          <AnimateImage {...jumboChuoseProps} />
        </Layer>
      </Stage>
    </div>
  )
}

export default Startup
