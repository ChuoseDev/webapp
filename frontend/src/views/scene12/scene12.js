import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import './scene12.css'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE12_SHIFT_TIME } from 'utils/constant'

const Scene12 = () => {
  const scaleHeight = window.screen.height / 844
  const scaleWidth = window.screen.width / 390
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    width: 161.05 * scaleWidth,
    height: 162.5 * scaleHeight,
    top: 470 * scaleHeight,
    left: 114 * scaleWidth,
  })
  const [characterSrc, setCharacterSrc] = useState('images/ChuoseShadow_01.svg')
  const [projection, setProjection] = useState('images/ProjectionShadow_01.svg')
  const [thunderStyle, setThunderStyle] = useState({
    top: 282 * scaleHeight,
    left: 239.61 * scaleWidth,
    width: 24.5 * scaleWidth,
    height: 60.5747 * scaleHeight,
    zIndex: 2,
  })
  const [projectionStyle, setProjectionStyle] = useState({
    top: 337.5 * scaleHeight,
    left: 75.18 * scaleWidth,
    width: 242.34 * scaleWidth,
    height: 327 * scaleHeight,
  })
  const [shadowStyle, setShadowStyle] = useState({
    top: 615 * scaleHeight,
    left: 76 * scaleWidth,
    width: 241 * scaleWidth,
    height: 50 * scaleHeight,
  })
  const [blackCloudStyle, setBlackCloudStyle] = useState({
    top: 297 * scaleHeight,
    left: 64 * scaleWidth,
    width: 262.23 * scaleWidth,
    height: 136.55 * scaleHeight,
    zIndex: 1,
  })

  const phaseEnum = {
    firstPhase: 'firstPhase',
    secondPhase: 'secondPhase',
  }

  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const [feeling, setFeeling] = useState('')
  const navigate = useNavigate()

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: '“อืม...”',
        character: {
          style: {
            width: 161.05 * scaleWidth,
            height: 162.5 * scaleHeight,
            top: 470 * scaleHeight,
            left: 114 * scaleWidth,
          },
        },
      },
      2: {
        character: {
          src: 'images/ChuoseShadow_02.svg',
        },
        thunderStyle: {
          top: 369 * scaleHeight,
          left: 104.61 * scaleWidth,
        },
      },
      3: {
        character: {
          src: 'images/ChuoseShadow_01.svg',
        },
        thunderStyle: {
          top: 297 * scaleHeight,
          left: 252.61 * scaleWidth,
        },
      },
      4: {
        message: '“เมฆก้อนดำกลืนกินเราจริงๆหรอ?”',
        thunderStyle: {
          opacity: 0,
        },
      },
      5: {
        projection: {
          src: 'images/ProjectionShadow_02.svg',
          style: {
            height: 229 * scaleHeight,
          },
        },
      },
      6: {
        character: {
          src: 'images/ChuoseShadow_03.svg',
          style: {
            height: 169.37 * scaleHeight,
            top: 461 * scaleHeight,
          },
        },
        projection: {
          src: 'images/ProjectionShadow_03.svg',
          style: {
            height: 169 * scaleHeight,
          },
        },
      },
      7: {
        message: '“หรือเราเป็นคนเดินเข้าไปหามันกันนะ?”',
        character: {
          src: 'images/ChuoseShadow_04.svg',
          style: {
            height: 171.77 * scaleHeight,
            left: 115 * scaleWidth,
          },
        },
        projection: {
          style: {
            opacity: 0,
          },
        },
      },
      8: {
        character: {
          src: 'images/ChuoseShadow_05.svg',
          style: {
            height: 181 * scaleHeight,
            top: 479 * scaleHeight,
            left: 114 * scaleWidth,
          },
        },
        shadowStyle: {
          top: 596 * scaleHeight,
          left: 96 * scaleWidth,
          width: 198 * scaleWidth,
          height: 39 * scaleHeight,
        },
        blackCloudStyle: {
          left: 90 * scaleWidth,
          width: 210 * scaleWidth,
          height: 109.36 * scaleHeight,
        },
      },
      9: {
        character: {
          style: {
            top: 499 * scaleHeight,
            left: 109 * scaleWidth,
            width: 172.62 * scaleWidth,
            height: 194 * scaleHeight,
          },
        },
        blackCloudStyle: {
          left: 103 * scaleWidth,
          width: 185 * scaleWidth,
          height: 96.34 * scaleHeight,
        },
        shadowStyle: {
          opacity: 0,
        },
      },
      10: {
        message: '“เธอคิดว่ายังไง?”',
        character: {
          style: {
            opacity: 0,
          },
        },
        blackCloudStyle: { opacity: 0 },
      },
    },

    [phaseEnum.secondPhase]: {
      1: {},
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE12_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[phase][scene] && mapper[phase][scene].message) {
      setMessage(mapper[phase][scene].message)
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].character &&
      mapper[phase][scene].character.style
    ) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[phase][scene].character.style }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].character &&
      mapper[phase][scene].character.src
    ) {
      setCharacterSrc(mapper[phase][scene].character.src)
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].projection &&
      mapper[phase][scene].projection.src
    ) {
      setProjection(mapper[phase][scene].projection.src)
    }
    if (mapper[phase][scene] && mapper[phase][scene].thunderStyle) {
      setThunderStyle((thunderStyle) => {
        return { ...thunderStyle, ...mapper[phase][scene].thunderStyle }
      })
    }
    if (mapper[phase][scene] && mapper[phase][scene].shadowStyle) {
      setShadowStyle((shadowStyle) => {
        return { ...shadowStyle, ...mapper[phase][scene].shadowStyle }
      })
    }
    if (mapper[phase][scene] && mapper[phase][scene].blackCloudStyle) {
      setBlackCloudStyle((shadowStyle) => {
        return { ...shadowStyle, ...mapper[phase][scene].blackCloudStyle }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].projection &&
      mapper[phase][scene].projection.style
    ) {
      setProjectionStyle((projectionStyle) => {
        return { ...projectionStyle, ...mapper[phase][scene].projection.style }
      })
    }
    if (phase === phaseEnum.secondPhase && scene === 3) {
      // change scene
    }
  }, [scene])

  const shiftPhase = (phase) => {
    console.log(feeling)
    setScene(0)
    setPhase(phase)
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

  return (
    <div style={containerStyle(scene)}>
      <div className="background">
        <div className="text_top">{message}</div>

        <img
          class="shadow"
          style={thunderStyle}
          src={'images/Thunderbolt.svg'}
          alt="shadow"
        />
        <img
          class="shadow"
          src={'images/Shadow.svg'}
          alt="shadow"
          style={shadowStyle}
        />
        <img
          class="cloud"
          style={blackCloudStyle}
          src={
            scene == 9 ? 'images/blackCloud_02.svg' : 'images/BlackCloud_01.svg'
          }
          alt="blackCloud"
        />
        <img
          class="charactor"
          src={characterSrc}
          alt="character"
          style={characterStyle}
        />
        <img
          class="projection"
          src={projection}
          alt="projection"
          style={projectionStyle}
        />

        {phase === phaseEnum.firstPhase && scene >= 10 && (
          <div>
            <textarea
              id="feeling-textarea"
              class="textbox"
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button"
              onClick={() => shiftPhase(phaseEnum.secondPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Scene12
