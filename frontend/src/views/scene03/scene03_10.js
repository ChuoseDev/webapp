import './purple.css'

export const Scene03_10 = () => {
  return (
    <div class="container">
      <img class="bg_purple" src={'images/BG_Purple.svg'} alt="background" />
      <img class="star" src={'images/star.svg'} alt="background" />
      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '7.58%', left: '58.46%' }}
      />
      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '33.29%', left: '1.03%', width: '150px' }}
      />
      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '62.56%', left: '34.36%' }}
      />

      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '85.9%', left: '-4.1%' }}
      />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="charactor"
        style={{
          top: '15%',
          left: '12%',
          transform: 'rotate(-5deg)',
          width: '295px',
        }}
      />
      <div class="text_button">“เราอยากช่วยเธอ”</div>
    </div>
  )
}
