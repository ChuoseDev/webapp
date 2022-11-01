import { useEffect, useState } from 'react'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { useNavigate } from 'react-router'
import Pdf from '../../consent.pdf'
import { scaleWidth, scaleHeight, scaleMean } from 'utils/constant'

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
      height: window.innerHeight,
      transition: 'opacity 0.3s ease-out',
      backgroundImage:
        'linear-gradient(#CAD8F3 13.35%, #FFF6ED 29.76%, #FFF2F2 50.51%, #CAD8F3 100%, rgba(255, 209, 90, 0.15) 100%)',
      opacity: phase === 0 ? 0 : 1,
      display: 'flex',
      justifyContent: 'center',
    }
  }

  const buttonStyle = () => {
    return {
      width: scaleWidth() * 243,
      height: scaleHeight() * 46,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#ffffff',
      borderRadius: 35,
      fontSize: 20 * scaleMean(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#8A7EBE',
      position: 'absolute',
      left: scaleWidth() * 73,
      top: scaleHeight() * 650,
      textDecoration: 'none',
      position: 'absolute',
    }
  }

  const buttonMessage = (phase) => {
    const message = {
      1: 'ยินยอม',
      2: 'เริ่มเล่น',
    }
    return message[phase]
  }

  const textStyle = () => {
    return {
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
      {phase === 2 && (
        <div style={{ top: `${200 * scaleHeight()}px`, position: 'absolute' }}>
          <div>
            <span style={textStyle()}>ชิ้นงานนี้เป็นส่วนหนึ่งของ</span>
            <span style={{ color: '#EC9F40', fontSize }}>วิทยานิพนธ์</span>
          </div>
          <div style={textStyle()}>สาขาวิชาวิทยาศาสตร์คอมพิวเตอร์</div>
          <div style={textStyle()}>ภาควิชาวิศวกรรมคอมพิวเตอร์</div>
          <div style={{ ...textStyle(), marginBottom: 20 * scaleHeight() }}>
            คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </div>
          <div style={textStyle()}>
            <div style={textStyle()}></div>
            ผู้วิจัยจะไม่เก็บบันทึกข้อมูลส่วนบุคคลของผู้เล่น
          </div>
          <div style={textStyle()}>รวมถึงคำตอบขณะเข้าใช้ CHUOSE ด้วย</div>
          <div style={textStyle()}>มีเพียงขอเก็บสถิติโดยรวม</div>
          <div style={textStyle()}>
            เช่น ยอดจำนวนผู้เข้าใช้ อายุเฉลี่ยของผู้
          </div>
          <div style={{ ...textStyle(), marginBottom: 20 * scaleHeight() }}>
            เพื่อประกอบในวิทยานิพนธ์เท่านั้น
          </div>
          <a href={Pdf} target="_blank" style={{ textDecoration: 'none' }}>
            <div style={{ color: '#EC9F40', fontSize }}>คลิกดูรายละเอียด</div>
            <div style={{ color: '#EC9F40', fontSize }}>
              นโยบายความเป็นส่วนตัวของผู้ใช้งาน
            </div>
          </a>
        </div>
      )}
      {phase === 1 && (
        <div style={{ top: 150 * scaleHeight(), position: 'absolute' }}>
          <span style={{ color: '#EC9F40', fontSize }}>CHUOSE </span>
          <span style={textStyle()}>เว็บแอปพลิเคชันที่พัฒนาขึ้น</span>
          <div style={textStyle()}>
            เพื่อเป็นเครื่องมือตรวจหาระดับความคิดฆ่าตัวตาย
          </div>
          <div style={textStyle()}>
            ของผู้ตกอยู่ในภาวะซึมเศร้า หรือ มีความคิดแง่ลบ
          </div>
          <div style={{ ...textStyle(), marginBottom: 20 * scaleHeight() }}>
            ตั้งแต่ระดับเล็กน้อยถึงปานกลาง
          </div>
          <div style={textStyle()}>
            ชิ้นงานนี้เกิดขึ้นเพื่อช่วยเหลือให้ทุกคน
          </div>
          <div style={{ ...textStyle(), marginBottom: 20 * scaleHeight() }}>
            เข้าใจและจัดการความคิดของตนได้
          </div>
          <div style={textStyle()}>
            หรืออย่างน้อยที่สุด สามารถเป็นส่วนหนึ่งที่ให้ทุกคน
          </div>
          <div style={textStyle()}>ได้ลองหันมาทำความรู้จักและพูดคุยกับ</div>
          <div style={{ ...textStyle(), marginBottom: 20 * scaleHeight() }}>
            ความคิด ความรู้สึก ของตนเอง
          </div>
          <div style={textStyle()}>
            <div style={{ color: '#EC9F40', fontSize }}>
              โปรดใช้เวลาอย่างช้า ๆ
            </div>
            <div style={{ color: '#EC9F40', fontSize }}>
              เพราะความรู้สึกของคุณนั้นสำคัญ
            </div>
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
