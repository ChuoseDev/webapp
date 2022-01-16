import COLORS from '../../utils/color'
import '../../App.css'
const Home = () => {
  const center = {
    display: 'block',
    margin: 'auto auto',
  }
  return (
    <div class="center">
      <div class="main" style={{ backgroundColor: 'white' }}>
        <img id="sky" src={'images/sky.svg'} />
        <div>
          <h1
            class="allChuose"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <div class="chuose" style={{ color: COLORS.RED, fontSize: '70px' }}>
              C
            </div>
            <div
              class="chuose"
              style={{ color: COLORS.BLUE, fontSize: '70px' }}
            >
              H
            </div>
            <div
              class="chuose"
              style={{ color: COLORS.ORANGE, fontSize: '70px' }}
            >
              U
            </div>
            <div
              class="chuose"
              style={{ color: COLORS.PURPLE, fontSize: '70px' }}
            >
              O
            </div>
            <div
              class="chuose"
              style={{ color: COLORS.PINK, fontSize: '70px' }}
            >
              S
            </div>
            <div
              class="chuose"
              style={{ color: COLORS.GREEN, fontSize: '70px' }}
            >
              E
            </div>
          </h1>
        </div>
        <img
          alt="logo"
          src={'images/jumboLogo.svg'}
          style={{
            position: 'absolute',
            top: '60%',
            transform: 'translate(-50%,0%)',
          }}
        />
      </div>
    </div>
  )
}

export default Home
