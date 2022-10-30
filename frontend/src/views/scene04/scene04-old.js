import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'

const Scene04 = () => {
  const [scene, setScene] = useState(1)
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setScene(2)
    }, 1000)
    setTimeout(() => {
      setScene(3)
    }, 2000)
  }, [])

  const onClickChangeScene = async () => {
    setScene(4)
    setTimeout(() => {
      setScene(5)
    }, 1000)
    setTimeout(() => {
      navigate('/scene05')
    }, 2000)
  }

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
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.76%', left: '-16.66%', width: '43.76%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.05%', left: '58.71%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.34%', left: '0.77%' }}
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
            <div class="text_buttom">ได้สิ</div>
          </div>
        )
      }
      case 2: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.53%', left: '51.54%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '76.07%', left: '62.31%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '19%',
                left: '12%',
                transform: 'rotate(-18deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">
              “เธอลองให้เรา พาเธอออกไปจากที่นี่ได้มั้ย?”
            </div>
          </div>
        )
      }

      case 3: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '7.7%', left: '51.03%' }}
            />

            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '60.19%', left: '-17.18%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '16%',
                left: '16%',
                transform: 'rotate(-18deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">
              “เธอลองให้เรา พาเธอออกไปจากที่นี่ได้มั้ย?”
            </div>
            <button class="button" onClick={() => onClickChangeScene()}>
              ลองดู
            </button>
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
              style={{ top: '7.7%', left: '51.03%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '30.69%', left: '-17.95%', width: '43.76%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '18%',
                left: '15%',
                transform: 'rotate(-18deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">“ว่าแต่เธอชื่ออะไร”</div>
          </div>
        )
      }
      case 5: {
        return (
          <div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '6.52%', left: '63.59%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '32.23%', left: '-11.79%', width: '43.76%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '60.31%', left: '65.13%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '17%',
                left: '15.5%',
                transform: 'rotate(-18deg)',
                width: '295px',
              }}
            />
            <div class="text_buttom">“ว่าแต่เธอชื่ออะไร”</div>
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
export default Scene04
