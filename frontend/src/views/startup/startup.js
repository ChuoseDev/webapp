import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'

const Startup = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const [scene, setScene] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setScene(1)
    }, 300)
    setTimeout(() => {
      setScene(2)
    }, 1500)
    setTimeout(() => {
      setScene(3)
    }, 5000)
    setTimeout(() => {
      setScene(4)
    }, 5500)
  }, [])

  const chuoseLogoProps = {
    image: 'images/logo.svg',
    x: (window.innerWidth - 308 * scaleHeight) / 2,
    y: 370 * scaleHeight,
    height: 72 * scaleHeight,
    width: 308 * scaleHeight,
    opacity: 0,
    scene,
    animation: {
      1: { opacity: 1, duration: 0.5 },
      2: { y: 523 * scaleHeight, duration: 0.4 },
      3: { opacity: 0, duration: 0.5 },
    },
  }

  const backgroundProps = {
    image: 'images/cloudBackground.svg',
    height: 891 * scaleHeight,
    width: 1404 * scaleHeight,
    x: -62 * scaleHeight,
    y: -86 * scaleHeight,
    scene,
    animation: {
      2: {
        x: -2 * scaleHeight,
        y: -92 * scaleHeight,
        height: 1046 * scaleHeight,
        width: 1649 * scaleHeight,
        duration: 1,
      },
      3: {
        x: -277 * scaleHeight,
        y: -206 * scaleHeight,
        height: 1244 * scaleHeight,
        width: 1962 * scaleHeight,
        duration: 1,
      },
    },
  }
  const jumboChuoseProps = {
    image: 'images/jumboLogo.svg',
    width: 448 * scaleWidth,
    height: 437 * scaleWidth,
    y: 500 * scaleHeight,
    opacity: 0,
    scene,
    animation: {
      1: { opacity: 1, duration: 0.5 },
      2: { y: window.innerHeight, duration: 0.6 },
    },
  }

  const floatChuoseProps = {
    image: 'images/Charactor.svg',
  }

  const topBannerProps = {
    image: 'images/topBanner.svg',
    x: -5 * scaleWidth,
    y: -125 * scaleWidth,
    width: 355 * scaleWidth,
    height: 125 * scaleWidth,
    scene,
    animation: { 2: { y: 0, duration: 0.4 } },
  }

  const bottomBannerProps = {
    image: 'images/bottomBanner.svg',
    x: -5 * scaleWidth,
    y: window.innerHeight,
    width: 400 * scaleWidth,
    height: 431 * scaleHeight,
    scene,
    animation: {
      2: { y: 602 * scaleHeight, duration: 0.4 },
      3: { y: 413 * scaleHeight, duration: 1 },
    },
  }

  const welcomeTextProps = {
    x: 78 * scaleWidth,
    y: 606 * scaleHeight,
  }

  const startButtonProps = {
    x: (window.innerWidth - 243 * scaleWidth) / 2,
    y: 721 * scaleHeight,
  }

  const onClickStart = () => {
    if (scene >= 4) {
      window.location.href = '/'
    }
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <AnimateImage {...backgroundProps} />
        <AnimateImage {...chuoseLogoProps} />
        <AnimateImage {...floatChuoseProps} />
        <AnimateImage {...jumboChuoseProps} />
        <AnimateImage {...topBannerProps} />
        <AnimateImage {...bottomBannerProps} />
        <Group {...welcomeTextProps}>
          <Html>
            <div
              style={{
                opacity: scene >= 4 ? 1 : 0,
                transition: 'ease-in-out 0.5s',
              }}
            >
              <p
                className="header"
                style={{
                  fontSize: 18 * scaleWidth,
                  fontWeight: 'bold',
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                สวัสดีจ้า!!
              </p>
              <p
                style={{
                  fontSize: 16 * scaleWidth,
                  color: '#ffffff',
                  textAlign: 'left',
                  margin: 0,
                }}
              >
                เราชื่อ “ชูโอส”
                <br />
                เราจะเป็นเพื่อนคอยรับฟังเธอ/คุณเอง
              </p>
            </div>
          </Html>
        </Group>
        <Group {...startButtonProps}>
          <Html>
            <WhiteButton
              onClick={onClickStart}
              style={{
                width: 243 * scaleWidth,
                height: 46 * scaleWidth,
                opacity: scene >= 4 ? 1 : 0,
                transition: 'ease-in-out 0.5s',
              }}
              children={
                <p
                  style={{
                    margin: 0,
                    fontSize: 24 * scaleWidth,
                    fontWeight: 'bold',
                  }}
                >
                  เริ่มเลย
                </p>
              }
            />
          </Html>
        </Group>
      </Layer>
    </Stage>
  )
}

export default Startup
