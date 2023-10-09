import { FC, useState } from 'react'
import './style.scss'
import { IMovie } from '../../Types/Type'
import { StarRating } from '../Star-reiting/Star-reiting'
import { Modal } from '../Modal/Modal'
import { Form } from 'react-router-dom'

export const Card: FC<IMovie> = ({ id, image, title, rating, year }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)

  return (
    <div className="card">
      <div
        className="card_container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card_title-container">
        <h4>
          {title} | {year}
        </h4>
        <div>
          <StarRating rating={rating} />
        </div>
        <div className="card_buttonGroup">
          <button onClick={() => setIsEdit(true)}>
            <i className="fa-solid fa-eye"></i>
          </button>
          <Form method="DELETE" action="/">
            <input type="hidden" name="id" value={id} />
            <button type="submit">
              <i className="fa-solid fa-trash"></i>
            </button>
          </Form>
        </div>
      </div>
      {isEdit && <Modal setVisibleModal={setIsEdit} id={id} />}
    </div>
  )
}
