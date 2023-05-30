import cardStyles from "./Card.module.scss"
import { CardProps } from "./types"
const Card = ({ children }: CardProps) => {
  return <section className={cardStyles.CardContainer}>{children}</section>
}

export default Card
