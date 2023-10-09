/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import './style.scss'
import { Form } from 'react-router-dom'
interface Props {
  setVisibleModal: (visible: boolean) => void
}

export const AddMovieModal: FC<Props> = ({ setVisibleModal }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return
    }
    setVisibleModal(false)
  }

  return (
    <div onClick={handleClick} className="modal_container">
      <div className="modal">
        <Form
          className="modal_form"
          method="POST"
          action="/"
          onSubmit={() => setVisibleModal(false)}
        >
          <label htmlFor="title">Введите название фильма</label>
          <input type="text" name="title" placeholder="Название фильма" />

          <label htmlFor="image">Введите ссылку на картинку</label>
          <input
            type="text"
            name="image"
            placeholder="Ссылка на изображение афиши"
          />
          <label htmlFor="year">Введите год</label>
          <input type="number" name="year" placeholder="Год" />
          <div className="button_group">
            <button className="submit" type="submit">
              create
            </button>
            <button className="exit" onClick={() => setVisibleModal(false)}>
              exit
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}
