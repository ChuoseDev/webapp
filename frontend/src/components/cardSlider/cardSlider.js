import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card01 from 'components/card/card01'
import Card05 from 'components/card/card05'

const CardSlider = ({ style }) => {
  var settings = {
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    // lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} style={style}>
      {/* <div>
        <img src={'images/whiteBigCloud.svg'} alt="bigCloud"></img>
      </div>
      <div>
        <img src={'images/YellowChuose_06.svg'} alt="character" />
      </div> */}
      <div>
        <Card01 />
      </div>
      <div>
        <Card05 />
      </div>
    </Slider>
  )
}

export default CardSlider
