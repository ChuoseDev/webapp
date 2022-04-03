import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import './purple.css'

const Sscene03 = () => {
  const [scene, setScene] = useState(1)
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setScene(2)
    }, 500)
    setTimeout(() => {
      setScene(3)
    }, 1000)
    setTimeout(() => {
      setScene(4)
    }, 1500)
    setTimeout(() => {
      setScene(5)
    }, 2000)
    setTimeout(() => {
      setScene(6)
    }, 2500)
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

  const WhiteCloud01 = () => {
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
      <WhiteCloud01 />
    </div>
  )
}
export default Sscene03
