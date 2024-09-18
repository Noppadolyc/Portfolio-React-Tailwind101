import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Material = ({ isHighlight, icon, link}) => {
  return (
    <a href={link} target="_blank" className={`hover:scale-110
      ${isHighlight ? "text-primaryTitle": ""}
    `}>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default Material
