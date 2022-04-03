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
    setTimeout(() => {
      setScene(7)
    }, 3000)
    setTimeout(() => {
      setScene(8)
    }, 3500)
    setTimeout(() => {
      setScene(9)
    }, 4000)
    setTimeout(() => {
      setScene(10)
    }, 4500)
    setTimeout(() => {
      setScene(11)
    }, 5000)
    setTimeout(() => {
      navigate('/scene041')
    }, 7000)
  }, [])

  const containerStyle = (scene) => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      position: 'relative',
      left: 0,
      top: 0,
      margin: 0,
      textAlign: 'center',
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
        return(
        )
      }

      default: {
        return <div></div>
      }
    }
    return <div></div>
  }

  const whiteCloud02 = (scene) => {
    return
  }

  const whiteCloud03 = (scene) => {
    return
  }

  const whiteCloud04 = (scene) => {
    return
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
