import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Scene01 = () => {
  const [scene, setScene] = useState(1)
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const navigate = useNavigate()

  useEffect(() => {
    const time = 250
    let acc = 0
    for (let i = 2; i < 25; i = i + 1) {
      acc += time
      setTimeout(() => {
        setScene(i)
        if (i === 24) {
          setTimeout(() => {
            navigate('/scene02')
          })
        }
      }, acc)
    }
  }, [])

  const containerStyle = (scene) => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: `rgba(0, 0, 0, ${0.1 * scene})`,
      position: 'absolute',
      opacity: scene < 24 ? 1 : 0,
      transition: 'opacity ease-in-out 1s',
    }
  }

  const characterStyle = (scene) => {
    const sizeScale = Math.pow(1.1, scene - 1)
    return {
      position: 'absolute',
      left: `${(190 - 97 * sizeScale) * scaleWidth}px`,
      top: `${260 * scaleHeight}px`,
      width: `${sizeScale * 203}px`,
      height: `${sizeScale * 243}px`,
      transition: '0s',
    }
  }

  const characterWithHandStyle = (scene) => {
    const sizeScale = scene <= 10 ? Math.pow(1.1, scene - 6) : Math.pow(1.1, 5)
    const top = 260 * scaleHeight + (scene > 9 ? 30 : 0)
    return {
      position: 'absolute',
      left: `${(190 - 175 * sizeScale) * scaleWidth}px`,
      top: `${top}px`,
      width: `${sizeScale * 361}px`,
      height: `${sizeScale * 406}px`,
      opacity: scene <= 11 ? 1 : 0,
      transition: scene <= 11 ? '0s' : '1s',
    }
  }

  const topCloudStyle = (scene) => {
    return {
      position: 'absolute',
      left: `-${10 + scene * 10}px`,
      top: '-110px',
      transform: 'rotate(180deg)',
      opacity: '0.3',
    }
  }

  const bottomCloudStyle = (scene) => {
    return {
      position: 'absolute',
      left: `-${630 + scene * 10}px`,
      top: '500px',
      opacity: '0.3',
    }
  }

  const starStyle = (scene) => {
    return {
      position: 'absolute',
      left: `0px`,
      top: `${(scene % 4 < 2) * 10}px`,
    }
  }

  const textStyle = (scene) => {
    const colorNumber = (255 * scene) / 8
    return {
      position: 'absolute',
      top: `${(scene >= 12 ? 190 : 0) + 180 * scaleHeight}px`,
      opacity: `${scene >= 15 ? 0 : 1}`,
      color: `rgba(${colorNumber}, ${colorNumber}, ${colorNumber}, 1)`,
      fontSize: `${18 * scaleWidth}px`,
      width: `${window.screen.width}px`,
      textAlign: 'center',
      transition: '1s',
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <div style={textStyle(scene)}>
        ตัวฉันที่กำลังลอยอยู่ในความคิด
        <br />
        ...
      </div>
      <img src="images/star.svg" alt="star" style={starStyle(scene)} />
      {scene <= 5 && (
        <img
          src="images/greyChar_00.svg"
          alt="greyCharacterSleep"
          style={characterStyle(scene)}
        />
      )}
      {scene > 5 && (
        <img
          src="images/greyChar_01.svg"
          alt="greyCharacterSleepWithHand"
          style={characterWithHandStyle(scene)}
        />
      )}
      <img src="images/cloud.svg" alt="topCloud" style={topCloudStyle(scene)} />
      <img
        src="images/cloud.svg"
        alt="bottomCloud"
        style={bottomCloudStyle(scene)}
      />
    </div>
  )
}

export default Scene01
