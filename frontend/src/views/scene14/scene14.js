import MiddleCloud from 'components/middleCloud/middleCloud'
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
    top: '19%',
    left: '12%',
    transform: 'rotate(-14deg)',
    width: '295px',
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
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      3: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-25deg)',
          width: '295px',
        },
      },
      5: {
        message:
          'เป็นเพราะความคิดของเราที่ทำให้ยึดติดกับเรื่องราวในอดีตและสิ่งที่ยังไม่เกิดขึ้น',
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      7: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-10deg)',
          width: '295px',
        },
      },
      9: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(- )',
          width: '295px',
        },
      },
      11: {
        message: '“ถ้าเธอรู้ตัวว่ากำลังมีความคิดลบอัตโนมัติอยู่”',
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      13: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-25deg)',
          width: '295px',
        },
      },
      15: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg )',
          width: '295px',
        },
      },
      17: {
        message: '“ก็นับเป็นก้าวใหญ่มากเลยนะที่จะพาเธออกไปจากตรงนี้"',
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-6deg)',
          width: '295px',
        },
      },
      19: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      21: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-25deg)',
          width: '295px',
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
    }
  }

  const backgroundStyles = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
    }
  }

  const goNext = () => {
    navigate('/scene15')
  }

  return (
    <div style={containerStyle(scene)}>
      <img
        class="bg_purple"
        src={'images/BG_Purple.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />
      <div className={'text_top'}>{message}</div>
      <Star />
      <MiddleCloud />
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
            style={{ top: '50%' }}
            onClick={() => goNext()}
          >
            ไปต่อ
          </button>
        </div>
      )}
    </div>
  )
}

export default Scene14
