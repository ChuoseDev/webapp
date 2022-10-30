import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import {
  onePercentageOfRealHeight,
  scaleHeight,
  scaleWidth,
  SCENE05_SHIFT_TIME,
} from 'utils/constant'

const Scene05 = () => {
  const [scene, setScene] = useState(1)
  const scaleMean = (scaleHeight() + scaleWidth()) / 2
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    top: 19 * onePercentageOfRealHeight(),
    left: '12%',
    transform: 'rotate(-14deg)',
    width: `${scaleWidth() * 295}px`,
  })
  const phaseEnum = {
    firstPhase: 'firstPhase',
    secondPhase: 'secondPhase',
    thirdPhase: 'thirdPhase',
  }
  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const navigate = useNavigate()

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: '“ได้สิ”',
        characterStyle: {
          position: 'absolute',
          top: 19 * onePercentageOfRealHeight(),
          left: '12%',
          transform: 'rotate(-14deg)',
          width: `${scaleWidth() * 295}px`,
        },
      },
      3: {
        message: '“เธอลองให้เรา พาเธอออกไปจากที่นี่ได้มั้ย?”',
        characterStyle: {
          position: 'absolute',
          transform: 'rotate(-18deg)',
        },
      },
      4: {
        characterStyle: {
          position: 'absolute',
          top: 16 * onePercentageOfRealHeight(),
          left: '16%',
        },
      },
    },

    [phaseEnum.secondPhase]: {
      1: {
        message: '“ว่าแต่เธอชื่ออะไร”',
        characterStyle: {
          position: 'absolute',
          top: 18 * onePercentageOfRealHeight(),
          left: '15%',
        },
      },
      2: {
        characterStyle: {
          position: 'absolute',
          top: 17 * onePercentageOfRealHeight(),
          left: '15.5%',
        },
      },
      3: {
        characterStyle: {
          position: 'absolute',
          top: 19 * onePercentageOfRealHeight(),
          left: '0%',
          transform: 'rotate(-22deg)',
          width: `${scaleWidth() * 380}px`,
        },
      },
      4: {
        message: '“ฉันขอทำความรู้จักเธอนิดนึงนะ”',
        characterStyle: {
          position: 'absolute',
          top: 25 * onePercentageOfRealHeight(),
          left: '15%',
          width: `${scaleWidth() * 300}px`,
        },
      },
      5: {
        characterStyle: {
          position: 'absolute',
          top: 30 * onePercentageOfRealHeight(),
          left: '20%',
          transform: 'rotate(-12deg)',
          width: `${scaleWidth() * 250}px`,
        },
      },
      6: {
        characterStyle: {
          top: 35 * onePercentageOfRealHeight(),
          transform: 'rotate(-10deg)',
        },
      },
      7: {
        characterStyle: {
          position: 'absolute',
          top: 45 * onePercentageOfRealHeight(),
          transform: 'rotate(5deg)',
        },
      },
      8: {
        characterStyle: {
          position: 'absolute',
          top: 55 * onePercentageOfRealHeight(),
          transform: 'rotate(-5.04deg)',
        },
      },
    },
    [phaseEnum.thirdPhase]: {
      1: {
        message: `เราออกจากที่นี่กันมั้ย ${username}`,
        characterStyle: {
          position: 'absolute',
          top: 45 * onePercentageOfRealHeight(),
          left: '13%',
          width: `${scaleWidth() * 300}px`,
          transform: 'rotate(0deg)',
        },
      },
      2: {
        characterStyle: {
          position: 'absolute',
          top: 30 * onePercentageOfRealHeight(),
          left: '7%',
          width: `${scaleWidth() * 350}px`,
          transform: 'rotate(-7.5deg)',
        },
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE05_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[phase][scene] && mapper[phase][scene].message) {
      setMessage(mapper[phase][scene].message)
    }

    if (mapper[phase][scene] && mapper[phase][scene].characterStyle) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[phase][scene].characterStyle }
      })
    }
    if (phase === phaseEnum.thirdPhase && scene === 3) {
      navigate('/scene06')
    }
  }, [scene])

  const shiftPhase = (phase) => {
    if (phase === phaseEnum.thirdPhase) {
      sessionStorage.setItem('CUST_USR_NM', username)
      sessionStorage.setItem('CUST_AGE', age)
      sessionStorage.setItem(
        'CUST_GENDER',
        document.getElementById('gender').value
      )
    }
    setScene(0)
    setPhase(phase)
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
  const textStyles = (scene, phase) => {
    if (
      phase === phaseEnum.firstPhase ||
      (phase === phaseEnum.secondPhase && scene <= 2)
    ) {
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
        top: 17 * onePercentageOfRealHeight(),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        transform: 'translate(0%)',
        fontSize: scaleMean * 20,
      }
    }
  }

  const buttonStyles = () => {
    return {
      position: 'absolute',
      top: 85 * onePercentageOfRealHeight(),
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <img
        src={'images/BG_Purple.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />
      <div style={textStyles(scene, phase)}>{message}</div>
      <Star />
      <MiddleCloud />
      <img
        src={'images/Charactor.svg'}
        alt="character"
        style={characterStyle}
      />
      {phase === phaseEnum.firstPhase && scene >= 3 && (
        <button
          className="button"
          style={buttonStyles()}
          onClick={() => shiftPhase(phaseEnum.secondPhase)}
        >
          ลองดู
        </button>
      )}
      {phase === phaseEnum.secondPhase && (
        <div>
          {scene >= 5 && (
            <input
              class="input"
              style={{ top: 21 * onePercentageOfRealHeight(), left: '12%' }}
              placeholder="ชื่อผู้ใช้"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          )}
          {scene >= 6 && (
            <input
              class="input"
              style={{ top: 30 * onePercentageOfRealHeight(), left: '12%' }}
              placeholder="อายุ"
              value={age}
              onChange={(e) => {
                setAge(e.target.value)
              }}
            />
          )}
          {scene >= 7 && (
            <select
              class="input"
              id="gender"
              style={{
                top: 39 * onePercentageOfRealHeight(),
                left: '12%',
                width: '296.5px',
              }}
            >
              <option value="">เพศ</option>
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
              <option value="others">อื่น ๆ</option>
            </select>
          )}

          {scene >= 8 && (
            <button
              class="input"
              style={{ top: 50 * onePercentageOfRealHeight(), left: '12%' }}
              onClick={() => shiftPhase(phaseEnum.thirdPhase)}
            >
              ไปต่อ
            </button>
          )}
        </div>
      )}
    </div>
  )
}
export default Scene05
