import { useEffect, useState } from 'react'
import { onePercentageOfRealHeight, scaleWidth } from 'utils/constant'
import { omit } from 'utils/function'

const MiddleCloud = ({ fadeIn = true }) => {
  const [scene, setScene] = useState(1)
  const [opacity, setOpacity] = useState(fadeIn ? 0 : 0.3)

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => ((scene + 1) % 11) + 1)
    }, 1000)

    if (fadeIn) {
      setOpacity(0.3)
    }

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  const mapper = {
    1: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 60.19 * onePercentageOfRealHeight(),
        left: '47.95%',
      },
      cloud2: {
        src: 'images/WhiteCloud01.svg',
        top: 32.94 * onePercentageOfRealHeight(),
        left: '-23.59%',
      },
      cloud3: {
        src: 'images/WhiteCloud01.svg',
        top: 12.8 * onePercentageOfRealHeight(),
        left: '47.95%',
      },
      cloud4: {
        src: 'images/WhiteCloud03.svg',
        top: 87.68 * onePercentageOfRealHeight(),
        left: '1.79%',
      },
    },
    2: {
      cloud1: {
        src: 'images/WhiteCloud01.svg',
        top: 16.82 * onePercentageOfRealHeight(),
        left: '31.79%',
      },
      cloud2: {
        src: 'images/WhiteCloud01.svg',
        top: 35.78 * onePercentageOfRealHeight(),
        left: '-4.87%',
      },
      cloud3: {
        src: 'images/WhiteCloud02.svg',
        top: 61.72 * onePercentageOfRealHeight(),
        left: '30.77%',
      },
      cloud4: {
        src: 'images/WhiteCloud03.svg',
        top: 87.32 * onePercentageOfRealHeight(),
        left: '11.54%',
      },
    },
    3: {
      cloud1: {
        src: 'images/WhiteCloud01.svg',
        top: 12.44 * onePercentageOfRealHeight(),
        left: '31.54%',
      },
      cloud2: {
        src: 'images/WhiteCloud01.svg',
        top: 29.27 * onePercentageOfRealHeight(),
        left: '-8.89%',
      },
      cloud3: {
        src: 'images/WhiteCloud02.svg',
        top: 55.33 * onePercentageOfRealHeight(),
        left: '45.38%',
      },
      cloud4: {
        src: 'images/WhiteCloud03.svg',
        top: 80.69 * onePercentageOfRealHeight(),
        left: '2.56%',
      },
    },
    4: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 7.7 * onePercentageOfRealHeight(),
        left: '52.82%',
      },
      cloud2: {
        src: 'images/WhiteCloud01.svg',
        top: 30.21 * onePercentageOfRealHeight(),
        left: '-7.44%',
      },
      cloud3: {
        src: 'images/WhiteCloud01.svg',
        top: 62.09 * onePercentageOfRealHeight(),
        left: '43.08%',
      },
      cloud4: {
        src: 'images/WhiteCloud03.svg',
        top: 84.12 * onePercentageOfRealHeight(),
        left: '-2.05%',
      },
    },
    5: {
      cloud1: {
        src: 'images/WhiteCloud01.svg',
        top: 8.41 * onePercentageOfRealHeight(),
        left: '71.28%',
      },
      cloud2: {
        src: 'images/WhiteCloud02.svg',
        top: 30.21 * onePercentageOfRealHeight(),
        left: '-7.44%',
      },
      cloud3: {
        src: 'images/WhiteCloud01.svg',
        top: 62.09 * onePercentageOfRealHeight(),
        left: '43.08%',
      },
      cloud4: {
        src: 'images/WhiteCloud03.svg',
        top: 84.12 * onePercentageOfRealHeight(),
        left: '-2.05%',
      },
    },
    6: {
      cloud1: {
        src: 'images/WhiteCloud01.svg',
        top: 12.44 * onePercentageOfRealHeight(),
        left: '66.92%',
      },
      cloud2: {
        src: 'images/WhiteCloud02.svg',
        top: 33.89 * onePercentageOfRealHeight(),
        left: '-22.31%',
      },
      cloud3: {
        src: 'images/WhiteCloud01.svg',
        top: 58.18 * onePercentageOfRealHeight(),
        left: '52.05%',
      },
      cloud4: {
        src: 'images/WhiteCloud03.svg',
        top: 87.09 * onePercentageOfRealHeight(),
        left: '-17.69%',
      },
    },
    7: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 10.19 * onePercentageOfRealHeight(),
        left: '56.92%',
      },
      cloud2: {
        src: 'images/WhiteCloud03.svg',
        top: 35.43 * onePercentageOfRealHeight(),
        left: '-2.56%',
        width: '150px',
      },
      cloud3: {
        src: 'images/WhiteCloud03.svg',
        top: 60.66 * onePercentageOfRealHeight(),
        left: '48.46%',
      },
      cloud4: {
        src: 'images/WhiteCloud02.svg',
        top: 82.35 * onePercentageOfRealHeight(),
        left: '-11.03%',
      },
    },
    8: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 5.33 * onePercentageOfRealHeight(),
        left: '67.69%',
      },
      cloud2: {
        src: 'images/WhiteCloud03.svg',
        top: 31.16 * onePercentageOfRealHeight(),
        left: '0.26%',
        width: '150px',
      },
      cloud3: {
        src: 'images/WhiteCloud03.svg',
        top: 58.77 * onePercentageOfRealHeight(),
        left: '48.46%',
      },
      cloud4: {
        src: 'images/WhiteCloud02.svg',
        top: 84.83 * onePercentageOfRealHeight(),
        left: '-13.59%',
      },
    },
    9: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 6.99 * onePercentageOfRealHeight(),
        left: '53.85%',
      },
      cloud2: {
        src: 'images/WhiteCloud03.svg',
        top: 34.95 * onePercentageOfRealHeight(),
        left: '-13.85%',
        width: '150px',
      },
      cloud3: {
        src: 'images/WhiteCloud03.svg',
        top: 62.56 * onePercentageOfRealHeight(),
        left: '34.36%',
      },
      cloud4: {
        src: 'images/WhiteCloud02.svg',
        top: 85.9 * onePercentageOfRealHeight(),
        left: '-4.1%',
      },
    },
    10: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 7.58 * onePercentageOfRealHeight(),
        left: '58.46%',
      },
      cloud2: {
        src: 'images/WhiteCloud03.svg',
        top: 33.29 * onePercentageOfRealHeight(),
        left: '1.03%',
        width: '150px',
      },
      cloud3: {
        src: 'images/WhiteCloud03.svg',
        top: 62.56 * onePercentageOfRealHeight(),
        left: '34.36%',
      },
      cloud4: {
        src: 'images/WhiteCloud02.svg',
        top: 85.9 * onePercentageOfRealHeight(),
        left: '-4.1%',
      },
    },
    11: {
      cloud1: {
        src: 'images/WhiteCloud02.svg',
        top: 6.99 * onePercentageOfRealHeight(),
        left: '58.97%',
      },
      cloud2: {
        src: 'images/WhiteCloud03.svg',
        top: 32.7 * onePercentageOfRealHeight(),
        left: '-16.41%',
        width: '150px',
      },
      cloud3: {
        src: 'images/WhiteCloud03.svg',
        top: 60.9 * onePercentageOfRealHeight(),
        left: '63.85%',
      },
      cloud4: {
        src: 'images/WhiteCloud02.svg',
        top: 78.79 * onePercentageOfRealHeight(),
        left: '-14.87%',
      },
    },
  }

  return (
    <div>
      <img
        src={mapper[scene].cloud1.src}
        alt="background"
        style={{
          ...omit(mapper[scene].cloud1, 'src'),
          width: 300 * scaleWidth(),
          position: 'absolute',
          opacity,
          transition: 'opacity ease-in-out 1s',
        }}
      />
      <img
        src={mapper[scene].cloud2.src}
        alt="background"
        style={{
          ...omit(mapper[scene].cloud2, 'src'),
          width: 300 * scaleWidth(),
          position: 'absolute',
          opacity,
          transition: 'opacity ease-in-out 1s',
        }}
      />
      <img
        src={mapper[scene].cloud3.src}
        alt="background"
        style={{
          ...omit(mapper[scene].cloud3, 'src'),
          width: 300 * scaleWidth(),
          position: 'absolute',
          opacity,
          transition: 'opacity ease-in-out 1s',
        }}
      />

      <img
        src={mapper[scene].cloud4.src}
        alt="background"
        style={{
          ...omit(mapper[scene].cloud4, 'src'),
          width: 300 * scaleWidth(),
          position: 'absolute',
          opacity,
          transition: 'opacity ease-in-out 1s',
        }}
      />
    </div>
  )
}
export default MiddleCloud
