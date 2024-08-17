import { getGifs } from '../../src/helpers/getGifs'

describe('pruebas en el helper getGifs', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('Naruto')

    expect(gifs.length).toBeGreaterThan(0) //evaludo que el largo de elementos que me devolvio la consulta es mayor a "0"

    /* Evaluo que lo que llega los elementos tengan esos atributos, y que el tipo de cada uno de esos atributos sea correcto
    lo demas me da igual */
    expect(gifs[0]).toEqual( //Evaluo en el primer elemento del arreglo que me dio getGifs, me fijo si la estructura del objeto es correcta
        {
            id: expect.any( String), //se espera cualquier "String" en ese atributo
            title: expect.any( String),
            url:  expect.stringMatching(/^https?/)/* Verifica que la URL comience con "http" o "https" mediante una expresion regular */
          }
    )

  })
})
