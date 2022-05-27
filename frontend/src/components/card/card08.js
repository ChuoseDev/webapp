import { useState, useEffect } from 'react'

const Card08 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: '305px',
    height: '434px',
    background: bgCard,
    border: '2px solid #E1A919',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: '70px',
    top: '260px',
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: '148.29px',
    height: '147.43px',
    borderRadius: '100px',
    left: '78.43px',
    top: '234.29px',
    background: '#E1A919',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: '192px',
    height: '192px',
    borderRadius: '100px',
    left: '57px',
    top: '212px',
    background: '#FFEAB2',
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
    color: '#E1A919',
  }
  const infoStyle = {
    position: 'absolute',
    width: '251px',
    height: '101px',
    left: '29px',
    top: '146px',
    color: '#E1A919',

    fontFamily: 'Comfortaa',
    fontSize: '12px',
    fontWeight: 300,
    lineHeight: '13px',
    textAlign: 'left',
    fontStyle: 'normal',
    color: '#E1A919',
  }
  const cardNumberStyle = {
    position: 'absolute',
    width: '39px',
    height: '30px',
    left: '236px',
    top: '19px',
    color: '#E1A919',

    fontFamily: 'Comfortaa',
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '40px',
    textAlign: 'center',
    fontStyle: 'normal',
    color: '#E1A919',
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
