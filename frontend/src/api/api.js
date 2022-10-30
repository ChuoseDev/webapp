import axios from 'axios'

export const getPrediction = () => {
  const body = {
    CUST_USR_NM: sessionStorage.getItem('CUST_USR_NM'),
    CUST_AGE: sessionStorage.getItem('CUST_AGE'),
    CUST_GENDER: sessionStorage.getItem('CUST_GENDER'),
    TEXT_Q2: sessionStorage.getItem('TEXT_Q2'),
  }
  return axios.post(
    `http://ec2-13-250-62-37.ap-southeast-1.compute.amazonaws.com:5000/`,
    body
  )
}
