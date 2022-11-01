import BottomCloud from 'components/bottomCloud/bottomCloud'
import TopCloud from 'components/topCloud/topCloud'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router'
import { scaleHeight, scaleMean, scaleWidth } from 'utils/constant'

const DealingMinusThought = () => {
  const navigate = useNavigate()
  const datas = [
    {
      src: 'https://www.youtube.com/watch?v=S77dh45768k',
      message: 'ฝึกหายใจคลายเครียด',
    },
    {
      src: 'https://www.youtube.com/watch?v=ZgPHetPG4MY',
      message: 'ฝึกสมาธิ 10 นาที',
    },
    {
      src: 'https://www.youtube.com/watch?v=U8ul-ID3BnU',
      message: 'ทักษะการแก้ปัญหา',
    },
    {
      src: 'https://thematter.co/social/cognitive-behavioral-therapy/147961',
      message: 'จิตบำบัดแบบ CBT',
    },
  ]
  const buttonStyle = () => {
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
      margin: '8% auto',
      textDecoration: 'none',
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
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div className="scroller" style={{ width: '100%' }}>
            {datas.map((data, idx) => (
              <a key={idx} href={`${data.src}`} style={buttonStyle()}>
                {data.message}
              </a>
            ))}
          </div>
        </div>
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

export default DealingMinusThought
