import { useEffect, useState } from 'react'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { useNavigate } from 'react-router'

const Consent = () => {
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const navigate = useNavigate()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    setPhase(1)
  }, [])

  const buttonStyle = () => {
    return {
      width: scaleWidth * 243,
      height: scaleHeight * 46,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#ffffff',
      borderRadius: 35,
      fontSize: 20 * scaleHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#8A7EBE',
      position: 'absolute',
      left: scaleWidth * 73,
      top: scaleHeight * 702,
      textDecoration: 'none',
    }
  }

  const buttonMessage = (phase) => {
    const message = {
      1: 'ไปต่อ',
      2: 'รับทราบ',
    }
    return message[phase]
  }

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: window.screen.height,
        transition: 'opacity 0.3s ease-out',
        backgroundImage:
          'linear-gradient(#CAD8F3 13.35%, #FFF6ED 29.76%, #FFF2F2 50.51%, #CAD8F3 100%, rgba(255, 209, 90, 0.15) 100%)',
        opacity: phase === 0 ? 0 : 1,
      }}
    >
      <TopCloud />
      <TopCloud top={50} />
      <BottomCloud />
      <BottomCloud bottom={50} />
      {phase === 1 && (
        <div
          style={{
            justifyContent: 'center',
            marginTop: `${191 * scaleHeight}px`,
            color: '#8A7EBE',
            fontSize: `${18 * scaleWidth}px`,
          }}
        >
          ชิ้นงานนี้เป็นส่วนหนึ่งของ{' '}
          <span style={{ color: '#EC9F40', fontSize: `${18 * scaleWidth}px` }}>
            วิทยานิพนธ์
          </span>
          <br />
          สาขาวิชาวิทยาศาสตร์คอมพิวเตอร์
          <br />
          ภาควิชาวิศวกรรมคอมพิวเตอร์
          <br />
          คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
        </div>
      )}
      <div
        style={buttonStyle()}
        onClick={() => {
          if (phase === 1) {
            setPhase(2)
          } else {
            navigate('/scene01')
          }
        }}
      >
        {buttonMessage(phase)}
      </div>
    </div>
  )
}

export default Consent
