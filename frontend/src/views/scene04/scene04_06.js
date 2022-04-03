import './purple.css'

export const Scene04_06 = () => {
  return (
    <div class="container">
      <img class="bg_purple" src={'images/BG_Purple.svg'} alt="background" />
      <img class="star" src={'images/star.svg'} alt="background" />
      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '8.53%', left: '51.54%' }}
      />

      <img
        class="cloud02"
        src={'images/WhiteCloud02.svg'}
        alt="background"
        style={{ top: '76.07%', left: '62.31%' }}
      />
      <img
        class="charactor"
        src={'images/Charactor.svg'}
        alt="charactor"
        style={{
          top: '19%',
          left: '12%',
          transform: 'rotate(-18deg)',
          width: '295px',
        }}
      />
      <div class="text_button">“เธอลองให้เรา พาเธอออกไปจากที่นี่ได้มั้ย?”</div>
    </div>
  )
}
