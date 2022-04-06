import './purple.css'

export const Scene03_08 = () => {
  return (
    <div class="container">
      <img class="bg_purple" src={'images/BG_Purple.svg'} alt="background" />
      <img class="star" src={'images/star.svg'} alt="background" />
      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '5.33%', left: '67.69%' }}
      />
      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '31.16%', left: '0.26%', width: '150px' }}
      />
      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '58.77%', left: '48.46%' }}
      />

      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '84.83%', left: '-13.59%' }}
      />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="charactor"
        style={{
          top: '0%',
          left: '12%',
          transform: 'rotate(-17deg)',
          width: '295px',
        }}
      />
      <div class="text_button">“สวัสดี เราชูโอสนะ”</div>
    </div>
  )
}
