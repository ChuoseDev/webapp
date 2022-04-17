import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE03_SHIFT_TIME } from 'utils/constant'

const Scene15 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    top: '-18.5%',
    left: '-3.85%',
    transform: 'rotate(-22deg)',
    width: '185px',
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
        top: '-20%',
        left: '2.93%',
        transform: 'rotate(-22deg)',
        width: '284.44px',
      },
    },
    6: {
      message: ' ',
      characterStyle: {
        top: '-15%',
        left: '7%',
        transform: 'rotate(-22deg)',
        width: '284.44px',
      },
    },
    7: {
      message: ' ',
      characterStyle: {
        top: '-9%',
        left: '12%',
        transform: 'rotate(-20deg)',
        width: '295px',
      },
    },
    8: {
      message: '“สวัสดี เราชูโอสนะ”',
      characterStyle: {
        top: '0%',
        left: '12%',
        transform: 'rotate(-17deg)',
        width: '295px',
      },
    },
    9: {
      message: '“สวัสดี เราชูโอสนะ”',
      characterStyle: {
        top: '6%',
        left: '12%',
        transform: 'rotate(-5deg)',
        width: '295px',
      },
    },
    10: {
      message: '“เราอยากช่วยเธอ”',
      characterStyle: {
        top: '15%',
        left: '12%',
        transform: 'rotate(-5deg)',
        width: '295px',
      },
    },
    11: {
      message: '“เราอยากช่วยเธอ”',
      characterStyle: {
        top: '19%',
        left: '12%',
        transform: 'rotate(-14deg)',
        width: '295px',
      },
    },
  }

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
    }
  }
  const backgroundStyles = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
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

  return (
    <div style={containerStyle(scene)}>
      <img
        class="bg_purple"
        src={'images/BG_Purple.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />
      <div className={scene >= 8 ? 'text_buttom' : 'text_center'}>
        {message}
      </div>
      <Star />
      <MiddleCloud />

      {scene >= 3 && scene <= 7 && (
        <TopCloud top={-50} ttl={4000} fadeIn={true} />
      )}
      {scene >= 3 && <BottomCloud fadeIn={true} />}
    </div>
  )
}

export default Scene15
