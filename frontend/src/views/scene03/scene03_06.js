import './purple.css'

export const Scene03_06 = () => {
  return (
    <div class="container">
      <img class="bg_purple" src={'images/BG_Purple.svg'} alt="background" />
      <img class="star" src={'images/star.svg'} alt="background" />
      <img
        class="cloud01"
        src={'images/WhiteCloud01.svg'}
        alt="background"
        style={{ top: '12.44%', left: '66.92%' }}
      />
      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '33.89%', left: '-22.31%' }}
      />
      <img
        class="cloud01"
        src={'images/WhiteCloud01.svg'}
        alt="background"
        style={{ top: '58.18%', left: '52.05%' }}
      />

      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '87.09%', left: '-17.69%' }}
      />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="charactor"
        style={{
          top: '-15%',
          left: '7%',
          transform: 'rotate(-22deg)',
          width: '284.44px',
        }}
      />
    </div>
  )
}
