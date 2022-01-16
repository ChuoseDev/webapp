import COLORS from '../../utils/color'
import '../../App.css'

const Signup = () => {
  return (
    <div class="center">
      <div class="main">
        <img id="skySignup" src={'images/skySignup.svg'} />
        <img id="bgTopBlue" src={'images/bgTopBlue.svg'} />
        <img id="bgBtmWhite" src={'images/bgBtmWhite.svg'} />
        <img id="bgBtmBlue" src={'images/bgBtmBlue.svg'} />
        <div class="container">
          <div class="center" id="charSignup">
            <img src={'images/charCHUOSE.svg'} />
          </div>
          <div class="center">
            <p id="paraSignup">
              สวัสดีจ้า!!<br />
              เราชื่อ “ชูโอส”<br />
              เราจะเป็นเพื่อนคอยรับฟังเธอ/คุณเอง
            </p>
          </div>
          <div id="BtnSignup" >
            <button class="button" onClick={() => (window.location.href = '/')}>
              เริ่มเลอ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
