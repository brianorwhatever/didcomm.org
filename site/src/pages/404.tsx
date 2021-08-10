import * as React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { cls } from '../common/utils'
import * as styles from './404.module.scss'
import { Search } from '../components/Search/Search'
import { PageProps } from 'gatsby'

const NotFoundPage = ({ navigate }: PageProps) => (
  <Layout accent title="Page not Found">
    <Header primary />
    <div className="content">
      <main className={styles.main}>
        <div className={styles.oops}>Oops!</div>
        <h1 className={cls('font-title-1', styles.title)}>We can't seem to find the page you're looking for.</h1>
        <div className={cls('font-subheadline', styles.subtitle)}>404 error code</div>
        <div className={styles.search}>
          <Search onSearch={(q) => navigate(`/search/?q=${q}&page=1/`)} />
        </div>
      </main>
    </div>
  </Layout>
)

export default NotFoundPage
