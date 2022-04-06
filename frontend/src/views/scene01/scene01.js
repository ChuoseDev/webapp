import { useState, useEffect } from 'react'
import { Stage, Layer, AnimateImage, Group } from 'konvas'
import { Html } from 'react-konva-utils'

import './scene01.css'

export const Scene01 = () => {
  const [scene, setScene] = useState(1)
  const scaleHeight = window.innerHeight / 844
  const scaleWidth = window.innerWidth / 390
  const scaleMean = (scaleHeight + scaleWidth) / 2
  const [message, setMessage] = useState('ตัวฉันที่กำลังลอยอยู่ในความคิด...')

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
    width: 1448 * scaleWidth,
    height: 966 * scaleHeight,
    opacity: 0,
    scene: scene,
    animation: {
        1:{
            opacity:0,
            duration:0
        },
        2: {
            opacity:0.25,
            duration:0
        },
        3: {
            opacity:0.5,
            duration:0
        },
        4: {
            opacity:0.75,
            duration:0
        },
        5: {
            opacity:1,
            duration:0
        },
        6: {
            opacity:1
        },
        7: {
            opacity:1
        }
    },
   }

    const char00 = {
        image: 'images/greyChar_00.svg',
        scene: scene,
        x: 93*scaleWidth,
        y: 341*scaleHeight,
        opacity: 1,
        animation: {
            1: {
               x: 93*scaleWidth,
               y: 341*scaleHeight,
               duration: 0
           },
           2: {
                x: 57*scaleWidth,
                y: 329*scaleHeight,
                height: 330*scaleHeight,
                width: 276.21*scaleWidth,
                duration: 0
           },
           3: {
               opacity:0
           }
        },
    }

    const char01 = {
        image: 'images/greyChar_01.svg',
        opacity: 0,
        scene: scene,
        animation: {
            2: {
                opacity:0,
                 x: 7.24*scaleWidth,
                 y: 322*scaleHeight,
                 height: 406.22*scaleHeight,
                 width: 364.51*scaleWidth,
                 duration: 0
            },
           3: {
               opacity:1,
                x: 7.24*scaleWidth,
                y: 322*scaleHeight,
                height: 406.22*scaleHeight,
                width: 364.51*scaleWidth,
                duration: 0
           },
           4: {
                x: -33*scaleWidth,
                y: 312*scaleHeight,
                height: 548.39*scaleHeight,
                width: 459*scaleWidth,
                duration: 0
            },
            5: {
                x: -94*scaleWidth,
                y: 356*scaleHeight,
                height: 716.85*scaleHeight,
                width: 600*scaleWidth,
                duration: 0
           },
           6: {
               opacity: 0,
               duration: 0
           }
        },
    }

    const cloudTop = {
        image: 'images/cloud.svg',
        opacity: 0.3,
        x: 1227.25*scaleWidth,
        y: 231.23*scaleHeight,
        width: 1.01*1311.25*scaleWidth,
        height: 1.01*371.23*scaleHeight,
        rotation: -180,
        scene: scene,
        animation: {
            1: {
                x: 1227.25*scaleWidth,
                y: 231.23*scaleHeight,
                duration: 0
            },
            2: {
                x:1133.25*scaleWidth,
                y: 263.23*scaleHeight,
                duration: 0
            },
            3: {
                x: 1034.25*scaleWidth,
                y: 275.23*scaleHeight,
                duration: 0
            },
            4: {
                x: 716.25*scaleWidth,
                y: 318.23*scaleHeight,
                duration: 0
            },
            5: {
                x: 796.25*scaleWidth,
                y: 357.23*scaleHeight,
                duration: 0
            },
            6: {
                x: 996.25*scaleWidth,
                y: 351.23*scaleHeight,
                duration: 0
            },
            7: {
                width: 1311*scaleWidth,
                height: 420*scaleHeight,
                x: 996*scaleWidth,
                y: 397*scaleHeight,
                duration: 0
            },
        },
    }

    const cloudBtm = {
        image: 'images/cloud.svg',
        opacity: 0.35,
        x: -569*scaleWidth,
        y: 480*scaleHeight,
        width: 1.01*1311.25*scaleWidth,
        height: 1.01*371.23*scaleHeight,
        scene: scene,
        animation: {
            1:{
                x: -569*scaleWidth,
                y: 480*scaleHeight,
                duration: 0
            },
            2: {
                 x: -454*scaleWidth,
                 y: 473*scaleHeight,
                 duration: 0
            },
           3: {
                x: -407*scaleWidth,
                y: 475*scaleHeight,
                duration: 0
           },
           4: {
                x: -397*scaleWidth,
                y: 539*scaleHeight,
                duration: 0
            },
            5: {
                x: -744*scaleWidth,
                y: 627*scaleHeight,
                duration: 0
           },
            6: {
                x: -465*scaleWidth,
                y: 495*scaleHeight,
                duration: 0
           },
           7: {
                x: -893*scaleWidth,
                y: 422*scaleHeight,
                width: 1325*scaleWidth,
                height: 435*scaleHeight,
                duration: 0
           }
        },
    }
   const charMapper = {
        1:'images/greyChar_00.svg',
        2:'images/greyChar_00.svg',
        3:'images/greyChar_01.svg',
        4:'images/greyChar_01.svg',
        5:'images/greyChar_01.svg'
   }

   const styleCharMapper = {
       1: {
            position: 'relative',
           marginLeft: 93*scaleWidth,
           marginTop: 341*scaleHeight
       },
       2: {
            position: 'relative',
            marginLeft: 93*scaleWidth,
            marginTop: 341*scaleHeight,
            transform: 'scale(1.36, 1.36)'
       },
       3: {
            position: 'relative',
            marginLeft: 7.24*scaleWidth,
            marginTop: 260*scaleHeight,
            transform: 'scale(0.82, 0.82)'
       },
       4: {
            position: 'relative',
            marginLeft: 7.24*scaleWidth,
            marginTop: 322*scaleHeight,
            transform: 'scale(1.35, 1.35)'
        },
        5: {
            position: 'relative',
            marginLeft: 7.24*scaleWidth,
            marginTop: 450*scaleHeight,
            transform: 'scale(1.6, 1.6)'
       }
   }

   const styleCloudTopMapper = {
    1: {
        marginLeft: -84*scaleWidth,
        marginTop: -140*scaleHeight,
    },
    2: {
        marginLeft:-178*scaleWidth,
        marginTop: -108*scaleHeight,
    },
    3: {
        marginLeft: -277*scaleWidth,
        marginTop: -96*scaleHeight,
    },
    4: {
        marginLeft: -595*scaleWidth,
        marginTop: -53*scaleHeight,
    },
    5: {
        marginLeft: -515*scaleWidth,
        marginTop: -14*scaleHeight,
    },
    6: {
        marginLeft: -315*scaleWidth,
        marginTop: -20*scaleHeight,
    },
    7: {
        marginLeft: -315*scaleWidth,
        marginTop: -10*scaleHeight,
    },
   }

   const styleCloudBtmMapper = {
    1: {
        marginLeft: -596*scaleWidth,
        marginTop: 480*scaleHeight,
    },
    2: {
        marginLeft: -454*scaleWidth,
        marginTop: 473*scaleHeight,
    },
    3: {
        marginLeft: -407*scaleWidth,
        marginTop: 475*scaleHeight,
    },
    4: {
        marginLeft: -397*scaleWidth,
        marginTop: 539*scaleHeight,
    },
    5: {
        marginLeft: -744*scaleWidth,
        marginTop: 495*scaleHeight,
    },
    6: {
        marginLeft: -465*scaleWidth,
        marginTop: 495*scaleHeight,
    },
    7: {
        marginLeft: -893*scaleWidth,
        marginTop: 422*scaleHeight,
    },
   }

   const backgroundColorMapper = {
       1: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: 'white'
       },
       2: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: '#C5C5C5'
       },
       3: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: '#939393'
       },
       4: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: '#6F6F6F'
       },
       5: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: 'black'
       },
       6: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: 'black'
       },
       7: {
        width: 390 * scaleWidth,
        height: 844 * scaleHeight,
        backgroundColor: 'black'
       },
   }

  return (
    <div>
        <Stage {...stageProps}>
            <Layer>
                    
                <AnimateImage {...background}/>
                <AnimateImage {...char00}/>
                <AnimateImage {...char01}/>
                <AnimateImage {...cloudTop}/>
                <AnimateImage {...cloudBtm}/>
                <Group>
                    <Html>
                        <div  style={{
                            textAlign: 'center',
                            height: 844 * scaleHeight,
                            width: 390 * scaleWidth,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            opacity: scene <= 6 ? 1 : 0,
                            marginTop: scene == 6 ? 377*scaleHeight : 176*scaleHeight
                            }}>
                            <p style={{
                                color: scene <= 4 ? "#000000" : "#FFFFFF",
                                fontSize: 18 * scaleWidth
                            }}>ตัวฉันที่กำลังลอยอยู่ในความคิด</p>
                            <p style={{
                                color: scene <= 4 ? "#000000" : "#FFFFFF",
                                fontSize: 18 * scaleWidth
                            }}>...</p>
                        </div>
                        
                        
                    </Html>
                </Group>
                {/* <Html>
                    <div style={backgroundColorMapper[scene]} >
                    </div>
                </Html> */}
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