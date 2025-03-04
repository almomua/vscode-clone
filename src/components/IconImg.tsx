import { svgStyles } from "../styles"
interface Props {
    src: string
    alt: string
}
const IconImg = ({src, alt} : Props) => {
  return (
    <div>
      <img src={src} alt={alt} {...svgStyles} />
    </div>
  )
}

export default IconImg
