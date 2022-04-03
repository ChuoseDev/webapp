import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'
import { useNavigate } from 'react-router'

const WhiteScreen2 = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [scene, setScene] = useState(0)
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  useEffect(() => {
    const time = 1200
    let acc = 0
    for (let i = 1; i < 19; i = i + 1) {
      acc += time
      setTimeout(() => {
        setScene(i)
        switch (i) {
          case 1:
            setMessage('"เราใช้ชีวิตในโลกที่เต็มไปด้วยความคาดหวัง"')
            break
          case 5:
            setMessage('ทุกคนเข้ามา...')
            break
          case 7:
            setMessage('และก็จากเราไปมากมายเช่นกัน')
            break
          case 9:
            setMessage('ทุกคนต่างเดินไปข้างหน้า')
            break
          case 13:
            setMessage('แต่ฉัน...')
            break
          case 14:
            setMessage('ยังอยู่ที่เดิม')
            break
          case 15:
            setMessage('เธอเคยรู้สึกแบบเดียวกับฉันมั้ย?')
            break
          case 16:
            setMessage('ฉันใช้ชีวิตไปเรื่อยๆ')
            break
          case 17:
            setMessage('หันมาอีกที')
            break
          case 18:
            setMessage('ก็ไม่เจอใครแล้ว...')
            break
        }
      }, acc)
    }
  }, [])

  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const backgroundProps = {
    image: 'images/whiteScreen.svg',
    height: 891 * scaleHeight,
    width: 1404 * scaleHeight,
  }
  const yellowChuoseStyle_01 = (scene) => {
    switch (scene) {
      case 1:
        return {
          position: 'absolute',
          width: 166 * scaleWidth,
          height: 169.05 * scaleWidth,
          top: 349 * scaleHeight,
          left: 112 * scaleWidth,
          transition: '0s',
        }
      case 2:
        return {
          position: 'absolute',
          width: 166 * scaleWidth,
          height: 169.05 * scaleWidth,
          top: 349 * scaleHeight,
          left: 112 * scaleWidth,
          transition: '0s',
        }
      case 3:
        return {
          position: 'absolute',
          width: 159 * scaleWidth,
          height: 161.92 * scaleWidth,
          top: 448.11 * scaleHeight,
          left: 139.13 * scaleWidth,
          transition: '0s',
        }
      case 4:
        return {
          position: 'absolute',
          width: 150 * scaleWidth,
          height: 152.76 * scaleWidth,
          top: 497 * scaleHeight,
          left: 109 * scaleWidth,
          transition: '0s',
        }
      case 5:
        return {
          position: 'absolute',
          width: 142.41 * scaleWidth,
          height: 145.03 * scaleWidth,
          top: 473 * scaleHeight,
          left: 104 * scaleWidth,
          transition: '0s',
        }
      case 6:
        return {
          position: 'absolute',
          width: 135.54 * scaleWidth,
          height: 138.03 * scaleWidth,
          top: 448 * scaleHeight,
          left: 128 * scaleWidth,
          transition: '0s',
        }
      case 7:
        return {
          position: 'absolute',
          width: 142.41 * scaleWidth,
          height: 145.03 * scaleWidth,
          top: 491 * scaleHeight,
          left: 103 * scaleWidth,
          transition: '0s',
        }
      case 9:
        return {
          position: 'absolute',
          width: 137.23 * scaleWidth,
          height: 139.76 * scaleWidth,
          top: 475 * scaleHeight,
          left: 128 * scaleWidth,
          transition: '0s',
        }
      case 10:
        return {
          position: 'absolute',
          width: 147.05 * scaleWidth,
          height: 149.76 * scaleWidth,
          top: 382 * scaleHeight,
          left: 121.9 * scaleWidth,
          transition: '0s',
        }
      case 11:
        return {
          position: 'absolute',
          width: 147.05 * scaleWidth,
          height: 149.76 * scaleWidth,
          top: 379 * scaleHeight,
          left: 128 * scaleWidth,
          transition: '0s',
        }
      case 12:
        return {
          position: 'absolute',
          width: 147.05 * scaleWidth,
          height: 149.76 * scaleWidth,
          top: 386 * scaleHeight,
          left: 121 * scaleWidth,
          transition: '0s',
        }
      case 18: {
        return {
          position: 'absolute',
          height: 137.91 * scaleWidth,
          width: 132.54 * scaleWidth,
          left: 137 * scaleHeight,
          top: 398 * scaleWidth,
          transition: '0s',
        }
      }
      default:
        return { opacity: 0 }
    }
  }

  const yellowChuoseStyle_02 = (scene) => {
    return {
      position: 'absolute',
      top: 465 * scaleHeight,
      left: 114 * scaleWidth,
      width: 150 * scaleWidth,
      height: 152.76 * scaleHeight,
      transition: '0s',
      opacity: scene == 8 ? 1 : 0,
    }
  }

  const yellowChuoseStyle_03 = (scene) => {
    return {
      position: 'absolute',
      top: 377 * scaleHeight,
      left: 112 * scaleWidth,
      width: 166.05 * scaleWidth,
      height: 169.11 * scaleHeight,
      transition: '0s',
      opacity: scene == 13 ? 1 : 0,
    }
  }

  const yellowChuoseStyle_04 = (scene) => {
    return {
      position: 'absolute',
      top: 380 * scaleHeight,
      left: 114 * scaleWidth,
      width: 161.05 * scaleWidth,
      height: 162.5 * scaleWidth,
      transition: '0s',
      opacity: scene == 14 ? 1 : 0,
    }
  }

  const yellowChuoseStyle_05 = (scene) => {
    return {
      position: 'absolute',
      top: 390 * scaleHeight,
      left: 115 * scaleWidth,
      width: 157.75 * scaleWidth,
      height: 159.17 * scaleHeight,
      transition: '0s',
      opacity: scene == 15 ? 1 : 0,
    }
  }

  const friendChuoseStyle_01 = (scene) => {
    return {
      position: 'absolute',
      width: 370.78 * scaleWidth,
      height: 228.76 * scaleWidth,
      top: 372 * scaleHeight,
      left: 11 * scaleWidth,
      opacity: scene == 7 ? 1 : 0,
    }
  }

  const friendChuoseStyle_02 = (scene) => {
    return {
      position: 'absolute',
      width: 369.31 * scaleWidth,
      height: 186.76 * scaleWidth,
      top: 331 * scaleHeight,
      left: 9 * scaleWidth,
      opacity: scene == 8 ? 1 : 0,
    }
  }

  const friendChuoseStyle_03 = (scene) => {
    return {
      position: 'absolute',
      width: 357.07 * scaleWidth,
      height: 229.76 * scaleWidth,
      top: 466 * scaleHeight,
      left: 14 * scaleWidth,
      opacity: scene == 10 ? 1 : 0,
    }
  }

  const lightGreyFriendChuoseStyle = (scene) => {
    switch (scene) {
      case 9:
        return {
          position: 'absolute',
          width: 131.34 * scaleWidth,
          height: 133.76 * scaleWidth,
          top: 467 * scaleHeight,
          left: 243 * scaleWidth,
          transition: '0s',
        }
      case 11:
        return {
          position: 'absolute',
          width: 146.07 * scaleWidth,
          height: 148.76 * scaleWidth,
          top: 692 * scaleHeight,
          left: 224 * scaleWidth,
          transition: '0s',
        }
      case 12:
        return {
          position: 'absolute',
          width: 146.07 * scaleWidth,
          height: 148.76 * scaleWidth,
          top: 734 * scaleHeight,
          left: 219 * scaleWidth,
          transition: '0s',
        }
      default:
        return { opacity: 0 }
    }
  }

  const blackFriendChuoseStyle = (scene) => {
    switch (scene) {
      case 9:
        return {
          position: 'absolute',
          width: 130.36 * scaleWidth,
          height: 132.76 * scaleWidth,
          top: 373 * scaleHeight,
          left: 129 * scaleWidth,
          transition: '0s',
        }
      case 11:
        return {
          position: 'absolute',
          width: 159 * scaleWidth,
          height: 161.92 * scaleWidth,
          top: 540 * scaleHeight,
          left: 123 * scaleWidth,
          transition: '0s',
        }
      case 12:
        return {
          position: 'absolute',
          width: 146.07 * scaleWidth,
          height: 148.76 * scaleWidth,
          top: 659 * scaleHeight,
          left: 109 * scaleWidth,
          transition: '0s',
        }
      default:
        return { opacity: 0 }
    }
  }

  const greyFriendChuoseStyle = (scene) => {
    switch (scene) {
      case 9:
        return {
          position: 'absolute',
          width: 131.34 * scaleWidth,
          height: 133.76 * scaleWidth,
          top: 458 * scaleHeight,
          left: 17 * scaleWidth,
          transition: '0s',
        }
      case 11:
        return {
          position: 'absolute',
          width: 152 * scaleWidth,
          height: 154.79 * scaleWidth,
          top: 698 * scaleHeight,
          left: 20 * scaleWidth,
          opacity: 1,
          transition: '0s',
        }
      case 12:
        return {
          position: 'absolute',
          width: 152 * scaleWidth,
          height: 154.79 * scaleWidth,
          top: 740 * scaleHeight,
          left: 15 * scaleWidth,
          transition: '0s',
        }
      default:
        return { opacity: 0 }
    }
  }

  const cloudText07 = (scene) => {
    return {
      position: 'absolute',
      width: 101.01 * scaleWidth,
      height: 64 * scaleWidth,
      top: 277 * scaleHeight,
      left: 219 * scaleWidth,
      transition: '0s',
      opacity: scene === 2 ? 1 : 0,
    }
  }

  const cloudText08 = (scene) => {
    return {
      position: 'absolute',
      width: 323.05 * scaleWidth,
      height: 219.04 * scaleWidth,
      top: 252 * scaleHeight,
      left: 34 * scaleWidth,
      transition: '0s',
      opacity: scene === 3 ? 1 : 0,
    }
  }

  const cloudText09 = (scene) => {
    return {
      position: 'absolute',
      width: 350.31 * scaleWidth,
      height: 273.76 * scaleWidth,
      top: 275 * scaleHeight,
      left: 17 * scaleWidth,
      transition: '0s',
      opacity: scene === 4 ? 1 : 0,
    }
  }

  const cloudText10 = (scene) => {
    return {
      position: 'absolute',
      width: 350.78 * scaleWidth,
      height: 225.76 * scaleWidth,
      top: 352 * scaleHeight,
      left: 21 * scaleWidth,
      transition: '0s',
      opacity: scene === 5 ? 1 : 0,
    }
  }

  const cloudText11 = (scene) => {
    return {
      position: 'absolute',
      width: 401.78 * scaleWidth,
      height: 219.76 * scaleWidth,
      top: 348 * scaleHeight,
      left: 6 * scaleWidth,
      transition: '0s',
      opacity: scene === 6 ? 1 : 0,
    }
  }

  const cloudText08_08 = (scene) => {
    return {
      position: 'absolute',
      width: 401.78 * scaleWidth,
      height: 331.03 * scaleWidth,
      top: 250 * scaleHeight,
      left: -6 * scaleWidth,
      transition: '0s',
      opacity: scene === 16 ? 1 : 0,
    }
  }
  const cloudText08_09 = (scene) => {
    return {
      position: 'absolute',
      width: 206.92 * scaleWidth,
      height: 207.91 * scaleWidth,
      top: 321 * scaleHeight,
      left: 131 * scaleWidth,
      transition: '0s',
      opacity: scene === 17 ? 1 : 0,
    }
  }

  return (
    <div
      style={{
        opacity: scene < 19 ? 1 : 0,
        transition: 'opacity ease-in-out 1s',
      }}
    >
      <img
        src="images/Friend07_12.svg"
        alt="friend07_12"
        style={friendChuoseStyle_01(scene)}
      />
      <img
        src="images/Friend07_13.svg"
        alt="friend07_13"
        style={friendChuoseStyle_02(scene)}
      />
      <img
        src="images/BlackFriend.svg"
        alt="blackFriend"
        style={blackFriendChuoseStyle(scene)}
      />
      <img
        src="images/LightGreyFriend.svg"
        alt="lightGreyFriend"
        style={lightGreyFriendChuoseStyle(scene)}
      />
      <img
        src="images/GreyFriend.svg"
        alt="greyFriend"
        style={greyFriendChuoseStyle(scene)}
      />
      <img
        src="images/CloudText01.svg"
        alt="cloudText07_07"
        style={cloudText07(scene)}
      />
      <img
        src="images/CloudText07_08.svg"
        alt="cloudText07_08"
        style={cloudText08(scene)}
      />
      <img
        src="images/CloudText07_09.svg"
        alt="cloudText07_09"
        style={cloudText09(scene)}
      />
      <img
        src="images/CloudText07_10.svg"
        alt="cloudText07_10"
        style={cloudText10(scene)}
      />
      <img
        src="images/CloudText07_11.svg"
        alt="cloudText07_11"
        style={cloudText11(scene)}
      />
      <img
        src="images/CloudText08_08.svg"
        alt="cloudText08_08"
        style={cloudText08_08(scene)}
      />
      <img
        src="images/CloudText08_09.svg"
        alt="cloudText08_09"
        style={cloudText08_09(scene)}
      />
      <img
        src="images/YellowChuose_01.svg"
        alt="yellowChuose_01"
        style={yellowChuoseStyle_01(scene)}
      />
      <img
        src="images/YellowChuose_02.svg"
        alt="yellowChuose_02"
        style={yellowChuoseStyle_02(scene)}
      />
      <img
        src="images/YellowChuose_03.svg"
        alt="yellowChuose_03"
        style={yellowChuoseStyle_03(scene)}
      />
      <img
        src="images/YellowChuose_04.svg"
        alt="yellowChuose_04"
        style={yellowChuoseStyle_04(scene)}
      />
      <img
        src="images/YellowChuose_05.svg"
        alt="yellowChuose_05"
        style={yellowChuoseStyle_05(scene)}
      />
      <img
        src="images/Friend08_02.svg"
        alt="friend08_02"
        style={friendChuoseStyle_03(scene)}
      />

      <div
        style={{
          position: 'absolute',
          transition: '0s',
          top: scene == 15 ? 171 * scaleHeight : 206 * scaleHeight,
          height: 412 * scaleHeight,
          width: 390 * scaleWidth,
        }}
      >
        <p
          style={{
            fontSize: 18 * scaleMean,
            color: '#020202',
            textAlign: 'center',
          }}
        >
          {message}
        </p>
      </div>
      <div
        style={{
          position: 'absolute',
          transition: 'ease-in-out 1s',
          top: 225 * scaleHeight,
          left: 79 * scaleWidth,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: scene == 15 ? 1 : 0,
        }}
      >
        <button
          class="button-info"
          style={{ marginBottom: '10px' }}
          onClick={() => navigate('/')}
        >
          เคย
        </button>
        <button class="button-info" onClick={() => navigate('/')}>
          ไม่เคย
        </button>
      </div>
    </div>
  )
}

export default WhiteScreen2
