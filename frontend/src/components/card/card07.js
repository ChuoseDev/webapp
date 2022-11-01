import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth } from 'utils/constant'

const Card07 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: bgCard,
    border: '2px solid #D0675E',
    borderRadius: '29px',
  }

  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 100}px`,
    width: `${scaleHeight() * 131}px`,
    width: `${scaleWidth() * 148}px`,
    height: `${scaleHeight() * 126.48}px`,
    top: `${scaleHeight() * 269}px`,
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
    fontWeight: 700,
    lineHeight: '29px',
    textAlign: 'left',
    color: '#D0675E',
    position: 'absolute',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 60}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 77}px`,
  }

  const infoStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 251}px`,
    height: `${scaleHeight() * 101}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 146}px`,
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
    width: `${scaleWidth() * 65.21}px`,
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
          onClickFunction(7)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(7, false)
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
        07
      </div>

      <div style={headerStyle}>
        “Should” {<br />}
        statement{<br />}
      </div>
      <div style={infoStyle}>
        คือการคิดหรือคาดหวังให้ตัวเอง หรือคนอื่นทําบาง อย่างด้วยความคิดที่ว่า
        “ควรจะ” “น่าจะ” หรือ “ต้องทํา” ในสิ่งใดสิ่งหนึ่งตามที่ตนเองต้องการ
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharCard07.svg" style={charStyle} />
    </button>
  )
}

export default Card07
