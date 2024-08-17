import { render, screen } from '@testing-library/react'
import { GifGridItem } from '../../src/components/GifGridItem'

describe('pruebas en GifGridItem', () => {
  const titulo = 'prueba'
  const url = 'https://testreact.com/'
  const id = 100

  test('should make match with the snapshot', () => {
    const { container } = render(
      <GifGridItem id={id} title={titulo} url={url} />,
    )

    expect(container).toMatchSnapshot()
  })

  test('should make match with the snapshot', () => {
    const { container } = render(
      <GifGridItem id={id} title={titulo} url={url} />,
    )

    expect(container).toMatchSnapshot()
  })

  test('debe mostrar la imagen con el url y el Alt indicado', () => {
    render(<GifGridItem id={id} title={titulo} url={url} />)

    /* screen.debug() */

    /*      Esto esta correcto, pero no esta bueno evaluar cada uno de los atributs de un eleento de esta forma, 
        mejor es hacerlo como esta mas abajo
    expect(screen.getByRole('img').src).toBe(url)
    expect(screen.getByRole('img').alt).toBe(titulo) */

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(titulo)
  })

  test('Deberia mostrarse el titulo en el componente', () => {
    render(<GifGridItem id={id} title={titulo} url={url} />)

    expect(screen.getByText(titulo)).toBeTruthy

  })
})

/*     Cannot find module '@testing-library/dom' from 
        'node_modules/@testing-library/react/dist/pure.js'

        falta "yarn add --dev @testing-library/dom "
 */
