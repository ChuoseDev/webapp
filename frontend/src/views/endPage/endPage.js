import { useState, useEffect } from 'react'

const EndPage = () => {
  const [scene, setScene] = useState(1)

  useEffect(() => {
    for (let i = 2; i <= 4; i += 1) {
      setTimeout(() => {
        setScene(i)
      }, (i - 1) * 1000)
    }
  }, [])

  const endPageStyle = (scene) => {
    return {
      opacity: scene === 1 ? 0 : scene === 4 ? 0 : 1,
      transition: 'opacity 1s ease-in',
    }
  }

  return <img src="images/end_page.svg" style={endPageStyle(scene)} />
}

export default EndPage
