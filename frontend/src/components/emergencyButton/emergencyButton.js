import { useNavigate } from 'react-router'

const EmergencyButton = () => {
  const scaleWidth = window.screen.width / 390
  const scaleHeight = window.screen.height / 844
  const scaleMean = (scaleWidth + scaleHeight) / 2
  const navigate = useNavigate()
  return (
    <img
      src="images/emer_button.svg"
      alt="emergency_button"
      style={{
        position: 'absolute',
        left: scaleWidth * 336,
        top: scaleHeight * 785,
        width: 43 * scaleMean,
        height: 43 * scaleMean,
      }}
      onClick={() => {
        navigate('/emergency')
      }}
    />
  )
}

export default EmergencyButton
