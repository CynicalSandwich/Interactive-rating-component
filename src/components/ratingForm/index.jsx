import React, { useState } from 'react'
import './style.css'
const RatingForm = ({
  maxRating = 5,
  handleSubmit,
}) => {
  const [rating, setRating] = useState(0)
  const handleChange = (event) => {
    setRating(event.target.value)
  }
  const renderStars = () => {
    return [...Array(maxRating).keys()].map((star) => {
      return <React.Fragment key={`rating-${star + 1}`}>
        <input
          type="radio"
          name="rating"
          id={`rating-${star + 1}`}
          value={star + 1}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor={`rating-${star + 1}`}>{String(star + 1)}</label>
      </React.Fragment>
    })
  }
  const renderForm = () => {
    return (
      <form
        className="rating__form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(rating)
        }}
      >
        <div className="rating__group">
          {renderStars()}
        </div>
        <button
          type="submit"
          disabled={rating === 0}>
          SUBMIT
        </button>
      </form>
    )
  }
  return renderForm()
}

export default RatingForm