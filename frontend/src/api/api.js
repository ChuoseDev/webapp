import axios from 'axios'
import { dbFieldNames } from 'utils/constant'

export const getPrediction = () => {
  const body = {
    CUST_USR_NM: sessionStorage.getItem(dbFieldNames.CUST_USR_NM),
    CUST_AGE: sessionStorage.getItem(dbFieldNames.CUST_AGE),
    CUST_GENDER: sessionStorage.getItem(dbFieldNames.CUST_GENDER),
    TEXT_Q1: sessionStorage.getItem(dbFieldNames.TEXT_Q1),
    TEXT_Q2: sessionStorage.getItem(dbFieldNames.TEXT_Q2),
  }
  return axios.post(`http://52.221.253.134:5000/`, body)
}

export const updateData = () => {
  const body = {
    CUST_USR_NM: sessionStorage.getItem(dbFieldNames.CUST_USR_NM),
    CUST_AGE: sessionStorage.getItem(dbFieldNames.CUST_AGE),
    CUST_GENDER: sessionStorage.getItem(dbFieldNames.CUST_GENDER),
    TEXT_Q1: sessionStorage.getItem(dbFieldNames.TEXT_Q1),
    TEXT_Q2: sessionStorage.getItem(dbFieldNames.TEXT_Q2),
    LABEL: sessionStorage.getItem(dbFieldNames.LABEL),
    APL_ID: sessionStorage.getItem(dbFieldNames.APL_ID),
    TEXT_09_10: sessionStorage.getItem(dbFieldNames.TEXT_09_10),
    TEXT_09_12: sessionStorage.getItem(dbFieldNames.TEXT_09_12),
    TEXT_09_13: sessionStorage.getItem(dbFieldNames.TEXT_09_13),
    SELECTED_CARDS: sessionStorage.getItem(dbFieldNames.SELECTED_CARDS),
    TEXT_13_11: sessionStorage.getItem(dbFieldNames.TEXT_13_11),
    TEXT_14_07: sessionStorage.getItem(dbFieldNames.TEXT_14_07),
    TEXT_15_06: sessionStorage.getItem(dbFieldNames.TEXT_15_06),
  }
  return axios.post(`http://52.221.253.134:5000/`, body)
}
