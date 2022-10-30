import { scaleMean } from 'utils/constant'

const LevelCard4_5 = () => {
  const cardStyle = {
    position: 'relative',
    width: '305px',
    height: '434px',
    background: '#FFFFFF',
    border: '2px solid #D0675E',
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
    opacity: 0.2,
    left: '78.43px',
    top: '234.29px',
    background: '#FFB0A9',
    filter: 'blur(10px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    width: '192px',
    height: '192px',
    borderRadius: '100px',
    left: '57px',
    top: '212px',
    opacity: 0.37,
    background: '#FFB0A9',
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
    fontSize: 20 * scaleMean(),
    lineHeight: '22px',
    textAlign: 'center',
    color: '#D0675E',
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
    fontSize: 12 * scaleMean(),
    lineHeight: '13px',
    textAlign: 'center',
    color: '#F98278',
  }

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        คุณมีความเสี่ยงใน{<br />}
        การฆ่าตัวตายสูง
      </div>
      <div style={infoStyle}>
        {<br />}“ต้องพบแพทย์เพื่อประเมินอาการและ{<br />}
        ให้การรักษาโดยเร็ว ไม่ควรปล่อยทิ้งไว้”
      </div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img src="images/CharLevel4_5.svg" style={charStyle} />
    </div>
  )
}

export default LevelCard4_5
