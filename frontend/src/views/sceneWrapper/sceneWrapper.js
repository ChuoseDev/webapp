import EmergencyButton from 'components/emergencyButton/emergencyButton'

const SceneWrapper = ({ children }) => {
  return (
    <>
      {children}
      <EmergencyButton />
    </>
  )
}

export default SceneWrapper
