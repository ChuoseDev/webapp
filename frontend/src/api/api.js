import axios from 'axios'

export const getPrediction = () => {
  const body = {
    CUST_AGE: sessionStorage.getItem('CUST_AGE'),
    CUST_GENDER: sessionStorage.getItem('CUST_GENDER'),
    TEXT_Q1: sessionStorage.getItem('TEXT_Q1'),
    TEXT_Q2: sessionStorage.getItem('TEXT_Q2'),
  }
  return axios.post(`chuose-backend:5000/`, body)
}
