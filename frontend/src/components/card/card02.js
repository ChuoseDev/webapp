import { useState, useEffect } from 'react'

const Card02 = () => {
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
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: '29px',
    textAlign: 'left',

    //Position
    position: 'absolute',
    width: '305px',
    height: '60px',
    left: '29px',
    top: '78px',
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
    color: '#16875E',

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
        } else {
          setBgCard('#FFFFFF')
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
        02
      </div>

      <div style={headerStyle}>
        Filtering
        {<br />}
        การมองหาแต่ข้อมูลเชิงลบ
      </div>
      <div style={infoStyle}>
        การที่มองข้ามข้อดีหรือการมองตัวเอง และมองอนาคตในเชิงลบ
        ซึ่งการทำแบบนี้ทำให้รู้สึก สิ้นหวังและหมดหนทาง เช่น ตอนที่ชูโอ้สตื่นสาย
        ในวันสอบ ชูโอ้สทำคะแนนออกมาได้ดี แต่มองเห็นแค่ว่า
        ตัวเองเป็นคนแย่ที่ตื่นสาย ไม่ได้มองว่าตัวเองทำคะแนน ได้ดี
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharCard02.svg" style={charStyle} />
    </button>
  )
}

export default Card02
