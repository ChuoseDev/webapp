import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth } from 'utils/constant'

const Card05 = ({ onClickFunction }) => {
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
    left: `${scaleHeight() * 90}px`,
    width: `${scaleHeight() * 131}px`,
    top: `${scaleHeight() * 269}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: `148.${scaleWidth() * 29}px`,
    height: `${scaleHeight() * 147.43}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: '#9081F8',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 192}px`,
    height: `${scaleHeight() * 192}px`,
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
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 60}px`,
    left: `${scaleWidth() * 10}px'`,
    top: `${scaleHeight() * 78}px`,
    color: '#553CFD',
  }
  const infoStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 251}px`,
    height: `${scaleHeight() * 101}px`,
    left: `${scaleWidth() * 13}px`,
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
    width: `${scaleWidth() * 39}px`,
    height: `${scaleHeight() * 30}px`,
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
    width: `${scaleWidth() * 65.21}px`,
    transform: 'rotate(-16.72deg)',
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
          onClickFunction(5)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(5, false)
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
        05
      </div>

      <div style={headerStyle}>
        Catastrophizing {<br />}
        การมองทุกอย่างเป็นหายนะ
      </div>
      <div style={infoStyle}>
        การคิดว่าสิ่งที่เกิดขึ้นจะนําไปสู่สิ่งที่เลวร้ายมากๆ
        ไม่มีใครหรืออะไรจะเลวร้ายไปได้มากกว่านี้อีกแล้ว เช่น ถ้าเขาเกลียดชูโอ้ส
        ชูโอ้สคงไม่สามารถมีความสุขได้อีก
      </div>
      <div id="circleInner" style={circleOuterStyle}></div>
      <div id="circleOuter" style={circleInnerStyle}></div>
      <img src="images/CharCard05.svg" style={charStyle} />
    </button>
  )
}

export default Card05
