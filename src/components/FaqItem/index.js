// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.FaqItemDetails = props
    const {id, questionText, answerText} = FaqItemDetails

    this.state = {isClicked: false}
  }

  onClickOnPlus = () => {
    this.setState(PrevState => ({
      isClicked: !PrevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    return (
      <li className="item">
        <div className="main-container">
          <h1 className="heading">{questionText}</h1>
          <button className="button" type="button" onClick={this.onClickOnPlus}>
            {isClicked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="img"
              />
            )}
          </button>
        </div>
        {isClicked ? '' : <hr className="line" />}
        {isClicked ? '' : <p className="paragraph">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
