import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'

const Scene05 = () => {
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
    setTimeout(() => {
      setScene(5)
    }, 4000)
    setTimeout(() => {
      setScene(6)
    }, 5000)
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

  const onClickChange = () => {
    navigate('/scene06')
  }

  const ButtonCharacter = () => {
    return (
      <div>
        {scene >= 3 && scene < 7 && (
          <input
            class="input"
            style={{ top: '21%', left: '12%' }}
            placeholder="ชื่อผู้ใช้"
          />
        )}
        {scene >= 4 && scene < 7 && (
          <input
            class="input"
            style={{ top: '30%', left: '12%' }}
            placeholder="อายุ"
          />
        )}
        {scene >= 5 && scene < 7 && (
          <select class="input" style={{ top: '39%', left: '12%' }}>
            <option value="">เพศ</option>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="others">อื่น ๆ</option>
          </select>
        )}

        {scene >= 6 && scene < 7 && (
          <button
            class="input"
            style={{ top: '50%', left: '12%' }}
            onClick={() => onClickChange()}
          >
            ไปต่อ
          </button>
        )}
      </div>
    )
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
              style={{ top: '8.05%', left: '58.71%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.76%', left: '-16.66%', width: '43.76%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-0.77%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '19%',
                left: '0%',
                transform: 'rotate(-22deg)',
                width: '380px',
              }}
            />
          </div>
        )
      }
      case 2: {
        return (
          <div>
            <div class="text_top">ฉันขอทำความรู้จักเธอนิดนึงนะ</div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.06%', left: '58.72%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.77%', left: '-16.67%', width: '43.76%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-0.77%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '25%',
                left: '15%',
                transform: 'rotate(-22deg)',
                width: '300px',
              }}
            />
          </div>
        )
      }

      case 3: {
        return (
          <div>
            <div class="text_top">ฉันขอทำความรู้จักเธอนิดนึงนะ</div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.06%', left: '58.72%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.77%', left: '-16.67%', width: '43.76%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-0.77%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '30%',
                left: '20%',
                transform: 'rotate(-12deg)',
                width: '250px',
              }}
            />
          </div>
        )
      }

      case 4: {
        return (
          <div>
            <div class="text_top">ฉันขอทำความรู้จักเธอนิดนึงนะ</div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.06%', left: '58.72%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.77%', left: '-16.67%', width: '43.76%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-0.77%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '35%',
                left: '20%',
                transform: 'rotate(-10deg)',
                width: '250px',
              }}
            />
          </div>
        )
      }

      case 5: {
        return (
          <div>
            <div class="text_top">ฉันขอทำความรู้จักเธอนิดนึงนะ</div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.06%', left: '58.72%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.77%', left: '-16.67%', width: '43.76%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-0.77%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '45%',
                left: '20%',
                transform: 'rotate(5deg)',
                width: '250px',
              }}
            />
          </div>
        )
      }

      case 6: {
        return (
          <div>
            <div class="text_top">ฉันขอทำความรู้จักเธอนิดนึงนะ</div>
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '8.06%', left: '58.72%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '33.77%', left: '-16.67%', width: '43.76%' }}
            />
            <img
              class="cloud01"
              src={'images/WhiteCloud01.svg'}
              alt="background"
              style={{ top: '61.97%', left: '63.59%' }}
            />
            <img
              class="cloud02"
              src={'images/WhiteCloud02.svg'}
              alt="background"
              style={{ top: '82.35%', left: '-0.77%' }}
            />
            <img
              class="charactor"
              src={'images/Charactor.svg'}
              alt="charactor"
              style={{
                top: '55%',
                left: '20%',
                transform: 'rotate(-5.04deg)',
                width: '250px',
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
      <ButtonCharacter />
    </div>
  )
}
export default Scene05
