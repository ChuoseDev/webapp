import './purple.css'

export const Scene03_11 = () => {
  return (
    <div class="container">
      <img class="bg_purple" src={'images/BG_Purple.svg'} alt="background" />
      <img class="star" src={'images/star.svg'} alt="background" />
      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '6.99%', left: '58.97%' }}
      />
      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '32.7%', left: '-16.41%', width: '150px' }}
      />
      <img
        class="cloud03"
        src={'images/WhiteCloud03.svg'}
        alt="background"
        style={{ top: '60.9%', left: '63.85%' }}
      />

      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '78.79%', left: '-14.87%' }}
      />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="charactor"
        style={{
          top: '19%',
          left: '12%',
          transform: 'rotate(-14deg)',
          width: '295px',
        }}
      />
      <div class="text_button">“เราอยากช่วยเธอ”</div>
    </div>
  )
}
