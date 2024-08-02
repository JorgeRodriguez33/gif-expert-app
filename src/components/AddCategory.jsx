import { useState } from 'react'

export const AddCategory = ({ /* onAddCategory */ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (/* event */ { target }) => {
    /*  console.log(event.target.value) */
    console.log(target.value)
    setInputValue(target.value)
  }

  const onsubmit = (event) => {
    event.preventDefault() /* Para evitar el "full refresh del navegador" generado por el "form" */
    const newinputValue = inputValue.trim()

    if (newinputValue.length <= 1) return //caso que no se escriba nada
    console.log(newinputValue)
    /*   onAddCategory((c) => [...c,newinputValue]) */
    onNewCategory(newinputValue)
    setInputValue('')
  }

  /* 
teniendo definido el Form, si escribo algo en el Input y preciono enter, 
va a realizar un "full refresh del navegador web", porque es el comportamiendo normal
*/

  return (
    <form onSubmit={onsubmit}>
      {/* Agrego el Form para detectar el Input de la tecla "ENTER" */}
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={
          onInputChange
        } /* Esto es lo mismo que poner  onChange={(event)=>onInputChange(event)} */
      />
    </form>
  )
}
