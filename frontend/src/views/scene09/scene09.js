import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE09_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'
import { getPrediction } from 'api/api'

const Scene09 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    width: 161.05 * scaleWidth(),
    height: 162.5 * scaleHeight(),
    top: 470 * scaleHeight(),
    left: 114 * scaleWidth(),
    zIndex: 2,
  })
  const [characterSrc, setCharacterSrc] = useState('images/Chuose08_11.svg')

  const [middleCloudStyle, setMiddleCloudStyle] = useState({
    position: 'absolute',
    width: 434 * scaleWidth(),
    height: 128.48 * scaleHeight(),
    top: 276 * scaleHeight(),
    left: -16 * scaleWidth(),
    zIndex: 3,
  })
  const [middleCloudSrc, setMiddleCloudSrc] = useState(
    'images/MiddleCloud08_11.svg'
  )
  const phaseEnum = {
    firstPhase: 'firstPhase',
    secondPhase: 'secondPhase',
  }

  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')

  const navigate = useNavigate()

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: 'จู่ๆ ก็มีเมฆก้อนดำอยู่รอบตัวฉัน',
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 410 * scaleHeight(),
            left: 121 * scaleWidth(),
          },
        },
      },
      2: {
        middleCloud: {
          src: 'images/MiddleCloud08_12.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 323.19 * scaleWidth(),
            height: 81.01 * scaleHeight(),
            top: 326 * scaleHeight(),
            left: 29 * scaleWidth(),
          },
        },
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 414 * scaleHeight(),
            left: 114 * scaleWidth(),
          },
        },
      },
      3: {
        middleCloud: {
          src: 'images/MiddleCloud08_13.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 552.58 * scaleWidth(),
            height: 124 * scaleHeight(),
            top: 283 * scaleHeight(),
            left: -82 * scaleWidth(),
          },
        },
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 422 * scaleHeight(),
            left: 121 * scaleWidth(),
          },
        },
      },
      4: {
        middleCloud: {
          src: 'images/MiddleCloud09_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 400.58 * scaleWidth(),
            height: 166 * scaleHeight(),
            top: 350 * scaleHeight(),
            left: -47 * scaleWidth(),
            zIndex: 1,
          },
        },
        message: 'มองไปทางไหนก็เจอเมฆก้อนดำ',
        character: {
          src: 'images/Chuose09_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 473 * scaleHeight(),
            left: 114 * scaleWidth(),
          },
        },
      },
      5: {
        middleCloud: {
          src: 'images/MiddleCloud09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 392 * scaleWidth(),
            height: 146 * scaleHeight(),
            top: 357 * scaleHeight(),
            left: 14 * scaleWidth(),
            zIndex: 1,
          },
        },
        character: {
          src: 'images/Chuose09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 475 * scaleHeight(),
            left: 116 * scaleWidth(),
          },
        },
      },
      6: {
        middleCloud: {
          src: 'images/MiddleCloud09_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 350 * scaleWidth(),
            height: 137 * scaleHeight(),
            top: 360 * scaleHeight(),
            left: 20 * scaleWidth(),
            zIndex: 3,
          },
        },
        character: {
          src: 'images/Chuose09_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 466 * scaleHeight(),
            left: 116 * scaleWidth(),
          },
        },
      },
      7: {
        middleCloud: {
          src: 'images/MiddleCloud09_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 450.58 * scaleWidth(),
            height: 159 * scaleHeight(),
            top: 341 * scaleHeight(),
            left: -8 * scaleWidth(),
          },
        },
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 469 * scaleHeight(),
            left: 110 * scaleWidth(),
          },
        },
      },
      8: {
        middleCloud: {
          src: 'images/MiddleCloud09_05.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 450.58 * scaleWidth(),
            height: 159 * scaleHeight(),
            top: 346 * scaleHeight(),
            left: -9 * scaleWidth(),
          },
        },
        message: 'เมฆก้อนดำเพิ่มขึ้นอีกแล้ว...',
        character: {
          src: 'images/Chuose09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 109 * scaleWidth(),
          },
        },
      },
      9: {
        middleCloud: {
          src: 'images/MiddleCloud09_06.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 407.58 * scaleWidth(),
            height: 172 * scaleHeight(),
            top: 341 * scaleHeight(),
            left: 17 * scaleWidth(),
          },
        },
        character: {
          src: 'images/Chuose09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth(),
            height: 163.96 * scaleHeight(),
            top: 469 * scaleHeight(),
            left: 108 * scaleWidth(),
          },
        },
      },
      10: {
        middleCloud: {
          src: 'images/MiddleCloud09_07.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 407.58 * scaleWidth(),
            height: 172 * scaleHeight(),
            top: 344 * scaleHeight(),
            left: 4 * scaleWidth(),
          },
        },
        message: 'มันมากขึ้นจนฉันกลัว',
        character: {
          src: 'images/Chuose09_07.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 487 * scaleHeight(),
            left: 108 * scaleWidth(),
          },
        },
      },
      11: {
        middleCloud: {
          src: 'images/MiddleCloud09_08.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth(),
            height: 184 * scaleHeight(),
            top: 307 * scaleHeight(),
            left: 2 * scaleWidth(),
          },
        },
        character: {
          src: 'images/YellowChuose_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 462 * scaleHeight(),
            left: 108 * scaleWidth(),
          },
        },
      },
      12: {
        middleCloud: {
          src: 'images/MiddleCloud09_09.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth(),
            height: 184 * scaleHeight(),
            top: 319 * scaleHeight(),
            left: 19 * scaleWidth(),
          },
        },
        message: 'เมฆก้อนดำของเธอคือ...',
        character: {
          src: 'images/Chuose09_09.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 123 * scaleWidth(),
          },
        },
      },
    },

    [phaseEnum.secondPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_09_2.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 461.58 * scaleWidth(),
            height: 206 * scaleHeight(),
            top: 295 * scaleHeight(),
            left: 13 * scaleWidth(),
          },
        },
        message: 'เล่าให้ฉันฟังหน่อยสิ',
        character: {
          src: 'images/Chuose09_09_1.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 123 * scaleWidth(),
          },
        },
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE09_SHIFT_TIME)

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
      mapper[phase][scene].middleCloud &&
      mapper[phase][scene].middleCloud.src
    ) {
      setMiddleCloudSrc(mapper[phase][scene].middleCloud.src)
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].middleCloud &&
      mapper[phase][scene].middleCloud.style
    ) {
      setMiddleCloudStyle((middleCloudStyle) => {
        return {
          ...middleCloudStyle,
          ...mapper[phase][scene].middleCloud.style,
        }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].character &&
      mapper[phase][scene].character.src
    ) {
      setCharacterSrc(mapper[phase][scene].character.src)
    }
  }, [scene])

  const shiftPhase = (phase) => {
    setScene(1)
    setPhase(phase)
  }

  const onClickNext = () => {
    getPrediction()
      .then((res) => {
        const { data } = res
        sessionStorage.setItem('LEVEL', data.label)
      })
      .catch((_) => {})
    setTimeout(() => {
      navigate('/analyse')
    }, 1500)
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
      backgroundColor:
        scene == 20 && phase == phaseEnum.fifthPhase ? 'black' : '',
      transitionDuration: scene >= 19 ? '1s' : '',
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
      top: 290 * scaleHeight(),
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      border: '1px',
      zIndex: 5,
    }
  }
  return (
    <div style={containerStyle(scene)}>
      <div
        style={
          scene >= 19 && phase === phaseEnum.fifthPhase
            ? {}
            : backgroundStyles(scene)
        }
      >
        <p style={messageStyle(scene)}>
          {message}
          {phase === phaseEnum.sixthPhase && (
            <div style={{ fontSize: '18px', width: '100%', color: 'black' }}>
              {`ความคิด : ${question3}`}
              <br />
              {`ความรู้สึก : ${question4}`}
              <br />
              {`พฤติกรรม : ${question5}`}
            </div>
          )}
        </p>
        {scene >= 1 && scene <= 18 && (
          <div>
            <BottomCloud ttl={15 * SCENE09_SHIFT_TIME} />
          </div>
        )}
        {phase === phaseEnum.firstPhase && scene >= 2 && (
          <div>
            <TopCloud ttl={15 * SCENE09_SHIFT_TIME} />
          </div>
        )}
        {phase !== phaseEnum.firstPhase && scene <= 18 && (
          <div>
            <TopCloud ttl={15 * SCENE09_SHIFT_TIME} />
          </div>
        )}
        {phase === phaseEnum.firstPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}
        {phase === phaseEnum.secondPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}
        {phase === phaseEnum.firstPhase && scene >= 12 && (
          <div>
            <textarea
              id="feeling-textarea"
              style={{ ...textboxStyle(scene) }}
              value={question1}
              onChange={(e) => setQuestion1(e.target.value.slice(0, 280))}
            ></textarea>
            <button
              class="button-info"
              style={{
                top: 713 * scaleHeight(),
                left: 73 * scaleWidth(),
                position: 'absolute',
              }}
              onClick={() => {
                sessionStorage.setItem('TEXT_Q1', question1)
                shiftPhase(phaseEnum.secondPhase)
              }}
            >
              ไปต่อ
            </button>
          </div>
        )}

        {phase === phaseEnum.secondPhase && (
          <div>
            <textarea
              id="feeling-textarea"
              style={{ ...textboxStyle(scene) }}
              value={question2}
              onChange={(e) => setQuestion2(e.target.value.slice(0, 280))}
            ></textarea>
            <button
              class="button-info"
              style={{
                top: 713 * scaleHeight(),
                left: 73 * scaleWidth(),
                position: 'absolute',
              }}
              onClick={() => {
                sessionStorage.setItem('TEXT_Q2', question2)
                onClickNext()
              }}
            >
              ไปต่อ
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Scene09
