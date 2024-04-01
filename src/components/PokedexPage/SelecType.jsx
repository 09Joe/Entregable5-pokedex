import { useEffect } from "react"
import useFetch from "../../hooks/UseFetch"

const SelecType = ({ setTypeSelected }) => {

   const url = 'https://pokeapi.co/api/v2/type'

   const [ types, getTypes] = useFetch(url)

   useEffect(() => {
    getTypes()
   }, [])

   const handleChange = e => {
    setTypeSelected(e.target.value)
   }
// tal vez ponerle algun cambio al input de all pokemons
  return (
    <select onChange={handleChange}>
        <option  value='allPokemons'>All pokemons</option>
         {
            types?.results.map(typeInfo => (
                <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            ))
         }
    </select>
  )
}

export default SelecType