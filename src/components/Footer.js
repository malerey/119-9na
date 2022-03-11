import Button from "./Button"

const Footer = ({ isEminent }) => {
  return (
    <footer>
      <h2>Soy footer</h2>
      <input type="email" />
      <Button title="Suscribirse al newsletter" isEminent={isEminent} />
    </footer>
  )
}

export default Footer
