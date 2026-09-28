import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './Carousel.module.css'

export default function Carousel({ items = [] }) {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.card}
              style={{ backgroundColor: item.color }}
            >
              {item.title && <h3>{item.title}</h3>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}