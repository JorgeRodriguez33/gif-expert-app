import { useState } from 'react'
import { AddCategory,GifGrid } from './components' /*||==> " './components' " es lo mismo que hacer " './components/index' " ya que por defecto, se tratara de acceder al index de la carpeta */
/* import { GifGrid } from './components/GifGrid' */

//lQ0ctqG7lZMNVinK2lQfM1Z6njC7YPdK

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One piece zoro'])

  // Preprocesa las categorías a minúsculas y las almacena en un Set
  /* Set: Permite comprobar rápidamente si una categoría en minúsculas ya existe sin tener que recorrer la lista completa. */
  /* useMemo: Se utiliza para memorizar el conjunto de categorías en minúsculas. Esto evita que se recalculen en cada renderizado, ya que useMemo solo recalcula el valor cuando categories cambia. */
  // const lowerCaseCategories = useMemo(() => new Set(categories.map(cat => cat.toLowerCase())), [categories]);

  const onAddCategory = (newCategory) => {
    /* Otra forma
    
        const lowerCaseNewCategory = newCategory.toLowerCase();
    // Verifica si la categoría ya existe en el Set
    if (lowerCaseCategories.has(lowerCaseNewCategory)) return;
    */

    if (categories.includes(newCategory)) return

    /* SI quiero agregar el elemento adelante de todos los elementos que tiene actualmente el state
     setCategories((currentCat) => ["Dragon Ball",...currentCat]) */

    setCategories((currentCat) => [...currentCat, newCategory])

    /* otra forma de agregar un elemento en el state */
    // setCategories( [...currentCat,"Dragon Ball"])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        /*  onAddCategory={setCategories} */

        /*onNewCategory = { eventValue => onAddCategory(eventValue)}   //Esto y lo de abajo son lo mismo*/
        onNewCategory={
          onAddCategory
        } /* entonces si onNewCategory es un evento, entonces debo pasarselo */
      />

      {/* Listado de GIFs */}
      {/*   <button onClick={onAddCategory}>Agregar</button> */}
    {/*   <ol> */}
        {/* ol = order list */}
        {/* <li> */} {/* li = list item */}
        {/*   </li> */}
        {categories.map((category) => (
          <GifGrid key={category} category = {category}/>
        /*   <div ><li >{category}</li></div> */
        ))}
   {/*    </ol> */}
      {/* Gif Item */}
    </>
  )
}
