import React from 'react'
import styles from './suggestionShowCard.module.css'

function SuggestionShowCard() {
  return (
    <div className={styles.container}>
        <div>
            <div className='img'></div>
            <div>
                <h4>Susan Wong</h4>
                <span>Developer</span>
            </div>
        </div>
    </div>
  )
}

export default SuggestionShowCard