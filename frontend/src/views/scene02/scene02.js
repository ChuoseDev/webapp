import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Star from 'components/star/star'
import MiddleCloud from 'components/middleCloud/middleCloud'
import { SCENE02_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene02 = () => {
  const [scene, setScene] = useState(-1)
  const [message, setMessage] = useState()
  const [avocadoSrc, setAvocadoSrc] = useState()
  const navigate = useNavigate()
  const scaleMean = (scaleHeight() + scaleWidth()) / 2
  const isMobile = window.screen.width < window.innerHeight

  const mapper = {
    1: {
      message: 'เหนื่อยจัง...',
    },
    3: { message: 'ทำไมอะไร ๆ มันยากไปหมดเลย' },
    4: { avocado: 'images/avocado/avocado01.svg' },
    5: { message: 'หรือฉัน...', avocado: 'images/avocado/avocado01.svg' },
    6: { avocado: 'images/avocado/avocado02.svg' },
    7: {
      message: 'ไม่เหมาะกับโลกใบนี้',
      avocado: 'images/avocado/avocado03.svg',
    },
    8: { avocado: 'images/avocado/avocado03.svg' },
    9: {
      message: 'มีแค่ฉันหรือเปล่า',
      avocado: 'images/avocado/avocado04.svg',
    },
    10: { avocado: 'images/avocado/avocado05.svg' },
    11: {
      message: 'ที่ต้องจมอยู่แบบนี้',
      avocado: 'images/avocado/avocado03.svg',
    },
    12: { avocado: 'images/avocado/avocado06.svg' },
    13: { message: 'ไม่มีความสุขเลย', avocado: 'images/avocado/avocado03.svg' },
  }

  useEffect(() => {
    setTimeout(() => setScene(1))
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE02_SHIFT_TIME)
    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && mapper[scene].message) {
      setMessage(mapper[scene].message)
    }
    if (mapper[scene] && mapper[scene].avocado) {
      setAvocadoSrc(mapper[scene].avocado)
    }
    if (scene === 14) {
      setTimeout(() => {
        navigate('/scene03')
      }, 1000)
    }
  }, [scene])

  const containerStyle = (scene) => {
    return {
      width: window.screen.width,
      height: window.innerHeight,
      position: 'relative',
      overflow: 'hidden',
      opacity: 1,
      transition: 'opacity ease-in-out 1s',
      backgroundColor: '#000000',
    }
  }

  const messageStyle = (scene) => {
    return {
      transition: 'ease-in-out 1s',
      top: scene < 5 ? 412 * scaleHeight() : 212 * scaleHeight(),
      left: '50%',
      transform: 'translate(-50%,0%)',
      opacity: scene % 2 === 1 ? 1 : 0,
      position: 'absolute',
      color: '#ffffff',
      fontSize: `${18 * scaleWidth}px`,
      width: `${window.screen.width}px`,
    }
  }

  const avocadoStyle = (scene) => {
    return {
      width: `${window.screen.width}px`,
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%,0%)',
      opacity: scene < 4 ? 0 : 1,
      // transition: 'ease-in-out 2s',
      transition: '0s',
    }
  }

  return (
    <div style={containerStyle(scene)}>
      {isMobile && <MiddleCloud />}
      {isMobile && <Star />}
      <div style={messageStyle(scene)}>{message}</div>
      <img src={avocadoSrc} style={avocadoStyle(scene)} />
    </div>
  )
}

export default Scene02
