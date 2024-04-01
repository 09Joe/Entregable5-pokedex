import { useRef } from "react"
import { setTrainer } from "../../store/states/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')
    }


//añadir clases a la pagina de inicio 'welcome'

  return (
    <form className="home__input" onSubmit={handleSubmit}> 
        <input className="home__field__value" ref={trainerInput} type="text" />
        <button className="home__btn">Lets Start</button>
    </form>
  )
}

export default FormTrainer