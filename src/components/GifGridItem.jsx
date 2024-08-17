import PropTypes from "prop-types";
// si se trabaja con vite, es necesario importar los proptypes


export const GifGridItem = ({id,title,url}) => {
  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}


GifGridItem.prototypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}