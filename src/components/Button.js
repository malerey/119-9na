
// PROPS DRILLING vs CONTEXT o ESTADO GLOBAL  

//                   App.js 
//    Nav            Main          Footer
//                   Card         Button
//                   Button 



const Button = ({ title, isEminent }) => {

  console.log(isEminent)
  return (
    <button className={isEminent ? "boton-azul" : "boton-rojo"}>
      {title}
    </button>
  )
}

export default Button
