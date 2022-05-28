import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import { SCENE05_SHIFT_TIME } from 'utils/constant'

const Scene05 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    top: '19%',
    left: '12%',
    transform: 'rotate(-14deg)',
    width: '295px',
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
          top: '19%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      2: {
        message: '“เธอลองให้เรา พาเธอออกไปจากที่นี่ได้มั้ย?”',
        characterStyle: {
          transform: 'rotate(-18deg)',
        },
      },
      3: {
        characterStyle: {
          top: '16%',
          left: '16%',
        },
      },
    },

    [phaseEnum.secondPhase]: {
      1: {
        message: '“ว่าแต่เธอชื่ออะไร”',
        characterStyle: {
          top: '18%',
          left: '15%',
        },
      },
      2: {
        characterStyle: {
          top: '17%',
          left: '15.5%',
        },
      },
      3: {
        characterStyle: {
          top: '19%',
          left: '0%',
          transform: 'rotate(-22deg)',
          width: '380px',
        },
      },
      4: {
        message: '“ฉันขอทำความรู้จักเธอนิดนึงนะ”',
        characterStyle: {
          top: '25%',
          left: '15%',
          width: '300px',
        },
      },
      5: {
        characterStyle: {
          top: '30%',
          left: '20%',
          transform: 'rotate(-12deg)',
          width: '250px',
        },
      },
      6: { characterStyle: { top: '35%', transform: 'rotate(-10deg)' } },
      7: {
        characterStyle: {
          top: '45%',
          transform: 'rotate(5deg)',
        },
      },
      8: {
        characterStyle: {
          top: '55%',
          transform: 'rotate(-5.04deg)',
        },
      },
    },
    [phaseEnum.thirdPhase]: {
      1: {
        message: `เราออกจากที่นี่กันมั้ย ${username}`,
        characterStyle: {
          top: '45%',
          left: '13%',
          width: '300px',
          transform: 'rotate(0deg)',
        },
      },
      2: {
        characterStyle: {
          top: '30%',
          left: '7%',
          width: '350px',
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
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('age', age)
      sessionStorage.setItem('gender', document.getElementById('gender').value)
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
    }
  }

  const backgroundStyles = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
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
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '20px',
      }
    } else {
      return {
        position: 'absolute',
        color: 'white',
        top: '17%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        transform: 'translate(0%)',
        fontSize: '20px',
      }
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <img
        class="bg_purple"
        src={'images/BG_Purple.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />
      <div style={textStyles(scene, phase)}>{message}</div>
      <Star />
      <MiddleCloud />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="character"
        style={characterStyle}
      />
      {phase === phaseEnum.firstPhase && scene >= 3 && (
        <button
          class="button"
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
              style={{ top: '21%', left: '12%' }}
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
              style={{ top: '30%', left: '12%' }}
              placeholder="อายุ"
              value={age}
              onChange={(e) => {
                setAge(e.target.value)
              }}
            />
          )}
          {scene >= 7 && (
            <select
              id="gender"
              class="input"
              style={{ top: '39%', left: '12%', width: '296.5px' }}
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
              style={{ top: '50%', left: '12%' }}
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
