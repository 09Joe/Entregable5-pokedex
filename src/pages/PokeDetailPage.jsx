import { useParams } from "react-router-dom"
import useFetch from "../hooks/UseFetch"
import { useEffect } from "react"

const PokeDetailPage = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [name])

  console.log(pokemon)

//añadir clases al pokedetail 

  return (
    <article className={`card border-${pokemon?.types[0].type.name}`}>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_shiny} alt="" />
      </header>
      <section className="card__principal">
        <h2 className={`card__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <ul className="card__types">
          {
            pokemon?.types.map(typeInfo => (
              <li className="card__type" key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))
          }
        </ul>
        <div>
           {pokemon?.stats?.map((sta, index) => {
            return (
              <h4 key={index}>
                <span>{sta.stat.name}</span>
                <progress value={sta.base_stat} max={110}></progress>
                <span>{sta.base_stat}</span>
              </h4>
            )
           } )}
        </div>

      </section>
    </article>
  )
}

export default PokeDetailPage