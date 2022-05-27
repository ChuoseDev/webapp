import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import TopCloud from 'components/topCloud/topCloud'
import BottomCloud from 'components/bottomCloud/bottomCloud'
import { SCENE09_SHIFT_TIME } from 'utils/constant'

const Scene09 = () => {
  const scaleHeight = window.screen.height / 844
  const scaleWidth = window.screen.width / 390
  const [scene, setScene] = useState(1)
  const [message, setMessage] = useState('')
  const [characterStyle, setCharacterStyle] = useState({
    position: 'absolute',
    width: 161.05 * scaleWidth,
    height: 162.5 * scaleHeight,
    top: 470 * scaleHeight,
    left: 114 * scaleWidth,
    zIndex: 2,
  })
  const [characterSrc, setCharacterSrc] = useState('images/Chuose08_11.svg')

  const [middleCloudStyle, setMiddleCloudStyle] = useState({
    position: 'absolute',
    width: 434 * scaleWidth,
    height: 128.48 * scaleHeight,
    top: 276 * scaleHeight,
    left: -16 * scaleWidth,
    zIndex: 3,
  })
  const [middleCloudSrc, setMiddleCloudSrc] = useState(
    'images/MiddleCloud08_11.svg'
  )

  const [projection, setProjection] = useState('images/ProjectionShadow_01.svg')
  const [thunderStyle, setThunderStyle] = useState({
    position: 'absolute',
    top: 282 * scaleHeight,
    left: 239.61 * scaleWidth,
    width: 24.5 * scaleWidth,
    height: 60.5747 * scaleHeight,
    zIndex: 2,
  })
  const [projectionStyle, setProjectionStyle] = useState({
    position: 'absolute',
    top: 337.5 * scaleHeight,
    left: 75.18 * scaleWidth,
    width: 242.34 * scaleWidth,
    height: 327 * scaleHeight,
  })
  const [shadowStyle, setShadowStyle] = useState({
    position: 'absolute',
    top: 615 * scaleHeight,
    left: 76 * scaleWidth,
    width: 241 * scaleWidth,
    height: 50 * scaleHeight,
  })
  const [blackCloudStyle, setBlackCloudStyle] = useState({
    position: 'absolute',
    top: 297 * scaleHeight,
    left: 64 * scaleWidth,
    width: 262.23 * scaleWidth,
    height: 136.55 * scaleHeight,
    zIndex: 1,
  })

  const phaseEnum = {
    firstPhase: 'firstPhase',
    secondPhase: 'secondPhase',
    thirdPhase: 'thirdPhase',
    fourthPhase: 'fourthPhase',
    fifthPhase: 'fifthPhase',
    sixthPhase: 'sixthPhase',
  }

  const [phase, setPhase] = useState(phaseEnum.firstPhase)
  const [feeling, setFeeling] = useState('')
  const navigate = useNavigate()

  const mapper = {
    [phaseEnum.firstPhase]: {
      1: {
        message: 'จู่ๆ ก็มีเมฆก้อนดำอยู่รอบตัวฉัน',
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 410 * scaleHeight,
            left: 121 * scaleWidth,
          },
        },
      },
      2: {
        middleCloud: {
          src: 'images/MiddleCloud08_12.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 323.19 * scaleWidth,
            height: 81.01 * scaleHeight,
            top: 326 * scaleHeight,
            left: 29 * scaleWidth,
          },
        },
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 414 * scaleHeight,
            left: 114 * scaleWidth,
          },
        },
      },
      3: {
        middleCloud: {
          src: 'images/MiddleCloud08_13.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 552.58 * scaleWidth,
            height: 124 * scaleHeight,
            top: 283 * scaleHeight,
            left: -82 * scaleWidth,
          },
        },
        character: {
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 422 * scaleHeight,
            left: 121 * scaleWidth,
          },
        },
      },
      4: {
        middleCloud: {
          src: 'images/MiddleCloud09_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 400.58 * scaleWidth,
            height: 166 * scaleHeight,
            top: 350 * scaleHeight,
            left: -47 * scaleWidth,
            zIndex: 1,
          },
        },
        message: 'มองไปทางไหนก็เจอเมฆก้อนดำ',
        character: {
          src: 'images/Chuose09_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 473 * scaleHeight,
            left: 114 * scaleWidth,
          },
        },
      },
      5: {
        middleCloud: {
          src: 'images/MiddleCloud09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 392 * scaleWidth,
            height: 146 * scaleHeight,
            top: 357 * scaleHeight,
            left: 14 * scaleWidth,
            zIndex: 1,
          },
        },
        character: {
          src: 'images/Chuose09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 475 * scaleHeight,
            left: 116 * scaleWidth,
          },
        },
      },
      6: {
        middleCloud: {
          src: 'images/MiddleCloud09_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 350 * scaleWidth,
            height: 137 * scaleHeight,
            top: 360 * scaleHeight,
            left: 20 * scaleWidth,
            zIndex: 3,
          },
        },
        character: {
          src: 'images/Chuose09_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 466 * scaleHeight,
            left: 116 * scaleWidth,
          },
        },
      },
      7: {
        middleCloud: {
          src: 'images/MiddleCloud09_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 450.58 * scaleWidth,
            height: 159 * scaleHeight,
            top: 341 * scaleHeight,
            left: -8 * scaleWidth,
          },
        },
        character: {
          src: 'images/YellowChuose_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 469 * scaleHeight,
            left: 110 * scaleWidth,
          },
        },
      },
      8: {
        middleCloud: {
          src: 'images/MiddleCloud09_05.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 450.58 * scaleWidth,
            height: 159 * scaleHeight,
            top: 346 * scaleHeight,
            left: -9 * scaleWidth,
          },
        },
        message: 'เมฆก้อนดำเพิ่มขึ้นอีกแล้ว...',
        character: {
          src: 'images/Chuose09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 474 * scaleHeight,
            left: 109 * scaleWidth,
          },
        },
      },
      9: {
        middleCloud: {
          src: 'images/MiddleCloud09_06.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 407.58 * scaleWidth,
            height: 172 * scaleHeight,
            top: 341 * scaleHeight,
            left: 17 * scaleWidth,
          },
        },
        character: {
          src: 'images/Chuose09_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 161 * scaleWidth,
            height: 163.96 * scaleHeight,
            top: 469 * scaleHeight,
            left: 108 * scaleWidth,
          },
        },
      },
      10: {
        middleCloud: {
          src: 'images/MiddleCloud09_07.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 407.58 * scaleWidth,
            height: 172 * scaleHeight,
            top: 344 * scaleHeight,
            left: 4 * scaleWidth,
          },
        },
        message: 'มันมากขึ้นจนฉันกลัว',
        character: {
          src: 'images/Chuose09_07.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 487 * scaleHeight,
            left: 108 * scaleWidth,
          },
        },
      },
      11: {
        middleCloud: {
          src: 'images/MiddleCloud09_08.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth,
            height: 184 * scaleHeight,
            top: 307 * scaleHeight,
            left: 2 * scaleWidth,
          },
        },
        character: {
          src: 'images/YellowChuose_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 462 * scaleHeight,
            left: 108 * scaleWidth,
          },
        },
      },
      12: {
        middleCloud: {
          src: 'images/MiddleCloud09_09.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth,
            height: 184 * scaleHeight,
            top: 319 * scaleHeight,
            left: 19 * scaleWidth,
          },
        },
        message: 'เมฆก้อนดำของเธอคือ...',
        character: {
          src: 'images/Chuose09_09.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 462 * scaleHeight,
            left: 108 * scaleWidth,
          },
        },
      },
      //   10: {
      //     character: {
      //       src: 'images/ChuoseShadow_02.svg',
      //     },
      //     thunderStyle: {
      //       top: 369 * scaleHeight,
      //       left: 104.61 * scaleWidth,
      //     },
      //   },
      //   6: {
      //     character: {
      //       src: 'images/ChuoseShadow_01.svg',
      //     },
      //     thunderStyle: {
      //       top: 297 * scaleHeight,
      //       left: 252.61 * scaleWidth,
      //     },
      //   },
      //   7: {
      //     message: '“เมฆก้อนดำกลืนกินเราจริงๆหรอ?”',
      //     thunderStyle: {
      //       opacity: 0,
      //     },
      //   },
      //   8: {
      //     projection: {
      //       src: 'images/ProjectionShadow_02.svg',
      //       style: {
      //         height: 229 * scaleHeight,
      //       },
      //     },
      //   },
      //   9: {
      //     character: {
      //       src: 'images/ChuoseShadow_03.svg',
      //       style: {
      //         height: 169.37 * scaleHeight,
      //         top: 461 * scaleHeight,
      //       },
      //     },
      //     projection: {
      //       src: 'images/ProjectionShadow_03.svg',
      //       style: {
      //         height: 169 * scaleHeight,
      //       },
      //     },
      //   },
      //   10: {
      //     message: '“หรือเราเป็นคนเดินเข้าไปหามันกันนะ?”',
      //     character: {
      //       src: 'images/ChuoseShadow_04.svg',
      //       style: {
      //         height: 171.77 * scaleHeight,
      //         left: 115 * scaleWidth,
      //       },
      //     },
      //     projection: {
      //       style: {
      //         opacity: 0,
      //       },
      //     },
      //   },
      //   11: {
      //     character: {
      //       src: 'images/ChuoseShadow_05.svg',
      //       style: {
      //         height: 181 * scaleHeight,
      //         top: 479 * scaleHeight,
      //         left: 114 * scaleWidth,
      //       },
      //     },
      //     shadowStyle: {
      //       top: 596 * scaleHeight,
      //       left: 96 * scaleWidth,
      //       width: 198 * scaleWidth,
      //       height: 39 * scaleHeight,
      //     },
      //     blackCloudStyle: {
      //       left: 90 * scaleWidth,
      //       width: 210 * scaleWidth,
      //       height: 109.36 * scaleHeight,
      //     },
      //   },
      //   12: {
      //     character: {
      //       style: {
      //         top: 499 * scaleHeight,
      //         left: 109 * scaleWidth,
      //         width: 172.62 * scaleWidth,
      //         height: 194 * scaleHeight,
      //       },
      //     },
      //     blackCloudStyle: {
      //       left: 103 * scaleWidth,
      //       width: 185 * scaleWidth,
      //       height: 96.34 * scaleHeight,
      //     },
      //     shadowStyle: {
      //       opacity: 0,
      //     },
      //   },
      //   13: {
      //     message: '“เธอคิดว่ายังไง?”',
      //     character: {
      //       style: {
      //         opacity: 0,
      //       },
      //     },
      //     blackCloudStyle: { opacity: 0 },
      //   },
    },

    [phaseEnum.secondPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_09_2.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 461.58 * scaleWidth,
            height: 206 * scaleHeight,
            top: 295 * scaleHeight,
            left: 13 * scaleWidth,
          },
        },
        message: 'เล่าให้ฉันฟังหน่อยสิ',
        character: {
          src: 'images/Chuose09_09_1.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
    },
    [phaseEnum.thirdPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_10.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 407.58 * scaleWidth,
            height: 172 * scaleHeight,
            top: 344 * scaleHeight,
            left: 4 * scaleWidth,
          },
        },
        message: 'ฉันจมปลักอยู่กับเมฆก้อนดำ',
        character: {
          src: 'images/Chuose09_09_1.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      2: {
        middleCloud: {
          src: 'images/MiddleCloud09_11.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth,
            height: 184 * scaleHeight,
            top: 307 * scaleHeight,
            left: 2 * scaleWidth,
          },
        },
        message: 'และความคิดของตัวเอง',
        character: {
          src: 'images/Chuose09_11.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 462 * scaleHeight,
            left: 106 * scaleWidth,
          },
        },
      },
      3: {
        middleCloud: {
          style: {
            transform: 'rotate(0deg)',
            width: 455.58 * scaleWidth,
            height: 184 * scaleHeight,
            top: 319 * scaleHeight,
            left: 19 * scaleWidth,
          },
        },
        message: 'เธอรู้สึกยังไงกับเรื่องนี้ล่ะ?',
        character: {
          src: 'images/Chuose09_09.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
    },
    [phaseEnum.fourthPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_13.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 443.58 * scaleWidth,
            height: 189 * scaleHeight,
            top: 316 * scaleHeight,
            left: 13 * scaleWidth,
          },
        },
        message: 'เธอคิดว่าเมฆก้อนดำส่งผลกระทบกับเธอยังไง?',
        character: {
          src: 'images/Chuose09_09_1.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 487 * scaleHeight,
            left: 108 * scaleWidth,
          },
        },
      },
    },
    [phaseEnum.fifthPhase]: {
      1: {
        middleCloud: {
          src: 'images/MiddleCloud09_14.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 455.56 * scaleWidth,
            height: 184 * scaleHeight,
            top: 319 * scaleHeight,
            left: 19 * scaleWidth,
          },
        },
        message:
          'ฉันรับรู้ว่าเธอกำลัง..\nความคิด : [ข้อความ Q2]\nความรู้สึก : [ข้อความ Q3]\nพฤติกรรม : [ข้อความ Q4]',
        character: {
          src: 'images/Chuose09_09_1.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      2: {
        middleCloud: {
          src: 'images/MiddleCloud09_15.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 443.58 * scaleWidth,
            height: 183 * scaleHeight,
            top: 320 * scaleHeight,
            left: 26 * scaleWidth,
          },
        },
        message:
          'ฉันรับรู้ว่าเธอกำลัง..\nความคิด : [ข้อความ Q2]\nความรู้สึก : [ข้อความ Q3]\nพฤติกรรม : [ข้อความ Q4]',
        character: {
          src: 'images/Chuose09_09_1.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      3: {
        middleCloud: {
          src: 'images/MiddleCloud10_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 403 * scaleWidth,
            height: 169 * scaleHeight,
            top: 316 * scaleHeight,
            left: 79 * scaleWidth,
          },
        },
        message: 'สุดท้าย',
        character: {
          src: 'images/Chuose10_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      4: {
        middleCloud: {
          src: 'images/MiddleCloud10_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 341.58 * scaleWidth,
            height: 183 * scaleHeight,
            top: 316 * scaleHeight,
            left: 149 * scaleWidth,
          },
        },
        message: 'สุดท้าย',
        character: {
          src: 'images/Chuose10_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      5: {
        middleCloud: {
          src: 'images/MiddleCloud10_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 488 * scaleWidth,
            height: 118.61 * scaleHeight,
            top: 303 * scaleHeight,
            left: -26 * scaleWidth,
          },
        },
        message: 'สุดท้าย...',
        character: {
          src: 'images/Chuose10_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      6: {
        middleCloud: {
          src: 'images/MiddleCloud10_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 225.65 * scaleWidth,
            height: 114.36 * scaleHeight,
            top: 303 * scaleHeight,
            left: 81 * scaleWidth,
          },
        },
        message: 'เมฆก้อนดำก็...',
        character: {
          src: 'images/Chuose10_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 157.75 * scaleWidth,
            height: 159.17 * scaleHeight,
            top: 474 * scaleHeight,
            left: 123 * scaleWidth,
          },
        },
      },
      7: {
        middleCloud: {
          style: {
            opacity: 0,
          },
        },
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_05.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      8: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_06.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      9: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_07.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      10: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_08.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      11: {
        message: 'เมฆก้อนดำก็กลืนกินฉันไป',
        character: {
          src: 'images/ChuoseCloud10_08.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      12: {
        message: '...',
        character: {
          src: 'images/ChuoseCloud10_10.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      13: {
        message: 'บางครั้ง...เธอเคยรู้สึกมั้ย?',
        character: {
          src: 'images/ChuoseCloud11_01.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      14: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_02.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      15: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_03.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      16: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_04.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      17: {
        message: '“ว่าความคิดในหัวกำลังบั่นทอนเธออยู่”',
        character: {
          src: 'images/ChuoseCloud11_05.svg',
          style: {
            transform: 'rotate(0deg)',
            width: 262.23 * scaleWidth,
            height: 368 * scaleHeight,
            top: 297 * scaleHeight,
            left: 64 * scaleWidth,
          },
        },
      },
      18: '',
      19: '',
    },
    [phaseEnum.sixthPhase]: { 1: '' },
  }

  useEffect(() => {
    const sceneShifter = setInterval(() => {
      setScene((scene) => scene + 1)
    }, SCENE09_SHIFT_TIME)

    return () => {
      clearInterval(sceneShifter)
    }
  }, [])

  useEffect(() => {
    if (mapper[phase][scene] && mapper[phase][scene].message) {
      setMessage(mapper[phase][scene].message)
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].character &&
      mapper[phase][scene].character.style
    ) {
      setCharacterStyle((characterStyle) => {
        return { ...characterStyle, ...mapper[phase][scene].character.style }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].middleCloud &&
      mapper[phase][scene].middleCloud.src
    ) {
      setMiddleCloudSrc(mapper[phase][scene].middleCloud.src)
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].middleCloud &&
      mapper[phase][scene].middleCloud.style
    ) {
      setMiddleCloudStyle((middleCloudStyle) => {
        return {
          ...middleCloudStyle,
          ...mapper[phase][scene].middleCloud.style,
        }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].character &&
      mapper[phase][scene].character.src
    ) {
      setCharacterSrc(mapper[phase][scene].character.src)
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].projection &&
      mapper[phase][scene].projection.src
    ) {
      setProjection(mapper[phase][scene].projection.src)
    }
    if (mapper[phase][scene] && mapper[phase][scene].thunderStyle) {
      setThunderStyle((thunderStyle) => {
        return { ...thunderStyle, ...mapper[phase][scene].thunderStyle }
      })
    }
    if (mapper[phase][scene] && mapper[phase][scene].shadowStyle) {
      setShadowStyle((shadowStyle) => {
        return { ...shadowStyle, ...mapper[phase][scene].shadowStyle }
      })
    }
    if (mapper[phase][scene] && mapper[phase][scene].blackCloudStyle) {
      setBlackCloudStyle((shadowStyle) => {
        return { ...shadowStyle, ...mapper[phase][scene].blackCloudStyle }
      })
    }
    if (
      mapper[phase][scene] &&
      mapper[phase][scene].projection &&
      mapper[phase][scene].projection.style
    ) {
      setProjectionStyle((projectionStyle) => {
        return { ...projectionStyle, ...mapper[phase][scene].projection.style }
      })
    }
    if (phase === phaseEnum.fifthPhase && scene >= 17) {
      navigate('/scene10')
    }
  }, [scene])

  const shiftPhase = (phase) => {
    console.log(feeling)
    setScene(1)
    setPhase(phase)
  }

  const containerStyle = (scene) => {
    return {
      position: 'relative',
      overflow: 'hidden',
      left: 0,
      top: 0,
      textAlign: 'center',
      margin: 0,
      height: window.screen.height,
      // backgroundColor: scene === 2 ? 'black' : '',
      // transitionDuration: scene >= 1 && scene <= 4 ? '1s' : '',
    }
  }

  const backgroundStyles = (scene) => {
    return {
      width: 390 * scaleWidth,
      height: 844 * scaleHeight,
      position: 'relative',
      transition: 'opacity ease-in-out 1s',
      background:
        'linear-gradient(359.76deg, #dbdbdb 2.45%, #ffffff 30.14%, #ffffff 43.59%, #ffffff 62.56%, #e8e8e8 101.6%)',
    }
  }
  const messageStyle = (scene) => {
    return {
      position: 'absolute',
      top: 232 * scaleWidth,
      fontSize: '18px',
      width: '100%',
      color: 'black',
    }
  }
  const textboxStyle = (scene) => {
    return {
      position: 'absolute',
      display: 'flex',
      width: 317 * scaleWidth,
      height: 110 * scaleHeight,
      left: '50%',
      transform: 'translate(-50%, 0)',
      top: 300 * scaleWidth,
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderStyle: 'none',
      zIndex: 10,
    }
  }
  return (
    <div style={containerStyle(scene)}>
      <div
        style={
          scene >= 17 && phase === phaseEnum.fifthPhase
            ? {}
            : backgroundStyles(scene)
        }
      >
        <p style={messageStyle(scene)}>{message}</p>
        {/* {scene >= 1 && (
          <div>
            <BottomCloud ttl={15 * SCENE09_SHIFT_TIME} />
          </div>
        )}
        {phase === phaseEnum.firstPhase && scene >= 2 && (
          <div>
            <TopCloud ttl={15 * SCENE09_SHIFT_TIME} />
          </div>
        )}
        {phase !== phaseEnum.firstPhase && (
          <div>
            <TopCloud ttl={15 * SCENE09_SHIFT_TIME} />
          </div>
        )} */}
        {phase === phaseEnum.firstPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}
        {phase === phaseEnum.secondPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}

        {phase === phaseEnum.thirdPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}

        {phase === phaseEnum.fourthPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}

        {phase === phaseEnum.fifthPhase && (
          <div>
            <img src={characterSrc} alt="character" style={characterStyle} />
            <img
              src={middleCloudSrc}
              alt="middleCloud"
              style={middleCloudStyle}
            />
          </div>
        )}

        {phase === phaseEnum.secondPhase && (
          <div>
            <textarea
              id="feeling-textarea"
              style={textboxStyle(scene)}
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button-info"
              style={{ marginTop: 713 * scaleHeight }}
              onClick={() => shiftPhase(phaseEnum.thirdPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
        {phase === phaseEnum.thirdPhase && scene > 2 && (
          <div>
            <textarea
              id="feeling-textarea"
              style={textboxStyle(scene)}
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button-info"
              style={{ marginTop: 713 * scaleHeight }}
              onClick={() => shiftPhase(phaseEnum.fourthPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
        {phase === phaseEnum.fourthPhase && (
          <div>
            <textarea
              id="feeling-textarea"
              style={textboxStyle(scene)}
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button-info"
              style={{ marginTop: 713 * scaleHeight }}
              onClick={() => shiftPhase(phaseEnum.fifthPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
        {phase === phaseEnum.firstPhase && scene >= 12 && (
          <div>
            <textarea
              id="feeling-textarea"
              style={textboxStyle(scene)}
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
            ></textarea>
            <button
              class="button-info"
              style={{ marginTop: 713 * scaleHeight }}
              onClick={() => shiftPhase(phaseEnum.secondPhase)}
            >
              ไปต่อ
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Scene09
