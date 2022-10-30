import { useEffect, useState } from 'react'
import './scene16.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import GlitterStar from 'components/glitterStar/glitterStar'
import {
  scaleHeight,
  scaleMean,
  scaleWidth,
  SCENE16_SHIFT_TIME,
} from 'utils/constant'
import { useNavigate } from 'react-router'

const Scene16 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [openDoorStyle, setOpenDoorStyle] = useState({})
  const navigate = useNavigate()
  const userSpeechToThemselves = sessionStorage.getItem(
    'USER_SPEECH_TO_THEMSELVES'
  )

  const mapper = {
    5: {
      openDoorStyle: {
        position: 'absolute',
        top: 500 * scaleHeight(),
        left: 200 * scaleWidth(),
        transform: 'translate(-50%, -50%)',
        width: 350 * scaleWidth(),
      },
    },
    6: {
      openDoorStyle: {
        position: 'absolute',
        top: 510 * scaleHeight(),
        left: 205 * scaleWidth(),
        transform: 'translate(-50%, -50%)',
        width: 450 * scaleWidth(),
      },
    },
    7: {
      openDoorStyle: {
        position: 'absolute',
        top: 520 * scaleHeight(),
        left: 210 * scaleWidth(),
        transform: 'translate(-50%, -50%)',
        width: 550 * scaleWidth(),
      },
    },
    8: {
      openDoorStyle: {
        position: 'absolute',
        top: 530 * scaleHeight(),
        left: 215 * scaleWidth(),
        transform: 'translate(-50%, -50%)',
        width: 650 * scaleWidth(),
      },
    },
    9: {
      openDoorStyle: {
        position: 'absolute',
        top: 540 * scaleHeight(),
        left: 220 * scaleWidth(),
        transform: 'translate(-50%, -50%)',
        width: 750 * scaleWidth(),
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
      message: '“จะอยู่ข้าง ๆ เธอเอง”',
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
        height: window.innerHeight,
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
        height: window.innerHeight,
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
      width: window.innerHeight,
      // transform: 'translate(-50%, -50%)',
      fontSize: 20 * scaleMean(),
      // textAlign: 'center',
    }
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE16_SHIFT_TIME)

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
          position="absolute"
          top="500 * scaleHeight()"
          left="200 * scaleWidth()"
          transform="translate(-50%, -50%)"
          width="200 * scaleWidth()"
        />
      )}
      {scene >= 5 && scene <= 9 && (
        <img src={'images/OpenDoor.svg'} alt="opendoor" style={openDoorStyle} />
      )}
      <div style={textStyle()}>{message}</div>
    </div>
  )
}

export default Scene16
