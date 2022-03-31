import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'

const WhiteScreen = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [scene, setScene] = useState(0)
  const [opacity, setOpacity] = useState(0.3)
  const [message, setMessage] = useState('')
  useEffect(() => {
    setOpacity(1)
    setTimeout(() => {
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
    }, 15900)
    /*setTimeout(() => {
      setScene(15)
    }, 17100)
    setTimeout(() => {
      setScene(16)
    }, 18300)
    setTimeout(() => {
      setScene(17)
    }, 19500)
    setTimeout(() => {
      setScene(18)
    }, 20700)
    setTimeout(() => {
      setScene(19)
    }, 21900)*/
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
  const yellowChuoseProps_01 = {
    image: 'images/YellowChuose_01.svg',
    width: 166 * scaleWidth,
    height: 169.05 * scaleWidth,
    y: 349 * scaleHeight,
    x: 112 * scaleWidth,
    scene,
    animation: {
      3: {
        width: 159 * scaleWidth,
        height: 161.92 * scaleWidth,
        y: 448.11 * scaleHeight,
        x: 139.13 * scaleWidth,
        duration: 0,
      },
      4: {
        width: 150 * scaleWidth,
        height: 152.76 * scaleWidth,
        y: 497 * scaleHeight,
        x: 109 * scaleWidth,
        duration: 0,
      },
      5: {
        width: 142.41 * scaleWidth,
        height: 145.03 * scaleWidth,
        y: 473 * scaleHeight,
        x: 104 * scaleWidth,
        duration: 0,
      },
      6: {
        width: 135.54 * scaleWidth,
        height: 138.03 * scaleWidth,
        y: 448 * scaleHeight,
        x: 128 * scaleWidth,
        duration: 0,
      },
      7: {
        width: 142.41 * scaleWidth,
        height: 145.03 * scaleWidth,
        y: 491 * scaleHeight,
        x: 103 * scaleWidth,
        duration: 0,
      },
      8: { opacity: 0, duration: 0 },
      9: {
        width: 137.23 * scaleWidth,
        height: 139.76 * scaleWidth,
        y: 475 * scaleHeight,
        x: 128 * scaleWidth,
        duration: 0,
        opacity: 1,
      },
      10: {
        width: 147.05 * scaleWidth,
        height: 149.76 * scaleWidth,
        y: 382 * scaleHeight,
        x: 121.9 * scaleWidth,
        duration: 0,
      },
      11: {
        y: 379 * scaleHeight,
        x: 128 * scaleWidth,
        duration: 0,
      },
      12: {
        y: 386 * scaleHeight,
        x: 121 * scaleWidth,
        duration: 0,
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const yellowChuoseProps_02 = {
    image: 'images/YellowChuose_02.svg',
    y: 465 * scaleHeight,
    x: 114 * scaleWidth,
    width: 150 * scaleWidth,
    height: 152.76 * scaleHeight,
    opacity: 0,
    scene,
    animation: {
      8: {
        opacity: 1,
        duration: 0,
      },
      9: { opacity: 0, duration: 0 },
    },
  }
  const yellowChuoseProps_03 = {
    image: 'images/YellowChuose_03.svg',
    y: 377 * scaleHeight,
    x: 112 * scaleWidth,
    width: 166.05 * scaleWidth,
    height: 169.11 * scaleHeight,
    opacity: 0,
    scene,
    animation: {
      13: { opacity: 1, duration: 0 },
      14: { opacity: 0, duration: 0 },
    },
  }

  const yellowChuoseProps_04 = {
    image: 'images/YellowChuose_04.svg',
    width: 161.05 * scaleWidth,
    height: 162.5 * scaleWidth,
    y: 380 * scaleHeight,
    x: 114 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      14: {
        opacity: 1,
        duration: 0,
      },
    },
  }

  const friendChuoseProps_01 = {
    image: 'images/Friend07_12.svg',
    width: 370.78 * scaleWidth,
    height: 228.76 * scaleWidth,
    y: 372 * scaleHeight,
    x: 11 * scaleWidth,
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
    x: 9 * scaleWidth,
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
    x: 14 * scaleWidth,
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
    x: 243 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      9: { opacity: 1, duration: 0 },
      10: { opacity: 0, duration: 0 },
      11: {
        width: 146.07 * scaleWidth,
        height: 148.76 * scaleWidth,
        y: 692 * scaleHeight,
        x: 224 * scaleWidth,
        opacity: 1,
        duration: 0,
      },
      12: {
        y: 734 * scaleHeight,
        x: 219 * scaleWidth,
        duration: 0,
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const blackFriendChuoseProps = {
    image: 'images/BlackFriend.svg',
    width: 130.36 * scaleWidth,
    height: 132.76 * scaleWidth,
    y: 373 * scaleHeight,
    x: 129 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      9: { opacity: 1, duration: 0 },
      10: { opacity: 0, duration: 0 },
      11: {
        width: 159 * scaleWidth,
        height: 161.92 * scaleWidth,
        y: 540 * scaleHeight,
        x: 123 * scaleWidth,
        opacity: 1,
        duration: 0,
      },
      12: {
        y: 659 * scaleHeight,
        x: 109 * scaleWidth,
        duration: 0,
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const greyFriendChuoseProps = {
    image: 'images/GreyFriend.svg',
    width: 131.34 * scaleWidth,
    height: 133.76 * scaleWidth,
    y: 458 * scaleHeight,
    x: 17 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      9: { opacity: 1, duration: 0 },
      10: { opacity: 0, duration: 0 },
      11: {
        width: 152 * scaleWidth,
        height: 154.79 * scaleWidth,
        y: 698 * scaleHeight,
        x: 20 * scaleWidth,
        opacity: 1,
        duration: 0,
      },
      12: {
        y: 740 * scaleHeight,
        x: 15 * scaleWidth,
        duration: 0,
      },
      13: { opacity: 0, duration: 0 },
    },
  }

  const cloudText07 = {
    image: 'images/CloudText01.svg',
    width: 101.01 * scaleWidth,
    height: 64 * scaleWidth,
    y: 277 * scaleHeight,
    x: 219 * scaleWidth,
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
    x: 34 * scaleWidth,
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
    x: 17 * scaleWidth,
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
    x: 21 * scaleWidth,
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
    x: 6 * scaleWidth,
    scene,
    opacity: 0,
    animation: {
      6: { opacity: 1, duration: 0 },
      7: { opacity: 0, duration: 0 },
    },
  }

  const onClickStart = () => {
    if (scene === 4) {
      setScene(5)
      setOpacity(0)
      setTimeout(() => {
        window.location.href = '/information'
      }, 1500)
    }
  }

  return (
    <div style={{ opacity, transition: 'opacity ease-in-out 1.5s' }}>
      <Stage {...stageProps}>
        <Layer>
          <AnimateImage {...backgroundProps} />
          <AnimateImage {...cloudText07} />
          <AnimateImage {...cloudText08} />
          <AnimateImage {...cloudText09} />
          <AnimateImage {...cloudText10} />
          <AnimateImage {...cloudText11} />
          <AnimateImage {...blackFriendChuoseProps} />
          <AnimateImage {...greyFriendChuoseProps} />
          <AnimateImage {...lightGreyFriendChuoseProps} />
          <AnimateImage {...friendChuoseProps_01} />
          <AnimateImage {...friendChuoseProps_02} />
          <AnimateImage {...yellowChuoseProps_01} />
          <AnimateImage {...yellowChuoseProps_02} />
          <AnimateImage {...yellowChuoseProps_03} />
          <AnimateImage {...yellowChuoseProps_04} />
          <AnimateImage {...friendChuoseProps_03} />
          <Html>
            <div
              style={{
                transition: 'ease-in-out 0.5s',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                alignItems: 'center',
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
          </Html>
        </Layer>
      </Stage>
    </div>
  )
}

export default WhiteScreen
