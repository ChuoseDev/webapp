import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'
import { onePercentageOfRealHeight } from 'utils/constant'

const Scene07 = () => {
  const [scene, setScene] = useState(1)

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }, [])

  useEffect(() => {
    if (scene === 2) {
      setTimeout(() => {
        navigate('/scene08')
      }, 2000)
    }
  }, [scene])

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      opacity: scene === 1 ? 1 : 0,
      transition: 'opacity ease-in-out 2s',
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
            <div
              class="text_top"
              style={{ top: 17 * onePercentageOfRealHeight() }}
            >
              "ได้สิ ฉันเชื่อว่าเธอทำได้<br></br> เรามาหาทางออกด้วยกันนะ"
            </div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{
                top: 8.06 * onePercentageOfRealHeight(),
                left: '58.72%',
              }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{
                top: 33.77 * onePercentageOfRealHeight(),
                left: '-16.67%',
                width: '43.76%',
              }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{
                top: 61.97 * onePercentageOfRealHeight(),
                left: '63.59%',
              }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{
                top: 82.35 * onePercentageOfRealHeight(),
                left: '-0.77%',
              }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: 30 * onePercentageOfRealHeight(),
                left: '7%',
                transform: 'rotate(-15deg)',
                width: '350px',
              }}
            />
          </div>
        )
      }

      case 2: {
        return (
          <div>
            <div
              class="text_top"
              style={{ top: 17 * onePercentageOfRealHeight() }}
            >
              "ได้สิ เราลองมาหาทางออกด้วยกันมั้ย"
            </div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{
                top: 8.06 * onePercentageOfRealHeight(),
                left: '58.72%',
              }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{
                top: 33.77 * onePercentageOfRealHeight(),
                left: '-16.67%',
                width: '43.76%',
              }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{
                top: 61.97 * onePercentageOfRealHeight(),
                left: '63.59%',
              }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{
                top: 82.35 * onePercentageOfRealHeight(),
                left: '-0.77%',
              }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: 35 * onePercentageOfRealHeight(),
                left: '7%',
                transform: 'rotate(-10deg)',
                width: '350px',
              }}
            />
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
              style={{
                top: 18.5 * onePercentageOfRealHeight(),
                left: '61.75%',
              }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{
                top: 44.22 * onePercentageOfRealHeight(),
                left: '-10.01%',
                width: '43.76%',
              }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{
                top: 72.44 * onePercentageOfRealHeight(),
                left: '66.39%',
              }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{
                top: 94.14 * onePercentageOfRealHeight(),
                left: '7.57%',
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
      <CloudCharacterText />
    </div>
  )
}
export default Scene07
