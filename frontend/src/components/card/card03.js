import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth, leftOffset } from 'utils/constant'

const Card03 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: bgCard,
    border: '2px solid #D0675E',
    borderRadius: '29px',
  }

  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 90 + leftOffset()}px`,
    width: `${scaleHeight() * 120}px`,
    top: `${scaleHeight() * 275}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: `148.${scaleWidth() * 29}px`,
    height: `${scaleHeight() * 147.43}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: '#FFB0A9',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 192}px`,
    height: `${scaleHeight() * 192}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 57}px`,
    top: `${scaleHeight() * 212}px`,
    background: '#FFBBB5',
    filter: 'blur(21px)',
  }

  const headerStyle = {
    fontFamily: 'Comfortaa',
    fontSize: 26 * scaleMean(),
    fontWeight: 500,
    lineHeight: '29px',
    textAlign: 'left',
    color: '#D0675E',
    position: 'absolute',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 60}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 57}px`,
  }

  const infoStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 251}px`,
    height: `${scaleHeight() * 101}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 151}px`,
    color: '#D0675E',
    fontFamily: 'Comfortaa',
    fontSize: 12 * scaleMean(),
    fontWeight: 300,
    lineHeight: '13px',
    textAlign: 'left',
    fontStyle: 'normal',
  }

  const cardNumberStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 39}px`,
    height: `${scaleHeight() * 30}px`,
    left: `${scaleWidth() * 236}px`,
    top: `${scaleHeight() * 19}px`,
    color: '#D0675E',
    fontFamily: 'Comfortaa',
    fontSize: 36 * scaleMean(),
    fontWeight: 700,
    lineHeight: '40px',
    textAlign: 'center',
    fontStyle: 'normal',
  }

  const svgStyle = {
    position: 'absolute',
    left: `${scaleWidth() * 222}px`,
    top: `${scaleHeight() * 30.18}px`,
    height: `${scaleHeight() * 25.51}px`,
    width: `65.${scaleWidth() * 21}px`,
    transform: 'rotate(-16.72deg)',
  }

  const ellipseStyle = {
    position: 'absolute',
    border: '1px solid #FEB1A9',
    borderRadius: '100px',
    stroke: '#FEB1A9',
    strokeWidth: '1px',
    fill: 'transparent',
    fillOpacity: 0,
  }

  return (
    <button
      style={cardStyle}
      onClick={() => {
        if (bgCard === '#FFFFFF') {
          setBgCard('#FFD5D1')
          onClickFunction(3)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(3, false)
        }
      }}
    >
      <svg position="absolute" style={svgStyle}>
        <ellipse
          style={ellipseStyle}
          cx="32.6px"
          cy="12.75px"
          ry="11.75px"
          rx="31.6"
        />
      </svg>
      <div id="cardnumber" style={cardNumberStyle}>
        03
      </div>

      <div style={headerStyle}>
        All or nothing {<br />}
        thinking{<br />}
        ความคิดสุดขั้ว
      </div>
      <div style={infoStyle}>
        การมองว่าสิ่งต่างๆมีแค่ผิดหรือถูกเท่านั้น ถ้าไม่ดีมากก็ต้องแย่มาก
        ถ้าไม่ใช่สีขาวก็ต้องเป็นสีดํา ทุกอย่างไม่มีตรงกลาง
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharCard03.svg" style={charStyle} />
    </button>
  )
}

export default Card03
