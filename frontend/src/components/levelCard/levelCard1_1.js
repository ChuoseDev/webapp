const LevelCard1_1 = () => {

  const cardStyle = {
    position: 'relative',
    width: '305px',
    height: '434px',
    background: '#FFFFFF',
    border: '2px solid #9484F8',
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: '53px',
    top: '197px',
  }

  const circleInnerStyle = {
    position: 'absolute',
    width: '148.29px',
    height: '147.43px',
    borderRadius: '100px',
    opacity: 0.62,
    left: '78.43px',
    top: '234.29px',
    background: '#DBDDFC',
    filter: 'blur(10px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: '192px',
    height: '192px',
    borderRadius: '100px',
    left: '57px',
    top: '212px',
    opacity: 0.7,
    background: '#DBDDFC',
    filter: 'blur(10.5px)',
  }

  const headerStyle = {
    position: 'absolute',
    width: '221px',
    height: '76px',
    left: '42px',
    top: '64px',

    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '22px',
    textAlign: 'center',

    color: '#553CFD'
  }
  const infoStyle = {
    position: 'absolute',
    width: '221px',
    height: '76px',
    left: '42px',
    top: '106px',

    fontFamily: 'Comfortaa',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '12px',
    lineHeight: '13px',
    textAlign: 'center',

    color: '#7A68F3'
  }

  return (
    <div
      style={cardStyle}
    >
      <div style={headerStyle}>
        คุณไม่มีความเสี่ยง{<br />}
        ในการฆ่าตัวตาย
      </div>
      <div style={infoStyle}>
        {<br />}“ถ้าทุกข์ใจเมื่อไหร่{<br />}
        เธอมาระบายกับเราได้ตลอดเลยนะ”
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharLevel1_1.svg" style={charStyle} />
    </div>
  )
}

export default LevelCard1_1
