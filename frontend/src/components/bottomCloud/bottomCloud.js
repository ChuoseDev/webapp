import { useState, useEffect } from 'react'
import { BOTTOM_CLOUD_SHIFT_TIME, scaleHeight } from 'utils/constant'

const BottomCloud = ({ bottom = 0, ttl, fadeIn = false }) => {
  const [scene, setScene] = useState(1)
  const [cloudProps, setCloudProps] = useState([
    { subtractor: 0, opacity: fadeIn ? 0 : 0.3 },
  ])

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, BOTTOM_CLOUD_SHIFT_TIME)

    if (fadeIn) {
      setCloudProps([{ subtractor: 0, opacity: 0.3 }])
    }

    if (ttl) {
      setTimeout(() => {
        setCloudProps((cps) =>
          cps.map((cp) => {
            return { subtractor: cp.subtractor, opacity: 0 }
          })
        )
      }, ttl)
    }

    return () => {
      setCloudProps((cps) =>
        cps.map((cp) => {
          return { subtractor: cp.subtractor, opacity: 0 }
        })
      )
      clearInterval(sceneShifter)
    }
  }, [fadeIn, ttl])

  useEffect(() => {
    if (scene % 40 === 0) {
      const newCloudProp = { subtractor: scene, opacity: 0 }
      setCloudProps((oldCloudProps) => [
        { ...oldCloudProps[0], opacity: 0 },
        newCloudProp,
      ])
      setTimeout(() => {
        setCloudProps([{ ...newCloudProp, opacity: 0 }])
      }, 5 * BOTTOM_CLOUD_SHIFT_TIME)
      setTimeout(() => {
        setCloudProps([{ ...newCloudProp, opacity: 0.3 }])
      }, 5 * BOTTOM_CLOUD_SHIFT_TIME + 100)
    }
  }, [scene])

  const bottomCloudStyle = (scene, opacity) => {
    return {
      position: 'absolute',
      left: `-${200 + scene * 10}px`,
      top: `${(500 + bottom) * scaleHeight()}px`,
      opacity,
      transition: 'opacity ease-in-out 1s',
      height: 450 * scaleHeight(),
    }
  }

  return cloudProps.map((cp, i) => (
    <img
      src="images/cloud.svg"
      alt="bottomCloud"
      key={`bottomCloud${i}`}
      style={bottomCloudStyle(scene - cp.subtractor, cp.opacity)}
    />
  ))
}

export default BottomCloud
