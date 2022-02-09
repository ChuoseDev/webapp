import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'

const Information = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const [scene, setScene] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  useEffect(() => {
    setOpacity(1)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setScene(scene + 1)
    }, 500)
    return () => clearInterval(interval)
  }, [scene])

  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const backgroundProps = {
    image: 'images/cloudBackground.svg',
    height: 1651 * scaleHeight,
    width: 2601 * scaleHeight,
    x: -513 * scaleHeight,
    y: -24 * scaleHeight,
    scene: (scene % 16) / 4,
    animation: {
      0: {
        x: -513 * scaleHeight,
        y: -24 * scaleHeight,
        height: 1651 * scaleHeight,
        width: 2601 * scaleHeight,
        duration: 2,
      },
      1: {
        x: -630 * scaleHeight,
        y: 0,
        height: 1651 * scaleHeight,
        width: 2601 * scaleHeight,
        duration: 2,
      },
      2: {
        x: -613 * scaleHeight,
        y: 0,
        height: 1783 * scaleHeight,
        width: 2809 * scaleHeight,
        duration: 2,
      },
      3: {
        x: -498 * scaleHeight,
        y: -31 * scaleHeight,
        height: 1783 * scaleHeight,
        width: 2809 * scaleHeight,
        duration: 2,
      },
    },
  }

  const buttonGroupProps = {
    y: 108 * scaleHeight,
  }

  const floatChuoseProps = {
    image: 'images/Charactor.svg',
    x: 168 * scaleWidth,
    y: 526 * scaleHeight,
    offsetX: 100 * scaleWidth,
    offsetY: -50 * scaleWidth,
    rotation: -20,
    width: 190 * scaleWidth,
    height: 218 * scaleWidth,
    scene: scene % 4,
    animation: {
      0: { x: 130, y: 546, rotation: -13, duration: 0.5 },
      1: { y: 526, rotation: 0, duration: 0.5 },
      2: { x: 210, y: 546, rotation: 13, duration: 0.5 },
      3: { y: 526, rotation: 0, duration: 0.5 },
    },
  }

  const onClickNext = () => {
    setOpacity(0)
    setTimeout(() => {
      window.location.href = '/feeling'
    }, 1500)
  }

  return (
    <div style={{ opacity, transition: 'opacity ease-in-out 1.5s' }}>
      <div style={{ position: 'absolute' }}>
        <Stage {...stageProps}>
          <Layer>
            <AnimateImage {...backgroundProps} />
            <AnimateImage {...floatChuoseProps} />
            <Group {...buttonGroupProps}>
              <Html>
                <div
                  style={{
                    textAlign: 'center',
                    height: 844 * scaleHeight,
                    width: 390 * scaleWidth,
                  }}
                >
                  <h1
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18 / scaleWidth,
                      color: 'white',
                    }}
                  >
                    ก่อนที่จะเริ่มเราขอรู้จักคุณสักนิด...
                  </h1>
                  <input
                    clsssname="button-info"
                    type="text"
                    placeholder="ชื่อผู้ใช้"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }}
                  />
                  <input
                    clsssname="age"
                    type="number"
                    placeholder="อายุ"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value)
                    }}
                  />
                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value)
                    }}
                  >
                    <option value="" disabled hidden>
                      เพศ
                    </option>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                    <option value="others">อื่นๆ</option>
                  </select>
                  <button class="button" onClick={onClickNext}>
                    ไปต่อ
                  </button>
                </div>
              </Html>
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default Information
