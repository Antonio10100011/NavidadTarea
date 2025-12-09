import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const Inicio = () => {
  return (
    <>
      <h1>BIENVENIDO(A) Y FELIZ NAVIDAD!!</h1>
      <div className="cuerpo">
        Que la paz y la alegria de la Navidad esten con ustedes hoy y durante el nuevo ano.  Felices fiestas para ti y tu familia!
      </div>
    </>

  )
}

const Pagina1 = () => {
  return (
    <>
      <h1>Tradiciones</h1>
      <div className="cuerpo1">
        Las tradiciones navidenas varian en todo el mundo, pero algunas comunes incluyen decorar un arbol de Navidad, intercambiar regalos, cantar villancicos y compartir comidas especiales con familiares y amigos.

      </div>
    </>
  )
}

const Pagina2 = () => {
  return (
    <>
      <h1>Comida</h1>
      <div className="cuerpo2">

      </div>
    </>
  )
}
const Pagina3 = () => {
  return (
    <>
      <h1>Decoraciones</h1>
      <div className="cuerpo3">
        Algunos ejemplos de decoraciones navidenas incluyen luces de colores, girnaldas, figuras de Santa Claus y etc. <br />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </>
  )
}
const Pagina4 = () => {
  return (
    <>
      <h1>Proposito de la Navidad</h1>
      <div className="cuerpo2">
        Al final del dia, La Navidad se trata de compartir amor, alegria y generosidad con los demas. Es un momento para reflexionar sobre nuestras bendiciones y extender una mano amiga a quienes lo necesitan.
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <div className="padre">
        <div className='title'>
          <h3>Navidad</h3>
        </div>
        <div className='menu'>
          <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                  <Link class="nav-link" to="/pagina1">Tradiciones</Link>
                  <Link class="nav-link" to="/pagina2">Comida</Link>
                  <Link class="nav-link" to="/pagina3">Decoraciones</Link>
                  <Link class="nav-link" to="/pagina4">Proposito de la Navidad</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className='componentes'>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/pagina1" element={<Pagina1 />}></Route>
            <Route path="/pagina2" element={<Pagina2 />}></Route>
            <Route path="/pagina3" element={<Pagina3 />}></Route>
            <Route path="/pagina4" element={<Pagina4 />}></Route>
          </Routes>
        </div>
        <div className='adds'>
          Que tengas una feliz Navidad!!! <br />
          <img src="public/navi.png" alt="Imagen de Navidad" width={250} height={300} />
        </div>
        <div className='footer'>
          Ranulfo Antonio Rojas Guachalla - INF-122 - 2024
        </div>
      </div>
    </>
  )
}

export default App
