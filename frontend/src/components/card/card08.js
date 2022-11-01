import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth } from 'utils/constant'

const Card08 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: bgCard,
    border: '2px solid #E1A919',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 100}px`,
    width: `${scaleHeight() * 131}px`,
    top: `${scaleHeight() * 260}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: `148.${scaleWidth() * 29}px`,
    height: `${scaleHeight() * 147.43}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: '#E1A919',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 192}px`,
    height: `${scaleHeight() * 192}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 57}px`,
    top: `${scaleHeight() * 212}px`,
    background: '#FFEAB2',
    filter: 'blur(21px)',
  }

  const headerStyle = {
    //Font
    fontFamily: 'Comfortaa',
    fontSize: 26 * scaleMean(),
    fontWeight: 700,
    lineHeight: '29px',
    textAlign: 'left',

    //Position
    position: 'absolute',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 60}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 78}px`,
    color: '#E1A919',
  }
  const infoStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 251}px`,
    height: `${scaleHeight() * 101}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 146}px`,
    color: '#E1A919',

    fontFamily: 'Comfortaa',
    fontSize: 12 * scaleMean(),
    fontWeight: 300,
    lineHeight: '13px',
    textAlign: 'left',
    fontStyle: 'normal',
    color: '#E1A919',
  }
  const cardNumberStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 39}px`,
    height: `${scaleHeight() * 30}px`,
    left: `${scaleWidth() * 236}px`,
    top: `${scaleHeight() * 19}px`,
    color: '#E1A919',

    fontFamily: 'Comfortaa',
    fontSize: 36 * scaleMean(),
    fontWeight: 700,
    lineHeight: '40px',
    textAlign: 'center',
    fontStyle: 'normal',
    color: '#E1A919',
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
    border: '1px solid #FFEAB2',
    borderRadius: '100px',
    stroke: '#FFEAB2',
    strokeWidth: '1px',
    fill: 'transparent',
    fillOpacity: 0,
  }

  return (
    <button
      style={cardStyle}
      onClick={() => {
        if (bgCard === '#FFFFFF') {
          setBgCard('#FFEAB2')
          onClickFunction(8)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(8, false)
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
        08
      </div>

      <div style={headerStyle}>
        Magnification or {<br />}
        Minimization
      </div>
      <div style={infoStyle}>
        เมื่อเกิดเรื่องที่ไม่ดีหรือมีความผิดพลาดเกิดขึ้น
        มักจะมองเรื่องนั้นๆใหญ่เกินความเป็นจริง (Magnification)
        หรือเมื่อมีเรื่องที่ดีเกิดขึ้นก็มองเรื่องนั้นเป็นเรื่องเล็ก
        (Minimization)
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharCard08.svg" style={charStyle} />
    </button>
  )
}

export default Card08
