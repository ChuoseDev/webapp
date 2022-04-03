import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'

const BlackPart01 = () => {
  const scaleHeight = window.screen.height / 844
  const scaleWidth = window.screen.width / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [message, setMessage] = useState('')
  const [scene, setScene] = useState(-2)
  const [opacity, setOpacity] = useState(0)
  const [avocado, setAvocado] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    setOpacity(1)
    setTimeout(() => {
      setScene(-1)
    }, 100)
    setTimeout(() => {
      setScene(0)
    }, 500)
    setTimeout(() => {
      setScene(1)
      setMessage('เหนื่อยจัง')
    }, 1000)
    setTimeout(() => {
      setScene(2)
    }, 4000)
    setTimeout(() => {
      setScene(3)
      setMessage('ทำไมอะไร ๆ มันยากไปหมดเลย')
    }, 5000)
    setTimeout(() => {
      setScene(4)
    }, 7000)
    setTimeout(() => {
      setScene(5)
      setMessage('')
    }, 8000)
    setTimeout(() => {
      setScene(6)
      setMessage('หรือฉัน...')
    }, 10000)
    setTimeout(() => {
      setScene(7)
    }, 12000)
    setTimeout(() => {
      setScene(8)
      setMessage('ไม่ควรอยู่ตรงนี้')
    }, 13000)
    setTimeout(() => {
      setScene(9)
    }, 16000)
    setTimeout(() => {
      setScene(10)
      setMessage('มีแค่ฉันหรือป่าว')
    }, 17000)
    setTimeout(() => {
      setScene(11)
    }, 20000)
    setTimeout(() => {
      setScene(12)
      setMessage('ที่ต้องจมอยู่แบบนี้')
    }, 21000)
    setTimeout(() => {
      setScene(13)
    }, 24000)
    setTimeout(() => {
      setScene(14)
      setMessage('ไม่มีความสุขเลย')
    }, 25000)
    setTimeout(() => {
      navigate('/scene03')
    }, 26000)
  }, [])

  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const backgroundProps = {
    image: 'images/StarBackground.svg',
    width: 1448 * scaleWidth,
    height: 966 * scaleHeight,
    opacity: 1,
    animation: {},
  }

  const avocadoMapper = {
    6: 'images/avocado/avocado01.svg',
    7: 'images/avocado/avocado02.svg',
    8: 'images/avocado/avocado03.svg',
    9: 'images/avocado/avocado03.svg',
    10: 'images/avocado/avocado04.svg',
    11: 'images/avocado/avocado05.svg',
    12: 'images/avocado/avocado03.svg',
    13: 'images/avocado/avocado06.svg',
    14: 'images/avocado/avocado03.svg',
  }

  return (
    <div style={{ opacity, transition: 'opacity ease-in-out 1.5s' }}>
      <Stage {...stageProps}>
        <Layer>
          <AnimateImage {...backgroundProps} />
          <Group>
            <Html>
              <div
                style={{
                  opacity: scene > 4 ? 0 : 1,
                  transition: 'ease-in-out 1s',
                  display: 'flex',
                  top: '-25%',
                  marginLeft: 195 * scaleWidth,
                  marginTop: 422 * scaleHeight,
                }}
              >
                <p
                  style={{
                    fontSize: 18 * scaleMean,
                    color: '#ffffff',
                    margin: 0,
                    left: '50%',
                    transform: 'translate(-50%,0%)',
                  }}
                >
                  {message}
                </p>
              </div>
            </Html>
          </Group>
          <Group>
            <Html>
              <div
                style={{
                  opacity: scene > 4 ? 1 : 0,
                  transition: 'ease-in-out 1s',
                  display: 'flex',
                  top: '-25%',
                  marginLeft: 195 * scaleWidth,
                  marginTop: 212 * scaleHeight,
                }}
              >
                <p
                  style={{
                    fontSize: 18 * scaleMean,
                    color: '#ffffff',
                    margin: 0,
                    left: '50%',
                    transform: 'translate(-50%,0%)',
                  }}
                >
                  {message}
                </p>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '0px',
                  position: 'bottom',
                  marginTop: 221 * scaleHeight,
                }}
              >
                <img
                  src={avocadoMapper[scene]}
                  style={{
                    opacity: scene < 6 ? 0 : 1,
                    transition: 'ease-in-out 1s',
                  }}
                ></img>
              </div>
            </Html>
          </Group>
        </Layer>
      </Stage>
    </div>
  )
}

export default BlackPart01
