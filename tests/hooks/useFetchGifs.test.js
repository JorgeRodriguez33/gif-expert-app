import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('prueba en el hook useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    //osea el estado inicial es imagenes un arreglo vacio y el flag booleano isLoading tiene que ser true

    //hacer esto asi nomas, no se puede porque los hooks necesitan parte del ciclo de vida de los componentes de React
    //los hooks no se puede evaluar de forma aisalada asi
    //const {images, isLoading} = useFetchGifs();

    //rerender si se quiere re renderizar el hook
    //unmount es el resultado que llega cuando el hook se desmonta (si es que se devuelve algo)
    const { result } = renderHook(() => useFetchGifs('One punch'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)

    expect(isLoading).toBeTruthy() //que el estado inicial del state isLoading sea verdadero
  })

  test('debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One punch'))

    /* Esto no seria util porque lo que devuelve es el el valor actual del hook cuando se renderiza ,
       pero para esta prueba, se debe esperar que el hook haga su trabajo*/
    /* const { images, isLoading } = result 
    
    En otras palabras tengo que evaluar cuando las imagenes se hayan cargado, para eso necesito " waitFor " */

    //waitFor , espera por..., lo que espera es que se le pase un callback " () => evaluo lo que me devolvio el hook luego de que se ejecutara"
    await waitFor(
      //PRIMERO - la prueba se detiene aqui y espera que esta condicion se cumpla
      /* timeout:1000 esto es util, para que no quede infinitamente esperando que llegue un resultado, asi espera 1 segundo , de todas formas... por defecto el timeout es 1 segundo */
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 1000 },
    )

    //SEGUNDO - si lo anterior se cumple, realizo el resto de aserciones/pruebas
    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0) //evaluo que las imagenes sean mas de 0

    expect(isLoading).toBeFalsy() //evaluo que el isLoading este en false porque ya se cargaron las imagenes
  })
})
