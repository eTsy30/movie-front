import { FC } from 'react'
import './style.scss'
import { IMovie } from '../../Types/Type'
interface WantToSeeProps {
  movies: IMovie[]
}
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
export const WantToSee: FC<WantToSeeProps> = ({ movies }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {movies.map((film) => (
        <SwiperSlide key={film.id} className="swiperSlide_wts">
          <img src={film.image} alt="" />
          <div className="label">
            <h1>{film.title}</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
