import React from 'react'
import homepage from '../../assets/images/jsHomepage.png'

export default function Homepage() {
    return (
        <div>

      <div className="card mb-3 mt-4 w-50 h-75 container">
  <img src={homepage} className="card-img-top" alt="homepageLogo"/>
  <div className="card-body text-center">
    <h5 className="card-title">Java Script World Application</h5>
    <p className="card-text">This Application includes about java script Books, Js-quiz, Latest updates and more...</p>
    <p className="card-text"><small className="text-muted">This is the Latest version V1</small></p>
  </div>
</div>
        </div>
    )
}
