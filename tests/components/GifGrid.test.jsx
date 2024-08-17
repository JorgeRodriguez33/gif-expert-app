import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs') //Con esto le digo que haga un Mock completo de este path

describe('prueba en GifGrid', () => {
  const category = 'naruto'

  test('debe de mostrar el loadin inicialmente', () => {
    useFetchGifs.mockReturnValue({
      //Este objeto que esta aca, es lo que voy a simular que esta regresando la funcion
      images: [],
      isLoding: true,
    })

    render(<GifGrid category={category} />)

    screen.debug()

    //hago als aserciones
    expect(screen.getByText('Cargando...'))

    //Deberia aparecer la categoria renderizada
    expect(screen.getByText(category))
  })

  test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {

    //me invento los gif que va a devolver
    const gifs = [
      {
          id:"ABC",
          title:"Saitama",
          url:"http://google.com/pepe.jpg"
      },
      {
        id:"ABC123",
        title:"Dragon Ball",
        url:"http://google.com/pepe333.jpg"
    }
    ]

    useFetchGifs.mockReturnValue({
      //Este objeto que esta aca, es lo que voy a simular que esta regresando la funcion
      images: gifs,
      isLoding: false,
    })

    render(<GifGrid category={category} />)


    screen.debug()

    //Evaluo que se renderizen los gifs que deberia renderizar
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
