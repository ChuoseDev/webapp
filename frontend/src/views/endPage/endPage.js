import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage } from 'konvas'
import { useNavigate } from 'react-router'
import { scaleWidth, scaleHeight } from 'utils/constant'

const EndPage = () => {
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
        navigate('/random')
      }, 1500)
    }
  }, [scene])

  const stageProps = {
    width: window.screen.width,
    height: window.innerHeight,
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
    },
  }

  const backgroundProps = {
    image: 'images/CloudBackground.svg',
    height: 891 * scaleHeight(),
    width: 1404 * scaleHeight(),
    x: -62 * scaleHeight(),
    y: -86 * scaleHeight(),
    scene,
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

export default EndPage
