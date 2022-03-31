import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const Scene04B = () => {
  const [scene, setScene] = useState(1)
  const [imagePath, setImagePath] = useState('images/avocado/avocado02.svg')
  const navigate = useNavigate()
  const scaleHeight = window.screen.height / 844
  const scaleWidth = window.screen.width / 390

  useEffect(() => {
    const time = 250
    let acc = 0
    for (let i = 0; i < 16; i += 1) {
      acc += time
      setTimeout(() => {
        setScene(i)
        if (imageMapper[i]) {
          setImagePath(imageMapper[i])
        }
        if (i === 15) {
          setTimeout(() => {
            navigate('/scene042')
          }, 500)
        }
      }, acc)
    }
  }, [])

  const imageMapper = {
    4: 'images/avocado/avocado03.svg',
    8: 'images/avocado/avocado02.svg',
    12: 'images/avocado/avocado03.svg',
  }

  const containerStyle = (scene) => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: `rgba(0, 0, 0, 1)`,
      position: 'absolute',
      opacity: scene < 24 ? 1 : 0,
      transition: 'opacity ease-in-out 1s',
    }
  }

  const messageStyle = (scene) => {
    return {
      position: 'absolute',
      left: `${114 * scaleWidth}px`,
      top: `${186 * scaleHeight}px`,
      fontSize: 22,
      color: '#ffffff',
    }
  }

  const starStyle = (scene) => {
    return {
      position: 'absolute',
      left: `0px`,
      top: `${(scene % 4 < 2) * 10}px`,
    }
  }

  const avocadoStyle = (scene) => {
    return {
      position: 'absolute',
      left: '0px',
      top: `${457 * scaleHeight}px`,
    }
  }
  return (
    <div style={containerStyle(scene)}>
      <div style={messageStyle(scene)}>มีใครช่วยฉันได้หรอ</div>
      <img src="images/star.svg" alt="star" style={starStyle(scene)} />
      <img src={imagePath} style={avocadoStyle(scene)} />
    </div>
  )
}

export default Scene04B
