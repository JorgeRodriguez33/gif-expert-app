import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

import "@testing-library/jest-dom" //Para  usar toBeInTheDocument

describe('prueba en GifExpertApp', () => { 
    
test('should make match with the snapshot', () => { 
    
      const{container} = render(<GifExpertApp/>)

        screen.debug()

        expect(container).toMatchSnapshot()

 })


 test('no deberia poder agregar una categoria si ya esta agregada', () => { 
  
    render(<GifExpertApp/>)

    const input = screen.getByPlaceholderText("Buscar gifs")
    const form = screen.getByRole('form')

    fireEvent.input(input,{target:{value: "One piece zoro"}})

    fireEvent.submit(form)

    expect(screen.getAllByText("One piece zoro").length).toBe(1)

    screen.debug()
  
  })

  test('deberia poder agregar una categoria si no esta agregada aun', () => { 
  
    render(<GifExpertApp/>)

    const input = screen.getByPlaceholderText("Buscar gifs")
    const form = screen.getByRole('form')

    fireEvent.input(input,{target:{value: "Pepe lefu"}})

    fireEvent.submit(form)

    expect(screen.getByText("One piece zoro")).toBeInTheDocument();
    expect(screen.getByText("Pepe lefu")).toBeInTheDocument()

    screen.debug()
  
  })

 })