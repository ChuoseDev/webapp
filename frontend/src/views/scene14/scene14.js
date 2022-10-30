import MiddleCloud from 'components/middleCloud/middleCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import Star from 'components/star/star'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { SCENE14_SHIFT_TIME } from 'utils/constant'
import '../scene03/purple.css'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene14 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [anything, setAnything] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    top: 200 * scaleHeight(),
    left: 500 * scaleWidth(),
    transform: 'rotate(-10deg)',
    width: 300 * scaleWidth(),
  })
  const phaseEnum = {
    firstPhase: 'firstPhase',
  }
  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const navigate = useNavigate()

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: 'นั่นสินะ',
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-16deg)',
          width: 150 * scaleWidth(),
        },
      },
      3: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-30deg)',
          width: 150 * scaleWidth(),
        },
      },
      5: {
        message:
          'เป็นเพราะความคิดของเราที่ทำให้ยึดติดกับเรื่องราวในอดีตและสิ่งที่ยังไม่เกิดขึ้น',
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-13deg)',
          width: 150 * scaleWidth(),
        },
      },
      7: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-5deg)',
          width: 150 * scaleWidth(),
        },
      },
      9: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-14deg)',
          width: 150 * scaleWidth(),
        },
      },
      11: {
        message: '“ถ้าเธอรู้ตัวว่ากำลังมีความคิดลบอัตโนมัติอยู่”',
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-23deg)',
          width: 150 * scaleWidth(),
        },
      },
      13: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-34deg)',
          width: 150 * scaleWidth(),
        },
      },
      15: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-24deg )',
          width: 150 * scaleWidth(),
        },
      },
      17: {
        message: '“ก็นับเป็นก้าวใหญ่มากเลยนะที่จะพาเธออกไปจากตรงนี้"',
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-15deg)',
          width: 150 * scaleWidth(),
        },
      },
      19: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-10deg)',
          width: 150 * scaleWidth(),
        },
      },
      21: {
        characterStyle: {
          top: 300 * scaleHeight(),
          left: 115 * scaleWidth(),
          transform: 'rotate(-17deg)',
          width: 150 * scaleWidth(),
        },
      },
      23: {
        message: '“มาถึงตรงนี้แล้ว มีอะไรอยากบอกกับตัวเองมั้ย?”',
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE14_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  })

  useEffect(() => {
    if (mapper[phase][scene] && mapper[phase][scene].message) {
      setMessage(mapper[phase][scene].message)
    }

    if (mapper[phase][scene] && mapper[phase][scene].characterStyle) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[phase][scene].characterStyle }
      })
    }
  }, [scene])

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      height: window.screen.height,
    }
  }

  const messageStyle = (scene) => {
    return {
      position: 'absolute',
      top: 150 * scaleHeight(),
      fontSize: '18px',
      width: '100%',
      color: 'white',
    }
  }

  const backgroundStyle = (scene) => {
    return {
      width: 390 * scaleWidth(),
      height: 844 * scaleHeight(),
      position: 'relative',
      // transition: 'opacity ease-in-out 1s',
      background: '#5D53A3',
    }
  }

  const goNext = () => {
    sessionStorage.setItem('USER_SPEECH_TO_THEMSELVES', anything)
    navigate('/scene15')
  }

  return (
    <div style={containerStyle(scene)}>
      <div style={backgroundStyle(scene)}>
        <p style={messageStyle(scene)}>{message}</p>
        <Star />
        <MiddleCloud />
        <BottomCloud />
        {phase === phaseEnum.firstPhase && scene < 24 && (
          <img
            class="charactor"
            src={'images/Charactor.svg'}
            alt="character"
            style={characterStyle}
          />
        )}
        {phase === phaseEnum.firstPhase && scene >= 24 && (
          <div>
            <textarea
              class="textbox"
              style={{
                top: '30%',
                left: 12 * scaleWidth(),
                position: 'absolute',
                width: 317 * scaleWidth(),
                height: 100 * scaleHeight(),
              }}
              value={anything}
              onChange={(e) => setAnything(e.target.value)}
            ></textarea>
            <button
              class="button"
              style={{ top: 500 * scaleHeight() }}
              onClick={() => goNext()}
            >
              ไปต่อ
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Scene14
