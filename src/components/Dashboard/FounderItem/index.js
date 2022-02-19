import "./style.scss"

const FounderItem = ({ image = "", name = "", role = "", social = {} }) => (
  <div className="founder-item flex">
    <div className="founder-item-avatar">
      <img
        className="shadowed"
        src={image}
        alt="founder placeholder"
        loading="lazy"
      />
      <a href={social.link} target="_blank" rel="noreferrer">
        {social.icon}
      </a>
    </div>
    <div className="flex-column">
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  </div>
)

export default FounderItem
