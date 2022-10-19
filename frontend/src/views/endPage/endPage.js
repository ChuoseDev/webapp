import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const EndPage = () => {
  const [scene, setScene] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    for (let i = 2; i <= 6; i += 1) {
      setTimeout(() => {
        setScene(i)
      }, (i - 1) * 1000)
    }
  }, [])

  useEffect(() => {
    if (scene === 6) {
      navigate('/random')
    }
  }, [scene])

  const endPageStyle = (scene) => {
    return {
      opacity: scene === 1 ? 0 : scene >= 4 ? 0 : 1,
      transition: 'opacity 1s ease-in',
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      height: window.screen.height,
      width: window.screen.width,
    }
  }

  return <img src="images/end_page.svg" style={endPageStyle(scene)} />
}

export default EndPage
