import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Star from 'components/star/star'
import MiddleCloud from 'components/middleCloud/middleCloud'
import { SCENE04_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene04 = () => {
  const [scene, setScene] = useState(-1)
  const [message, setMessage] = useState()
  const [avocadoSrc, setAvocadoSrc] = useState()
  const navigate = useNavigate()
  const isMobile = window.screen.width < window.innerHeight

  const mapper = {
    1: {
      avocado: 'images/avocado/avocado02.svg',
      message: 'มีใครช่วยฉันได้หรอ',
    },
    2: { avocado: 'images/avocado/avocado03.svg' },
    3: {
      avocado: 'images/avocado/avocado02.svg',
    },
    4: {
      avocado: 'images/avocado/avocado03.svg',
    },
  }

  useEffect(() => {
    setTimeout(() => setScene(1))
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE04_SHIFT_TIME)
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
    if (scene === 5) {
      setTimeout(() => {
        navigate('/scene05')
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
      top: 212 * scaleHeight(),
      left: '50%',
      transform: 'translate(-50%,0%)',
      opacity: scene === 2 ? 1 : 0,
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

export default Scene04
