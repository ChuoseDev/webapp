import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router'

const EmergencyContact = () => {
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
            textDecoration: 'none'
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
          <div style={{margin: '0% 0% 0% 0%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center'}}>
                <a href='https://www.agnoshealth.com/services/mental_screening' style={buttonStyle(scaleHeight*149)}>DMIND: ทดสอบสุขภาพใจ</a>
                <a href='tel:+66-1323' style={buttonStyle(scaleHeight*228)}>สายด่วนกรมสุขภาพจิต</a>
                <a href='https://new.camri.go.th/' style={buttonStyle(scaleHeight*307)}>สถาบันสุขภาพจิตเด็กและวัยรุ่นราชนครินทร์</a>
                <div style={buttonStyle(scaleHeight*386)}>ศูนย์ป้องกันการฆ่าตัวตายระดับชาติ</div>
                <div style={buttonStyle(scaleHeight*468)}>สมาคมสะมาริตันส์ ป้องกันการฆ่าตัวตาย</div>
                <div style={buttonStyle(scaleHeight*547)}>Depress wecare</div>
                <div style={buttonStyle(scaleHeight*626)}>โรงพยาบาลตำรวจ สายด่วน</div>
            </div>
        </div>
      )
}

export default EmergencyContact