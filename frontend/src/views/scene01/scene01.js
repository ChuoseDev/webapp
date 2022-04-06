import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'

import './scene01.css'

export const Scene01 = () => {
  const [scene, setScene] = useState(1)
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [message, setMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
        setScene(1)
    }, 0)
    setTimeout(() => {
        setScene(2)
    }, 1500)
    setTimeout(() => {
      setScene(3)
    }, 3000)
    setTimeout(() => {
      setScene(4)
    }, 4500)
    setTimeout(() => {
      setScene(5)
    }, 6000)
    setTimeout(() => {
      setScene(6)
    }, 7500)
    setTimeout(() => {
      setScene(7)
    }, 9000)
  }, [])

  const stageProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
   const background = {
    image: 'images/StarBackground.svg',
    // width: 1448 * scaleWidth,
    // height: 966 * scaleHeight,
    opacity: 1,
    animation: {},
   }

    const char00 = {
        image: 'images/greyChar_00.svg',
        // width: 1448 * scaleWidth,
        // height: 966 * scaleHeight,
        opacity: 1,
        animation: {
            1: {
               left: 93*scaleWidth,
               top: 341*scaleHeight
           },
           2: {
                left: 93*scaleWidth,
                top: 341*scaleHeight,
                transform: 'scale(1.36, 1.36)'
           },
           3: {
                position: 'relative',
                left: 7.24*scaleWidth,
                top: 260*scaleHeight,
                transform: 'scale(0.82, 0.82)'
           },
           4: {
                position: 'relative',
                left: 7.24*scaleWidth,
                top: 322*scaleHeight,
                transform: 'scale(1.35, 1.35)'
            },
            5: {
                position: 'relative',
                left: 7.24*scaleWidth,
                top: 450*scaleHeight,
                transform: 'scale(1.6, 1.6)'
           }
        },
    }

    const char01 = {
        image: 'images/greyChar_01.svg',
        // width: 1448 * scaleWidth,
        // height: 966 * scaleHeight,
        opacity: 1,
        animation: {
            1: {
                position: 'relative',
               left: 93*scaleWidth,
               top: 341*scaleHeight
           },
           2: {
                position: 'relative',
                left: 93*scaleWidth,
                top: 341*scaleHeight,
                transform: 'scale(1.36, 1.36)'
           },
           3: {
                position: 'relative',
                left: 7.24*scaleWidth,
                top: 260*scaleHeight,
                transform: 'scale(0.82, 0.82)'
           },
           4: {
                position: 'relative',
                left: 7.24*scaleWidth,
                top: 322*scaleHeight,
                transform: 'scale(1.35, 1.35)'
            },
            5: {
                position: 'relative',
                left: 7.24*scaleWidth,
                top: 450*scaleHeight,
                transform: 'scale(1.6, 1.6)'
           }
        },
    }

//    const charMapper = {
//         1:'images/greyChar_00.svg',
//         2:'images/greyChar_00.svg',
//         3:'images/greyChar_01.svg',
//         4:'images/greyChar_01.svg',
//         5:'images/greyChar_01.svg'
//    }

//    const styleCharMapper = {
//        1: {
//             position: 'relative',
//            marginLeft: 93*scaleWidth,
//            marginTop: 341*scaleHeight
//        },
//        2: {
//             position: 'relative',
//             marginLeft: 93*scaleWidth,
//             marginTop: 341*scaleHeight,
//             transform: 'scale(1.36, 1.36)'
//        },
//        3: {
//             position: 'relative',
//             marginLeft: 7.24*scaleWidth,
//             marginTop: 260*scaleHeight,
//             transform: 'scale(0.82, 0.82)'
//        },
//        4: {
//             position: 'relative',
//             marginLeft: 7.24*scaleWidth,
//             marginTop: 322*scaleHeight,
//             transform: 'scale(1.35, 1.35)'
//         },
//         5: {
//             position: 'relative',
//             marginLeft: 7.24*scaleWidth,
//             marginTop: 450*scaleHeight,
//             transform: 'scale(1.6, 1.6)'
//        }
//    }

//    const styleCloudTopMapper = {
//     1: {
//         marginLeft: -84*scaleWidth,
//         marginTop: -140*scaleHeight,
//     },
//     2: {
//         marginLeft:-178*scaleWidth,
//         marginTop: -108*scaleHeight,
//     },
//     3: {
//         marginLeft: -277*scaleWidth,
//         marginTop: -96*scaleHeight,
//     },
//     4: {
//         marginLeft: -595*scaleWidth,
//         marginTop: -53*scaleHeight,
//     },
//     5: {
//         marginLeft: -515*scaleWidth,
//         marginTop: -14*scaleHeight,
//     },
//     6: {
//         marginLeft: -315*scaleWidth,
//         marginTop: -20*scaleHeight,
//     },
//     7: {
//         marginLeft: -315*scaleWidth,
//         marginTop: -10*scaleHeight,
//     },
//    }

//    const styleCloudBtmMapper = {
//     1: {
//         marginLeft: -596*scaleWidth,
//         marginTop: 480*scaleHeight,
//     },
//     2: {
//         marginLeft: -454*scaleWidth,
//         marginTop: 473*scaleHeight,
//     },
//     3: {
//         marginLeft: -407*scaleWidth,
//         marginTop: 475*scaleHeight,
//     },
//     4: {
//         marginLeft: -397*scaleWidth,
//         marginTop: 539*scaleHeight,
//     },
//     5: {
//         marginLeft: -744*scaleWidth,
//         marginTop: 495*scaleHeight,
//     },
//     6: {
//         marginLeft: -465*scaleWidth,
//         marginTop: 495*scaleHeight,
//     },
//     7: {
//         marginLeft: -893*scaleWidth,
//         marginTop: 422*scaleHeight,
//     },
//    }

  return (
    <div>
        <Stage {...stageProps}>
            <Layer>
                <AnimateImage {...background}/>
                <AnimateImage {...char00}/>
                <AnimateImage {...char01}/>
                {/* <Group>
                    <Html>
                        <div>
                            <img src={'images/cloud.svg'} style={{...styleCloudTopMapper[scene], opacity:0.3, transform: 'rotate(180deg)'}}></img>
                        </div>
                    </Html>
                </Group>
                <Group>
                    <Html>
                        <div>
                            <img src={charMapper[scene]} style={styleCharMapper[scene]}></img>
                        </div>
                    </Html>
                </Group>
                <Group>
                    <Html>
                        <div>
                            <img src={'images/cloud.svg'} style={{...styleCloudBtmMapper[scene], opacity:0.35}}></img>
                        </div>
                    </Html>
                </Group> */}
            </Layer>
        </Stage>
    </div>
  )
}

export default Scene01