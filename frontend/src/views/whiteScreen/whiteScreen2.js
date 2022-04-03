import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'

const WhiteScreen2 = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [scene, setScene] = useState(0)
  //const [opacity, setOpacity] = useState(0.3)
  const [message, setMessage] = useState('')
  useEffect(() => {
    const time = 1200
    let acc = 0
    for (let i = 1; i < 15; i = i + 1) {
      acc += time
      setTimeout(() => {
        setScene(i)
      }, acc)
    }
    /*setTimeout(() => {
      setScene(1)
      setMessage('"เราใช้ชีวิตในโลกที่เต็มไปด้วยความคาดหวัง"')
    }, 300)
    setTimeout(() => {
      setScene(2)
    }, 1500)
    setTimeout(() => {
      setScene(3)
    }, 2700)
    setTimeout(() => {
      setScene(4)
    }, 3900)
    setTimeout(() => {
      setScene(5)
      setMessage('ทุกคนเข้ามา...')
    }, 5100)
    setTimeout(() => {
      setScene(6)
    }, 6300)
    setTimeout(() => {
      setScene(7)
      setMessage('และก็จากเราไปมากมายเช่นกัน')
    }, 7500)
    setTimeout(() => {
      setScene(8)
    }, 8700)
    setTimeout(() => {
      setScene(9)
      setMessage('ทุกคนต่างเดินไปข้างหน้า')
    }, 9900)
    setTimeout(() => {
      setScene(10)
    }, 11100)
    setTimeout(() => {
      setScene(11)
    }, 12300)
    setTimeout(() => {
      setScene(12)
    }, 13500)
    setTimeout(() => {
      setScene(13)
      setMessage('แต่ฉัน...')
    }, 14700)
    setTimeout(() => {
      setScene(14)
      setMessage('ยังอยู่ที่เดิม')
    }, 15900)*/
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
          top: 379 * scaleHeight,
          left: 128 * scaleWidth,
          transition: '0s',
        }
      case 12:
        return {
          position: 'absolute',
          top: 386 * scaleHeight,
          left: 121 * scaleWidth,
          transition: '0s',
        }
      default:
        return { opacity: 0 }
    }
  }

  const yellowChuoseStyle_02 = (scene) => {
    return scene == 8
      ? {
          position: 'absolute',
          top: 465 * scaleHeight,
          left: 114 * scaleWidth,
          width: 150 * scaleWidth,
          height: 152.76 * scaleHeight,
          transition: '0s',
        }
      : { opacity: 0 }
  }

  const yellowChuoseStyle_03 = (scene) => {
    return scene == 13
      ? {
          position: 'absolute',
          top: 377 * scaleHeight,
          left: 112 * scaleWidth,
          width: 166.05 * scaleWidth,
          height: 169.11 * scaleHeight,
          transition: '0s',
        }
      : { opacity: 0 }
  }

  const yellowChuoseStyle_04 = (scene) => {
    return scene == 14
      ? {
          position: 'absolute',
          top: 380 * scaleHeight,
          left: 114 * scaleWidth,
          width: 161.05 * scaleWidth,
          height: 162.5 * scaleWidth,
          transition: '0s',
        }
      : { opacity: 0 }
  }

  const friendChuoseProps_01 = {
    image: 'images/Friend07_12.svg',
    width: 370.78 * scaleWidth,
    height: 228.76 * scaleWidth,
    y: 372 * scaleHeight,
    left: 11 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      7: { opacity: 1, duration: 0 },
      8: { opacity: 0, duration: 0 },
    },
  }

  const friendChuoseProps_02 = {
    image: 'images/Friend07_13.svg',
    width: 369.31 * scaleWidth,
    height: 186.76 * scaleWidth,
    y: 331 * scaleHeight,
    left: 9 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      8: { opacity: 1, duration: 0 },
      9: { opacity: 0, duration: 0 },
    },
  }

  const friendChuoseProps_03 = {
    image: 'images/Friend08_02.svg',
    width: 357.07 * scaleWidth,
    height: 229.76 * scaleWidth,
    y: 466 * scaleHeight,
    left: 14 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      10: { opacity: 1, duration: 0 },
      11: { opacity: 0, duration: 0 },
    },
  }

  const lightGreyFriendChuoseProps = {
    image: 'images/LightGreyFriend.svg',
    width: 131.34 * scaleWidth,
    height: 133.76 * scaleWidth,
    y: 467 * scaleHeight,
    left: 243 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      9: { opacity: 1, duration: 0 },
      10: { opacity: 0, duration: 0 },
      11: {
        width: 146.07 * scaleWidth,
        height: 148.76 * scaleWidth,
        y: 692 * scaleHeight,
        left: 224 * scaleWidth,
        opacity: 1,
        transition: '0s',
      },
      12: {
        y: 734 * scaleHeight,
        left: 219 * scaleWidth,
        transition: '0s',
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const blackFriendChuoseProps = {
    image: 'images/BlackFriend.svg',
    width: 130.36 * scaleWidth,
    height: 132.76 * scaleWidth,
    y: 373 * scaleHeight,
    left: 129 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      9: { opacity: 1, duration: 0 },
      10: { opacity: 0, duration: 0 },
      11: {
        width: 159 * scaleWidth,
        height: 161.92 * scaleWidth,
        y: 540 * scaleHeight,
        left: 123 * scaleWidth,
        opacity: 1,
        transition: '0s',
      },
      12: {
        y: 659 * scaleHeight,
        left: 109 * scaleWidth,
        transition: '0s',
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const greyFriendChuoseProps = {
    image: 'images/GreyFriend.svg',
    width: 131.34 * scaleWidth,
    height: 133.76 * scaleWidth,
    y: 458 * scaleHeight,
    left: 17 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      9: { opacity: 1, duration: 0 },
      10: { opacity: 0, duration: 0 },
      11: {
        width: 152 * scaleWidth,
        height: 154.79 * scaleWidth,
        y: 698 * scaleHeight,
        left: 20 * scaleWidth,
        opacity: 1,
        transition: '0s',
      },
      12: {
        y: 740 * scaleHeight,
        left: 15 * scaleWidth,
        transition: '0s',
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const cloudText07 = {
    image: 'images/CloudText01.svg',
    width: 101.01 * scaleWidth,
    height: 64 * scaleWidth,
    y: 277 * scaleHeight,
    left: 219 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      2: { opacity: 1, duration: 0 },
      3: { opacity: 0, duration: 0 },
    },
  }

  const cloudText08 = {
    image: 'images/CloudText07_08.svg',
    width: 323.05 * scaleWidth,
    height: 219.04 * scaleWidth,
    y: 252 * scaleHeight,
    left: 34 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      3: { opacity: 1, duration: 0 },
      4: { opacity: 0, duration: 0 },
    },
  }

  const cloudText09 = {
    image: 'images/CloudText07_09.svg',
    width: 350.31 * scaleWidth,
    height: 273.76 * scaleWidth,
    y: 275 * scaleHeight,
    left: 17 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      4: { opacity: 1, duration: 0 },
      5: { opacity: 0, duration: 0 },
    },
  }

  const cloudText10 = {
    image: 'images/CloudText07_10.svg',
    width: 350.78 * scaleWidth,
    height: 225.76 * scaleWidth,
    y: 352 * scaleHeight,
    left: 21 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      5: { opacity: 1, duration: 0 },
      6: { opacity: 0, duration: 0 },
    },
  }

  const cloudText11 = {
    image: 'images/CloudText07_11.svg',
    width: 401.78 * scaleWidth,
    height: 219.76 * scaleWidth,
    y: 348 * scaleHeight,
    left: 6 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      6: { opacity: 1, duration: 0 },
      7: { opacity: 0, duration: 0 },
    },
  }

  return (
    <div
      style={{
        opacity: scene < 15 ? 1 : 0,
        transition: 'opacity ease-in-out 1s',
      }}
    >
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
      <div
        style={{
          position: 'absolute',
          transition: 'ease-in-out 1s',
          top: '206px',
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
          {scene}
        </p>
      </div>
    </div>
  )
}

export default WhiteScreen2
