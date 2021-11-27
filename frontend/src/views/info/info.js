import COLORS from '../../utils/color'
import '../../App.css'

const Info = () => {
  return (
    <div class="main-info">
      <img id="bg-03" src={'images/BG_03.svg'} alt="background" />
      <div class="container-info">
        <h1 class="header">Before start, we would like to know you more...</h1>
        <input clsssname="button-info" type="text" placeholder="USERNAME" />
      </div>
      <div class="username-container">
        <div class="age-container">
          <input clsssname="age" type="number" placeholder="AGE" />
        </div>
        <div class="gender-container">
          <select id="gender" name="gender" placeholder="AGE">
            <option value="" disabled selected hidden>
              GENDER
            </option>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
            <option value="others">OTHERS</option>
          </select>
        </div>

        <button class="button">Let's go</button>
        <div>
          <img id="charactor" src={'images/Charactor.svg'} alt="charactor" />
        </div>
        <div>
          <img id="clouds" src={'images/Clouds.svg'} alt="clouds" />
        </div>

        <div class="allChuose">
          <div class="chuose" style={{ color: COLORS.RED }}>
            C
          </div>
          <div class="chuose" style={{ color: COLORS.BLUE }}>
            H
          </div>
          <div class="chuose" style={{ color: COLORS.ORANGE }}>
            U
          </div>
          <div class="chuose" style={{ color: COLORS.PURPLE }}>
            O
          </div>
          <div class="chuose" style={{ color: COLORS.PINK }}>
            S
          </div>
          <div class="chuose" style={{ color: COLORS.GREEN }}>
            E
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info