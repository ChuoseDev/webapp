import { useEffect, useState } from 'react'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { useNavigate } from 'react-router'

import { scaleWidth, scaleHeight } from 'utils/constant'

const Consent = () => {
  const navigate = useNavigate()
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    setPhase(1)
  }, [])

  const containerStyle = () => {
    return {
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
    }
  }

  const buttonStyle = () => {
    return {
      width: scaleWidth() * 243,
      height: scaleHeight() * 46,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#ffffff',
      borderRadius: 35,
      fontSize: 20 * scaleHeight(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#8A7EBE',
      position: 'absolute',
      left: scaleWidth() * 73,
      top: scaleHeight() * 702,
      textDecoration: 'none',
    }
  }

  const buttonMessage = (phase) => {
    const message = {
      1: 'ไปต่อ',
      2: 'เริ่มเล่น',
    }
    return message[phase]
  }

  const textStyle = () => {
    return {
      justifyContent: 'center',
      marginTop: `${200 * scaleHeight()}px`,
      color: '#8A7EBE',
      fontSize,
    }
  }

  const fontSize = `${18 * scaleHeight()}px`

  return (
    <div style={containerStyle()}>
      <TopCloud />
      <TopCloud top={50} />
      <BottomCloud />
      <BottomCloud bottom={50} />
      {phase === 1 && (
        <div style={textStyle()}>
          ชิ้นงานนี้เป็นส่วนหนึ่งของ{' '}
          <span style={{ color: '#EC9F40', fontSize }}>วิทยานิพนธ์</span>
          <br />
          สาขาวิชาวิทยาศาสตร์คอมพิวเตอร์
          <br />
          ภาควิชาวิศวกรรมคอมพิวเตอร์
          <br />
          คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          <br />
          <br />
          ผู้วิจัยจะไม่เก็บบันทึกข้อมูลส่วนบุคคลของผู้เล่น
          <br />
          รวมถึงคำตอบขณะเข้าใช้ CHUOSE ด้วย
          <br />
          มีเพียงขอเก็บสถิติโดยรวม
          <br />
          เช่น ยอดจำนวนผู้เข้าใช้ อายุเฉลี่ยของผู้
          <br />
          เพื่อประกอบในวิทยานิพนธ์เท่านั้น
          <br />
        </div>
      )}
      {phase === 2 && (
        <div style={textStyle()}>
          <span style={{ color: '#EC9F40', fontSize }}>CHUOSE </span>
          เว็บแอปพลิเคชันที่พัฒนาขึ้น
          <br />
          เพื่อเป็นเครื่องมือตรวจหาระดับความคิดฆ่าตัวตาย
          <br />
          ของผู้ตกอยู่ในภาวะซึมเศร้า หรือ มีความคิดแง่ลบ
          <br />
          ตั้งแต่ระดับเล็กน้อยถึงปานกลาง
          <br />
          <br />
          ชิ้นงานนี้เกิดขึ้นเพื่อช่วยเหลือให้ทุกคน
          <br />
          เข้าใจและจัดการความคิดของตนได้
          <br />
          <br />
          หรืออย่างน้อยที่สุด สามารถเป็นส่วนหนึ่งที่ให้ทุกคน
          <br />
          ได้ลองหันมาทำความรู้จักและพูดคุยกับ
          <br />
          ความคิด ความรู้สึก ของตนเอง
          <br />
          <br />
          <div style={{ color: '#EC9F40', fontSize }}>
            โปรดใช้เวลาอย่างช้า ๆ
            <br />
            เพราะความรู้สึกของคุณนั้นสำคัญ
            <br />
          </div>
        </div>
      )}
      <div
        style={buttonStyle()}
        onClick={() => {
          if (phase === 1) {
            setPhase(2)
          } else {
            document.getElementById('backgroundtrack').play()
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
