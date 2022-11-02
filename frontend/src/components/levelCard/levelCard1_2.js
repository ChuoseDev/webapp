import { leftOffset, scaleHeight, scaleMean, scaleWidth } from 'utils/constant'

const LevelCard1_2 = () => {
  const cardStyle = {
    position: 'relative',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: '#FFFFFF',
    border: '2px solid #3AB487',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 82 + leftOffset()}px`,
    width: `${scaleHeight() * 131}px`,
    top: `${scaleHeight() * 235}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 148.29}px`,
    height: `${scaleHeight() * 147.43}px`,
    borderRadius: '100px',
    opacity: 0.62,
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: '#97EACC',
    filter: 'blur(10px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 192}px`,
    height: `${scaleHeight() * 192}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 57}px`,
    top: `${scaleHeight() * 212}px`,
    opacity: 0.7,
    background: '#97EACC',
    filter: 'blur(10.5px)',
  }

  const headerStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 221}px`,
    height: `${scaleHeight() * 76}px`,
    left: `${scaleWidth() * 42}px`,
    top: `${scaleHeight() * 64}px`,

    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20 * scaleMean(),
    lineHeight: '22px',
    textAlign: 'center',

    color: '#3AB487',
  }
  const infoStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 221}px`,
    height: `${scaleHeight() * 76}px`,
    left: `${scaleWidth() * 42}px`,
    top: `${scaleHeight() * 106}px`,

    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 12 * scaleMean(),
    lineHeight: '13px',
    textAlign: 'center',
    color: '#69C6A4',
  }

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        คุณมีความเสี่ยงในการ{<br />}
        ฆ่าตัวตายเพียงเล็กน้อย
      </div>
      <div style={infoStyle}>
        {<br />}“ฉันก็ไม่รู้หรอกนะว่าเธอจะรู้สึกแย่สักแค่ไหน{<br />}
        แต่ฉันยินดีจะทำความเข้าใจเธอนะ{<br />}
        อดทนไว้นะ อีกไม่นานเธอจะดีขึ้น”
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharLevel1_2.svg" style={charStyle} />
    </div>
  )
}

export default LevelCard1_2
