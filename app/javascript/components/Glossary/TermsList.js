import React from 'react'
import TermItem from './TermItem'
export const TermsEmpty = _ => {
  return (
    <div className="col-lg-6 col-md-12 px-1 py-5 mx-auto text-center">
      Wähle einen Buchstaben aus
    </div>
  )
}

class TermsList extends React.Component {
  state = { selectedTermIndex: null }

  handleSelectTerm (termIndex) {
    const {selectedTermIndex} = this.state
    if (selectedTermIndex !== termIndex) this.setState({selectedTermIndex: termIndex})
  }

  render () {
    const {letterData} = this.props
    const {selectedTermIndex} = this.state
    return (
      <div className="col-lg-6 col-md-12 px-1 py-5 mx-auto text-center">
        <div className="row">
          <div className="term-letter col-lg-2 col-md-12">
            <h2>{letterData.letter}</h2>
          </div>
          <div className="col-lg-10 col-md-12">
            <div className="terms-list">
              {letterData.terms.map((term, index) => (
                <TermItem
                  key={ index }
                  title={ term.title }
                  description= { term.description }
                  imageThumb={ term.image_thumb }
                  image={ term.image }
                  onClick={ () => { this.handleSelectTerm(index) } }
                  selected = { selectedTermIndex === index } />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TermsList