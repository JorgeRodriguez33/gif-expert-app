const { render, screen, fireEvent } = require('@testing-library/react')
const { AddCategory } = require('../../src/components/AddCategory')

describe('prueba en AddCategory', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />)

    /* para hacer la evaluacion, neesito disparar el evento "onChange" del componente*/
    const input = screen.getByRole('textbox') // apunto al input

    //disparo el evento, con los valores que deberia recibir el componente (simulo todo como si se tratara de estar escribiendo)
    fireEvent.input(input, { target: { value: 'Dragon ball' } })

    expect(input.value).toBe('Dragon ball')

    screen.debug()
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama' // lo que quiero que tenga la caja de texto, para simular que yo escribi eso

    const onNewCategory = jest.fn() //Creo una funcion que es un "Mock"(una simulacion de esa funcion), y al ser un jest mock, tengo control absoluto sobre esa operacion

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox') // Busco la caja de texto

    // Busco el formulario, pero importante recordar que para encontrar al form,
    // ¡¡¡¡¡"se debe indicar un arial-label"!!!!!
    const form = screen.getByRole('form')
    //otra manera
    /* const form = screen.getByLabelText('form_De_Busqueda_De_Gifs'); */

    //cambio el valor de la caja de texto
    fireEvent.input(input, { target: { value: inputValue } })

    //disparo el evento del submit del formulario
    /* fireEvent.(Que_Evento_quiero_disparar?(Elemento_Al_Que_le_QUIERO_Aplicar_el_evento?,{valores para la respuesta})) */
    fireEvent.submit(form)
    screen.debug()

    //Se supone que luego de hacer el submit la caja de texto queda vacia, asi que voy a evaluarlo
    expect(input.value).toBe('')

    /* 
        TOCA EVALUAR QUE "onNewCategory" se llamo con el valor que tenia la caja de texto
           onNewCategory(newinputValue)

           Usando la funcion "mockeada", puedo preguntar si ...
    */

    // ** esa funcion ha sido llamada
    expect(onNewCategory).toHaveBeenCalled()

    // ** esa funcion ha sido llamada solamente 1 vez
    expect(onNewCategory).toHaveBeenCalledTimes(1)

    // ** esa funcion ha sido llamada con el valor correcto
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('no debe de llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    //evaluo que ha sido llamada 0 veces
    expect(onNewCategory).toHaveBeenCalledTimes(0)

    //evaluo que NO ha sido llamada
    expect(onNewCategory).not.toHaveBeenCalled()

  })
})
