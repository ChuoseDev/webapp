import { useState, useEffect } from 'react'
import { SCENE08_SHIFT_TIME } from 'utils/constant'
import './scene08.css'
import TopCloud from 'components/topCloud/topCloud'
import { useNavigate } from 'react-router'

const Scene08 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const scaleHeight = window.screen.height / 844
  const scaleWidth = window.screen.width / 390
  const navigate = useNavigate()
  const [characterStyle, setCharacterStyle] = useState({
    width: 166 * scaleWidth,
    height: 169.05 * scaleWidth,
    top: 349 * scaleHeight,
    left: 112 * scaleWidth,
  })
  const [characterSrc, setCharacterSrc] = useState('images/YellowChuose_01.svg')
  const [friendStyle, setFriendStyle] = useState({ opacity: 0 })
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
            width: 166 * scaleWidth,
            height: 169.05 * scaleWidth,
            top: 349 * scaleHeight,
            left: 112 * scaleWidth,
          },
        },
      },
      2: {
        friend: {
          src: 'images/CloudText01.svg',
          style: {
            opacity: 1,
            width: 101.01 * scaleWidth,
            height: 64 * scaleWidth,
            top: 277 * scaleHeight,
            left: 219 * scaleWidth,
          },
        },
      },
      3: {
        character: {
          style: {
            width: 159 * scaleWidth,
            height: 161.92 * scaleWidth,
            top: 448.11 * scaleHeight,
            left: 139.13 * scaleWidth,
          },
        },
        friend: {
          src: 'images/CloudText07_08.svg',
          style: {
            width: 323.05 * scaleWidth,
            height: 219.04 * scaleWidth,
            top: 252 * scaleHeight,
            left: 34 * scaleWidth,
          },
        },
      },
      4: {
        character: {
          style: {
            width: 150 * scaleWidth,
            height: 152.76 * scaleWidth,
            top: 497 * scaleHeight,
            left: 109 * scaleWidth,
          },
        },
        friend: {
          src: 'images/CloudText07_09.svg',
          style: {
            width: 350.31 * scaleWidth,
            height: 273.76 * scaleWidth,
            top: 275 * scaleHeight,
            left: 17 * scaleWidth,
          },
        },
      },
      5: {
        message: 'ทุกคนเข้ามา...',
        character: {
          style: {
            width: 142.41 * scaleWidth,
            height: 145.03 * scaleWidth,
            top: 473 * scaleHeight,
            left: 104 * scaleWidth,
          },
        },
        friend: {
          src: 'images/CloudText07_10.svg',
          style: {
            width: 350.78 * scaleWidth,
            height: 225.76 * scaleWidth,
            top: 352 * scaleHeight,
            left: 21 * scaleWidth,
          },
        },
      },
      6: {
        character: {
          style: {
            width: 135.54 * scaleWidth,
            height: 138.03 * scaleWidth,
            top: 448 * scaleHeight,
            left: 128 * scaleWidth,
          },
        },
        friend: {
          src: 'images/CloudText07_11.svg',
          style: {
            width: 382 * scaleWidth,
            height: 219.76 * scaleWidth,
            top: 348 * scaleHeight,
            left: 6 * scaleWidth,
          },
        },
      },
      7: {
        message: 'และก็จากเราไปมากมายเช่นกัน',
        character: {
          style: {
            width: 142.41 * scaleWidth,
            height: 145.03 * scaleWidth,
            top: 491 * scaleHeight,
            left: 103 * scaleWidth,
          },
        },
        friend: {
          src: 'images/Friend07_12.svg',
          style: {
            width: 370.78 * scaleWidth,
            height: 228.76 * scaleWidth,
            top: 372 * scaleHeight,
            left: 11 * scaleWidth,
          },
        },
      },
      8: {
        character: {
          src: 'images/YellowChuose_02.svg',
          style: {
            top: 465 * scaleHeight,
            left: 114 * scaleWidth,
            width: 150 * scaleWidth,
            height: 152.76 * scaleHeight,
          },
        },
        friend: {
          src: 'images/Friend07_13.svg',
          style: {
            width: 369.31 * scaleWidth,
            height: 186.76 * scaleWidth,
            top: 331 * scaleHeight,
            left: 9 * scaleWidth,
          },
        },
      },
      9: {
        message: 'ทุกคนต่างเดินไปข้างหน้า',
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            width: 137.23 * scaleWidth,
            height: 139.76 * scaleWidth,
            top: 475 * scaleHeight,
            left: 128 * scaleWidth,
          },
        },
        friend: {
          src: 'images/Friend08_01.svg',
          style: {
            width: 357.34 * scaleWidth,
            height: 227.76 * scaleWidth,
            top: 373 * scaleHeight,
            left: 17 * scaleWidth,
          },
        },
      },
      10: {
        character: {
          style: {
            width: 147.05 * scaleWidth,
            height: 149.76 * scaleWidth,
            top: 382 * scaleHeight,
            left: 121.9 * scaleWidth,
          },
        },
        friend: {
          src: 'images/Friend08_02.svg',
          style: {
            width: 357.07 * scaleWidth,
            height: 229.76 * scaleWidth,
            top: 466 * scaleHeight,
            left: 14 * scaleWidth,
            zIndex: 1,
          },
        },
      },
      11: {
        character: {
          style: {
            top: 379 * scaleHeight,
            left: 128 * scaleWidth,
          },
        },
        friend: {
          src: 'images/Friend08_03.svg',
          style: {
            width: 350.07 * scaleWidth,
            height: 312.79 * scaleWidth,
            top: 540 * scaleHeight,
            left: 20 * scaleWidth,
          },
        },
      },
      12: {
        character: {
          style: {
            top: 386 * scaleHeight,
            left: 121 * scaleWidth,
          },
        },
        friend: {
          src: 'images/Friend08_04.svg',
          style: {
            width: 350.07 * scaleWidth,
            height: 235.79 * scaleWidth,
            top: 659 * scaleHeight,
            left: 15 * scaleWidth,
          },
        },
      },
      13: {
        message: 'แต่ฉัน...',
        character: {
          src: 'images/YellowChuose_03.svg',
          style: {
            top: 377 * scaleHeight,
            left: 112 * scaleWidth,
            width: 166.05 * scaleWidth,
            height: 169.11 * scaleHeight,
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
            top: 380 * scaleHeight,
            left: 114 * scaleWidth,
            width: 161.05 * scaleWidth,
            height: 162.5 * scaleWidth,
          },
        },
      },
      15: {
        message: 'เธอเคยรู้สึกแบบเดียวกับฉันมั้ย?',
        character: {
          src: 'images/YellowChuose_05.svg',
          style: {
            top: 390 * scaleHeight,
            left: 115 * scaleWidth,
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
          },
        },
      },
    },
    [phaseEnum.secondPhase]: {
      1: {
        message: 'ฉันใช้ชีวิตไปเรื่อยๆ',
        character: {
          src: 'images/YellowChuose_06.svg',
          style: {
            width: 382 * scaleWidth,
            height: 331.03 * scaleWidth,
            top: 250 * scaleHeight,
            left: -6 * scaleWidth,
            objectFit: 'cover',
          },
        },
      },
      3: {
        message: 'หันมาอีกที',
        character: {
          src: 'images/YellowChuose_07.svg',
          style: {
            height: 137.91 * scaleWidth,
            width: 132.54 * scaleWidth,
            left: 131 * scaleHeight,
            top: 391 * scaleWidth,
          },
        },
      },
      4: {
        message: 'ก็ไม่เจอใครแล้ว...',
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            height: 137.91 * scaleWidth,
            width: 132.54 * scaleWidth,
            left: 137 * scaleHeight,
            top: 398 * scaleWidth,
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

  return (
    <div
      class={
        (phase === phaseEnum.firstPhase && scene < 12) ||
        (phase === phaseEnum.secondPhase && scene === 1)
          ? 'background-gradient'
          : phase === phaseEnum.secondPhase && scene >= 2
          ? 'background-gradient-3'
          : 'background-gradient-2'
      }
    >
      <div
        class={
          phase === phaseEnum.firstPhase && scene >= 15
            ? 'text_top_8'
            : 'text_middle'
        }
      >
        {message}
      </div>
      <img class="friend" src={friendSrc} alt="friend" style={friendStyle} />
      <img
        class="charactor"
        src={characterSrc}
        alt="character"
        style={characterStyle}
      />
      {phase === phaseEnum.firstPhase && scene >= 15 && (
        <div class="button-group">
          <button
            class="button-question"
            onClick={() => shiftPhase(phaseEnum.secondPhase)}
          >
            เคย
          </button>
          <button
            class="button-question"
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
  )
}

export default Scene08
