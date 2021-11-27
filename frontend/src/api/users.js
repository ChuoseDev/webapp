import axios from 'axios'

const baseURL = process.env.LOCALHOST_SERVER

export const signUp = (username, age, gender) => {
  const body = {
    username,
    age,
    gender,
  }
  return axios.post(`${baseURL}/users`, body)
}
