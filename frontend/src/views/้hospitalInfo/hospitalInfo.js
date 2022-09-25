import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router'

const Hospital = () => {
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const navigate = useNavigate()
  const buttonStyle = (top) => {
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
      top,
    }
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
      }}
    >
      <TopCloud />
      <TopCloud top={50} />
      <BottomCloud />
      <BottomCloud bottom={50} />
      <div style={buttonStyle(120 * scaleHeight)}>เขตป้อมปราบศัตรูพ่าย</div>
      <div style={buttonStyle(170 * scaleHeight)}>เขตปทุมวัน</div>
      <div style={buttonStyle(220 * scaleHeight)}>เขตบางคอแหลม</div>
      <div style={buttonStyle(270 * scaleHeight)}>เขตคลองสาน</div>
      <div style={buttonStyle(320 * scaleHeight)}>เขตพญาไท</div>
      <div style={buttonStyle(370 * scaleHeight)}>เขตคันนายาว</div>
      <div style={buttonStyle(420 * scaleHeight)}>เขตราชเทวี</div>
      <div style={buttonStyle(470 * scaleHeight)}>เขตสายไหม</div>
      <div style={buttonStyle(520 * scaleHeight)}>เขตบางรัก</div>
      <div style={buttonStyle(570 * scaleHeight)}>เขตบางกอกน้อย</div>
      <div style={buttonStyle(620 * scaleHeight)}>เขตธนบุรี</div>
      <div style={buttonStyle(670 * scaleHeight)}>เขตบางซื่อ</div>
      <div style={buttonStyle(720 * scaleHeight)}>เขตดินแดง</div>
      {/* <div style={buttonStyle(770 * scaleHeight)}>เขตจตุจักร</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตบางกอกใหญ่</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตทวีวัฒนา</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตคลองเตย</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตห้วยขวาง</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตสาทร</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตบางนา</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตบางขุนเทียน</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตมีนบุรี</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตลาดพร้าว</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตจอมทอง</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตภาษีเจริญ</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตบึงกุ่ม</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตหลักสี่</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตบางกะปิ</div>
      <div style={buttonStyle(399 * scaleHeight)}>เขตวังทองหลาง</div> */}
      <div>
        <Icon
          icon="material-symbols:arrow-back-ios-new-rounded"
          color="#8a7ebe"
          height="40"
          width="40"
          style={{
            position: 'absolute',
            left: 12 * scaleWidth,
            top: 20 * scaleHeight,
          }}
          onClick={() => {
            navigate(-1)
          }}
        />
      </div>
    </div>
  )
}

export default Hospital
