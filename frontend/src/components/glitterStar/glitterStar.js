import { useState, useEffect } from 'react'
import { meanSizeHeight, STAR_SHIFT_TIME } from 'utils/constant'

const GlitterStar = () => {
  const [scene, setScene] = useState(0)

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, STAR_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  const style = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: meanSizeHeight(),
  }

  return scene % 4 === 0 ? (
    <img src="images/glitterStar/gs0.svg" alt="glitter0" style={style} />
  ) : scene % 4 === 1 ? (
    <img src="images/glitterStar/gs1.svg" alt="glitter1" style={style} />
  ) : scene % 4 === 2 ? (
    <img src="images/glitterStar/gs2.svg" alt="glitter2" style={style} />
  ) : (
    <img src="images/glitterStar/gs3.svg" alt="glitter3" style={style} />
  )
}

export default GlitterStar
