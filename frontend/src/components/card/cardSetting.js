import { scaleHeight, scaleMean, scaleWidth, leftOffset } from 'utils/constant'

export const getCardColor = (color) => {
  if (color == 'purple') {
    return {
      bgOnClick: '#DBDDFC',
      cardBorder: '2px solid #9484F8',
      circleInner: '#9081F8',
      circleOuter: '#C4BDF7',
      themeColor: '#553CFD',
      elipseBorder: '1px solid #AEA3F8',
      elipseStroke: '#AEA3F8',
    }
  }
  if (color == 'green') {
    return {
      bgOnClick: '#D6FFF0',
      cardBorder: '2px solid #16875E',
      circleInner: '#97EACC',
      circleOuter: '#B5EFDA',
      themeColor: '#16875E',
      elipseBorder: '1px solid #AEA3F8',
      elipseStroke: '#93D7BF',
    }
  }
  if (color == 'red') {
    return {
      bgOnClick: '#FFD5D1',
      cardBorder: '2px solid #D0675E',
      circleInner: '#FFB0A9',
      circleOuter: '#FFBBB5',
      themeColor: '#D0675E',
      elipseBorder: '1px solid #FEB1A9',
      elipseStroke: '#FEB1A9',
    }
  }
  if (color == 'yellow') {
    return {
      bgOnClick: '#FFEAB2',
      cardBorder: '2px solid #E1A919',
      circleInner: '#E1A919',
      circleOuter: '#FFEAB2',
      themeColor: '#E1A919',
      elipseBorder: '1px solid #FFEAB2',
      elipseStroke: '#FFEAB2',
    }
  }
}

export const getCardStaticContent = (index)  => {
  const staticContent = {
    1: {
      header: 'Assuming\nการด่วนสรุป',
      text: "เป็นการสรุปเดาความคิดคนอื่นในแง่ลบ\nไปก่อน โดยไม่มีหลักฐานมาสนับสนุน",
    },
    2: {
      header: "All or nothing \nthinking\nความคิดสุดขั้ว",
      text: "การมองว่าสิ่งต่างๆมีแค่ผิดหรือถูกเท่านั้น\nถ้าไม่ดีมากก็ต้องแย่มาก ถ้าไม่ใช่สีขาวก็ต้องเป็นสีดํา \nทุกอย่างไม่มีตรงกลาง",
    },
    3: {
      header: "Dwelling on Pain\nการยึดติดกับอดีต",
      text: "การยึดติดกับสถานการณ์เหตุการณ์หรือพฤติกรรม\nภายนอกที่ทำให้เกิดความเจ็บปวดในอดีต",
    },
    4: {
      header: "Overgeneralizing\nการด่วนสรุป",
      text: "การสรุปภาพรวมโดยไม่มีหลักฐาน หรือ\nมีหลักฐานเพียงเล็กน้อย เช่น เมื่อชูโอ้สสอบตก\nชูโอ้สก็คิดว่าตัวเองไม่มีอะไรดีเป็นคนขี้แพ้ ",
    },
    5: {
      header: "Mind reading\nการอ่านใจผู้อื่น",
      text: "การคิดไปเองว่าคนอื่นคิดหรือรู้สึกอะไร ทั้งที่จริงๆแล้วไม่รู้ เช่น\nตอนนั้นชูโอ้สพูดแทรกในที่ประชุม ทุกคนต้องคิดว่าชูโอ้ส\nไม่มีมารยาทแน่ๆ",
    },
    6: {
      header: "Negative \nSelf-labeling \nการตรีตราตนเองในเชิงลบ",
      text: "เป็นการตีตราตนเองในเชิงลบไม่ว่าจะทำอะไรก็มักจะยึด\nติดกับความรู้สึกที่ได้ตีตราตนเองไว้แล้ว\nซึ่งการทำแบบนี้ทำให้รู้สึก สิ้นหวังและหมดหนทาง"
    },
    7: {
      header: "Disqualifying the \nPositive",
      text: "เมื่อเกิดเรื่องที่ไม่ดีหรือมีความผิดพลาดเกิดขึ้น\nมักจะมองเรื่องนั้นๆ แต่ในด้านลบ\nโดยที่ไม่ได้คำนึงถึงความเป็นไปได้ของสิ่งที่ดีที่เกิดขึ้น\nหรืออาจจะเกิดขึ้น",
    },
    8: {
      header: "Disqualifying the\nPresent",
      text: "เป็นการที่ไม่อยู่กับความรู้สึก ความคิด หรือ\nสภาวะในความเป็นจริงในปัจจุบัน โดยหมกมุ่นอยู่\nกับสิ่งที่ผ่านไปแล้ว หรือห่วงกังวลในสิ่งที่ยังมาไม่ถึง",
    },
    9: {
      header: "“Should”\nthinking",
      text: "คือการคิดหรือคาดหวังให้ตัวเอง หรือคนอื่นทําบาง\nอย่างด้วยความคิดที่ว่า “ควรจะ” “น่าจะ” หรือ “ต้องทํา”\nในสิ่งใดสิ่งหนึ่งตามที่ตนเองต้องการ",
    },
    10: {
      header: "Pessimism\nการมองโลกในแง่ร้าย",
      text: "การมองทุกอย่างที่เกิดขึ้นในเชิงลบ\nทุกสิ่งทุกอย่างต้องแย่ไปหมด\nซึ่งทำให้ไม่สามารถเห็นเหตุและผลตามความเป็นจริงได้",
    },
    11: {
      header: "Blaming Others\nการตำหนิหรือการลงโทษ",
      text: "เป็นการชอบโทษสิ่งต่างๆ\nโดยที่ไม่มองว่าตนเองเป็นต้นเหตุหรือไม่\nเป็นการโทษคนอื่นหรือสิ่งอื่นๆ เสมอไว้ก่อน",
    },
    12: {
      header: "Excessive Need \nfor Approval",
      text: "การที่อยากให้ผู้อื่นยอมรับตนเองมากเกินไป\nแต่พอไม่ได้รับการยอมรับตามที่คาดหวังไว้\nก็เป็นทุกข์",
    },
    13: {
      header: "Catastrophizing\nการมองทุกอย่างเป็นหายนะ",
      text: "การคิดว่าสิ่งที่เกิดขึ้นจะนําไปสู่สิ่งที่เลวร้ายมากๆ\nไม่มีใครหรืออะไรจะเลวร้ายไปได้มากกว่านี้อีกแล้ว เช่น\nถ้าเขาเกลียดชูโอ้ส ชูโอ้สคงไม่สามารถมีความสุขได้อีก ",
    },
  }
  return staticContent[index]
}

export const getCustomStyle = (index) => {
  const customStyle = {}
  if ([2,6].includes(index)) {
    customStyle.headerStyle = {
      top: `${scaleHeight() * 57}px`,
    }
  }
  if([5].includes(index)) {
    customStyle.infoStyle = {fontSize: 10 * scaleMean(),}
    
  }
  return customStyle
}