import { svgStyles } from "../styles"
interface Props {
    src: string
    alt: string
    className?: string
}
const IconImg = ({src, alt , className} : Props) => {
  return (
    <div>
      <img src={src} alt={alt} {...svgStyles} className={className}/>
    </div>
  )
}

export default IconImg
