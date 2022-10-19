import { useEffect, useState } from 'react'
import '../scene15/scene15.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import GlitterStar from 'components/glitterStar/glitterStar'
import { scaleMean, SCENE15_SHIFT_TIME } from 'utils/constant'
import { useNavigate } from 'react-router'

const Scene15 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [openDoorStyle, setOpenDoorStyle] = useState({})
  const navigate = useNavigate()
  const userSpeechToThemselves = sessionStorage.getItem('TEXT_Q2')

  const mapper = {
    5: {
      openDoorStyle: {
        position: 'absolute',
        top: '57%',
        left: '52%',
        transform: 'translate(-50%, -50%)',
        width: '320px',
      },
    },
    6: {
      openDoorStyle: {
        position: 'absolute',
        top: '57%',
        left: '54%',
        transform: 'translate(-50%, -50%)',
        width: '420px',
      },
    },
    7: {
      openDoorStyle: {
        position: 'absolute',
        top: '57%',
        left: '56%',
        transform: 'translate(-50%, -50%)',
        width: '550px',
      },
    },
    8: {
      openDoorStyle: {
        position: 'absolute',
        top: '57%',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        width: '680px',
      },
    },
    9: {
      openDoorStyle: {
        position: 'absolute',
        top: '69%',
        left: '64%',
        transform: 'translate(-50%, -50%)',
        width: '860px',
      },
    },

    11: {
      message: '“เมื่อไหร่ที่ความคิดในแง่ลบ ทำให้เธอรู้สึกแย่”',
    },

    13: {
      message: '“ฉันเชื่อว่า..”',
    },
    15: {
      message: '“เธอสามารถจัดการมันได้”',
    },
    17: { message: `“${userSpeechToThemselves}”` },
    19: {
      message: '“อย่าเจ็บปวดเกินไปเลยนะ”',
    },
    21: {
      message: '“เพราะฉัน..”',
    },
    23: {
      message: '“จะอยู่ข้างๆเธอเอง”',
    },
  }

  const containerStyle = (scene) => {
    if (scene >= 2 && scene <= 9) {
      return {
        position: 'relative',
        overflow: 'hidden',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
      }
    } else {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }
    }
  }

  const textStyle = () => {
    return {
      position: 'fixed',
      color: 'black',
      top: '50%',
      width: '100vh',
      // transform: 'translate(-50%, -50%)',
      fontSize: 20 * scaleMean(),
      // textAlign: 'center',
    }
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE15_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[scene] && mapper[scene].message) {
      setMessage(mapper[scene].message)
    }
    if (mapper[scene] && mapper[scene].openDoorStyle) {
      setOpenDoorStyle((openDoorStyle) => {
        return { ...openDoorStyle, ...mapper[scene].openDoorStyle }
      })
    }
    if (scene === 26) {
      navigate('/ending')
    }
  }, [scene])

  return (
    <div style={containerStyle(scene)}>
      {scene >= 3 && scene <= 9 && (
        <>
          <GlitterStar />
          <MiddleCloud />
        </>
      )}
      {scene == 4 && (
        <img
          className={'closeDoor'}
          src={'images/CloseDoor.svg'}
          alt="closedoor"
        />
      )}
      {scene >= 5 && scene <= 9 && (
        <img src={'images/OpenDoor.svg'} alt="opendoor" style={openDoorStyle} />
      )}
      <div style={textStyle()}>{message}</div>
    </div>
  )
}

export default Scene15
