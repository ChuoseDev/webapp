import { useState, useEffect } from 'react'
import { scaleMean } from 'utils/constant'

const Card06 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: '305px',
    height: '434px',
    background: bgCard,
    border: '2px solid #16875E',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: '70px',
    top: '230px',
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: '148.29px',
    height: '147.43px',
    borderRadius: '100px',
    left: '78.43px',
    top: '234.29px',
    background: '#97EACC',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: '192px',
    height: '192px',
    borderRadius: '100px',
    left: '57px',
    top: '212px',
    background: '#B5EFDA',
    filter: 'blur(21px)',
  }

  const headerStyle = {
    //Font
    fontFamily: 'Comfortaa',
    fontSize: 24 * scaleMean(),
    fontWeight: 700,
    lineHeight: '29px',
    textAlign: 'left',

    //Position
    position: 'absolute',
    width: '305px',
    height: '60px',
    left: '29px',
    top: '45px',
    color: '#16875E',
  }
  const infoStyle = {
    position: 'absolute',
    width: '251px',
    height: '101px',
    left: '29px',
    top: '146px',
    color: '#16875E',

    fontFamily: 'Comfortaa',
    fontSize: 10 * scaleMean(),
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
    color: '#16875E',

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
    border: '1px solid #AEA3F8',
    borderRadius: '100px',
    stroke: '#93D7BF',
    strokeWidth: '1px',
    fill: 'transparent',
    fillOpacity: 0,
  }

  return (
    <button
      style={cardStyle}
      onClick={() => {
        if (bgCard === '#FFFFFF') {
          setBgCard('#D6FFF0')
          onClickFunction(6)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(6, false)
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
        06
      </div>

      <div style={headerStyle}>
        Jumping to {<br />} conclusion
        {<br />}
        การอ่านใจผู้อื่น
      </div>
      <div style={infoStyle}>
        การคิดไปเองว่าคนอื่นคิดหรือรู้สึกอะไร ทั้งที่จริงๆแล้วไม่รู้ เช่น
        ตอนนั้นชูโอ้สพูดแทรกในที่ประชุม ทุกคนต้องคิดว่าชูโอ้ส ไม่มีมารยาทแน่ๆ
        อาจเป็นการทํานายอนาคต - การเชื่อว่าตัวเองรู้ว่าจะเกิดเหตุการณ์ นั้นๆ
        ขึ้นอีกในอนาคต แม้ว่าในความเป็นจริงไม่มีใครสามารถรู้ได้ เช่น
        เรื่องมันจะต้องออกมาเป็น....แน่ๆ
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharCard06.svg" style={charStyle} />
    </button>
  )
}

export default Card06
