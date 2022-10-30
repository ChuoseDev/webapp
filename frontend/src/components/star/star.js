import { useState, useEffect } from 'react'
import { STAR_SHIFT_TIME } from 'utils/constant'

const Star = () => {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => (scene + 1) % 2)
    }, STAR_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  const style = {
    position: 'absolute',
    left: `0px`,
    top: `${(scene % 2 === 0) * 10}px`,
    height: window.screen.height,
  }

  return <img src="images/star.svg" alt="star" style={style} />
}

export default Star
