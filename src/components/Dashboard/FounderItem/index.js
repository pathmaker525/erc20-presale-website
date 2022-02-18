import "./style.scss"

const FounderItem = ({ image = "", name = "", role = "" }) => (
  <div className="founder-item flex">
    <img className="shadowed" src={image} alt="founder placeholder" />
    <div className="flex-column">
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  </div>
)

export default FounderItem
