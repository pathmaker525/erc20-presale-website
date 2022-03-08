import { useState } from "react"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

const FAQItem = ({ question, answer }) => {
  const [collapsed, setCollapsed] = useState(true)

  const onHandleCollapse = () => setCollapsed(!collapsed)

  return (
    <div className="faq-questions-item">
      <div className="faq-questions-item-content rounded shadowed">
        <div className="faq-questions-item-title flex">
          <h3 onClick={onHandleCollapse}>{question}</h3>
          {collapsed ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
        </div>
        <p className={`${collapsed ? " faq-collapsed" : ""}`}>{answer}</p>
      </div>
    </div>
  )
}

export default FAQItem
