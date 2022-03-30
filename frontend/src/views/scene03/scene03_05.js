import './purple.css'

export const Scene03_05 = () => {
  return (
    <div class="container">
      <img class="bg_purple" src={'images/BG_Purple.svg'} alt="background" />
      <img class="star" src={'images/star.svg'} alt="background" />
      <img
        class="cloud01"
        src={'images/WhiteCloud01.svg'}
        alt="background"
        style={{ top: '8.41%', left: '71.28%' }}
      />
      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '30.21%', left: '-7.44%' }}
      />
      <img
        class="cloud01"
        src={'images/WhiteCloud01.svg'}
        alt="background"
        style={{ top: '62.09%', left: '43.08%' }}
      />

      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '84.12%', left: '-2.05%' }}
      />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="charactor"
        style={{
          top: '-20%',
          left: '2.93%',
          transform: 'rotate(-22deg)',
          width: '284.44px',
        }}
      />
      <div class="text_center">เสียงอะไรน่ะ</div>
    </div>
  )
}
