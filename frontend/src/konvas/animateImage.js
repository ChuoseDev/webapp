import { useEffect, useRef } from 'react'
import { Image } from 'konvas'

const AnimateImage = ({ scene = 0, animation = {}, image, ...otherProps }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref && ref.current && animation[scene]) {
      const image = ref.current
      image.to(animation[scene])
    }
  }, [scene, animation])

  return <Image image={image} {...otherProps} ref={ref} />
}
export default AnimateImage
