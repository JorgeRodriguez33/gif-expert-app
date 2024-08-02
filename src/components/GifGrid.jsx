import { useEffect, useState } from "react"
import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

  /* Custom Hook o Hook personalizado 
     importante que el nombre del hook lleve en su nombre "use"
     solamente este hook hara lo que hace todo el el codigo comentado abajo*/
const { images, isLoding } = useFetchGifs(category);

/* const [images, setImages] = useState([]) */

 /* Forma 2-A */
/*  const getImages = async() => {
  const newImages = await getGifs(category)
  setImages(newImages)

 } */

/* useEffect(() => { */
  /* Forma 1 */
/*   getGifs(category).then(newImages => setImages(newImages))
 */
  /* Forma 2-B */
 /*  getImages() */
/* }, []) */

  

 

  return (
    
    <>
    <h3>{category}</h3>

   {/* Forma1  */}
   {/*  {isLoding ? (<h2>Cargando...</h2>) : null} */}

   {/* Forma 2 */}
   {isLoding && <h2>Cargando...</h2>}

   {/* Forma 3 - usar un custom component y dentro mostraria "{isLoding && <h2>Cargando...</h2>}"*/}
  {/*  <LoadingMessage isLoding = { isLoding }/> */}

    <div className="card-grid">
      {images.map((img) =>(
       <GifGridItem key={img.id} {... img}/> /*{... img} "Esparciendo" las propiedades, se puede pasar toda la info de un padre a un hijo*/
      ))}
    </div>


   
    </>
  )
}
