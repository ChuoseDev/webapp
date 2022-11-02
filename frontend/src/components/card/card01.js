import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth, leftOffset } from 'utils/constant'

const Card01 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: bgCard,
    border: '2px solid #9484F8',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 90 + leftOffset()}px`,
    width: `${scaleHeight() * 100}px`,
    top: `${scaleHeight() * 289}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 147.43}px`,
    width: `${scaleWidth() * 148.29}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: '#9081F8',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 192}px`,
    width: `${scaleWidth() * 192}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 57}px`,
    top: `${scaleHeight() * 212}px`,
    background: '#C4BDF7',
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
    height: `${scaleHeight() * 60}px`,
    width: `${scaleWidth() * 305}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 78}px`,
    color: '#553CFD',
  }
  const infoStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 101}px`,
    width: `${scaleWidth() * 251}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 146}px`,
    color: '#553CFD',

    fontFamily: 'Comfortaa',
    fontSize: 12 * scaleMean(),
    fontWeight: 300,
    lineHeight: '13px',
    textAlign: 'left',
    fontStyle: 'normal',
    color: '#553CFD',
  }
  const cardNumberStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 30}px`,
    width: `${scaleWidth() * 39}px`,
    left: `${scaleWidth() * 236}px`,
    top: `${scaleHeight() * 19}px`,
    color: '#553CFD',

    fontFamily: 'Comfortaa',
    fontSize: 36 * scaleMean(),
    fontWeight: 700,
    lineHeight: '40px',
    textAlign: 'center',
    fontStyle: 'normal',
    color: '#553CFD',
  }

  const svgStyle = {
    position: 'absolute',
    left: `${scaleWidth() * 222}px`,
    top: `${scaleHeight() * 30.18}px`,
    height: `${scaleHeight() * 25.51}px`,
    transform: 'rotate(-16.72deg)',
    width: `${scaleWidth() * 65.21}px`,
  }

  const ellipseStyle = {
    position: 'absolute',
    border: '1px solid #AEA3F8',
    borderRadius: '100px',
    stroke: '#AEA3F8',
    strokeWidth: '1px',
    fill: 'transparent',
    fillOpacity: 0,
  }

  return (
    <button
      style={cardStyle}
      onClick={() => {
        if (bgCard === '#FFFFFF') {
          setBgCard('#DBDDFC')
          onClickFunction(1)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(1, false)
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
        01
      </div>

      <div style={headerStyle}>
        Overgeneralizing{<br />}
        การด่วนสรุป
      </div>
      <div style={infoStyle}>
        การสรุปภาพรวมโดยไม่มีหลักฐาน หรือ มีหลักฐานเพียงเล็กน้อย เช่น
        เมื่อชูโอ้สสอบตก ชูโอ้สก็คิดว่าตัวเองไม่มีอะไรดีเป็นคนขี้แพ้
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharCard01.svg" style={charStyle} />
    </button>
  )
}

export default Card01
