import { useState, useEffect } from 'react'
import { SCENE08_SHIFT_TIME } from 'utils/constant'
import TopCloud from 'components/topCloud/topCloud'
import { useNavigate } from 'react-router'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene08 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    transform: 'rotate(0deg)',
    width: 166 * scaleWidth(),
    height: 169.05 * scaleWidth(),
    top: 349 * scaleHeight(),
    left: 112 * scaleWidth(),
  })
  const [characterSrc, setCharacterSrc] = useState('images/YellowChuose_01.svg')
  const [friendStyle, setFriendStyle] = useState({
    opacity: 0,
    position: 'absolute',
    transform: 'rotate(0deg)',
  })
  const [friendSrc, setfriendSrc] = useState()
  const phaseEnum = {
    firstPhase: 'firstPhase',
    secondPhase: 'secondPhase',
  }
  const [phase, setPhase] = useState(phaseEnum.firstPhase)

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: '“เราใช้ชีวิตในโลกที่เต็มไปด้วยความคาดหวัง”',
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            width: 166 * scaleWidth(),
            height: 169.05 * scaleHeight(),
            top: 349 * scaleHeight(),
            left: 112 * scaleWidth(),
          },
        },
      },
      2: {
        friend: {
          src: 'images/CloudText01.svg',
          style: {
            opacity: 1,
            width: 101.01 * scaleWidth(),
            height: 64 * scaleHeight(),
            top: 277 * scaleHeight(),
            left: 219 * scaleWidth(),
          },
        },
      },
      3: {
        character: {
          style: {
            width: 159 * scaleWidth(),
            height: 161.92 * scaleHeight(),
            top: 448.11 * scaleHeight(),
            left: 139.13 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/CloudText07_08.svg',
          style: {
            width: 323.05 * scaleWidth(),
            height: 219.04 * scaleHeight(),
            top: 252 * scaleHeight(),
            left: 34 * scaleWidth(),
          },
        },
      },
      4: {
        character: {
          style: {
            width: 150 * scaleWidth(),
            height: 152.76 * scaleHeight(),
            top: 497 * scaleHeight(),
            left: 109 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/CloudText07_09.svg',
          style: {
            width: 350.31 * scaleWidth(),
            height: 273.76 * scaleHeight(),
            top: 275 * scaleHeight(),
            left: 17 * scaleWidth(),
          },
        },
      },
      5: {
        message: 'ทุกคนเข้ามา...',
        character: {
          style: {
            width: 142.41 * scaleWidth(),
            height: 145.03 * scaleHeight(),
            top: 473 * scaleHeight(),
            left: 104 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/CloudText07_10.svg',
          style: {
            width: 350.78 * scaleWidth(),
            height: 225.76 * scaleHeight(),
            top: 352 * scaleHeight(),
            left: 21 * scaleWidth(),
          },
        },
      },
      6: {
        character: {
          src: 'images/YellowChuose_09.svg',
          style: {
            width: 135.54 * scaleWidth(),
            height: 138.03 * scaleHeight(),
            top: 448 * scaleHeight(),
            left: 128 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/CloudText07_11.svg',
          style: {
            width: 382 * scaleWidth(),
            height: 219.76 * scaleHeight(),
            top: 348 * scaleHeight(),
            left: 6 * scaleWidth(),
          },
        },
      },
      7: {
        message: 'และก็จากเราไปมากมายเช่นกัน',
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            width: 142.41 * scaleWidth(),
            height: 145.03 * scaleHeight(),
            top: 491 * scaleHeight(),
            left: 103 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/Friend07_12.svg',
          style: {
            width: 370.78 * scaleWidth(),
            height: 228.76 * scaleHeight(),
            top: 372 * scaleHeight(),
            left: 11 * scaleWidth(),
          },
        },
      },
      8: {
        character: {
          src: 'images/YellowChuose_02.svg',
          style: {
            top: 465 * scaleHeight(),
            left: 114 * scaleWidth(),
            width: 150 * scaleWidth(),
            height: 152.76 * scaleHeight(),
          },
        },
        friend: {
          src: 'images/Friend07_13.svg',
          style: {
            width: 369.31 * scaleWidth(),
            height: 186.76 * scaleHeight(),
            top: 331 * scaleHeight(),
            left: 9 * scaleWidth(),
          },
        },
      },
      9: {
        message: 'ทุกคนต่างเดินไปข้างหน้า',
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            width: 137.23 * scaleWidth(),
            height: 139.76 * scaleHeight(),
            top: 475 * scaleHeight(),
            left: 128 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/Friend08_01.svg',
          style: {
            width: 357.34 * scaleWidth(),
            height: 227.76 * scaleHeight(),
            top: 373 * scaleHeight(),
            left: 17 * scaleWidth(),
          },
        },
      },
      10: {
        character: {
          style: {
            width: 147.05 * scaleWidth(),
            height: 149.76 * scaleHeight(),
            top: 382 * scaleHeight(),
            left: 121.9 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/Friend08_02.svg',
          style: {
            width: 357.07 * scaleWidth(),
            height: 229.76 * scaleHeight(),
            top: 466 * scaleHeight(),
            left: 14 * scaleWidth(),
            zIndex: 1,
          },
        },
      },
      11: {
        character: {
          style: {
            top: 379 * scaleHeight(),
            left: 128 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/Friend08_03.svg',
          style: {
            width: 350.07 * scaleWidth(),
            height: 312.79 * scaleHeight(),
            top: 540 * scaleHeight(),
            left: 20 * scaleWidth(),
          },
        },
      },
      12: {
        character: {
          style: {
            top: 386 * scaleHeight(),
            left: 121 * scaleWidth(),
          },
        },
        friend: {
          src: 'images/Friend08_04.svg',
          style: {
            width: 350.07 * scaleWidth(),
            height: 235.79 * scaleHeight(),
            top: 659 * scaleHeight(),
            left: 15 * scaleWidth(),
          },
        },
      },
      13: {
        message: 'แต่ฉัน...',
        character: {
          src: 'images/YellowChuose_03.svg',
          style: {
            top: 377 * scaleHeight(),
            left: 112 * scaleWidth(),
            width: 166.05 * scaleWidth(),
            height: 169.11 * scaleHeight(),
          },
        },
        friend: {
          style: { opacity: 0 },
        },
      },
      14: {
        message: 'ยังอยู่ที่เดิม',
        character: {
          src: 'images/YellowChuose_04.svg',
          style: {
            top: 380 * scaleHeight(),
            left: 114 * scaleWidth(),
            width: 161.05 * scaleWidth(),
            height: 162.5 * scaleHeight(),
          },
        },
      },
      15: {
        message: 'เธอเคยรู้สึกแบบเดียวกับฉันมั้ย?',
        character: {
          src: 'images/YellowChuose_05.svg',
          style: {
            top: 390 * scaleHeight(),
            left: 115 * scaleWidth(),
            width: 157.75 * scaleWidth(),
            height: 159.17 * scaleHeight(),
          },
        },
      },
    },
    [phaseEnum.secondPhase]: {
      1: {
        message: 'ฉันใช้ชีวิตไปเรื่อยๆ',
        character: {
          src: 'images/YellowChuose_08.svg',
          style: {
            width: 382 * scaleWidth(),
            height: 331.03 * scaleHeight(),
            top: 250 * scaleHeight(),
            left: -6 * scaleWidth(),
          },
        },
      },
      3: {
        message: 'หันมาอีกที',
        character: {
          src: 'images/YellowChuose_10.svg',
          style: {
            height: 137.91 * scaleHeight(),
            width: 132.54 * scaleWidth(),
            left: 131 * scaleWidth(),
            top: 391 * scaleHeight(),
          },
        },
      },
      4: {
        message: 'ก็ไม่เจอใครแล้ว...',
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            height: 137.91 * scaleHeight(),
            width: 132.54 * scaleWidth(),
            left: 137 * scaleWidth(),
            top: 398 * scaleHeight(),
          },
        },
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE08_SHIFT_TIME)

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
      mapper[phase][scene].friend &&
      mapper[phase][scene].friend.style
    ) {
      setFriendStyle((friendStyle) => {
        return { ...friendStyle, ...mapper[phase][scene].friend.style }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].friend &&
      mapper[phase][scene].friend.src
    ) {
      setfriendSrc(mapper[phase][scene].friend.src)
    }
    if (phase === phaseEnum.secondPhase && scene === 5) {
      navigate('/scene09')
    }
  }, [scene])

  const shiftPhase = (phase) => {
    setPhase(phase)
    setScene(1)
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
      transitionDuration: '1s',
    }
  }

  const backgroundStyles = (scene) => {
    return {
      width: 390 * scaleWidth(),
      height: 844 * scaleHeight(),
      position: 'relative',
      transition: 'opacity ease-in-out 1s',
      background:
        (phase === phaseEnum.firstPhase && scene < 12) ||
        (phase === phaseEnum.secondPhase && scene === 1)
          ? 'linear-gradient(359.76deg, #DBDBDB 2.45%, #FFFFFF 22.04%, #FFFFFF 43.59%, #FFFFFF 82.88%, #E8E8E8 101.6%)'
          : phase === phaseEnum.secondPhase && scene >= 2
          ? 'linear-gradient(359.76deg, #DBDBDB 15.35%, #FFFFFF 52.05%, #FFFFFF 52.18%, #FFFFFF 55.64%, #E8E8E8 74.79%)'
          : 'linear-gradient(359.76deg, #DBDBDB 2.45%, #FFFFFF 33.49%, #FFFFFF 43.59%, #FFFFFF 61.92%, #E8E8E8 101.6%)',

      // (phase === phaseEnum.firstPhase && scene < 12) ||
      // (phase === phaseEnum.secondPhase && scene === 1)
      //   ? 'linear-gradient(359.76deg, #DBDBDB 2.45%, #FFFFFF 22.04%, #FFFFFF 43.59%, #FFFFFF 82.88%, #E8E8E8 101.6%)'
      //   : phase === phaseEnum.secondPhase && scene >= 2
      //   ? 'linear-gradient(359.76deg, #DBDBDB 2.45%, #FFFFFF 33.49%, #FFFFFF 43.59%, #FFFFFF 61.92%, #E8E8E8 101.6%)'
      //   : 'linear-gradient(359.76deg, #DBDBDB 15.35%, #FFFFFF 52.05%, #FFFFFF 52.18%, #FFFFFF 55.64%, #E8E8E8 74.79%)',
    }
  }

  const buttonGroupStyle = (scene) => {
    return {
      position: 'absolute',
      top: 225 * scaleHeight(),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }
  }

  const messageStyle = (scene) => {
    return {
      position: 'absolute',
      top:
        phase === phaseEnum.firstPhase && scene >= 15
          ? 171 * scaleHeight()
          : 206 * scaleHeight(),
      fontSize: '18px',
      width: '100%',
      color: 'black',
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <div style={backgroundStyles(scene)}>
        <p style={messageStyle(scene)}>{message}</p>
        <img src={friendSrc} alt="friend" style={friendStyle} />
        <img src={characterSrc} alt="character" style={characterStyle} />
        {phase === phaseEnum.firstPhase && scene >= 15 && (
          <div style={buttonGroupStyle(scene)}>
            <button
              class="button-info"
              style={{ marginTop: 10 * scaleHeight() }}
              onClick={() => shiftPhase(phaseEnum.secondPhase)}
            >
              เคย
            </button>
            <button
              class="button-info"
              style={{ marginTop: 10 * scaleHeight() }}
              onClick={() => shiftPhase(phaseEnum.secondPhase)}
            >
              ไม่เคย
            </button>
          </div>
        )}
        {phase === phaseEnum.secondPhase && scene >= 2 && (
          <TopCloud ttl={2 * SCENE08_SHIFT_TIME} />
        )}
      </div>
    </div>
  )
}

export default Scene08
