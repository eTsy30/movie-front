import { useState } from 'react'
import './style.scss'
import { Star } from './Star'
import { Irating } from '../../Types/Type'

const STARS = [1, 2, 3, 4, 5]

export const StarRating = ({ rating, getRaiting }: Irating) => {
  const [ratingStar, setRating] = useState(
    rating === undefined ? 0 : rating - 1
  )
  const [hoverRating, setHoverRating] = useState(0)

  const handlerChange = (ratingStar: number) => {
    if (typeof getRaiting === 'function') {
      getRaiting(ratingStar + 1)
    }
  }
  return (
    <div className="starRating_wrapper">
      {STARS.map((star, i) => (
        <Star
          key={star}
          isStarColor={(hoverRating || ratingStar) >= i}
          onMouseEnter={() => {
            handlerChange(hoverRating)
            setHoverRating(i)
          }}
          onMouseLeave={() => {
            setHoverRating(0)
          }}
          onClick={() => {
            handlerChange(hoverRating)
            setRating(i)
          }}
        />
      ))}
    </div>
  )
}
