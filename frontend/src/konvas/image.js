import React from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

const ImageComponent = React.forwardRef((props, ref) => {
  const { image, ...imageProps } = props
  const [imageObj] = useImage(image)
  return <Image {...imageProps} image={imageObj} ref={ref} />
})
export default ImageComponent
