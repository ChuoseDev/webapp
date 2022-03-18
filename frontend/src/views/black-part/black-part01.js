import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'

const BlackPart = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [message, setMessage] = useState('')
  const [scene, setScene] = useState(-2)
  const [opacity, setOpacity] = useState(1.0)
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
    }, 8000)
    setTimeout(() => {
      setScene(5)
      setMessage('หรือฉัน...')
    }, 9000)
    setTimeout(() => {
      setScene(6)
    }, 12000)
    setTimeout(() => {
      setScene(7)
      setMessage('ไม่ควรอยู่ตรงนี้')
    }, 13000)
    setTimeout(() => {
      setScene(8)
    }, 16000)
    setTimeout(() => {
      setScene(9)
      setMessage('มีแค่ฉันหรือป่าว')
    }, 17000)
    setTimeout(() => {
      setScene(10)
    }, 20000)
    setTimeout(() => {
      setScene(11)
      setMessage('ที่ต้องจมอยู่แบบนี้')
    }, 21000)
    setTimeout(() => {
      setScene(12)
    }, 24000)
    setTimeout(() => {
      setScene(13)
      setMessage('ไม่มีความสุขเลย')
    }, 25000)
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

  return (
    <div style={{ opacity, transition: 'opacity ease-in-out 1.5s' }}>
      <Stage {...stageProps}>
        <Layer>
          <AnimateImage {...backgroundProps} />
          <Group
            {...{
              x: 140 * scaleWidth,
              y: 422 * scaleHeight,
            }}
          >
            <Html>
              <div
                style={{
                  // opacity: scene % 2 === 1 && scene < 4 ? 1 : 0,
                  opacity: 1,
                  transition: 'ease-in-out 1s',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontSize: 18 * scaleMean,
                    color: '#ffffff',
                    margin: 0,
                    left: '50%',
                  }}
                >
                  {message}
                </p>
              </div>
            </Html>
          </Group>
          {/* <Group
            {...{
              x: 120 * scaleWidth,
              y: 600 * scaleHeight,
            }}
          >
            <Html>
              <div
                style={{
                  opacity: scene % 2 === 1 && scene > 4 ? 1 : 0,
                  transition: 'ease-in-out 1s',
                }}
              >
                <p
                  className="header"
                  style={{
                    fontSize: 18 * scaleMean,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {message}
                </p>
              </div>
            </Html>
          </Group> */}
        </Layer>
      </Stage>
    </div>
  )
}

export default BlackPart
