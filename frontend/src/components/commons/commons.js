import './commons.css'

export const WhiteButton = ({ style, children, onClick }) => {
  return (
    <button className="white-button" style={style} onClick={onClick}>
      {children}
    </button>
  )
}
