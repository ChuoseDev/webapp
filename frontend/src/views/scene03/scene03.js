import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import {
  onePercentageOfRealHeight,
  scaleHeight,
  scaleWidth,
  SCENE03_SHIFT_TIME,
} from 'utils/constant'

const Scene03 = () => {
  const [scene, setScene] = useState(1)
  const scaleMean = (scaleHeight() + scaleWidth()) / 2
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    top: -18.5 * onePercentageOfRealHeight(),
    left: '-3.85%',
    transform: 'rotate(-22deg)',
    width: `${scaleWidth() * 185}px`,
  })

  const navigate = useNavigate()
  const mapper = {
    1: {
      message: 'กุ๊งกิ๊ง กุ๊งกิ๊ง',
    },
    2: {
      message: 'กุ๊งกิ๊ง กุ๊งกิ๊ง',
    },
    3: {
      message: 'กุ๊งกิ๊ง กุ๊งกิ๊ง',
    },
    4: {
      message: 'เสียงอะไรน่ะ',
    },
    5: {
      message: 'เสียงอะไรน่ะ',
      characterStyle: {
        top: -20 * onePercentageOfRealHeight(),
        left: '2.93%',
        transform: 'rotate(-22deg)',
        width: `${scaleWidth() * 284.44}px`,
      },
    },
    6: {
      message: ' ',
      characterStyle: {
        position: 'absolute',
        top: -15 * onePercentageOfRealHeight(),
        left: '7%',
        transform: 'rotate(-22deg)',
        width: `${scaleWidth() * 284.44}px`,
      },
    },
    7: {
      message: ' ',
      characterStyle: {
        position: 'absolute',
        top: -9 * onePercentageOfRealHeight(),
        left: '12%',
        transform: 'rotate(-20deg)',
        width: `${scaleWidth() * 295}px`,
      },
    },
    8: {
      message: '“สวัสดี เราชูโอสนะ”',
      characterStyle: {
        position: 'absolute',
        top: 0 * onePercentageOfRealHeight(),
        left: '12%',
        transform: 'rotate(-17deg)',
        width: `${scaleWidth() * 295}px`,
      },
    },
    9: {
      message: '“สวัสดี เราชูโอสนะ”',
      characterStyle: {
        position: 'absolute',
        top: 6 * onePercentageOfRealHeight(),
        left: '12%',
        transform: 'rotate(-5deg)',
        width: `${scaleWidth() * 295}px`,
      },
    },
    10: {
      message: '“เราอยากช่วยเธอ”',
      characterStyle: {
        position: 'absolute',
        top: 15 * onePercentageOfRealHeight(),
        left: '12%',
        transform: 'rotate(-5deg)',
        width: `${scaleWidth() * 295}px`,
      },
    },
    11: {
      message: '“เราอยากช่วยเธอ”',
      characterStyle: {
        position: 'absolute',
        top: 19 * onePercentageOfRealHeight(),
        left: '12%',
        transform: 'rotate(-14deg)',
        width: `${scaleWidth() * 295}px`,
      },
    },
  }

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      width: window.screen.width,
      height: window.innerHeight,
    }
  }
  const backgroundStyles = (scene) => {
    if (scaleHeight > scaleWidth) {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        height: window.innerHeight,
      }
    } else {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        width: window.screen.width,
      }
    }
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE03_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && mapper[scene].message) {
      setMessage(mapper[scene].message)
    }

    if (mapper[scene] && mapper[scene].characterStyle) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[scene].characterStyle }
      })
    }
    if (scene === 11) {
      navigate('/scene04')
    }
  }, [scene])

  const textStyles = (scene) => {
    if (scene >= 8) {
      return {
        position: 'absolute',
        color: 'white',
        top: 75 * onePercentageOfRealHeight(),
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: scaleMean * 20,
      }
    } else {
      return {
        position: 'absolute',
        color: 'white',
        top: 50 * onePercentageOfRealHeight(),
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: scaleMean * 20,
      }
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <img
        src={'images/BG_Purple.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />
      <div style={textStyles(scene)}>{message}</div>
      <Star />
      <MiddleCloud />
      {scene >= 4 && (
        <img
          src={'images/Charactor.svg'}
          alt="character"
          style={characterStyle}
        />
      )}
      {scene >= 3 && scene <= 7 && (
        <TopCloud top={-50} ttl={4000} fadeIn={true} />
      )}
      {scene >= 3 && <BottomCloud fadeIn={true} />}
    </div>
  )
}

export default Scene03
