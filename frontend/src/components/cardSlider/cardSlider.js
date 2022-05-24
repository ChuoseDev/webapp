import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card01 from 'components/card/card01'
import Card02 from 'components/card/card02'
import Card03 from 'components/card/card03'
import Card04 from 'components/card/card04'
import Card05 from 'components/card/card05'
import Card06 from 'components/card/card06'
import Card07 from 'components/card/card07'
import Card08 from 'components/card/card08'

const CardSlider = ({ style }) => {
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
        <Card02 />
      </div>
      <div>
        <Card03 />
      </div>
      <div>
        <Card04 />
      </div>
      <div>
        <Card05 />
      </div>
      <div>
        <Card06 />
      </div>
      <div>
        <Card07 />
      </div>
      <div>
        <Card08 />
      </div>
    </Slider>
  )
}

export default CardSlider
