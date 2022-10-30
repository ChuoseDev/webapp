import BottomCloud from 'components/bottomCloud/bottomCloud'
import GlitterStar from 'components/glitterStar/glitterStar'
import MiddleCloud from 'components/middleCloud/middleCloud'
import TopCloud from 'components/topCloud/topCloud'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { SCENE15_SHIFT_TIME } from 'utils/constant'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene15 = () => {
  const [scene, setScene] = useState(0)

  const [backgroundImage, setBackgroundImage] = useState({
    opacity: 1,
    backgroundImage:
      'linear-gradient(0deg, #CB956F -3.62%, rgba(223, 136, 136, 0.65) 14.77%, #8276D3 70.47%, #50318A 97.27%)',
  })
  const [message, setMessage] = useState('“เธอสุดยอดจริงๆ...”')

  const navigate = useNavigate()
  const characterStyle = (scene) => {
    const speed = 2
    return {
      top: `${22 + speed * (4 * (scene >= 8) * (scene - 8))}%`,
      left: `${
        12 +
        // speed *
        (-2 * scene +
          (scene >= 7) * (scene - 7) * 4 -
          (scene >= 11) * (scene - 11) * 1)
      }%`,
      transform: `rotate(${
        -21.04 +
        // speed *
        (2 * scene -
          (scene >= 7) * (scene - 7) * 8 +
          (scene >= 11) * (scene - 11) * 12 -
          (scene >= 14) * (scene - 14) * 7)
      }deg)`,
      width: `${295 * scaleWidth()}px`,
    }
  }

  const mapper = {
    2: {
      backgroundImage:
        'linear-gradient(0.19deg, #ADD9E9 -7.75%, #9FDCFA -7.74%, #A18EC6 -5.32%, #D3878F 71.06%, rgba(225, 169, 102, 0.71) 90.99%)',
    },
    4: {
      message: '“ที่เธอผ่านมาจนมาเล่าให้ฉันฟังได้”',
      characterStyle: {
        transform: 'rotate(-10.04deg)',
      },
    },
    8: {
      backgroundImage:
        'linear-gradient(0.19deg, #E69DCA -7.75%, #9BD1F9 -1.13%, rgba(198, 189, 255, 0.842328) 41.71%, #EFA54C 97.11%)',
      message: '“เอาล่ะ...ถึงเวลาที่เธอต้องไปต่อเเล้วนะ”',
    },
    27: {
      backgroundImage:
        'linear-gradient(0.19deg, rgba(198, 230, 253, 0.96) 12.46%, rgba(198, 189, 255, 0.842328) 53.42%)',
      message: '“ก่อนเธอจะไป”',
    },
    30: {
      backgroundImage:
        'linear-gradient(0.19deg, #E69DCA -7.75%, #9BD1F9 -1.13%, rgba(198, 189, 255, 0.842328) 41.71%, #EFA54C 97.11%)',
      message: '"ฉันมีของขวัญจะให้เธอด้วยนะ"',
    },
    34: {
      message: '',
    },
    36: {
      message: '“รองเท้าคู่นี้...”',
    },
    38: {
      message: '“ใส่มัน...”',
    },
    40: {
      message: '“เเล้วเดินออกไปใช้ชีวิตของเธอสิ”',
    },
  }

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      height: window.innerHeight,
      transition: 'opacity 0.3s ease-out',
      ...backgroundImage,
    }
  }

  const messageStyle = (scene) => {
    return {
      position: 'absolute',
      color: 'white',
      top: '17%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      transform: 'translate(0%)',
      fontSize: `${18 * scaleWidth()}px`,
    }
  }

  const shoesStyle = (scene) => {
    const width = scene < 34 ? 24 : scene < 36 ? 64 : 94
    const height = scene < 34 ? 28 : scene < 36 ? 76 : 111
    const top = scene < 34 ? 370 : scene < 36 ? 384 : 366
    const left = scene < 34 ? 183 : scene < 36 ? 168 : 149
    return {
      position: 'absolute',
      width: width * scaleWidth(),
      height: height * scaleHeight(),
      top: top * scaleHeight(),
      left: left * scaleWidth(),
    }
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE15_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && 'message' in mapper[scene]) {
      setMessage(mapper[scene].message)
    }
    if (mapper[scene] && mapper[scene].backgroundImage) {
      setBackgroundImage({
        ...backgroundImage,
        opacity: 0.75,
      })
      setMessage('')
      setTimeout(() => {
        setBackgroundImage({
          opacity: 1,
          backgroundImage: mapper[scene].backgroundImage,
        })
        if (mapper[scene].message) {
          setMessage(mapper[scene].message)
        }
      }, 300)
    }
    if (scene === 42) {
      navigate('/scene16')
    }
  }, [scene])

  return (
    <div style={containerStyle(scene)}>
      <div style={{}}>
        <GlitterStar />
      </div>
      {scene <= 27 && <BottomCloud fadeIn={true} />}
      {scene <= 27 && <MiddleCloud fadeIn={true} />}
      {scene >= 30 && (
        <>
          <TopCloud fadeIn={true} />
          <TopCloud fadeIn={true} top={100} />
          <BottomCloud fadeIn={true} />
          <BottomCloud fadeIn={true} bottom={100} />
          <BottomCloud fadeIn={true} bottom={200} />
          <img src="images/shoes.svg" alt="shoes" style={shoesStyle(scene)} />
        </>
      )}
      {scene >= 28 && <BottomCloud fadeIn={true} />}
      {scene <= 26 && (
        <img
          className="charactor"
          src={'images/Charactor.svg'}
          alt="character"
          style={characterStyle(scene)}
        />
      )}
      <div style={messageStyle(scene)}>{message}</div>
    </div>
  )
}

export default Scene15
