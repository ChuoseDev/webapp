import { useEffect, useState } from 'react'
import '../scene15/scene15.css'
import MiddleCloud from 'components/middleCloud/middleCloud'
import Star from 'components/star/star'
import { SCENE15_SHIFT_TIME } from 'utils/constant'

const Scene15 = () => {
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [openDoorStyle, setOpenDoorStyle] = useState({})

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
      message: '“ฉันรู้ว่าเธอพยายามอยู่เสมอ”',
    },

    12: {
      message: '“อย่าเจ็บปวดเกินไปเลยนะ”',
    },
    13: {
      message: '“ฉันจะอยู่ข้างๆเธอเอง”',
    },
    14: { message: ' ' },
  }

  const containerStyle = (scene) => {
    if (scene >= 2 && scene <= 9) {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: '100vh',
        backgroundColor: 'black',
      }
    } else {
      return {
        position: 'relative',
        left: 0,
        top: 0,
        textAlign: 'center',
        margin: 0,
        height: '100vh',
      }
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
  }, [scene])

  return (
    <div style={containerStyle(scene)}>
      {scene >= 3 && scene <= 9 && (
        <>
          <Star />
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
      <div className={'text_center'}>{message}</div>
    </div>
  )
}

export default Scene15
