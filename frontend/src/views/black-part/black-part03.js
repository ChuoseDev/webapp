import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'

// this is scene 06-08 to 06-11
const BlackPart03 = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [message, setMessage] = useState('')
  const [scene, setScene] = useState(-2)
  const [opacity, setOpacity] = useState(1.0)
  const [avocado, setAvocado] = useState('')
  useEffect(() => {
    setOpacity(1)
    setTimeout(() => {
      setScene(-1)
    }, 100)
    setTimeout(() => {
      setScene(0)
    }, 200)
    setTimeout(() => {
      setScene(1)
      setMessage('แต่ฉันเหนื่อยจังเลย')
    }, 200)
    setTimeout(() => {
      setScene(2)
    }, 2200)
    setTimeout(() => {
      setScene(3)
    }, 3200)
    setTimeout(() => {
      setScene(4)
    }, 4200)
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
    1: 'images/avocado/avocado02.svg',
    2: 'images/avocado/avocado02.svg',
    3: 'images/avocado/avocado03.svg',
    4: 'images/avocado/avocado06.svg',
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
                  opacity: 1,
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
                <img src={avocadoMapper[scene]}></img>
              </div>
            </Html>
          </Group>
        </Layer>
      </Stage>
    </div>
  )
}

export default BlackPart03
