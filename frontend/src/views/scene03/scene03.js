import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import './purple.css'

const Scene03 = () => {
  const [scene, setScene] = useState(1)
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setScene(2)
    }, 1000)
    setTimeout(() => {
      setScene(3)
    }, 2000)
    setTimeout(() => {
      setScene(4)
    }, 3000)
    setTimeout(() => {
      setScene(5)
    }, 4000)
    setTimeout(() => {
      setScene(6)
    }, 5000)
    setTimeout(() => {
      setScene(7)
    }, 6000)
    setTimeout(() => {
      setScene(8)
    }, 7000)
    setTimeout(() => {
      setScene(9)
    }, 8000)
    setTimeout(() => {
      setScene(10)
    }, 9000)
    setTimeout(() => {
      setScene(11)
    }, 10000)
  }, [])

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
    }
  }

  const backgroundStyles = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
    }
  }

  const starStyle = (scene) => {
    return {
      position: 'absolute',
      left: 0,
      top: 0,
    }
  }

  const CloudCharacterText = () => {
    switch (scene) {
      case 1: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '60.19%', left: '47.95%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '32.94%', left: '-23.59%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '12.8%', left: '47.95%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '87.68%', left: '1.79%' }}
            />
            <div class="text_center">กุ๊งกิ๊ง กุ๊งกิ๊ง</div>
          </div>
        )
      }
      case 2: {
        return (
          <div>
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '16.82%', left: '31.79%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '35.78%', left: '-4.87%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '61.72%', left: '30.77%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '87.32%', left: '11.54%' }}
            />
            <div class="text_center">กุ๊งกิ๊ง กุ๊งกิ๊ง</div>
          </div>
        )
      }

      case 3: {
        return (
          <div>
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '12.44%', left: '31.54%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '29.27%', left: '-8.89%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '55.33%', left: '45.38%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '80.69%', left: '2.56%' }}
            />
            <div class="text_center">กุ๊งกิ๊ง กุ๊งกิ๊ง</div>
          </div>
        )
      }

      case 4: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '7.7%', left: '52.82%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '30.21%', left: '-7.44%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '62.09%', left: '43.08%' }}
            />

            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '84.12%', left: '-2.05%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '-18.5%',
                left: '-3.85%',
                transform: 'rotate(-22deg)',
                width: '185px',
              }}
            />
            <div class="text_center">เสียงอะไรน่ะ</div>
          </div>
        )
      }

      case 5: {
        return (
          <div>
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '8.41%', left: '71.28%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '30.21%', left: '-7.44%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '62.09%', left: '43.08%' }}
            />

            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '84.12%', left: '-2.05%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '-20%',
                left: '2.93%',
                transform: 'rotate(-22deg)',
                width: '284.44px',
              }}
            />
            <div class="text_center">เสียงอะไรน่ะ</div>
          </div>
        )
      }

      case 6: {
        return (
          <div>
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '12.44%', left: '66.92%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '33.89%', left: '-22.31%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '58.18%', left: '52.05%' }}
            />

            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '87.09%', left: '-17.69%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '-15%',
                left: '7%',
                transform: 'rotate(-22deg)',
                width: '284.44px',
              }}
            />
          </div>
        )
      }

      case 7: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '10.19%', left: '56.92%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '35.43%', left: '-2.56%', width: '150px' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '60.66%', left: '48.46%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-11.03%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '-9%',
                left: '12%',
                transform: 'rotate(-20deg)',
                width: '295px',
              }}
            />
          </div>
        )
      }

      case 8: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '5.33%', left: '67.69%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '31.16%', left: '0.26%', width: '150px' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '58.77%', left: '48.46%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '84.83%', left: '-13.59%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '0%',
                left: '12%',
                transform: 'rotate(-17deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">“สวัสดี เราชูโอสนะ”</div>
          </div>
        )
      }
      case 9: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '6.99%', left: '53.85%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '34.95%', left: '-13.85%', width: '150px' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '62.56%', left: '34.36%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '85.9%', left: '-4.1%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '6%',
                left: '12%',
                transform: 'rotate(-5deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">“สวัสดี เราชูโอสนะ”</div>
          </div>
        )
      }
      case 10: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '7.58%', left: '58.46%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '33.29%', left: '1.03%', width: '150px' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '62.56%', left: '34.36%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '85.9%', left: '-4.1%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '15%',
                left: '12%',
                transform: 'rotate(-5deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">“เราอยากช่วยเธอ”</div>
          </div>
        )
      }
      case 11: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '6.99%', left: '58.97%' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '32.7%', left: '-16.41%', width: '150px' }}
            />
            <img
              class="cloud03"
              src={'images/WhiteCloud03.svg'}
              alt="background"
              style={{ top: '60.9%', left: '63.85%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '78.79%', left: '-14.87%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '19%',
                left: '12%',
                transform: 'rotate(-14deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">“เราอยากช่วยเธอ”</div>
          </div>
        )
      }
      default: {
        return <div></div>
      }
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <img
        class="bg_purple"
        src={'images/BG_Purple.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />
      <img
        class="star"
        src={'images/star.svg'}
        alt="background"
        style={starStyle(scene)}
      />
      <CloudCharacterText />
    </div>
  )
}
export default Scene03
