import FormTrainer from '../components/HomePage/FormTrainer'
import '../components/PokedexPage/style/HomePage.css'



const HomePage = () => {
  return (
    <div className='banner'>
      <header className='banner__red'>
        <div className='banner__black'></div>
        <div className='banner__circular'></div>
      </header>
      <h1 className='home__title'>Pokedex</h1>
      <h2 className='home__title'>Hi trainer</h2>
      <p>To see the pokemon's information, tell me your trainer name</p>
      <FormTrainer />
    </div>
  )
}

export default HomePage