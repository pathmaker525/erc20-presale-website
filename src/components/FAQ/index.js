import FadeIn from "react-fade-in/lib/FadeIn"
import FAQItem from "./FAQItem"

import { FAQItemContents } from "configs/UI"

import "./style.scss"

const FAQ = () => (
  <div className="faq flex">
    <FadeIn className="faq-wrapper container flex-column">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-questions grid">
        {FAQItemContents.map((data, index) => (
          <FAQItem key={index} question={data.question} answer={data.answer} />
        ))}
      </div>
    </FadeIn>
  </div>
)

export default FAQ
