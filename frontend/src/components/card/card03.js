import { useState, useEffect } from 'react'

const Card03 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    width: '305px',
    height: '434px',
    background: bgCard,
    border: '2px solid #D0675E',
    borderRadius: '29px',
  }

  const charStyle = {
    position: 'absolute',
    width: '144px',
    height: '133px',
    left: '81px',
    top: '275px',
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
    fontSize: '26px',
    fontWeight: 500,
    lineHeight: '29px',
    textAlign: 'left',
    color: '#D0675E',
    position: 'absolute',
    width: '305px',
    height: '60px',
    left: '29px',
    top: '57px',
  }

  const infoStyle = {
    position: 'absolute',
    width: '251px',
    height: '101px',
    left: '29px',
    top: '151px',
    color: '#D0675E',
    fontFamily: 'Comfortaa',
    fontSize: '12px',
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
    fontSize: '36px',
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
      <img src="images/Charcard03.svg" style={charStyle} />
    </button>
  )
}

export default Card03
