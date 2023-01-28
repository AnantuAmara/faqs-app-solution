// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.faqsList = props
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">FAQs</h1>
        <ul className="container-2">
          {faqsList.map(each => (
            <FaqItem FaqItemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default FaqItem
