import Star from 'components/star/star'
import LevelCard1_1 from 'components/levelCard/levelCard1_1'
import LevelCard1_2 from 'components/levelCard/levelCard1_2'
import LevelCard3 from 'components/levelCard/levelCard3'
import LevelCard4_5 from 'components/levelCard/levelCard4_5'
import { WhiteButton } from 'components/commons/commons'
import { useNavigate } from 'react-router'
import { scaleWidth, scaleHeight } from 'utils/constant'

const Level = () => {
  const level = parseFloat(sessionStorage.getItem('LEVEL'))
    ? parseFloat(sessionStorage.getItem('LEVEL'))
    : 0
  const navigate = useNavigate()

  const containerStyle = () => {
    return {
      position: 'absolute',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      height: window.screen.height,
    }
  }

  const backgroundStyles = () => {
    return {
      width: 390 * scaleWidth(),
      height: 866.8 * scaleHeight(),
      position: 'relative',
      transform: 'translateY(-2.7%)',
      transition: 'opacity ease-in-out 1s',
      background:
        'linear-gradient(0deg, #CAD8F3 13.35%, #FFF6ED 29.76%, #FFF2F2 50.51%, #CAD8F3 97.27%, rgba(255, 209, 90, 0.15) 97.27%)',
    }
  }
  const messageStyle = () => {
    return {
      position: 'absolute',
      top: 108 * scaleHeight(),
      fontSize: '24px',
      width: '100%',
      color: 'black',
    }
  }

  const innerTopCloudStyle = () => {
    return {
      position: 'absolute',
      width: 1447.95 * scaleWidth(),
      height: 832.56 * scaleHeight(),
      transform: 'rotate(180deg)',
      opacity: 0.4,
      top: -360.67 * scaleHeight(),
      left: -467.97 * scaleWidth(),
    }
  }

  const outerTopCloudStyle = () => {
    return {
      position: 'absolute',
      width: 1447.98 * scaleWidth(),
      height: 720.1 * scaleHeight(),
      transform: 'rotate(180deg)',
      opacity: 0.4,
      top: -473.2 * scaleHeight(),
      left: -840 * scaleWidth(),
    }
  }

  const innerBtmCloudStyle = () => {
    return {
      position: 'absolute',
      width: 1447.95 * scaleWidth(),
      height: 832.56 * scaleHeight(),
      opacity: 0.4,
      top: 341 * scaleHeight(),
      left: -579 * scaleWidth(),
    }
  }

  const outerBtmCloudStyle = () => {
    return {
      position: 'absolute',
      width: 1447.98 * scaleWidth(),
      height: 720.1 * scaleHeight(),
      opacity: 0.4,
      top: 566 * scaleHeight(),
      left: -207 * scaleWidth(),
    }
  }

  const buttonStyle = () => {
    return {
      position: 'absolute',
      top: 672 * scaleHeight(),
      left: 77 * scaleWidth(),
      width: 243.8 * scaleWidth(),
      height: 46 * scaleHeight(),
      transition: 'ease-in-out 0.5s',
    }
  }

  const onClickNext = () => {
    navigate('/scene10')
  }

  const onClickEmergency = () => {
    navigate('/emergency-contact')
  }

  return (
    <div style={containerStyle()}>
      <div style={backgroundStyles()}>
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={innerTopCloudStyle()}
        />
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={outerTopCloudStyle()}
        />
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={innerBtmCloudStyle()}
        />
        <img
          src={'images/cloud_11.svg'}
          alt="character"
          style={outerBtmCloudStyle()}
        />
        <p style={messageStyle()}>ความเสี่ยงในการ{<br />}ฆ่าตัวตายของคุณ</p>
        <Star />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {level < 1 ? (
          <LevelCard1_1 />
        ) : level <= 2 ? (
          <LevelCard1_2 />
        ) : level < 4 ? (
          <LevelCard3 />
        ) : (
          <LevelCard4_5 />
        )}
      </div>
      <WhiteButton
        onClick={level >= 4 ? onClickEmergency : onClickNext}
        style={buttonStyle()}
        children={
          <p
            style={{
              fontFamily: 'Comfortaa',
              margin: 0,
              fontSize: level >= 4 ? 20 * scaleHeight() : 24 * scaleHeight(),
              fontWeight: 700,
              color: level >= 4 ? '#F0524A' : '#425F83',
              opacity: 0.9,
            }}
          >
            {level >= 4 ? 'Emergency contact' : 'ไปต่อ'}
          </p>
        }
      />
    </div>
  )
}
export default Level
