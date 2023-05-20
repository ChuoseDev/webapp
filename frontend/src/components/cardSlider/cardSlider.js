import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from 'components/card/card'

const CardSlider = ({ style, onClickCard }) => {
  var settings = {
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} style={style}>
      {(() => {
        const cards = []
        const colors = ['purple', 'green', 'red', 'yellow']
        for (let i = 1; i <= 13; i++) {
          cards.push(
            <div key={i}>
              <Card
                onClickFunction={onClickCard}
                index={i}
                color={colors[(i - 1) % 4]}
              />
            </div>
          )
        }
        return cards
      })()}
    </Slider>
  )
}

export default CardSlider
