import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'

const Startup = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [scene, setScene] = useState(0)
  const [opacity, setOpacity] = useState(0.3)
  useEffect(() => {
    setOpacity(1)
    setTimeout(() => {
      setScene(1)
    }, 300)
    setTimeout(() => {
      setScene(2)
    }, 1500)
    setTimeout(() => {
      setScene(3)
    }, 4000)
    setTimeout(() => {
      setScene(4)
    }, 4700)
  }, [])

  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

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
    x: (window.innerWidth - 280 * scaleHeight) / 2,
    y: -1 * window.innerHeight,
    rotation: -7,
    width: 314.62 * scaleHeight,
    height: 361 * scaleHeight,
    scene,
    animation: {
      2: { y: 80 * scaleHeight, duration: 2.5 },
      3: { y: 50 * scaleHeight, rotation: 14, duration: 0.7 },
      4: {
        width: 278.07 * scaleHeight,
        height: 319.06 * scaleHeight,
        y: 200 * scaleHeight,
        rotation: -14,
        duration: 0.5,
      },
    },
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
      5: { y: 602 * scaleHeight, duration: 1 },
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
          <AnimateImage {...chuoseLogoProps} />
          <AnimateImage {...floatChuoseProps} />
          <AnimateImage {...jumboChuoseProps} />
          <AnimateImage {...topBannerProps} />
          <AnimateImage {...bottomBannerProps} />
          <Group {...welcomeTextProps}>
            <Html>
              <div
                style={{
                  opacity: scene === 4 ? 1 : 0,
                  transition: 'ease-in-out 0.5s',
                }}
              >
                <p
                  className="header"
                  style={{
                    fontSize: 18 * scaleMean,
                    fontWeight: 'bold',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  สวัสดีจ้า!!
                </p>
                <p
                  style={{
                    fontSize: 16 * scaleMean,
                    color: '#ffffff',
                    textAlign: 'left',
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
                  height: 46 * scaleHeight,
                  opacity: scene === 4 ? 1 : 0,
                  transition: 'ease-in-out 0.5s',
                }}
                children={
                  <p
                    style={{
                      margin: 0,
                      fontSize: 24 * scaleHeight,
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
    </div>
  )
}

export default Startup
