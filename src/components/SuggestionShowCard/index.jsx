import React from 'react'
import styles from './suggestionShowCard.module.css'

function SuggestionShowCard() {
  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <div className={styles.divTop}>
                <div className={styles.img}></div>
                <div>
                    <h4>Susan Wong</h4>
                    <span>Developer</span>
                </div>

                <p>
                    <i className="fa-solid fa-star"></i>4.4 / 5
                </p>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto qui reprehenderit temporibus corrupti iure ratione debitis! Consectetur quaerat quo facilis odio, quos, deleniti similique quam nisi cumque reprehenderit obcaecati.</p>
        </div>
       
    </div>
  )
}

export default SuggestionShowCard