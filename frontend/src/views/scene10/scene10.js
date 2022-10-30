import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE10_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene10 = () => {
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
    thirdPhase: 'thirdPhase',
    fourthPhase: 'fourthPhase',
    fifthPhase: 'fifthPhase',
  }

  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')

  const navigate = useNavigate()

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_10.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 461.58 * scaleWidth(),
            height: 206 * scaleHeight(),
            top: 295 * scaleHeight(),
            left: 13 * scaleWidth(),
          },
        },
        message: 'เธอคิดยังไงกับเรื่องเล่าของเธอล่ะ?',
        character: {
          src: 'images/Chuose09_10.svg',
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
      2: {
        middleCloud: {
          src: 'images/MiddleCloud09_10.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 407.58 * scaleWidth(),
            height: 172 * scaleHeight(),
            top: 344 * scaleHeight(),
            left: 4 * scaleWidth(),
          },
        },
        message: 'ฉันจมปลักอยู่กับเมฆก้อนดำ',
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
      3: {
        middleCloud: {
          src: 'images/MiddleCloud09_11.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth(),
            height: 184 * scaleHeight(),
            top: 307 * scaleHeight(),
            left: 2 * scaleWidth(),
          },
        },
        message: 'และความคิดของตัวเอง',
        character: {
          src: 'images/Chuose09_11.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 462 * scaleHeight(),
            left: 106 * scaleWidth(),
          },
        },
      },
      4: {
        middleCloud: {
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth(),
            height: 184 * scaleHeight(),
            top: 319 * scaleHeight(),
            left: 19 * scaleWidth(),
          },
        },
        message: 'เธอรู้สึกยังไงกับเรื่องนี้ล่ะ?',
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
    [phaseEnum.thirdPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_13.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 443.58 * scaleWidth(),
            height: 189 * scaleHeight(),
            top: 316 * scaleHeight(),
            left: 13 * scaleWidth(),
          },
        },
        message: 'เธอคิดว่าเมฆก้อนดำส่งผลกระทบกับเธอยังไง?',
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
    [phaseEnum.fourthPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_14.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.56 * scaleWidth(),
            height: 184 * scaleHeight(),
            top: 319 * scaleHeight(),
            left: 19 * scaleWidth(),
          },
        },
        message: 'ฉันรับรู้ว่าเธอกำลัง..',
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
      2: {
        middleCloud: {
          src: 'images/MiddleCloud09_14.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.56 * scaleWidth(),
            height: 184 * scaleHeight(),
            top: 319 * scaleHeight(),
            left: 19 * scaleWidth(),
          },
        },
        message: 'ฉันรับรู้ว่าเธอกำลัง..',
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
      3: {
        middleCloud: {
          src: 'images/MiddleCloud09_15.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 443.58 * scaleWidth(),
            height: 183 * scaleHeight(),
            top: 320 * scaleHeight(),
            left: 26 * scaleWidth(),
          },
        },
        message: 'ฉันรับรู้ว่าเธอกำลัง..',
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
    [phaseEnum.fifthPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud10_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 403 * scaleWidth(),
            height: 169 * scaleHeight(),
            top: 316 * scaleHeight(),
            left: 79 * scaleWidth(),
          },
        },
        message: 'สุดท้าย',
        character: {
          src: 'images/Chuose10_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 123 * scaleWidth(),
          },
        },
      },
      2: {
        middleCloud: {
          src: 'images/MiddleCloud10_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 341.58 * scaleWidth(),
            height: 183 * scaleHeight(),
            top: 316 * scaleHeight(),
            left: 149 * scaleWidth(),
          },
        },
        message: 'สุดท้าย',
        character: {
          src: 'images/Chuose10_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 123 * scaleWidth(),
          },
        },
      },
      3: {
        middleCloud: {
          src: 'images/MiddleCloud10_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 488 * scaleWidth(),
            height: 118.61 * scaleHeight(),
            top: 303 * scaleHeight(),
            left: -26 * scaleWidth(),
          },
        },
        message: 'สุดท้าย...',
        character: {
          src: 'images/Chuose10_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 123 * scaleWidth(),
          },
        },
      },
      4: {
        middleCloud: {
          src: 'images/MiddleCloud10_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 225.65 * scaleWidth(),
            height: 114.36 * scaleHeight(),
            top: 303 * scaleHeight(),
            left: 81 * scaleWidth(),
          },
        },
        message: 'เมฆก้อนดำก็...',
        character: {
          src: 'images/Chuose10_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
            top: 474 * scaleHeight(),
            left: 123 * scaleWidth(),
          },
        },
      },
      5: {
        middleCloud: {
          style: {
            opacity: 0,
          },
        },
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_05.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      6: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_06.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      7: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_07.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      8: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_08.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      9: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_08.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      10: {
        message: '...',
        character: {
          src: 'images/ChuoseCloud10_10.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      11: {
        message: 'บางครั้ง...เธอเคยรู้สึกมั้ย?',
        character: {
          src: 'images/ChuoseCloud11_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      12: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      13: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      14: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      15: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_05.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth(),
            height: 368 * scaleHeight(),
            top: 297 * scaleHeight(),
            left: 64 * scaleWidth(),
          },
        },
      },
      16: {
        message: ' ',
        character: {
          style: {
            opacity: 0,
          },
        },
      },
      17: {},
      18: {},
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE10_SHIFT_TIME)

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
    if (phase === phaseEnum.fifthPhase && scene === 18) {
      navigate('/scene11')
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
      backgroundColor:
        scene == 20 && phase == phaseEnum.thirdPhase ? 'black' : '',
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
          scene >= 19 && phase === phaseEnum.thirdPhase
            ? {}
            : backgroundStyles(scene)
        }
      >
        <p style={messageStyle(scene)}>
          {message}
          {phase === phaseEnum.fourthPhase && (
            <div style={{ fontSize: '18px', width: '100%', color: 'black' }}>
              {`ความคิด : ${question3}`}
              <br />
              {`ความรู้สึก : ${question4}`}
              <br />
              {`พฤติกรรม : ${question5}`}
            </div>
          )}
        </p>

        {scene <= 18 && (
          <div>
            <BottomCloud ttl={15 * SCENE10_SHIFT_TIME} />
          </div>
        )}
        {scene <= 18 && (
          <div>
            <TopCloud ttl={15 * SCENE10_SHIFT_TIME} />
          </div>
        )}

        {phase !== phaseEnum.fourthPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}

        {phase === phaseEnum.firstPhase && scene >= 2 && (
          <div>
            <textarea
              id="feeling-textarea"
              style={{ ...textboxStyle(scene) }}
              value={question3}
              onChange={(e) => setQuestion3(e.target.value.slice(0, 280))}
            ></textarea>
            <button
              class="button-info"
              style={{
                top: 713 * scaleHeight(),
                left: 73 * scaleWidth(),
                position: 'absolute',
              }}
              onClick={() => {
                sessionStorage.setItem('TEXT_Q3', question3)
                shiftPhase(phaseEnum.secondPhase)
              }}
            >
              ไปต่อ
            </button>
          </div>
        )}

        {phase === phaseEnum.secondPhase && scene >= 4 && (
          <div>
            <textarea
              id="feeling-textarea"
              style={{ ...textboxStyle(scene) }}
              value={question4}
              onChange={(e) => setQuestion4(e.target.value.slice(0, 280))}
            ></textarea>
            <button
              class="button-info"
              style={{
                top: 713 * scaleHeight(),
                left: 73 * scaleWidth(),
                position: 'absolute',
              }}
              onClick={() => shiftPhase(phaseEnum.thirdPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}

        {phase === phaseEnum.thirdPhase && (
          <div>
            <textarea
              id="feeling-textarea"
              style={{ ...textboxStyle(scene) }}
              value={question5}
              onChange={(e) => setQuestion5(e.target.value.slice(0, 280))}
            ></textarea>
            <button
              class="button-info"
              style={{
                top: 713 * scaleHeight(),
                left: 73 * scaleWidth(),
                position: 'absolute',
              }}
              onClick={() => shiftPhase(phaseEnum.fourthPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
        {phase === phaseEnum.fourthPhase && (
          <div>
            <button
              class="button-info"
              style={{
                top: 713 * scaleHeight(),
                left: 73 * scaleWidth(),
                position: 'absolute',
              }}
              onClick={() => shiftPhase(phaseEnum.fifthPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Scene10
