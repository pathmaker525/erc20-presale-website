import "./style.scss"

const HireItem = ({ location = "", role = "" }) => (
  <div className="hire-item">
    <span>{location}</span>
    <h4>{role}</h4>
    <a href="">Learn More and Apply</a>
  </div>
)

export default HireItem
