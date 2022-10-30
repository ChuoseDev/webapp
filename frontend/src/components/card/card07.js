import { useState, useEffect } from 'react'
import { scaleMean } from 'utils/constant'

const Card07 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: '305px',
    height: '434px',
    background: bgCard,
    border: '2px solid #D0675E',
    borderRadius: '29px',
  }

  const charStyle = {
    position: 'absolute',
    width: '148px',
    height: '126.48px',
    left: '95px',
    top: '269px',
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: '148.29px',
    height: '147.43px',
    borderRadius: '100px',
    left: '78.43px',
    top: '234.29px',
    background: '#FFB0A9',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: '192px',
    height: '192px',
    borderRadius: '100px',
    left: '57px',
    top: '212px',
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
    width: '305px',
    height: '60px',
    left: '29px',
    top: '77px',
  }

  const infoStyle = {
    position: 'absolute',
    width: '251px',
    height: '101px',
    left: '29px',
    top: '146px',
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
    width: '39px',
    height: '30px',
    left: '236px',
    top: '19px',
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
    left: '222px',
    top: '30.18px',
    height: '25.51px',
    width: '65.21px',
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
