import React from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import styles from './App.module.css'

export default function App() {
  // Cards coloridos de exemplo (como no Figma)
  const slides = [
    { color: '#c82b2b' }, // Card vermelho
    { color: '#1d6bf3' }, // Card azul
    { color: '#2b2bc8' }, // Card roxo
  ]

  return (
    <div className={styles.mainWrapper}>
      {/* Elementos decorativos de fundo */}
      <div className={styles.bgSquare1}></div>
      <div className={styles.bgSquare2}></div>
      <div className={styles.bgSquare3}></div>
      <div className={styles.bgSquare4}></div>

      <Header />

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.tagline}>IDEIAS · PESSOAS · IMPACTO</span>
          <h1 className={styles.title}>
            Tecnologia que <span className={styles.blueText}>Simplifica o dia a dia</span>
          </h1>
          <p className={styles.description}>
            Somos a SalusCore, uma equipe que transforma ideias e problemas reais em soluções digitais.
          </p>
        </div>

        <div className={styles.carouselSection}>
          <Carousel items={slides} />
        </div>
      </main>
    </div>
  )
}