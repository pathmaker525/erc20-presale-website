import "./style.scss"

const PartnerItem = ({ image = "", name = "", location = "" }) => (
  <a className="partner-item">
    <img
      className="rounded shadowed"
      src={image}
      alt="partner image"
      loading="lazy"
    />
    <h4>{name}</h4>
    <span>{location}</span>
  </a>
)

export default PartnerItem
