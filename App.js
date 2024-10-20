import Secondcuaderno from './Secondcuaderno.jsx'
import  Firstcuaderno from './Firstcuaderno.jsx';
import Thirdcuaderno from './Thirdcuaderno.jsx'
import './App.css';

let vacio = '';


function App() {
  const abrir_cerrar_menu = () =>{
    let menu_desplegable = document.getElementById('menu');
    let boton_cerrar = document.getElementById('x');
    menu_desplegable.classList.toggle('abrir_menu');
    boton_cerrar.classList.toggle('colocar_x');
};
  return (

    <>
         <div>
            <logo/>
             <header className='head'>
              <div className="barras">
                 <button onClick= {abrir_cerrar_menu} className='boton_menu' id='x'></button>
             </div>
             <nav id='menu' className="desplegable">
                 <ul>
                     <li><a href={vacio}>Academico</a></li>
                     <li><a href={vacio}>More Options</a></li>
                     
                     <li><a href={vacio}>Home</a></li>
                 </ul>  
             </nav>
             </header>

         </div>

      <div className='container'><Firstcuaderno/>
      <Secondcuaderno/>
      <Thirdcuaderno/></div>

        </>
  );
}

export default App;
