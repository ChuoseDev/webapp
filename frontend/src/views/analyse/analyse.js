import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import Star from 'components/star/star'
import {
  ANALYSE_SHIFT_TIME,
  onePercentageOfRealHeight,
  scaleHeight,
  scaleWidth,
  VIEW_CHANGING_DELAY_TIME,
} from 'utils/constant'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'

const Analyse = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const [innerBtmCloudStyle, setInnerBtmCloudStyle] = useState({})
  const [outerBtmCloudStyle, setOuterBtmCloudStyle] = useState({})
  const [innerTopCloudStyle, setInnerTopCloudStyle] = useState({})
  const [outerTopCloudStyle, setOuterTopCloudStyle] = useState({})
  const [image, setImage] = useState('images/char_11_01.svg')
  const [characterStyle, setCharacterStyle] = useState({
    top: 50 * onePercentageOfRealHeight(),
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  })
  const generalAttributeTopCloudStyle = {
    position: 'absolute',
    width: 1447.95,
    height: 832.56,
    opacity: 0.4,
    transform: 'rotate(180deg)',
  }

  const generalAttributeBtmCloudStyle = {
    position: 'absolute',
    width: 1447.98,
    height: 720.1,
    opacity: 0.4,
  }

  const mapper = {
    1: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ',
      image: 'images/char_11_01.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -46.5 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -70.2 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        ...generalAttributeBtmCloudStyle,
        top: 51.4 * onePercentageOfRealHeight(),
        left: '-145.4%',
      },
      outerBtmCloudStyle: {
        ...generalAttributeBtmCloudStyle,
        top: 78.1 * onePercentageOfRealHeight(),
        left: '-50%',
      },
    },
    2: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n.',
      image: 'images/char_11_02.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -36.7 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -63.6 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        ...generalAttributeBtmCloudStyle,
        top: 48.5 * onePercentageOfRealHeight(),
        left: '-145.4%',
      },
      outerBtmCloudStyle: {
        ...generalAttributeBtmCloudStyle,
        top: 75.1 * onePercentageOfRealHeight(),
        left: '-50%',
      },
    },
    3: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n..',
      image: 'images/char_11_03.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -29.8 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -56.7 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 45.5 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 72.2 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
    4: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n...',
      image: 'images/char_11_04.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -26.1 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -53 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 43.5 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 70.1 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
    5: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n....',
      image: 'images/char_11_02.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -26.1 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -53 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 43.5 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 70.1 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
    6: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n.....',
      image: 'images/char_11_05.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -29.8 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -56.7 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 45.5 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 72.2 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
    7: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n......',
      image: 'images/char_11_06.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -31.8 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -58.7 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 48.1 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 74.8 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
    8: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ\n.......',
      image: 'images/char_11_07.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -43.4 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -70.2 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 51.4 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 78.1 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
    9: {
      message: 'ชูโอสกำลังทำการประเมินเรื่องราวของคุณ',
      image: 'images/char_11_01.svg',
      innerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -43.4 * onePercentageOfRealHeight(),
        left: '-123.2%',
      },
      outerTopCloudStyle: {
        ...generalAttributeTopCloudStyle,
        top: -70.2 * onePercentageOfRealHeight(),
        left: '-221.9%',
      },
      innerBtmCloudStyle: {
        top: 51.4 * onePercentageOfRealHeight(),
        left: '-145.4%',
        ...generalAttributeBtmCloudStyle,
      },
      outerBtmCloudStyle: {
        top: 78.1 * onePercentageOfRealHeight(),
        left: '-50%',
        ...generalAttributeBtmCloudStyle,
      },
    },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, ANALYSE_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && mapper[scene].message) {
      setMessage(mapper[scene].message)
    }
    if (mapper[scene] && mapper[scene].image) {
      setImage(mapper[scene].image)
    }
    if (mapper[scene] && mapper[scene].innerBtmCloudStyle) {
      setInnerBtmCloudStyle(mapper[scene].innerBtmCloudStyle)
    }
    if (mapper[scene] && mapper[scene].outerBtmCloudStyle) {
      setOuterBtmCloudStyle(mapper[scene].outerBtmCloudStyle)
    }

    if (mapper[scene] && mapper[scene].innerTopCloudStyle) {
      setInnerTopCloudStyle(mapper[scene].innerTopCloudStyle)
    }
    if (mapper[scene] && mapper[scene].outerTopCloudStyle) {
      setOuterTopCloudStyle(mapper[scene].outerTopCloudStyle)
    }

    if (mapper[scene] && mapper[scene].characterStyle) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[scene].characterStyle }
      })
    }
  }, [scene])

  useEffect(() => {
    if (scene === 9) {
      setTimeout(() => {
        navigate('/level')
      }, VIEW_CHANGING_DELAY_TIME)
    }
  }, [scene])

  const containerStyle = (scene) => {
    return {
      position: 'absolute',
      // left: 0,
      // top: 0,
      textAlign: 'left',
      margin: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }
  }

  const backgroundStyles = (scene) => {
    return {
      position: 'absolute',
      width: 390 * scaleWidth(),
      height: 866.8 * scaleHeight(),
      objectFit: 'cover',
    }
  }

  return (
    <div style={containerStyle(scene)}>
      <img
        src={'images/BG_11.svg'}
        alt="background"
        style={backgroundStyles(scene)}
      />

      <img
        src={'images/cloud_11.svg'}
        alt="cloud-top-1"
        style={outerTopCloudStyle}
      />

      <img
        src={'images/cloud_11.svg'}
        alt="cloud-top-2"
        style={innerTopCloudStyle}
      />

      <Star />
      <BottomCloud />
      <TopCloud />
      <div
        style={{
          position: 'absolute',
          color: '#020202',
          top: 28 * onePercentageOfRealHeight(),
          left: '50%',
          transform: 'translate(-50%, -50%)',
          'font-size': '18px',
          width: '80%',
          whiteSpace: 'pre-wrap',
          textAlign: 'center',
        }}
      >
        {message}
      </div>

      <img src={image} alt="character" style={characterStyle} />

      <img
        src={'images/cloud_11.svg'}
        alt="cloud-btm-1"
        style={innerBtmCloudStyle}
      />

      <img
        src={'images/cloud_11.svg'}
        alt="cloud-btn-2"
        style={outerBtmCloudStyle}
      />
    </div>
  )
}

export default Analyse
