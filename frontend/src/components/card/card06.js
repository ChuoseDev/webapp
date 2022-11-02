import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth, leftOffset } from 'utils/constant'

const Card06 = ({ onClickFunction }) => {
  const [bgCard, setBgCard] = useState('#FFFFFF')

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: bgCard,
    border: '2px solid #16875E',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 100 + leftOffset()}px`,
    width: `${scaleHeight() * 131}px`,
    top: `${scaleHeight() * 230}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: `148.${scaleWidth() * 29}px`,
    height: `${scaleHeight() * 147.43}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: '#97EACC',
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 192}px`,
    height: `${scaleHeight() * 192}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 57}px`,
    top: `${scaleHeight() * 212}px`,
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
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 60}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 45}px`,
    color: '#16875E',
  }
  const infoStyle = {
    position: 'absolute',
    width: `${scaleWidth() * 251}px`,
    height: `${scaleHeight() * 101}px`,
    left: `${scaleWidth() * 29}px`,
    top: `${scaleHeight() * 146}px`,
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
    width: `${scaleWidth() * 39}px`,
    height: `${scaleHeight() * 30}px`,
    left: `${scaleWidth() * 236}px`,
    top: `${scaleHeight() * 19}px`,
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
