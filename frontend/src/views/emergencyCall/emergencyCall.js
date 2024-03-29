import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router'
import { scaleHeight, scaleMean, scaleWidth } from 'utils/constant'

const EmergencyCall = () => {
  const navigate = useNavigate()
  const buttonStyle = (top) => {
    return {
      width: scaleWidth() * 243,
      height: scaleHeight() * 46,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      backgroundColor: '#ffffff',
      borderRadius: 35,
      fontSize: 18 * scaleMean(),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#8A7EBE',
      position: 'absolute',
      left: scaleWidth() * 73,
      zIndex: 1,
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
        height: window.innerHeight,
        transition: 'opacity 0.3s ease-out',
        backgroundImage:
          'linear-gradient(#CAD8F3 13.35%, #FFF6ED 29.76%, #FFF2F2 50.51%, #CAD8F3 100%, rgba(255, 209, 90, 0.15) 100%)',
      }}
    >
      <TopCloud />
      <TopCloud top={50} />
      <BottomCloud />
      <BottomCloud bottom={50} />
      <div
        style={buttonStyle(337 * scaleHeight())}
        onClick={() => {
          navigate('/emergency-contact')
        }}
      >
        ติดต่อสายด่วน
      </div>
      <div
        style={buttonStyle(399 * scaleHeight())}
        onClick={() => {
          navigate('/hospital')
        }}
      >
        ข้อมูลโรงพยาบาล
      </div>
      <div
        style={buttonStyle(461 * scaleHeight())}
        onClick={() => {
          navigate('/dealing-minus-thought')
        }}
      >
        วิธีจัดการความคิดลบอัตโนมัติ
      </div>
      <div>
        <Icon
          icon="material-symbols:arrow-back-ios-new-rounded"
          color="#8a7ebe"
          height="40"
          width="40"
          style={{
            position: 'absolute',
            left: 12 * scaleWidth(),
            top: 20 * scaleHeight(),
          }}
          onClick={() => {
            navigate(-1)
          }}
        />
      </div>
    </div>
  )
}

export default EmergencyCall
