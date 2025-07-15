import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>404 🙁</span>
        <br />
        Что-то пошло не так...
      </h1>
      <p className={styles.description}>
        Запрашиваемая вами страница не найдена
      </p>
    </div>
  )
}

export default NotFoundBlock
