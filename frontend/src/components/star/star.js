import { useState, useEffect } from 'react'

const Star = () => {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => (scene + 1) % 2)
    }, 500)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  const style = {
    position: 'absolute',
    left: `0px`,
    top: `${(scene % 2 === 0) * 10}px`,
  }

  return <img src="images/star.svg" alt="star" style={style} />
}

export default Star
