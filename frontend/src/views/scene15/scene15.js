import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene15/scene15.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import { SCENE15_SHIFT_TIME } from 'utils/constant'

const Scene15 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const mapper = {
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
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
      message: '“ฉันรู้ว่าเธอพยายามอยู่เสมอ”',
    },

    12: {
      message: '“อย่าเจ็บปวดเกินไปเลยนะ”',
    },
    13: {
      message: '“ฉันจะอยู่ข้างๆเธอเอง”',
    },
    14: { message: '' },
  }

  const containerStyle = (scene) => {
    if (scene >= 2 && scene <= 9) {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: '100vh',
        backgroundColor: 'black',
      }
    } else {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: '100vh',
      }
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
    }, SCENE15_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && mapper[scene].message) {
      setMessage(mapper[scene].message)
    }
  }, [scene])

  return (
    <div style={containerStyle(scene)}>
      {scene == 4 && (
        <img
          className={'img_center'}
          src={'images/CloseDoor.svg'}
          alt="closedoor"
        />
      )}
      <div className={'text_center'}>{message}</div>
      {scene >= 3 && scene <= 9 && (
        <>
          <Star />
          <MiddleCloud />
        </>
      )}
    </div>
  )
}

export default Scene15
