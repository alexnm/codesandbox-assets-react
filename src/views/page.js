import React from 'react'
import Helmet from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>codesandbox-assets</title>
        <meta property="og:title" content="codesandbox-assets" />
      </Helmet>
      <img src="/playground_assets/js-survey.png" className={styles.image} />
    </div>
  )
}

export default Page
