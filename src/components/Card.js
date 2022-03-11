
import Button from './Button'

const Card = ({isEminent}) => {
  return (
    <article>
      <h3>Soy una tarjeta</h3>
      <Button title="comprar" isEminent={isEminent}/>
    </article>
  )
}

export default Card
