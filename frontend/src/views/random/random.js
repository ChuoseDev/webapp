import BottomCloud from 'components/bottomCloud/bottomCloud'
import { WhiteButton } from 'components/commons/commons'
import GlitterStar from 'components/glitterStar/glitterStar'
import MiddleCloud from 'components/middleCloud/middleCloud'
import { useEffect, useState } from 'react'
import { SCENE14_SHIFT_TIME, scaleWidth, scaleHeight } from 'utils/constant'

const Random = () => {
  const [scene, setScene] = useState(0)

  const phaseEnum = {
    firstPhase: 'firstPhase',
    secondPhase: 'secondPhase',
    thirdPhase: 'thirdPhase',
    fourthPhase: 'fourthPhase',
  }

  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const [randomNumber, setRandomNumber] = useState(0)

  const characterStyle = (scene) => {
    return {
      top: 148 * scaleHeight(),
      left: 63 * (2 * scaleWidth() - scaleHeight()),
      transition: ` ${(2 * SCENE14_SHIFT_TIME) / 1000}s`,
      transform: scene % 4 < 2 ? 'rotate(-21.04deg)' : 'rotate(7deg)',
      width: `${295 * scaleHeight()}px`,
    }
  }

  const containerStyle = () => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      height: window.innerHeight,
      transition: 'opacity 0.3s ease-out',
      backgroundImage:
        'linear-gradient(#CAD8F3 13.35%, #FFF6ED 29.76%, #FFF2F2 50.51%, #CAD8F3 97.27%, rgba(255, 209, 90, 0.15) 102%)',
      opacity: phase === phaseEnum.fourthPhase ? 0 : 1,
      transition: '1s',
    }
  }

  const buttonStyle = () => {
    return {
      position: 'fixed',
      top: 500 * scaleHeight(),
      left: 77 * scaleWidth(),
      width: 243.8 * scaleWidth(),
      height: 46 * scaleHeight(),
      transition: 'ease-in-out 0.5s',
    }
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE14_SHIFT_TIME)

    setScene(2)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  const onClickRandomCard = () => {
    setPhase(phaseEnum.secondPhase)
    setRandomNumber(Math.floor(Math.random() * 8) + 1)
    setTimeout(() => {
      setPhase(phaseEnum.thirdPhase)
    }, 1000)
  }

  const onClickThank = () => {
    setPhase(phaseEnum.fourthPhase)
  }

  return (
    <div style={containerStyle()}>
      <GlitterStar />
      <BottomCloud fadeIn={true} />
      <MiddleCloud fadeIn={true} />
      {phase !== phaseEnum.thirdPhase && (
        <div
          style={{
            opacity: phase === phaseEnum.firstPhase ? 1 : 0,
            transition: '1s',
          }}
        >
          <img
            className="charactor"
            src={'images/Charactor.svg'}
            alt="character"
            style={characterStyle(scene)}
          />
          <WhiteButton
            onClick={onClickRandomCard}
            style={buttonStyle()}
            children={
              <p
                style={{
                  fontFamily: 'Comfortaa',
                  margin: 0,
                  fontSize: 24 * scaleHeight(),
                  fontWeight: 700,
                  color: '#425F83',
                }}
              >
                กดเพื่อสุ่มการ์ด
              </p>
            }
          />
        </div>
      )}
      {phase !== phaseEnum.firstPhase && (
        <div
          style={{
            opacity: phase === phaseEnum.thirdPhase ? 1 : 0,
            transition: '1s',
            top: 162 * scaleHeight(),
          }}
        >
          <img
            src={`images/randomCard_${randomNumber}.svg`}
            alt="randomCard"
            style={{
              width: 240 * scaleWidth(),
              height: 404 * scaleHeight(),
              marginTop: 162 * scaleHeight(),
            }}
          />
          <WhiteButton
            onClick={onClickThank}
            style={{ ...buttonStyle(), top: 620 * scaleHeight() }}
            children={
              <p
                style={{
                  fontFamily: 'Comfortaa',
                  margin: 0,
                  fontSize: 24 * scaleHeight(),
                  fontWeight: 700,
                  color: '#425F83',
                }}
              >
                ขอบคุณที่อยู่ด้วยกันนะ
              </p>
            }
          />
        </div>
      )}
    </div>
  )
}

export default Random
