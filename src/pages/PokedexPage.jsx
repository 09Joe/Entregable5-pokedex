import { useSelector } from "react-redux"
import useFetch from "../hooks/UseFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelecType from "../components/PokedexPage/SelecType"
import '../components/PokedexPage/style/PokedexPage.css'

const PokedexPage = () => {

  const [pokeSearch, setPokeSearch] = useState('')

  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  //solo pusimos 20 pokemons, añadir mas en la url

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

  const [ pokemons, getPokemons, getPokeByType ] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelected)
    }
  }, [typeSelected])

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
  }

  const pokemonsFiltered = pokemons?.results.filter(poke => {
    return poke.name.includes(pokeSearch)
  } )

 // dar clase aqui al input y a la frase de bienvenida
  return (
    <div>
      <p>Welcome <span>{trainer}</span>, here you can find your favorite pokemon </p>
      <form onSubmit={handleSubmit}>
        <input className="pokepage__field" ref={inputSearch} type="text" />
        <button className="pokepage__search"> Search</button>
      </form>
      <SelecType 
        setTypeSelected={setTypeSelected}
      />
      
      <ListPokemons 
       pokemons={pokemonsFiltered}
      />
    </div>
  )
}

export default PokedexPage