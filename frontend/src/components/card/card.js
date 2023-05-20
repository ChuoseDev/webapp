import { useState, useEffect } from 'react'
import { scaleHeight, scaleMean, scaleWidth, leftOffset } from 'utils/constant'
import {
  getCardColor,
  getCardStaticContent,
  getCustomStyle,
} from './cardSetting'

const Card = ({ index, onClickFunction, color }) => {
  const [colorPreset, setColorPreset] = useState({})
  const [staticContent, setStaticContent] = useState({})
  const [customStyle, setCustomStyle] = useState({})
  const [bgCard, setBgCard] = useState('#FFFFFF')

  useEffect(() => {
    setColorPreset(getCardColor(color))
    setStaticContent(getCardStaticContent(index))
    setCustomStyle(getCustomStyle(index))
  }, [])

  const cardStyle = {
    position: 'relative',
    // box-sizing: 'border-box',
    width: `${scaleWidth() * 305}px`,
    height: `${scaleHeight() * 434}px`,
    background: bgCard,
    border: colorPreset.cardBorder,
    borderRadius: '29px',
  }
  const charStyle = {
    position: 'absolute',
    left: `${scaleHeight() * 80 + leftOffset()}px`,
    width: `${scaleHeight() * 130}px`,
    top: `${scaleHeight() * 250}px`,
  }

  const circleInnerStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 147.43}px`,
    width: `${scaleWidth() * 148.29}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 78.43}px`,
    top: `${scaleHeight() * 234.29}px`,
    background: colorPreset.circleInner,
    filter: 'blur(20px)',
  }

  const circleOuterStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 192}px`,
    width: `${scaleWidth() * 192}px`,
    borderRadius: '100px',
    left: `${scaleWidth() * 57}px`,
    top: `${scaleHeight() * 212}px`,
    background: colorPreset.circleOuter,
    filter: 'blur(21px)',
  }

  const headerStyle = {
    //Font
    fontFamily: 'Comfortaa',
    fontSize: 26 * scaleMean(),
    lineHeight: '29px',
    textAlign: 'left',

    //Position
    position: 'absolute',
    height: `${scaleHeight() * 60}px`,
    width: `${scaleWidth() * 305}px`,
    left: `${scaleWidth() * 20}px`,
    top: `${scaleHeight() * 78}px`,
    color: colorPreset.themeColor,
    whiteSpace: 'pre-wrap',
    ...customStyle.headerStyle,
  }
  const infoStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 101}px`,
    width: `${scaleWidth() * 265}px`,
    left: `${scaleWidth() * 20}px`,
    top: `${scaleHeight() * 146}px`,
    color: colorPreset.themeColor,
    whiteSpace: 'pre-wrap',
    fontFamily: 'Comfortaa',
    fontSize: 12 * scaleMean(),
    fontWeight: 300,
    lineHeight: '13px',
    textAlign: 'left',
    fontStyle: 'normal',
    ...customStyle.infoStyle,
  }
  const cardNumberStyle = {
    position: 'absolute',
    height: `${scaleHeight() * 30}px`,
    width: `${scaleWidth() * 39}px`,
    left: `${scaleWidth() * 236}px`,
    top: `${scaleHeight() * 19}px`,
    color: colorPreset.themeColor,
    fontFamily: 'Comfortaa',
    fontSize: 36 * scaleMean(),
    fontWeight: 700,
    lineHeight: '40px',
    textAlign: 'center',
    fontStyle: 'normal',
  }

  const svgStyle = {
    position: 'absolute',
    left: `${scaleWidth() * 222}px`,
    top: `${scaleHeight() * 30.18}px`,
    height: `${scaleHeight() * 25.51}px`,
    transform: 'rotate(-16.72deg)',
    width: `${scaleWidth() * 65.21}px`,
  }

  const ellipseStyle = {
    position: 'absolute',
    border: colorPreset.elipseBorder,
    borderRadius: '100px',
    stroke: colorPreset.elipseStroke,
    strokeWidth: '1px',
    fill: 'transparent',
    fillOpacity: 0,
  }

  return (
    <button
      style={cardStyle}
      onClick={() => {
        if (bgCard === '#FFFFFF') {
          setBgCard(colorPreset.bgOnClick)
          onClickFunction(index)
        } else {
          setBgCard('#FFFFFF')
          onClickFunction(index, false)
        }
      }}
    >
      <svg position="absolute" style={svgStyle}>
        <ellipse
          style={ellipseStyle}
          cx="32.6px"
          cy="12.75px"
          ry="11.75px"
          rx="31.6"
        />
      </svg>
      <div id="cardnumber" style={cardNumberStyle}>
        {index < 10 ? '0' : ''}
        {index}
      </div>

      <div style={headerStyle}>{staticContent.header}</div>
      <div style={infoStyle}>{staticContent.text}</div>
      <div id="circleOuter" style={circleOuterStyle}></div>
      <div id="circleInner" style={circleInnerStyle}></div>
      <img
        src={`images/cards/card_${index}.svg`}
        style={charStyle}
        alt={`card_background_image_${index}`}
      />
    </button>
  )
}

export default Card
