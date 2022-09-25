const LevelCard1_2 = () => {

    const cardStyle = {
      position: 'relative',
      width: '305px',
      height: '434px',
      background: '#FFFFFF',
      border: '2px solid #3AB487',
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
      background: '#97EACC',
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
      background: '#97EACC',
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
  
      color: '#3AB487'
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
      color: '#69C6A4'
    }
  
    return (
      <div
        style={cardStyle}
      >
        <div style={headerStyle}>
            คุณมีความเสี่ยงในการ{<br />}
            ฆ่าตัวตายเพียงเล็กน้อย
        </div>
        <div style={infoStyle}>
          {<br />}“ฉันก็ไม่รู้หรอกนะว่าเธอจะรู้สึกแย่สักแค่ไหน{<br />}
          แต่ฉันยินดีจะทำความเข้าใจเธอนะ{<br />}
          อดทนไว้นะ อีกไม่นานเธอจะดีขึ้น”
        </div>
        <div id="circleOuter" style={circleOuterStyle}></div>
        <div id="circleInner" style={circleInnerStyle}></div>
        <img src="images/CharLevel1_2.svg" style={charStyle} />
      </div>
    )
  }
  
  export default LevelCard1_2
  