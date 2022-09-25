import { useState } from 'react'

const Card = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    width: '305px',
    height: '434px',
    background: bgCard,
    border: '2px solid #9484F8',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: '70px',
    top: '289px',
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: '148.29px',
    height: '147.43px',
    borderRadius: '100px',
    left: '78.43px',
    top: '234.29px',
    background: '#9081F8',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: '192px',
    height: '192px',
    borderRadius: '100px',
    left: '57px',
    top: '212px',
    background: '#C4BDF7',
    filter: 'blur(21px)',
  }

  const headerStyle = {
    //Font
    fontFamily: 'Comfortaa',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: '29px',
    textAlign: 'left',

    //Position
    position: 'absolute',
    width: '305px',
    height: '60px',
    left: '29px',
    top: '78px',
    color: '#553CFD',
  }
  const infoStyle = {
    position: 'absolute',
    width: '251px',
    height: '101px',
    left: '29px',
    top: '146px',
    color: '#553CFD',

    fontFamily: 'Comfortaa',
    fontSize: '12px',
    fontWeight: 300,
    lineHeight: '13px',
    textAlign: 'left',
    fontStyle: 'normal',
    color: '#553CFD',
  }
  const cardNumberStyle = {
    position: 'absolute',
    width: '39px',
    height: '30px',
    left: '236px',
    top: '19px',
    color: '#553CFD',

    fontFamily: 'Comfortaa',
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '40px',
    textAlign: 'center',
    fontStyle: 'normal',
    color: '#553CFD',
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
      <img src="images/CharCard.svg" style={charStyle} />
    </button>
  )
}

export default Card
