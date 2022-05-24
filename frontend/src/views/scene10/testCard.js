import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import './scene10.css'
import { SCENE10_SHIFT_TIME } from 'utils/constant'
import CardSlider from 'components/cardSlider/cardSlider'
import { WhiteButton } from 'components/commons/commons'
const TestCard = () => {
  const scaleHeight = window.screen.height / 844
  const scaleWidth = window.screen.width / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [message2, setMessage2] = useState('')
  const [message3, setMessage3] = useState('')
  const [message4, setMessage4] = useState('')
  const [messageStyle, setMessageStyle] = useState({
    position: 'fixed',
    fontSize: 18 * scaleMean,
    color: '#020202',
    top: '20vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '70vw',
  })
  const [messageInCloud, setMessageInCloud] = useState('')
  const [messageInCloudStyle, setMessageInCloudStyle] = useState({
    position: 'fixed',
    fontSize: 18 * scaleMean,
    color: '#020202',
    top: '38vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '70vw',
  })
  const [characterStyle, setCharacterStyle] = useState({})

  const [imageInCloud, setimageInCloud] = useState('')
  const [imageInCloudStyle, setimageInCloudStyle] = useState({})

  const navigate = useNavigate()

  const mapper = {
    1: {
      message: 'เธอคิดว่าความคิดลบแบบไม่พักของเธอเป็นรูปแบบไหน?',
      messageStyle: {
        top: '10%',
        fontSize: 17 * scaleMean,
      },
      characterStyle: {
        bottom: '-25vh',
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE10_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && mapper[scene].message) {
      setMessage(mapper[scene].message)
    }
    if (mapper[scene] && mapper[scene].message2) {
      setMessage2(mapper[scene].message2)
    }
    if (mapper[scene] && mapper[scene].message3) {
      setMessage3(mapper[scene].message3)
    }
    if (mapper[scene] && mapper[scene].message4) {
      setMessage4(mapper[scene].message4)
    }

    if (mapper[scene] && mapper[scene].characterStyle) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[scene].characterStyle }
      })
    }
    if (mapper[scene] && mapper[scene].messageStyle) {
      setMessageStyle((messageStyle) => {
        return { ...messageStyle, ...mapper[scene].messageStyle }
      })
    }
    if (mapper[scene] && mapper[scene].imageInCloud) {
      setimageInCloud(mapper[scene].imageInCloud)
    }
    if (mapper[scene] && mapper[scene].imageInCloudStyle) {
      setimageInCloudStyle((imageInCloudStyle) => {
        return { ...imageInCloudStyle, ...mapper[scene].imageInCloudStyle }
      })
    }
    if (mapper[scene] && mapper[scene].messageInCloud) {
      setMessageInCloud(mapper[scene].messageInCloud)
    }
    if (mapper[scene] && mapper[scene].messageInCloudStyle) {
      setMessageInCloudStyle((messageInCloudStyle) => {
        return { ...messageInCloudStyle, ...mapper[scene].messageInCloudStyle }
      })
    }
    if (scene === 20) {
      //   navigate('/scene11')
    }
  }, [scene])

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
    }
  }
  const onClickStart = () => {
    setTimeout(() => {
      window.location.href = '/information'
    }, 1500)
  }

  return (
    <div style={containerStyle(scene)}>
      <CardSlider
        style={{
          position: 'fixed',
          width: '50vh',
          top: '25%',
          zindex: '9999',
        }}
      />
      <div>
        <p style={messageStyle}>
          {message}
          <br></br>
        </p>
      </div>
      <WhiteButton
        onClick={onClickStart}
        style={{
          position: 'fixed',
          top: '85%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 243 * scaleWidth,
          height: 46 * scaleHeight,
          // opacity: scene === 4 ? 1 : 0,
          transition: 'ease-in-out 0.5s',
        }}
        children={
          <p
            style={{
              margin: 0,
              fontSize: 24 * scaleHeight,
              fontWeight: 'bold',
            }}
          >
            ไปต่อ
          </p>
        }
      />
    </div>
  )
}
export default TestCard
