import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Star from 'components/star/star'
import { SCENE11_SHIFT_TIME } from 'utils/constant'

const Scene11 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [story, setStory] = useState('')
  const [innerBtmCloudStyle, setInnerBtmCloudStyle] = useState({})
  const [outerBtmCloudStyle, setOuterBtmCloudStyle] = useState({})
  const [innerTopCloudStyle, setInnerTopCloudStyle] = useState({})
  const [outerTopCloudStyle, setOuterTopCloudStyle] = useState({})
  const [image, setImage] = useState('images/char_11_01.svg')
  const [characterStyle, setCharacterStyle] = useState({
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  })

  const phaseEnum = {
    firstPhase: 'firstPhase',
  }

  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const navigate = useNavigate()

  const generalAttributeBtmCloudStyle = {
    position: 'absolute',
    width: 1447.98,
    height: 720.1,
    opacity: 0.4,
  }
  const generalAttributeTopCloudStyle = {
    position: 'absolute',
    width: 1447.95,
    height: 832.56,
    opacity: 0.4,
    transform: 'rotate(180deg)',
  }

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: 'หายใจ.',
        image: 'images/char_11_01.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-46.5%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-70.2%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '51.4%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '78.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      2: {
        message: 'หายใจเข้า..',
        image: 'images/char_11_02.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-36.7%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-63.6%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '48.5%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '75.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      3: {
        message: 'หายใจเข้า...',
        image: 'images/char_11_03.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-29.8%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-56.7%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '45.5%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '72.2%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      4: {
        message: 'หายใจเข้า...',
        image: 'images/char_11_04.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-26.1%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-53%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '43.5%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '70.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      5: {
        message: 'หายใจ...',
        image: 'images/char_11_02.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-26.1%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-53%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '43.5%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '70.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      6: {
        message: 'หายใจออก..',
        image: 'images/char_11_05.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-29.8%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-56.7%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '45.5%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '72.2%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      7: {
        message: 'หายใจออก.',
        image: 'images/char_11_06.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-31.8%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-58.7%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '48.1%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '74.8%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      8: {
        message: 'หายใจออก',
        image: 'images/char_11_07.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-43.4%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-70.2%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '51.4%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '78.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      9: {
        message: '',
        image: 'images/char_11_01.svg',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-43.4%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-70.2%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '51.4%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '78.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
      },
      10: {},
      11: {
        message:
          'ลองเล่าเรื่องที่เธอเล่าให้เราฟังอีกสักครั้ง แบบที่ไม่มีความคิดลบแบบไม่พักหน่อยสิ',
        innerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-43.4%',
          left: '-123.2%',
        },
        outerTopCloudStyle: {
          ...generalAttributeTopCloudStyle,
          top: '-70.2%',
          left: '-221.9%',
        },
        innerBtmCloudStyle: {
          top: '51.4%',
          left: '-145.4%',
          ...generalAttributeBtmCloudStyle,
        },
        outerBtmCloudStyle: {
          top: '78.1%',
          left: '-50%',
          ...generalAttributeBtmCloudStyle,
        },
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
    if (mapper[phase][scene] && mapper[phase][scene].message) {
      setMessage(mapper[phase][scene].message)
    }
    if (mapper[phase][scene] && mapper[phase][scene].image) {
      setImage(mapper[phase][scene].image)
    }
    if (mapper[phase][scene] && mapper[phase][scene].innerBtmCloudStyle) {
      setInnerBtmCloudStyle(mapper[phase][scene].innerBtmCloudStyle)
    }
    if (mapper[phase][scene] && mapper[phase][scene].outerBtmCloudStyle) {
      setOuterBtmCloudStyle(mapper[phase][scene].outerBtmCloudStyle)
    }

    if (mapper[phase][scene] && mapper[phase][scene].innerTopCloudStyle) {
      setInnerTopCloudStyle(mapper[phase][scene].innerTopCloudStyle)
    }
    if (mapper[phase][scene] && mapper[phase][scene].outerTopCloudStyle) {
      setOuterTopCloudStyle(mapper[phase][scene].outerTopCloudStyle)
    }

    if (mapper[phase][scene] && mapper[phase][scene].characterStyle) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[phase][scene].characterStyle }
      })
    }
  }, [scene])

  const shiftPhase = (phase) => {
    setScene(0)
    setPhase(phase)
  }

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
    }
  }

  const backgroundStyles = (scene) => {
    return {
      position: 'relative',
      left: 0,
      top: -30,
    }
  }

  return (
    <div style={containerStyle(scene)}>
      {scene !== 10 && (
        <img
          src={'images/BG_11.svg'}
          alt="background"
          style={backgroundStyles(scene)}
        />
      )}
      {scene !== 10 && (
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={outerTopCloudStyle}
        />
      )}
      {scene !== 10 && (
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={innerTopCloudStyle}
        />
      )}
      <Star />
      {scene !== 9 && scene !== 10 && (
        <div
          style={{
            position: 'absolute',
            color: '#020202',
            top: '28%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            'font-size': '18px',
            width: '80%',
          }}
        >
          {message}
        </div>
      )}
      {scene <= 9 && <img src={image} alt="character" style={characterStyle} />}
      {scene !== 10 && (
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={innerBtmCloudStyle}
        />
      )}
      {scene !== 10 && (
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={outerBtmCloudStyle}
        />
      )}
      {scene >= 11 && (
        <input
          class="input"
          style={{
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            width: 317,
            height: 160,
          }}
          value={story}
          onChange={(e) => {
            setStory(e.target.value)
          }}
        />
      )}

      {scene >= 11 && (
        <button
          class="white-button"
          style={{
            position: 'absolute',
            top: '63.7%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 243.8,
          }}
          onClick={() => navigate('/scene12')}
        >
          ไปต่อ
        </button>
      )}
    </div>
  )
}

export default Scene11
