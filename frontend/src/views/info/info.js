import { useState } from 'react'
import COLORS from '../../utils/color'
import '../../App.css'

import { signUp } from '../../api/users'

const Info = () => {
  const [username, setUsername] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()

  const onClickSignUp = async () => {
    try {
      const response = await signUp(username, age, gender)
      console.log('success')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div class="main-info">
      {/* <img id="bg-03" src={'images/BG_03.svg'} alt="background" /> */}

      <img id="sky-info" src={'images/sky_info.svg'} alt="background" />
      <div class="container-info">
        <h1 class="header">Before start, we would like to know you more...</h1>
        <input
          clsssname="button-info"
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            console.log(username)
          }}
        />
      </div>

      <div class="username-container">
        <div class="age-container">
          <input
            clsssname="age"
            type="number"
            placeholder="AGE"
            value={age}
            onChange={(e) => {
              setAge(e.target.value)
              console.log(age)
            }}
          />
        </div>
        <div class="gender-container">
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value)
              console.log(e.target.value)
            }}
          >
            <option value="" disabled selected hidden>
              GENDER
            </option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
            <option value="others">OTHERS</option>
          </select>
        </div>

        <button class="button" onClick={() => onClickSignUp()}>
          Let's go
        </button>
        <div>
          <img id="charactor" src={'images/Charactor.svg'} alt="charactor" />
        </div>
        <div>
          {/* <img id="clouds" src={'images/Clouds.svg'} alt="clouds" /> */}
        </div>
      </div>
    </div>
  )
}

export default Info
