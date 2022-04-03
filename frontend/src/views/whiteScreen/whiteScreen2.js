import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'
import { WhiteButton } from 'components/commons/commons'
import { useNavigate } from 'react-router'

const WhiteScreen2 = () => {
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [scene, setScene] = useState(0)
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  useEffect(() => {
    const time = 1200
    let acc = 0
    for (let i = 1; i < 4; i = i + 1) {
      acc += time
      setTimeout(() => {
        setScene(i)
        switch (i) {
          case 1:
            setMessage('ฉันใช้ชีวิตไปเรื่อยๆ')
            break
          case 2:
            setMessage('หันมาอีกที')
            break
          case 3:
            setMessage('ก็ไม่เจอใครแล้ว...')
            break
        }
      }, acc)
    }
  }, [])

  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const backgroundProps = {
    image: 'images/whiteScreen.svg',
    height: 891 * scaleHeight,
    width: 1404 * scaleHeight,
  }
  const yellowChuoseStyle_01 = (scene) => {
    switch (scene) {
      case 3: {
        return {
          position: 'absolute',
          height: 137.91 * scaleWidth,
          width: 132.54 * scaleWidth,
          left: 137 * scaleHeight,
          top: 398 * scaleWidth,
          transition: '0s',
        }
      }
      default:
        return { opacity: 0 }
    }
  }

  const cloudText08_08 = (scene) => {
    return {
      position: 'absolute',
      width: 382 * scaleWidth,
      height: 331.03 * scaleWidth,
      top: 250 * scaleHeight,
      left: -6 * scaleWidth,
      transition: '0s',
      opacity: scene === 1 ? 1 : 0,
      objectFit: 'cover',
    }
  }
  const cloudText08_09 = (scene) => {
    return {
      position: 'absolute',
      width: 206.92 * scaleWidth,
      height: 207.91 * scaleWidth,
      top: 321 * scaleHeight,
      left: 131 * scaleWidth,
      transition: '0s',
      opacity: scene === 2 ? 1 : 0,
    }
  }

  const cloud08 = (scene) => {
    switch (scene) {
      case 6:
        return {
          position: 'absolute',
          width: 1311.25 * scaleWidth,
          height: 371.23 * scaleWidth,
          top: 614 * scaleHeight,
          left: -6 * scaleWidth,
          transition: '0s',
        }
      case 7:
        return {
          position: 'absolute',
          width: 1311.25 * scaleWidth,
          height: 371.23 * scaleWidth,
          top: 614 * scaleHeight,
          left: -417 * scaleWidth,
          transition: '0s',
        }
      case 8:
        return {
          position: 'absolute',
          width: 1311.25 * scaleWidth,
          height: 371.23 * scaleWidth,
          top: 614 * scaleHeight,
          left: -828 * scaleWidth,
          transition: '0s',
        }
      default:
        return {
          opacity: 0,
        }
    }
  }

  return (
    <div
      style={{
        opacity: scene < 4 ? 1 : 0,
        transition: '0s',
      }}
    >
      <img src="images/whiteScreen.svg" alt="background" />
      <img
        src="images/CloudText08_08.svg"
        alt="cloudText08_08"
        style={cloudText08_08(scene)}
      />
      <img
        src="images/CloudText08_09.svg"
        alt="cloudText08_09"
        style={cloudText08_09(scene)}
      />
      <img
        src="images/YellowChuose_01.svg"
        alt="yellowChuose_01"
        style={yellowChuoseStyle_01(scene)}
      />

      <div
        style={{
          position: 'absolute',
          transition: '0s',
          top: 206 * scaleHeight,
          height: 412 * scaleHeight,
          width: 390 * scaleWidth,
        }}
      >
        <p
          style={{
            fontSize: 18 * scaleMean,
            color: '#020202',
            textAlign: 'center',
          }}
        >
          {message}
        </p>
      </div>
    </div>
  )
}

export default WhiteScreen2
