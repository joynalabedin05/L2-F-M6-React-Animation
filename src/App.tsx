
import './App.css'

function App() {
const name = 'Programming Hero';
const nameArr = name.split('');

  return (
  <>
    {/* <div className='main'> */}
      {/* <div className='box-1'></div> */}
      {/* <div className='box-2'></div> */}
      {/* <button className='btn'>Hover Me</button> */}
      {/* <h1>Something Cool</h1> */}
    {/* </div> */}
    {/* <div className='main-1'>
     <div className='loading'>
      <div className='glass'></div>
      <div className='glass-2'></div>
     </div>
    </div> */}
    {/* <div className='main-2'>
     <div className='card'>
      <h1>Heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, laborum placeat nihil dolorum illo aut quia, nesciunt qui reiciendis enim inventore fugit rerum. Voluptatum, adipisci atis, modi asi doloribus sit, nobis qui ex deserunt placeat soluta ipsum necessitatibus.</p>
     </div>
    </div> */}
      <div className='main-3'>
     <div className='container'>
      {
        nameArr.map((item, i)=><span className='alphabet' style={{transitionDelay: `${i*30}ms`}}>{item}</span>)
      }
     </div>
    </div>
  </>
    
  )
}

export default App
