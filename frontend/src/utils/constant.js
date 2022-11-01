export const INITIAL_SCENE = 0
export const VIEW_CHANGING_DELAY_TIME = 1000

// views scene shifter interval time
export const SCENE01_SHIFT_TIME = 250
export const SCENE02_SHIFT_TIME = 2000
export const SCENE03_SHIFT_TIME = 1000
export const SCENE04_SHIFT_TIME = 1500
export const SCENE05_SHIFT_TIME = 1000
export const SCENE06_SHIFT_TIME = 2000
export const SCENE07_SHIFT_TIME = 200
export const SCENE08_SHIFT_TIME = 1700
export const SCENE09_SHIFT_TIME = 1500
export const SCENE10_SHIFT_TIME = 1500
export const SCENE11_SHIFT_TIME = 1200
export const SCENE12_SHIFT_TIME = 1000
export const SCENE13_SHIFT_TIME = 1500
export const SCENE14_SHIFT_TIME = 1000
export const SCENE15_SHIFT_TIME = 900
export const SCENE16_SHIFT_TIME = 1500
export const ANALYSE_SHIFT_TIME = 1000

// components scene shifter interval time
export const STAR_SHIFT_TIME = 500
export const TOP_CLOUD_SHIFT_TIME = 250
export const MIDDLE_CLOUD_SHIFT_TIME = 200
export const BOTTOM_CLOUD_SHIFT_TIME = 250

export const scaleWidth = () => {
  return window.screen.width / 390
}

export const scaleHeight = () => {
  return window.innerHeight / 844
}

export const scaleMean = () => {
  return (scaleWidth() + scaleHeight()) / 2
}

export const meanSizeHeight = () => {
  return scaleMean() * 844
}

export const onePercentageOfRealHeight = () => {
  return window.innerHeight / 100
}

export const dbFieldNames = {
  CUST_USR_NM: 'CUST_USR_NM',
  CUST_AGE: 'CUST_AGE',
  CUST_GENDER: 'CUST_GENDER',
  TEXT_Q1: 'TEXT_Q1',
  TEXT_Q2: 'TEXT_Q2',
  LABEL: 'LABEL',
  APL_ID: 'APL_ID',
  TEXT_09_10: 'TEXT_09_10',
  TEXT_09_12: 'TEXT_09_12',
  TEXT_09_13: 'TEXT_09_13',
  SELECTED_CARDS: 'SELECTED_CARDS',
  TEXT_13_11: 'TEXT_13_11',
  TEXT_14_07: 'TEXT_14_07',
  TEXT_15_06: 'TEXT_15_06',
}
