import { useState, useEffect } from 'react'
import { BOTTOM_CLOUD_SHIFT_TIME } from 'utils/constant'

const BottomCloud = ({ bottom = 0, ttl, fadeIn = false }) => {
  const [scene, setScene] = useState(1)
  const [opacity, setOpacity] = useState(fadeIn ? 0 : 0.3)
  const [cloudProps, setCloudProps] = useState([
    { subtractor: 0, opacity: fadeIn ? 0.3 : 0 },
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
        setCloudProps(
          cloudProps.map((cp) => {
            return { subtractor: cp.subtractor, opacity: 0 }
          })
        )
      }, ttl)
    }

    return () => {
      setCloudProps(
        cloudProps.map((cp) => {
          return { subtractor: cp.subtractor, opacity: 0 }
        })
      )
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (scene % 40 === 0) {
      const newCloudProp = { subtractor: scene, opacity: 0 }
      setCloudProps([...cloudProps, newCloudProp])
      setTimeout(() => {
        setCloudProps([
          { ...cloudProps[0], opacity: 0 },
          { ...newCloudProp, opacity: 0.3 },
        ])
      }, 5 * BOTTOM_CLOUD_SHIFT_TIME)
      setTimeout(() => {
        setCloudProps([{ ...newCloudProp, opacity: 0.3 }])
      }, 5 * BOTTOM_CLOUD_SHIFT_TIME + 20)
    }
  }, [scene])

  const bottomCloudStyle = (scene, opacity) => {
    return {
      position: 'absolute',
      left: `-${400 + scene * 10}px`,
      top: `${500 + bottom}px`,
      opacity,
      transition: 'opacity ease-in-out 1s',
    }
  }

  return cloudProps.map((cp, i) => (
    <img
      src="images/cloud.svg"
      alt="topCloud"
      key={`topCloud${i}`}
      style={bottomCloudStyle(scene - cp.subtractor, cp.opacity)}
    />
  ))
}

export default BottomCloud
