import { useState, useEffect } from 'react'

const TopCloud = ({ top = 0, ttl, fadeIn = false }) => {
  const [scene, setScene] = useState(1)
  const [opacity, setOpacity] = useState(fadeIn ? 0 : 0.3)

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, 250)

    if (fadeIn) {
      setOpacity(0.3)
    }

    if (ttl) {
      setTimeout(() => {
        setOpacity(0)
      }, ttl)
    }

    return () => {
      setOpacity(0)
      clearInterval(sceneShifter)
    }
  }, [])

  const topCloudStyle = {
    position: 'absolute',
    left: `-${60 + scene * 10}px`,
    top: `${-110 + top}px`,
    transform: 'rotate(180deg)',
    opacity,
    transition: 'opacity ease-in-out 1s',
  }

  return <img src="images/cloud.svg" alt="topCloud" style={topCloudStyle} />
}

export default TopCloud
