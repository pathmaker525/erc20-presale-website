import "./style.scss"

const AboutItem = ({ index = 0, title = "", content = "" }) => (
  <div className="about-item">
    <div className="about-item-title flex">
      <h1>{index}</h1>
      <h3 className="flex-column">{title}</h3>
    </div>
    <p>{content}</p>
    <a href="">Details</a>
  </div>
)

export default AboutItem
