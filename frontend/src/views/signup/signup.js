import COLORS from '../../utils/color'
import '../../App.css'

const Signup = () => {
  return (
    <div class="center">
      <div class="main">
        <img id="bg1" src={'images/BG_01.svg'} />
        <img id="cloud" src={'images/Clouds.svg'} />
        <img id="bg2" src={'images/BG_02.svg'} />
        <div class="container">
          <h1 class="allChuose">
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
          </h1>
          <div class="center" id="imgChar02">
            <img src={'images/Charactor.svg'} />
          </div>
          <div class="center">
            <p class="paragraph">
              Hi there!
              <br />
              Everyone are deserve to be happy <br />
              Everyone are deserve to be happy
            </p>
          </div>
          <div>
            <button class="button" onClick={() => (window.location.href = '/')}>
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
