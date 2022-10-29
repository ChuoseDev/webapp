import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE13_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene13 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    width: 161.05 * scaleWidth(),
    height: 162.5 * scaleHeight(),
    top: 470 * scaleHeight(),
    left: 114 * scaleWidth(),
  })
  const [characterSrc, setCharacterSrc] = useState('images/ChuoseShadow_01.svg')
  const [projection, setProjection] = useState('images/ProjectionShadow_01.svg')
  const [thunderStyle, setThunderStyle] = useState({
    position: 'absolute',
    top: 282 * scaleHeight(),
    left: 239.61 * scaleWidth(),
    width: 24.5 * scaleWidth(),
    height: 60.5747 * scaleHeight(),
    zIndex: 2,
  })
  const [projectionStyle, setProjectionStyle] = useState({
    position: 'absolute',
    top: 337.5 * scaleHeight(),
    left: 75.18 * scaleWidth(),
    width: 242.34 * scaleWidth(),
    height: 327 * scaleHeight(),
  })
  const [shadowStyle, setShadowStyle] = useState({
    position: 'absolute',
    top: 615 * scaleHeight(),
    left: 76 * scaleWidth(),
    width: 241 * scaleWidth(),
    height: 50 * scaleHeight(),
  })
  const [blackCloudStyle, setBlackCloudStyle] = useState({
    position: 'absolute',
    top: 297 * scaleHeight(),
    left: 64 * scaleWidth(),
    width: 262.23 * scaleWidth(),
    height: 136.55 * scaleHeight(),
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
      4: {
        message: '“อืม...”',
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161.05 * scaleWidth(),
            height: 162.5 * scaleHeight(),
            top: 470 * scaleHeight(),
            left: 114 * scaleWidth(),
          },
        },
      },
      5: {
        character: {
          src: 'images/ChuoseShadow_02.svg',
        },
        thunderStyle: {
          top: 369 * scaleHeight(),
          left: 104.61 * scaleWidth(),
        },
      },
      6: {
        character: {
          src: 'images/ChuoseShadow_01.svg',
        },
        thunderStyle: {
          top: 297 * scaleHeight(),
          left: 252.61 * scaleWidth(),
        },
      },
      7: {
        message: '“เมฆก้อนดำกลืนกินเราจริงๆหรอ?”',
        thunderStyle: {
          opacity: 0,
        },
      },
      8: {
        projection: {
          src: 'images/ProjectionShadow_02.svg',
          style: {
            height: 229 * scaleHeight(),
          },
        },
      },
      9: {
        character: {
          src: 'images/ChuoseShadow_03.svg',
          style: {
            height: 169.37 * scaleHeight(),
            top: 461 * scaleHeight(),
          },
        },
        projection: {
          src: 'images/ProjectionShadow_03.svg',
          style: {
            height: 169 * scaleHeight(),
          },
        },
      },
      10: {
        message: '“หรือเราเป็นคนเดินเข้าไปหามันกันนะ?”',
        character: {
          src: 'images/ChuoseShadow_04.svg',
          style: {
            height: 171.77 * scaleHeight(),
            left: 115 * scaleWidth(),
          },
        },
        projection: {
          style: {
            opacity: 0,
          },
        },
      },
      11: {
        character: {
          src: 'images/ChuoseShadow_05.svg',
          style: {
            height: 181 * scaleHeight(),
            top: 479 * scaleHeight(),
            left: 114 * scaleWidth(),
          },
        },
        shadowStyle: {
          top: 596 * scaleHeight(),
          left: 96 * scaleWidth(),
          width: 198 * scaleWidth(),
          height: 39 * scaleHeight(),
        },
        blackCloudStyle: {
          left: 90 * scaleWidth(),
          width: 210 * scaleWidth(),
          height: 109.36 * scaleHeight(),
        },
      },
      12: {
        character: {
          style: {
            top: 499 * scaleHeight(),
            left: 109 * scaleWidth(),
            width: 172.62 * scaleWidth(),
            height: 194 * scaleHeight(),
          },
        },
        blackCloudStyle: {
          left: 103 * scaleWidth(),
          width: 185 * scaleWidth(),
          height: 96.34 * scaleHeight(),
        },
        shadowStyle: {
          opacity: 0,
        },
      },
      13: {
        message: '“เธอคิดว่ายังไง?”',
        character: {
          style: {
            opacity: 0,
          },
        },
        blackCloudStyle: { opacity: 0 },
      },
    },

    [phaseEnum.secondPhase]: { 1: { message: ' ' } },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE13_SHIFT_TIME)

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
    if (phase === phaseEnum.secondPhase && scene === 4) {
      navigate('/scene14')
    }
  }, [scene])

  const shiftPhase = (phase) => {
    setScene(1)
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
      height: window.screen.height,
      backgroundColor: scene === 2 ? 'black' : '',
      transitionDuration: scene >= 1 && scene <= 4 ? '1s' : '',
    }
  }

  const backgroundStyles = (scene) => {
    return {
      width: 390 * scaleWidth(),
      height: 844 * scaleHeight(),
      position: 'relative',
      transition: 'opacity ease-in-out 1s',
      background:
        'linear-gradient(359.76deg, #dbdbdb 2.45%, #ffffff 30.14%, #ffffff 43.59%, #ffffff 62.56%, #e8e8e8 101.6%)',
    }
  }
  const messageStyle = (scene) => {
    return {
      position: 'absolute',
      top: 232 * scaleWidth(),
      fontSize: '18px',
      width: '100%',
      color: 'black',
    }
  }
  const textboxStyle = (scene) => {
    return {
      position: 'absolute',
      display: 'flex',
      width: 317 * scaleWidth(),
      height: 110 * scaleHeight(),
      left: '50%',
      transform: 'translate(-50%, 0)',
      top: 300 * scaleWidth(),
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderStyle: 'none',
      zIndex: 3,
    }
  }
  return (
    <div style={containerStyle(scene)}>
      <div style={scene >= 4 ? backgroundStyles(scene) : {}}>
        <p style={messageStyle(scene)}>{message}</p>
        {phase === phaseEnum.firstPhase && scene >= 4 && (
          <div>
            <img
              style={thunderStyle}
              src={'images/Thunderbolt.svg'}
              alt="shadow"
            />
            <img src={'images/Shadow.svg'} alt="shadow" style={shadowStyle} />
            <img
              style={blackCloudStyle}
              src={
                scene == 12
                  ? 'images/blackCloud_02.svg'
                  : 'images/blackCloud_01.svg'
              }
              alt="blackCloud"
            />
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img src={projection} alt="projection" style={projectionStyle} />
          </div>
        )}
        {scene >= 4 && (
          <div>
            <TopCloud ttl={15 * SCENE13_SHIFT_TIME} />
            <BottomCloud ttl={15 * SCENE13_SHIFT_TIME} />
          </div>
        )}
        {phase === phaseEnum.firstPhase && scene >= 13 && (
          <div>
            <textarea
              id="feeling-textarea"
              style={{ ...textboxStyle(scene) }}
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button-info"
              style={{
                top: 497 * scaleHeight(),
                left: 71 * scaleWidth(),
                position: 'absolute',
              }}
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
export default Scene13
