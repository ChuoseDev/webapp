import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { SCENE013_SHIFT_TIME } from 'utils/constant'
import '../scene03/purple.css'

const Scene13 = () => {
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
        message: 'ถ้าเธอรู้ตัวว่ากำลังมีความคิดลบแบบไม่พักอยู่ ',
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
        message: 'ก็นับเป็นก้าวใหญ่มากเลยนะที่จะพาเธออกไปจากตรงนี้ ',
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
        message: 'มาถึงตรงนี้แล้ว เธอรู้สึกยังไงบ้าง?',
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE013_SHIFT_TIME)

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
      {phase === phaseEnum.firstPhase && scene >= 12 && <div></div>}
    </div>
  )
}

export default Scene13
