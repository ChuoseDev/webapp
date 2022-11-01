import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { scaleMean, SCENE13_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene13 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    width: 242.34 * scaleWidth(),
    height: 327 * scaleHeight(),
    top: 337.5 * scaleHeight(),
    left: 75.18 * scaleWidth(),
  })
  const [characterSrc, setCharacterSrc] = useState('images/ChuoseShadow_01.svg')
  const [thunderStyle, setThunderStyle] = useState({
    position: 'absolute',
    top: 282 * scaleHeight(),
    left: 239.61 * scaleWidth(),
    width: 24.5 * scaleWidth(),
    height: 60.5747 * scaleHeight(),
    zIndex: 2,
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
        character: {
          src: 'images/ChuoseShadow_03.svg',
          style: {
            width: 243 * scaleWidth(),
            top: 338 * scaleHeight(),
            left: 75 * scaleWidth(),
          },
        },
      },
      9: {
        character: {
          src: 'images/ChuoseShadow_04.svg',
        },
      },
      10: {
        message: '“หรือเราเป็นคนเดินเข้าไปหามันกันนะ?”',
        character: {
          src: 'images/ChuoseShadow_05.svg',
          style: {
            width: 241 * scaleWidth(),
            top: 461 * scaleHeight(),
            height: 204 * scaleHeight(),
            left: 76 * scaleWidth(),
          },
        },
      },
      11: {
        character: {
          src: 'images/ChuoseShadow_06.svg',
          style: {
            width: 198 * scaleWidth(),
            height: 181 * scaleHeight(),
            left: 96 * scaleWidth(),
            top: 479 * scaleHeight(),
          },
        },
        blackCloudStyle: {
          left: 90 * scaleWidth(),
          width: 210 * scaleWidth(),
          height: 109.36 * scaleHeight(),
        },
      },
      12: {
        character: {
          src: 'images/ChuoseShadow_07.svg',
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
    if (mapper[phase][scene] && mapper[phase][scene].thunderStyle) {
      setThunderStyle((thunderStyle) => {
        return { ...thunderStyle, ...mapper[phase][scene].thunderStyle }
      })
    }
    if (mapper[phase][scene] && mapper[phase][scene].blackCloudStyle) {
      setBlackCloudStyle((blackCloudStyle) => {
        return { ...blackCloudStyle, ...mapper[phase][scene].blackCloudStyle }
      })
    }
    if (phase === phaseEnum.secondPhase && scene === 4) {
      sessionStorage.setItem('TEXT_14_07', feeling)
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
      height: window.innerHeight,
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
      top: 232 * scaleHeight(),
      fontSize: 18 * scaleMean(),
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
      top: 300 * scaleHeight(),
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      border: '1px solid',
      zIndex: 5,
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
              placeholder="พิมพ์ข้อความ.."
              style={textboxStyle(scene)}
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button-info"
              style={{
                position: 'absolute',
                bottom: 200 * scaleHeight(),
                left: '50%',
                transform: 'translateX(-50%)',
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
