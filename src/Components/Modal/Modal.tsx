import React, { FC, useState } from 'react'
import './style.scss'
import { StarRating } from '../Star-reiting/Star-reiting'
import { Form } from 'react-router-dom'
interface Props {
  setVisibleModal: (visible: boolean) => void
  id: number | undefined
}
export const Modal: FC<Props> = ({ setVisibleModal, id }) => {
  const [nevRaiting, setNevRaiting] = useState(0)
  const handlRaiting = (raiting: number) => {
    setNevRaiting(raiting)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return
    }
    setVisibleModal(false)
  }
  return (
    <div onClick={handleClick} className="modal_container">
      <div className="modal">
        Оцените просмотренны фильм
        <Form
          className="modal_form"
          method="PATCH"
          action="/"
          onSubmit={() => setVisibleModal(false)}
        >
          <input type="hidden" name="rating" value={nevRaiting} />
          <input type="hidden" name="id" value={id} />
          <StarRating rating={0} getRaiting={handlRaiting}></StarRating>
          <div className="button_group">
            <button className="submit" type="submit">
              Оценить{' '}
            </button>
            <button className="exit" onClick={() => setVisibleModal(false)}>
              Отменить
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}
