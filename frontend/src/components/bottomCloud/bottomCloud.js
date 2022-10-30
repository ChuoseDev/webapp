import { useState, useEffect } from 'react'

const BottomCloud = ({ bottom = 0, ttl, fadeIn = false }) => {
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
      clearInterval(sceneShifter)
    }
  }, [])

  const bottomCloudStyle = {
    position: 'absolute',
    left: `-${400 + scene * 10}px`,
    top: `${500 + bottom}px`,
    opacity,
    transition: 'opacity ease-in-out 1s',
  }

  return (
    <img src="images/cloud.svg" alt="bottomCloud" style={bottomCloudStyle} />
  )
}

export default BottomCloud
