import { useState, useEffect } from 'react'
import { TOP_CLOUD_SHIFT_TIME } from 'utils/constant'

const TopCloud = ({ top = 0, ttl, fadeIn = true }) => {
  const [scene, setScene] = useState(1)
  const [cloudProps, setCloudProps] = useState([
    { subtractor: 0, opacity: fadeIn ? 0 : 0.3 },
  ])

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, TOP_CLOUD_SHIFT_TIME)

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
      setCloudProps([{ ...cloudProps[0], opacity: 0 }, newCloudProp])
      setTimeout(() => {
        setCloudProps([{ ...newCloudProp, opacity: 0 }])
      }, 5 * TOP_CLOUD_SHIFT_TIME)
      setTimeout(() => {
        setCloudProps([{ ...newCloudProp, opacity: 0.3 }])
      }, 5 * TOP_CLOUD_SHIFT_TIME + 100)
    }
  }, [scene])

  const topCloudStyle = (scene, opacity) => {
    return {
      position: 'absolute',
      left: `-${60 + scene * 10}px`,
      top: `${-110 + top}px`,
      transform: 'rotate(180deg)',
      opacity,
      transition: 'opacity ease-in-out 1s',
      overflowX: 'hidden',
    }
  }

  return cloudProps.map((cp, i) => (
    <img
      src="images/cloud.svg"
      alt="topCloud"
      key={`topCloud${i}`}
      style={topCloudStyle(scene - cp.subtractor, cp.opacity)}
    />
  ))
}

export default TopCloud
