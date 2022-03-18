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
  const [message, setMessage] = useState("")
  useEffect(() => {
    setOpacity(1)
    setTimeout(() => {
      setScene(1)
      setMessage('"เราใช้ชีวิตในโลกที่เต็มไปด้วยความคาดหวัง"')
    }, 300)
    setTimeout(() => {  
      setScene(2)
    }, 1300)
    setTimeout(() => {
      setScene(3)
    }, 2300)
    setTimeout(() => {
      setScene(4)
    }, 3300)
    setTimeout(() => {
        setScene(5)
    }, 4300)
      setTimeout(() => {
        setScene(6)
        setMessage('ทุกคนเข้ามา...')    
    }, 5300)
    setTimeout(() => {
        setScene(7)  
    }, 6300)
      setTimeout(() => {
        setScene(8)
     
    }, 7300)
      setTimeout(() => {
        setScene(9)
        setMessage('และก็จากเราไปมากมายเช่นกัน') 
    }, 8300)
      setTimeout(() => {
        setScene(10)
    }, 9300)
      setTimeout(() => {
        setScene(11)
       
    }, 10300)
      setTimeout(() => {
        setScene(12)
        setMessage('ทุกคนต่างเดินไปข้างหน้า') 
    }, 11300)
    setTimeout(() => {
        setScene(13)
        
    }, 12300)
    setTimeout(() => {
        setScene(14)
        
    }, 13300)
    setTimeout(() => {
        setScene(15)
        
    }, 14300)
    setTimeout(() => {
        setScene(16)
        setMessage('') 
    }, 15300)
    setTimeout(() => {
        setScene(17)
        setMessage('แต่ฉัน...') 
    }, 16300)
    setTimeout(() => {
        setScene(18)
        setMessage('') 
    }, 17300)
    setTimeout(() => {
        setScene(19)
        setMessage('ยังอยู่ที่เดิม') 
    }, 18300)
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
    image: 'images/whiteScreen.svg',
    height: 891 * scaleHeight,
    width: 1404 * scaleHeight,
    // x: -62 * scaleHeight,
    // y: -86 * scaleHeight,   
  }
  const yellowChuoseProps_01 = {
    image: 'images/YellowChuose_01.svg',
    width: 166 * scaleWidth,
    height: 169.05 * scaleWidth,
    y: 349 * scaleHeight,
    x: 112* scaleWidth,
    scene,
    animation: {
        
        3: {
            width: 159 * scaleWidth,
            height: 161.92 * scaleWidth, 
            y: 448.11 * scaleHeight,
            x: 139.13* scaleWidth,
            duration: 0 },
        4: {
            width: 150 * scaleWidth,
            height: 152.76 * scaleWidth, 
            y: 497 * scaleHeight,
            x: 109* scaleWidth,
            duration: 0
        },
        5:{

         },
        6: {
            width: 142.41 * scaleWidth,
            height: 145.03 * scaleWidth,
            y: 473 * scaleHeight,
            x: 104 * scaleWidth,
            duration: 0,
          },
          7: {
            width: 135.54 * scaleWidth,
            height: 138.03 * scaleWidth,
            y: 448 * scaleHeight,
            x: 128 * scaleWidth,
            duration: 0,
          },
          9: {
            width: 142.41 * scaleWidth,
            height: 145.03 * scaleWidth,
            y: 491 * scaleHeight,
            x: 103 * scaleWidth,
            duration: 0,
          },
          10:{ opacity: 0 ,duration: 0},
          12: {
            width: 137.23 * scaleWidth,
            height: 139.76 * scaleWidth,
            y: 475 * scaleHeight,
            x: 128 * scaleWidth,
            duration: 0,
            opacity: 1,
          },
          13: {
            width: 147.05 * scaleWidth,
            height: 149.76 * scaleWidth,
            y: 382 * scaleHeight,
            x: 121.9 * scaleWidth,
            duration: 0,
          },
          14: {
            y: 379 * scaleHeight,
            x: 128 * scaleWidth,
            duration: 0,
          },
          15: {
            y: 386 * scaleHeight,
            x: 121 * scaleWidth,
            duration: 0,
          },   
          17:{ opacity: 0 ,duration: 0,},
    }
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
      10: {
        opacity: 1,
        duration: 0,
      },
      12:{ opacity: 0,duration: 0, },

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
      17: { opacity: 1,duration: 0, },
      19:{ opacity: 0 ,duration: 0,},
    },  
  }

  const yellowChuoseProps_04 = {
    image: 'images/YellowChuose_04.svg',
    width: 161.05 * scaleWidth,
    height: 162.5 * scaleWidth,
    y: 380 * scaleHeight,
    x: 114* scaleWidth,
    scene,
    opacity: 0,
    animation: {
        19: {
          opacity: 1,
          duration: 0,
        },
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
          {/* <AnimateImage {...chuoseLogoProps} /> */}
          {/* <AnimateImage {...floatChuoseProps} /> */}
          <AnimateImage {...yellowChuoseProps_01} />
          <AnimateImage {...yellowChuoseProps_02} />
          <AnimateImage {...yellowChuoseProps_03} />
          <AnimateImage {...yellowChuoseProps_04} />
          {/* <AnimateImage {...topBannerProps} /> */}
          {/* <AnimateImage {...bottomBannerProps} /> */}
       
            <Html>
            
              <div
                style={{
                    opacity:[5,8,11,16,18].includes(scene) ? 0 : 1,
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

                  {message }             
                </p>
                  
              </div>
            </Html>
        </Layer>
      </Stage>
    </div>
  )
}

export default WhiteScreen
