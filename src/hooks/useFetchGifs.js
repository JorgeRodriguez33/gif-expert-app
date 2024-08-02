import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

/* CUSTOM HOOK 
Para su reacion, se puede comenzar con un "rafc" como si fuera un sunctional component

¡¡¡¡¡¡¡recordar que un hook, no es mas que una funcion!!!!
 */
export const useFetchGifs = ( category ) => {/* A diferencia de un "funcional component", 
                                                se recibe un objeto o los atibutos por separado asi, recordar, 
                                               si se MANDA un OBJETO, aqui se DEBERIA desectrucurar  */
                                               
  const [images, setImages] = useState([]) //Si,... los custom hook pueden tener estados independientes

  const [isLoading, setIsLoading] = useState(true)

  /* Forma 2-A */
  /*  const getImages = async() => {
  const newImages = await getGifs(category)
  setImages(newImages)

 } */

  useEffect(() => {
    /* Forma 1 */
    getGifs(category).then((newImages) => setImages(newImages))
    setIsLoading(false)
    /* Forma 2-B */
    /*  getImages() */
  }, [])

  return {
    images,
    isLoading,
  }
}
