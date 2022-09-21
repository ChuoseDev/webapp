import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { SCENE13_SHIFT_TIME } from 'utils/constant'
import '../scene03/purple.css'
import axios from 'axios'

const Scene13 = () => {
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
    secondPhase: 'secondPhase',
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
      2: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-25deg)',
          width: '295px',
        },
      },
      3: {
        message:
          'เป็นเพราะความคิดของเราที่ทำให้ยึดติดกับเรื่องราวในอดีตและสิ่งที่ยังไม่เกิดขึ้น',
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      4: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-10deg)',
          width: '295px',
        },
      },
      5: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(- )',
          width: '295px',
        },
      },
      6: {
        message: '“ถ้าเธอรู้ตัวว่ากำลังมีความคิดลบอัตโนมัติอยู่”',
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
          transform: 'rotate(-25deg)',
          width: '295px',
        },
      },
      8: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg )',
          width: '295px',
        },
      },
      9: {
        message: '“ก็นับเป็นก้าวใหญ่มากเลยนะที่จะพาเธออกไปจากตรงนี้"',
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-6deg)',
          width: '295px',
        },
      },
      10: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        },
      },
      11: {
        characterStyle: {
          top: '35%',
          left: '12%',
          transform: 'rotate(-25deg)',
          width: '295px',
        },
      },
      12: {
        message: '“มาถึงตรงนี้แล้ว มีอะไรอยากบอกกับตัวเองมั้ย?”',
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE13_SHIFT_TIME)

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

  const goNext = async () => {
    sessionStorage.setItem('TEXT_Q2', anything)
    try {
      const { data } = await axios.post('http://127.0.0.1:5000/', {
        CUST_USR_NM: sessionStorage.getItem('CUST_USR_NM'),
        CUST_AGE: sessionStorage.getItem('CUST_AGE'),
        CUST_GENDER: sessionStorage.getItem('CUST_GENDER'),
        TEXT_Q1: sessionStorage.getItem('TEXT_Q1'),
        TEXT_Q2: sessionStorage.getItem('TEXT_Q2'),
      })
      sessionStorage.setItem('LEVEL', data.label)
      navigate('/level')
    } catch (error) {
      throw error
    }
  }

  const textStyles = (scene) => {
    return {
      position: 'absolute',
      color: 'white',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '20px',
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
      <div className={'text_top'}>{message}</div>
      <Star />
      <MiddleCloud />
      {phase === phaseEnum.firstPhase && scene < 12 && (
        <img
          class="charactor"
          src={'images/Charactor.svg'}
          alt="character"
          style={characterStyle}
        />
      )}
      {phase === phaseEnum.firstPhase && scene >= 12 && (
        <div>
          <textarea
            class="textbox"
            style={{ top: '30%' }}
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

export default Scene13
