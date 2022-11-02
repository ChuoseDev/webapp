import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import {
  dbFieldNames,
  onePercentageOfRealHeight,
  scaleMean,
  SCENE11_SHIFT_TIME,
} from 'utils/constant'
import CardSlider from 'components/cardSlider/cardSlider'
import { WhiteButton } from 'components/commons/commons'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Scene11 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [message2, setMessage2] = useState('')
  const [message3, setMessage3] = useState('')
  const [message4, setMessage4] = useState('')
  const [messageStyle, setMessageStyle] = useState({
    position: 'fixed',
    fontSize: 18 * scaleMean(),
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
    fontSize: 18 * scaleMean(),
    color: '#020202',
    top: 38 * onePercentageOfRealHeight(),
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '70vw',
  })
  const [characterStyle, setCharacterStyle] = useState({
    position: 'fixed',
    left: '50%',
    height: scaleHeight() * 272,
    bottom: '-15vh',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  })
  const [imageInCloud, setimageInCloud] = useState('')
  const [imageInCloudStyle, setimageInCloudStyle] = useState({
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '0 auto',
    height: `${scaleHeight() * 20}%`,
  })
  const [selectedCards, setSelectedCard] = useState([])

  const navigate = useNavigate()

  const mapper = {
    1: {
      message: 'Negative Automatic Thoughts',
      message2: '“ความคิดลบอัตโนมัติ”',
      imageInCloudStyle: {
        top: 40 * onePercentageOfRealHeight(),
        opacity: 0,
      },
      messageStyle: {
        fontSize: 17 * scaleMean(),
      },
    },
    3: {
      message: '“ความคิดลบอัตโนมัติ” คือ',
      message2: ' ',
      message3: ' ',
      message4: ' ',
    },
    5: {
      message: 'ประสบการณ์แย่ ๆ ในอดีต',
      messageStyle: {
        top: '10vh',
      },
    },
    6: {
      characterStyle: {
        bottom: '-20vh',
      },
    },
    7: {
      characterStyle: {
        bottom: '-25vh',
      },
      imageInCloud: 'images/crowd01.svg',
      imageInCloudStyle: {
        opacity: 1,
      },
    },
    8: {
      imageInCloud: 'images/crowd02.svg',
      imageInCloudStyle: {
        top: 42.5 * onePercentageOfRealHeight(),
        left: '48%',
      },
    },
    9: {
      imageInCloud: 'images/crowd03.svg',
      imageInCloudStyle: {
        top: 40 * onePercentageOfRealHeight(),
        left: '50%',
      },
    },
    10: {
      imageInCloud: 'images/YellowChuose_07.svg',
      imageInCloudStyle: {
        width: '17.5%',
      },
    },
    11: {
      imageInCloudStyle: {
        width: '25%',
      },
    },
    12: {
      message: 'ประสบการณ์แย่ ๆ ในอดีต',
      message2: 'ที่ส่งผลให้เรามีความคิดในแง่ลบวนเวียนอยู่',
      message3: 'ในหัวตลอดเวลา',
      imageInCloud: 'images/minus01.svg',
      imageInCloudStyle: {
        width: '50%',
      },
    },
    13: {
      imageInCloud: 'images/minus02.svg',
      imageInCloudStyle: {
        left: '48%',
      },
    },
    14: {
      message: 'เป็นเสียงแรกที่โผล่ขึ้นมาในหัวของเรา',
      message2: 'เมื่อเจอเหตุการณ์หนึ่ง',
      message3: ' ',
      imageInCloudStyle: {
        opacity: 0,
      },
    },
    15: {
      messageInCloud: sessionStorage.getItem('TEXT_Q2'),
    },
    16: {
      messageInCloud: '',
      messageInCloudStyle: {
        opacity: 0,
      },
    },
    17: {
      messageInCloud: sessionStorage.getItem('TEXT_Q3'),
      messageInCloudStyle: {
        opacity: 1,
      },
    },
    18: {
      messageStyle: {
        opacity: 0,
      },
      messageInCloudStyle: {
        opacity: 0,
      },
      characterStyle: {
        opacity: 0,
      },
    },
    19: {
      message: 'ความคิดลบอัติโนมัติมันมีรูปแบบอยู่นะ',
      message2: ' ',
      messageStyle: {
        top: 30 * onePercentageOfRealHeight(),
        opacity: 1,
        fontSize: 17 * scaleMean(),
      },
      characterStyle: {
        opacity: 1,
        bottom: '-20vh',
      },
    },
    22: {
      message: 'เธอคิดว่าความคิดลบอัติโนมัติของเธอเป็นรูปแบบไหน?',
      message2: '(เลื่อนดูตัวเลือกเพื่อเลือกคำตอบ สามารถเลือกได้มากกว่า 1 ข้อ)',
      messageStyle: {
        top: 10 * onePercentageOfRealHeight(),
        fontSize: 17 * scaleMean(),
      },
      characterStyle: {
        opacity: 0,
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE11_SHIFT_TIME)

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
  }, [scene])

  const containerStyle = (scene) => {
    return {
      width: window.screen.width,
      height: window.innerHeight,
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      opacity: 1,
      transition: 'opacity ease-in-out 1s',
      justifyContent: 'center',
    }
  }
  const onClickStart = () => {
    sessionStorage.setItem(
      dbFieldNames.SELECTED_CARDS,
      selectedCards.toLocaleString()
    )
    setTimeout(() => {
      navigate('/scene12')
    }, 1500)
  }

  const onClickCard = (id, add = true) => {
    if (add) {
      setSelectedCard([...selectedCards, id])
    } else {
      const idIndex = selectedCards.indexOf(id)
      if (idIndex !== -1) {
        selectedCards.splice(idIndex, 1)
      }
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <div>
        <p style={messageStyle}>
          {message}
          <br></br>
          {message2}
          <br></br>
          {message3}
          <br></br>
          {message4}
          <br></br>
        </p>
      </div>
      <img
        src={'images/YellowChuose_06.svg'}
        alt="character"
        style={characterStyle}
      />
      <img
        class="smallCloud"
        src={'images/whiteSmallCloud.svg'}
        alt="smallCloud"
        style={{
          position: 'fixed',
          left: '25%',
          bottom: '30vh',
          margin: '0 auto',
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          opacity: scene > 5 && scene < 18 ? 1 : 0,
          height: 45 * scaleHeight(),
        }}
      />
      <img
        class="bigCloud"
        src={'images/whiteBigCloud.svg'}
        alt="bigCloud"
        style={{
          position: 'fixed',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: '0 auto',
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          opacity: scene > 6 && scene < 18 ? 1 : 0,
          top: 40 * onePercentageOfRealHeight(),
          height: 286 * scaleHeight(),
        }}
      />
      <img src={imageInCloud} alt="imageInCloud" style={imageInCloudStyle} />
      <div>
        <p style={messageInCloudStyle}>{messageInCloud}</p>
      </div>
      <CardSlider
        style={{
          position: 'fixed',
          width: '125vw',
          left: '50%',
          transform: 'translate(-50%,0%)',
          top: 25 * onePercentageOfRealHeight(),
          zindex: '999',
          opacity: scene >= 22 ? 1 : 0,
        }}
        onClickCard={onClickCard}
      />
      {scene >= 22 && selectedCards.length > 0 && (
        <WhiteButton
          onClick={onClickStart}
          style={{
            position: 'fixed',
            top: 85 * onePercentageOfRealHeight(),
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 243 * scaleWidth(),
            height: 46 * scaleHeight(),
            transition: 'ease-in-out 0.5s',
          }}
          children={
            <p
              style={{
                margin: 0,
                fontSize: 24 * scaleMean(),
                fontWeight: 'bold',
              }}
            >
              ไปต่อ
            </p>
          }
        />
      )}
    </div>
  )
}
export default Scene11
