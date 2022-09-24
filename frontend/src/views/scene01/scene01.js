import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Star from 'components/star/star'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE01_SHIFT_TIME, VIEW_CHANGING_DELAY_TIME } from 'utils/constant'

const Scene01 = () => {
  const [scene, setScene] = useState(1)
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const navigate = useNavigate()
  const totalScene = 24

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE01_SHIFT_TIME)
    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (scene === totalScene) {
      setTimeout(() => {
        navigate('/scene02')
      }, VIEW_CHANGING_DELAY_TIME)
    }
  }, [scene])

  const containerStyle = (scene) => {
    return {
      width: window.screen.width,
      height: window.screen.height,
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: `rgba(0, 0, 0, ${0.1 * scene})`,
      opacity: 1,
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
      <Star />
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
      <TopCloud ttl={totalScene * SCENE01_SHIFT_TIME} />
      <BottomCloud ttl={totalScene * SCENE01_SHIFT_TIME} />
    </div>
  )
}

export default Scene01
