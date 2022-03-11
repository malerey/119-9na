import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

const usuario = {
  nombre: "Yanina", 
  apellido: "Bucca", 
  edad: 22, 
  isEminent: true
}

// si el usuario no esta logeado, quiero mostrar en la nav un boton que diga login
// si el usuario esta logeado y NO es eminent, quiero mostrar los botones rojos
// si el usuario esta logeado y SI es eminent, quiero mostrar los botones azules 

function App() {
  return (
    <div className="App">
      <Nav />
      <Main isEminent={usuario.isEminent}/>
      <Footer isEminent={usuario.isEminent}/>
    </div>
  );
}

export default App;
