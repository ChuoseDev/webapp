import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import '../scene03/purple.css'

const Scene06 = () => {
  const [scene, setScene] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setScene(2)
    }, 1000)
    setTimeout(() => {
      setScene(3)
    }, 2000)
    setTimeout(() => {
      navigate('/blackpart03')
    }, 3000)
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
                left: '13%',
                width: '300px',
              }}
            />
          </div>
        )
      }

      case 2: {
        return (
          <div>
            <div class="text_top">"เราออกไปจากที่นี้กันมั๊ย [ชื่อผู้ใช้]"</div>
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
                left: '7%',
                transform: 'rotate(-15deg)',
                width: '350px',
              }}
            />
          </div>
        )
      }

      case 3: {
        return (
          <div>
            <div class="text_top">"เราออกไปจากที่นี้กันมั๊ย [ชื่อผู้ใช้]"</div>
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
                left: '7%',
                transform: 'rotate(-7.5deg)',
                width: '350px',
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
export default Scene06
